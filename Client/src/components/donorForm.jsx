import React, { useState, useContext, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import Form from "../asset/Form.png"
const DonorForm = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

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

      <p className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={Form} alt="Image"/>
    <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Blood donation form</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Blood donated by you can save lives. Be a donor save lives.</p>
    </div>
</p>
      
      <div className="shadow border-1 p-8 rounded-md hover:bg-red-300">
        <p>{compulsory} fields are compulsory</p>
        <br />
        <div className="mb-5">


          <label htmlFor="firstName" className="w-full mb-[2vw] mt-2 mr-1">
            <strong>First Name {compulsory}</strong>
          </label>
          <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleInputChange} className="mb-[2vw] bg-gray-50 border-2 hover:border-red-800 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" style={{
            color: theme.color,
            backgroundColor: theme.background,
          }} placeholder="First" required />

          <label htmlFor="lastName" className="w-full mb-[2vw] mt-2 mr-1">
            <strong> Last Name {compulsory} </strong>
          </label>

          <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleInputChange} className=" mb-[2vw] bg-gray-50 border-2 hover:border-red-800 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" style={{
            color: theme.color,
            backgroundColor: theme.background,
          }} placeholder="Last" required />
        </div>
        <div className="mb-5">
          <label htmlFor="phone" className="w-full mb-[2vw] mt-2 mr-1">
            <strong>Phone {compulsory}</strong>
          </label>

          <input type="text" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} className=" mb-[2vw] bg-gray-50 border-2 hover:border-red-800 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" style={{
            color: theme.color,
            backgroundColor: theme.background,
          }} placeholder="Phone Number" required />

          <label htmlFor="email" className="w-full mb-[2vw] mt-2 mr-1">
            <strong> Email {compulsory}</strong>
          </label>

          <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} className=" mb-[2vw] bg-gray-50 border-2 hover:border-red-800 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" style={{
            color: theme.color,
            backgroundColor: theme.background,
          }} placeholder="Email" required />

        </div>
        <div className="mb-5">
          <label htmlFor="bloodGroup" className="w-full mb-[2vw] mt-2 mr-1">
            <strong>Blood Group {compulsory}</strong>
          </label>
          <select
            id="bloodGroup"
            name="bloodGroup"
            value={formData.bloodGroup}
            onChange={handleInputChange}
            className="pl-2 border-2  border-gray-300 hover:border-red-800 rounded-lg h-10 w-full mb-[2vw] "
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
            <strong> Age {compulsory}</strong>
          </label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            className="pl-2 border-2 border-gray-300 hover:border-red-800 rounded-lg w-full h-10"
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
            <strong> Address {compulsory}</strong>
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            className="pl-2 border-2 border-gray-300 hover:border-red-800 rounded-lg h-[12vh] w-full  mb-[2vw]"
            style={{
              color: theme.color,
              backgroundColor: theme.background,
            }}
            placeholder="Address"
            required
          />
          <label htmlFor="state" className="w-24 mt-2 w-full">
            <strong> State {compulsory}</strong>
          </label>
          <select
            id="state"
            name="state"
            value={formData.state}
            onChange={handleInputChange}
            className="pl-2 border-2 border-gray-300 hover:border-red-800 rounded-lg flex-grow h-10 w-full mb-[2vw]"
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
            <strong>  City {compulsory}</strong>
          </label>
          <select
            id="city"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            className="pl-2 border-2 border-gray-300 hover:border-red-800 rounded-lg flex-grow h-10 w-full"
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
            <strong>Gender {compulsory}</strong>
          </label>



          <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
              <div className="flex items-center pl-3">
                <input id="male" type="radio" value="male" name="gender" onChange={handleInputChange} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" required />
                <label htmlFor="male" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Male </label>
              </div>
            </li>
            <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
              <div className="flex items-center pl-3">
                <input id="female" type="radio" value="female" name="gender" onChange={handleInputChange} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" required />
                <label htmlFor="female" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Female </label>
              </div>
            </li>
            <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
              <div className="flex items-center pl-3">
                <input id="other" type="radio" value="other" name="gender" onChange={handleInputChange} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" required />
                <label htmlFor="other" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Others </label>
              </div>
            </li>

          </ul>



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
            className="w-full sm:w-1/2 mx-auto bg-red-900 hover:bg-red-800 text-white rounded-lg font-bold py-2 px-4 rounded"
          >
            Register
          </button>
        </div>

      	
        


      </div>
      
    
         
    </motion.form>
  );
};

export default DonorForm;
