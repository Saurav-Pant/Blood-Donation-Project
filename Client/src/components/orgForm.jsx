import React, { useState, useContext, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";

const OrgForm = () => {
  const { theme } = useContext(ThemeContext);
  const [formData, setFormData] = useState({
    OrganisationName: "",
    OrganisationPhone: "",
    OrganisationEmail: "",
    OrganisationAddress: "",
    OrganisationState: "",
    OrganisationCity: "",
  });
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([])

  const fetchStates = async () => {
    try {
      const response = await fetch(`https://cdn-api.co-vin.in/api/v2/admin/location/states`);
      const data = await response.json();
      setStates(data.states);
    } catch (error) {
      console.error('Error while fetching the states', error);
    }
  };

  useEffect(() => {
    fetchStates();
  }, []);

  const handleInputChange = async (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    if (name === 'OrganisationState') {
      try {
        const response = await fetch(`https://cdn-api.co-vin.in/api/v2/admin/location/districts/${value}`)
        const data = await response.json()
        setCities(data.districts)
      } catch (error) {
        console.log(`Error while fetching the cities ${error}`)
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    console.log(formData);
    console.log(isChecked);
  };
  const compulsory = <span className='text-red-600'>*</span>;

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className='mx-auto max-w-xl '
        style={{
          boxShadow: theme.boxShadow,
        }}
      >
        <div className='flex items-center bg-gradient-to-r from-red-900 via-red-900 to-red-800 h-[11vh] mt-4 rounded w-full mb-[2vh]'>
          <h1 className='text-white text-2xl font-bold ml-4'>
            Register as Organisation
          </h1>
        </div>
        <div className='shadow border-1 p-8'>
          <div className='mb-5'>
            <label htmlFor='name' className='w-full mb-[2vw] mt-2'>
              <h1>Organisation Name {compulsory}</h1>
            </label>
            <input
              type='text'
              id='OrganisationName'
              name='OrganisationName'
              value={formData.OrganisationName}
              onChange={handleInputChange}
              className='pl-2 border-2 border-gray-300 hover:border-red-800  h-10 w-full flex-grow'
              style={{
                color: theme.color,
                backgroundColor: theme.background,
              }}
              placeholder='Organistaion Name'
              required
            />
          </div>
          <div className='mb-5'>
            <label htmlFor='phone' className='w-full mb-[2vw] mt-2'>
              Contact Number {compulsory}
            </label>
            <input
              type='text'
              id='OrganisationPhone'
              name='OrganisationPhone'
              value={formData.OrganisationPhone}
              onChange={handleInputChange}
              className='pl-2 border-2 border-gray-300 hover:border-red-800 flex-grow h-10 w-full mb-[2vw]'
              style={{
                color: theme.color,
                backgroundColor: theme.background,
              }}
              placeholder='Organistaion Phone Number'
              required
            />
            <label htmlFor='email' className='w-full mb-[2vw] mt-2 mr-1'>
              Email {compulsory}
            </label>
            <input
              type='email'
              id='OrganisationEmail'
              name='OrganisationEmail'
              value={formData.OrganisationEmail}
              onChange={handleInputChange}
              className='pl-2 border-2 border-gray-300 hover:border-red-800 flex-grow h-10 w-full mb-[2vw]'
              style={{
                color: theme.color,
                backgroundColor: theme.background,
              }}
              placeholder=' Organistion Email'
              required
            />
          </div>

          <div className='mb-5 '>
            <label htmlFor='OrganisationAddress' className='w-full mt-2'>
              Address {compulsory}
            </label>
            <input
              type='text'
              id='OrganisationAddress'
              name='OrganisationAddress'
              value={formData.OrganisationAddress}
              onChange={handleInputChange}
              className='pl-2 border-2 border-gray-300 hover:border-red-800 flex-grow h-[11vh] w-full mb-5'
              style={{
                color: theme.color,
                backgroundColor: theme.background,
              }}
              placeholder=' Organisation Address'
              required
            />
            <label htmlFor='OrganisationState' className='w-full mt-2'>
              State {compulsory}
            </label>
            <select
              id='OrganisationState'
              name='OrganisationState'
              value={formData.OrganisationState}
              onChange={handleInputChange}
              className='pl-2 border-2 border-gray-300 hover:border-red-800 flex-grow h-10 w-full mb-[2vw]'
              style={{
                color: theme.color,
                backgroundColor: theme.background,
              }}
              required
            >
              <option value=''>-- Select --</option>
              {states.map((state) => (
                <option key={state.state_id} value={state.state_id} name={state.state_name}>
                  {state.state_name}
                </option>
              ))}
            </select>
            <label htmlFor='OrganisationCity' className='w-full mb-[7vw] '>
              City {compulsory}
            </label>
            <select
              id='OrganisationCity'
              name='OrganisationCity'
              value={formData.OrganisationCity}
              onChange={handleInputChange}
              className='pl-2 border-2 border-gray-300 hover:border-red-800 flex-grow w-full h-10'
              style={{
                color: theme.color,
                backgroundColor: theme.background,
              }}
              required
            >
              <option value=''>-- Select --</option>
              {cities.map((city) => (
                <option key={city.district_id} value={city.district_name}>
                  {city.district_name}
                </option>
              ))}
            </select>
          </div>
          <div className='mb-[2vh]  font-bold '>
            <label>
              <input
                type='checkbox'
                checked={isChecked}
                onChange={handleCheckboxChange}
                className='mr-6 '
              />
              All the details which are filled by Organisation are right and
              ethical.
            </label>
          </div>
          <div className='flex justify-end'>
            <button
              type='submit'
              className='w-full sm:w-1/2 mx-auto bg-red-900 hover:bg-red-800 text-white font-bold py-2 px-4 rounded'
            >
              Register
            </button>
          </div>
        </div>
      </form>
    </>
  );
};
export default OrgForm;
