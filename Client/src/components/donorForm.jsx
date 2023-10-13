import React, { useState, useContext, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

const DonorForm = () => {
  const { theme } = useContext(ThemeContext);

  //fetching the states and the districts
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([])

  const fetchStates = async () => {
    try {
      const response = await fetch(`https://cdn-api.co-vin.in/api/v2/admin/location/states`);
      const data = await response.json();
      setStates(data.states);
    } catch (error) {
      setError(error.message);
      console.error('Error while fetching the states', error);
    }
  };

  useEffect(() => {
    fetchStates();
  }, []);

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    bloodGroup: "",
    age: "",
    address: "",
    state: "",
    city: "",
    gender: "",
  });
  const [isChecked, setIsChecked] = useState(false);
  const [error, setError] = useState(null);

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const handleInputChange = async (e) => {
    const { name, value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
    if (name === 'state') {
      try {
        const response = await fetch(`https://cdn-api.co-vin.in/api/v2/admin/location/districts/${value}`)
        const data = await response.json()
        setCities(data.districts)
      } catch (error) {
        setError(error.message)
        console.log(`Error while fetching the cities ${error}`)
      }
    }

  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requiredFields = [
      "firstName",
      "lastName",
      "phone",
      "email",
      "bloodGroup",
      "age",
      "address",
      "state",
      "city",
      "gender",
    ];
    const emptyFields = requiredFields.filter((field) => !formData[field]);

    if (emptyFields.length > 0) {
      const fieldNames = emptyFields.map((field) =>
        field === "bloodGroup"
          ? "Blood Group"
          : field.charAt(0).toUpperCase() + field.slice(1)
      );
      const message = `Please fill in the following fields: ${fieldNames.join(
        ", "
      )
        }`;
      alert(message);
      return;
    }

    if (!isChecked) {
      alert(
        "Please confirm that the details provided are correct and ethical."
      );
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/api/donors", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error);
      }

      const data = await response.json();
      const token1 = data.token;

      console.log("Donor registered successfully");
      console.log(formData);
      console.log("Token1: ", token1);
      localStorage.setItem("token1", token1);

      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        bloodGroup: "",
        age: "",
        address: "",
        state: "",
        city: "",
        gender: "",
      });
      setIsChecked(false);
      setError(null);
      navigate("/dashboard");
    } catch (error) {
      setError(error.message);
      console.error("Error registering donor", error);
    }
  };

  const compulsory = <span className="text-red-600">*</span>;

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="mx-auto max-w-xl"
      style={{
        boxShadow: theme.boxShadow,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.7 }}
    >
      <div className="flex items-center bg-gradient-to-r from-red-900 via-red-900 to-red-800 h-[11vh] mt-4 rounded w-full mb-[2vh]">
        <h1 className="text-white text-2xl font-bold ml-4">
          Register as donor
        </h1>
      </div>
      <div className="shadow border-1 p-8">
        <div className="mb-5">
          <label htmlFor="firstName" className="w-full mb-[2vw] mt-2">
            <h1>First Name {compulsory}</h1>
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            className="mb-[2vw] pl-2 border-2 border-gray-300 hover:border-red-800 flex-grow h-10 w-full"
            style={{
              color: theme.color,
              backgroundColor: theme.background,
            }}
            placeholder="First"
            required
          />
          <label htmlFor="lastName" className="w-full mb-[2vw] mt-2 mr-1">
            Last Name {compulsory}
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            className=" mb-[2vw] pl-2 border-2 border-gray-300 hover:border-red-800 flex-grow h-10 w-full"
            style={{
              color: theme.color,
              backgroundColor: theme.background,
            }}
            placeholder="Last"
            required
          />
        </div>
        <div className="mb-5">
          <label htmlFor="phone" className="w-full mb-[2vw] mt-2 mr-1">
            Phone {compulsory}
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="pl-2 border-2 border-gray-300 hover:border-red-800 flex-grow h-10 w-full mb-[2vw]"
            style={{
              color: theme.color,
              backgroundColor: theme.background,
            }}
            placeholder="Phone Number"
            required
          />

          <label htmlFor="email" className="w-full mb-[2vw] mt-2 mr-1">
            Email {compulsory}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="pl-2 border-2 border-gray-300 hover:border-red-800 flex-grow h-10 w-full mb-[2vw]"
            style={{
              color: theme.color,
              backgroundColor: theme.background,
            }}
            placeholder="Email"
            required
          />
        </div>
        <div className="mb-5">
          <label htmlFor="bloodGroup" className="w-full mb-[2vw] mt-2 mr-1">
            Blood Group {compulsory}
          </label>
          <select
            id="bloodGroup"
            name="bloodGroup"
            value={formData.bloodGroup}
            onChange={handleInputChange}
            className="pl-2 border-2  border-gray-300 hover:border-red-600  h-10 w-full mb-[2vw] "
            style={{
              color: theme.color,
              backgroundColor: theme.background,
            }}
            required
          >
            <option value="">-- Select --</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
          </select>
          <label htmlFor="age" className=" mb-[2vw] mt-2 mr-1 w-full ">
            Age {compulsory}
          </label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            className="pl-2 border-2 border-gray-300 hover:border-red-600 w-full h-10"
            style={{
              color: theme.color,
              backgroundColor: theme.background,
            }}
            placeholder="Age"
            required
          />
        </div>
        <div className="mb-5 ">
          <label htmlFor="address" className=" mt-2 mr-[2vw] w-full">
            Address {compulsory}
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            className="pl-2 border-2 border-gray-300 hover:border-red-800 h-[12vh] w-full"
            style={{
              color: theme.color,
              backgroundColor: theme.background,
            }}
            placeholder="Address"
            required
          />
          <label htmlFor="state" className="w-24 mt-2 w-full">
            State {compulsory}
          </label>
          <select
            id="state"
            name="state"
            value={formData.state}
            onChange={handleInputChange}
            className="pl-2 border-2 border-gray-300 hover:border-red-800 flex-grow h-10 w-full mb-[2vw]"
            style={{
              color: theme.color,
              backgroundColor: theme.background,
            }}
            required
          >
            <option value="">-- Select --</option>
            {states.map((state) => (
              <option key={state.state_id} value={state.state_id} name={state.state_name}>
                {state.state_name}
              </option>
            ))}
          </select>
          <label htmlFor="city" className="w-full mb-[14vh]">
            City {compulsory}
          </label>
          <select
            id="city"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            className="pl-2 border-2 border-gray-300 hover:border-red-800 flex-grow h-10 w-full"
            style={{
              color: theme.color,
              backgroundColor: theme.background,
            }}
            required
          >
            <option value="">-- Select --</option>
            {cities.map((city) => (
              <option key={city.district_id} value={city.district_name}>
                {city.district_name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex  mb-[3vw]">
          <label htmlFor="gender" className="w-24 mr-4">
            Gender {compulsory}
          </label>
          <div className="flex items-center">
            <input
              type="radio"
              id="male"
              name="gender"
              value="male"
              onChange={handleInputChange}
              className="mr-1"
              required
            />
            <label htmlFor="male">Male</label>
          </div>
          <div className="flex items-center ml-4">
            <input
              type="radio"
              id="female"
              name="gender"
              value="female"
              onChange={handleInputChange}
              className="mr-1"
              required
            />
            <label htmlFor="female">Female</label>
          </div>
          <div className="flex items-center ml-4">
            <input
              type="radio"
              id="other"
              name="gender"
              value="other"
              onChange={handleInputChange}
              className="mr-1"
              required
            />
            <label htmlFor="other">Others</label>
          </div>
        </div>
        <div className="mb-[4vh]  font-bold ">
          <label>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
              className="mr-6 "
            />
            All the details which are filled by me are right and ethical.
          </label>
        </div>
        {error && (
          <div
            className="absolute right-14 bottom-3 text-red-300 hover:text-red-500 animate-bounce 
        transition-all duration-500 ease-in-out
        "
          >
            {error}
          </div>
        )}
        <div className="flex justify-end">
          <button
            type="submit"
            className="w-full sm:w-1/2 mx-auto bg-red-900 hover:bg-red-800 text-white font-bold py-2 px-4 rounded"
          >
            Register
          </button>
        </div>
      </div>
    </motion.form>
  );
};

export default DonorForm;
