import React, { useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

import donor from "../asset/donor.jpg";
const FindBlood = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  console.log(theme);

  const [formData, setFormData] = useState({
    bloodGroup: "",
    state: "",
    city: "",
  });
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <div className='flex justify-center mt-12 px-32 '>
      <div className='mr-[32px] '>
        <img src={donor} className='w-[30vw] rounded-xl shadow ' />
      </div>
      <div className='flex flex-col flex-end ml-32'>
        <h1 className='text-4xl ml-24 '>Recipient Details</h1>

        <form>
          <div className='flex  mt-12 '>
            <label htmlFor='bloodGroup' className=' '>
              Blood Group
            </label>
            <select
              name='bloodGroup'
              id='bloodGroup'
              onChange={handleInput}
              className=' hover:border-red-800 w-64 bg-white ml-12 border-2'
              style={{
                color: "#000",
              }}
            >
              <option value=''>-- Select --</option>
              <option value='A+'>A+</option>
              <option value='A-'>A-</option>
              <option value='B+'>B+</option>
              <option value='B-'>B-</option>
              <option value='O+'>O+</option>
              <option value='O-'>O-</option>
              <option value='AB+'>AB+</option>
              <option value='AB-'>AB-</option>
            </select>
          </div>

          <button
            className='ml-64 w-[11vw] mt-8 bg-black p-1 text-white rounded h-10 w-auto'
            style={{
              backgroundColor: theme.button.buttonBgColor,
              color: theme.button.buttonTextColor,
            }}
          >
            Current Location
          </button>

          <p className='mt-2  text-center ml-[210px] '>OR</p>

          <div className=' flex flex-col  my-12'>
            <div className=' mb-8'>
              <label htmlFor='state' className=''>
                State
              </label>
              <input
                type='text'
                value={setFormData.state}
                name='state'
                id='state'
                placeholder='State'
                onChange={handleInput}
                className='hover:border-red-800 border-2 ml-28 w-64 bg-white'
                style={{
                  color: "#000",
                }}
              >
                {/* <option value=""> select -</option> */}
              </input>
            </div>
            <div className=''>
              <label htmlFor='city' className=''>
                City
              </label>
              <input
                type='text'
                value={setFormData.city}
                name='city'
                id='city'
                placeholder='City'
                onChange={handleInput}
                className=' hover:border-red-800 border-2 ml-32 w-64 bg-white'
                style={{
                  color: "#000",
                }}
              ></input>
            </div>
          </div>
          <button
            type='submit'
            className=' w-[10vw] ml-64 mt-6 bg-black text-white rounded h-10'
            style={{
              backgroundColor: theme.button.buttonBgColor,
              color: theme.button.buttonTextColor,
            }}
          >
            Proceed &gt;
          </button>
        </form>
      </div>
    </div>
  );
};

export default FindBlood;
