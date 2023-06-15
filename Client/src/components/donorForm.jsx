import React from "react";
import { useState } from "react";

const DonorForm = () => {
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

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    console.log(formData);
    console.log(isChecked);
  };

  const compulsory = <span className="text-red-600">*</span>;

  return (
    <form onSubmit={handleSubmit} className="space-x-14 mr-[3vw]">
      <div className="flex items-center bg-gradient-to-r from-red-900 via-red-900 to-red-800 h-[11vh] mx-10 mt-4 rounded w-[95vw] mb-[2vh]">
        <h1 className="text-white text-2xl font-bold ml-4">
          Register as donor
        </h1>
      </div>
      <div className="shadow border-1 p-8">
        <div className="flex mb-5">
          <label htmlFor="firstName" className="w-24 mb-[2vw] mt-2 mr-1">
            <h1>First Name {compulsory}</h1>
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            className="pl-2 border-2 border-gray-300 hover:border-red-800 flex-grow h-10 w-[3vw]"
            placeholder="First"
            required
          />
          <label htmlFor="lastName" className="w-24 mb-[2vw] ml-4 mt-2 mr-1">
            Last Name {compulsory}
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            className=" mb-[2vw] pl-2 border-2 border-gray-300 hover:border-red-800 flex-grow h-10 w-[3vw]"
            placeholder="Last"
            required
          />
        </div>
        <div className="flex mb-5">
          <label htmlFor="phone" className="w-24 mb-[2vw] mt-2 mr-1">
            Phone {compulsory}
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="pl-2 border-2 border-gray-300 hover:border-red-800 flex-grow h-10 mb-[2vw]"
            placeholder="Phone Number"
            required
          />
          <label htmlFor="email" className="w-24 mb-[2vw] ml-4 mt-2 mr-1">
            Email {compulsory}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="pl-2 border-2 border-gray-300 hover:border-red-800 flex-grow h-10 mb-[2vw]"
            placeholder="Email"
            required
          />
        </div>
        <div className="flex mb-5">
          <label htmlFor="bloodGroup" className="w-26 mb-[2vw] mt-2 mr-1">
            Blood Group {compulsory}
          </label>
          <select
            id="bloodGroup"
            name="bloodGroup"
            value={formData.bloodGroup}
            onChange={handleInputChange}
            className="pl-2 border-2  border-gray-300 hover:border-red-600  h-10  mb-[2vw] "
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
          <label htmlFor="age" className=" mb-[2vw] ml-12 mt-2 mr-1 w-[48px] ">
            Age {compulsory}
          </label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            className="pl-2 border-2 border-gray-300 hover:border-red-600 w-[3vw] h-10"
            placeholder="Age"
            required
          />
        </div>
        <div className="flex mb-5 ">
          <label htmlFor="address" className=" mt-2 mr-[2vw] ">
            Address {compulsory}
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            className="pl-2 border-2 border-gray-300 hover:border-red-800 flex-grow h-[12vh]"
            placeholder="Address"
            required
          />
          <label htmlFor="state" className="w-24 mt-2 mx-[2vw]">
            State {compulsory}
          </label>
          <select
            id="state"
            name="state"
            value={formData.state}
            onChange={handleInputChange}
            className="pl-2 border-2 border-gray-300 hover:border-red-800 flex-grow h-10 mb-[2vw]"
            required
          >
            <option value="">-- Select --</option>
            <option value="Uk">Uttarakhand</option>
            {/* Add options for states */}
          </select>
          <label htmlFor="city" className="w-24 mx-[2vw] mb-[14vh] ">
            City {compulsory}
          </label>
          <select
            id="city"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            className="pl-2 border-2 border-gray-300 hover:border-red-800 flex-grow h-10"
            required
          >
            <option value="">-- Select --</option>
            <option value="Almora">Almora</option>
            {/* Add options for cities */}
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
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-red-900 hover:bg-red-800 text-white font-bold py-2 px-4 rounded"
          >
            Register
          </button>
        </div>
      </div>
    </form>
  );
};

export default DonorForm;
