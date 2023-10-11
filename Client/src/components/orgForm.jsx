import React, { useState, useContext, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Form from "../asset/Form.png"
const OrgForm = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
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
        <p className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={Form} alt="Image" />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Blood donation form</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Blood donated by you can save lives. Be a donor save lives.</p>
          </div>
        </p>
        <div className='shadow border-1 p-8 rounded-md hover:bg-red-300'>
          <p>{compulsory} fields are compulsory</p>
          <br />
          <div className='mb-5'>
            <label htmlFor='name' className='w-full mb-[2vw] mt-2'>
              <strong>Organisation Name {compulsory}</strong>
            </label>
            <input
              type='text'
              id='OrganisationName'
              name='OrganisationName'
              value={formData.OrganisationName}
              onChange={handleInputChange}
              className='pl-2 border-2 border-gray-300 hover:border-red-800 rounded-lg h-10 w-full flex-grow'
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
              <strong> Contact Number {compulsory}</strong>
            </label>
            <input
              type='text'
              id='OrganisationPhone'
              name='OrganisationPhone'
              value={formData.OrganisationPhone}
              onChange={handleInputChange}
              className='pl-2 border-2 border-gray-300 hover:border-red-800 rounded-lg flex-grow h-10 w-full mb-[2vw]'
              style={{
                color: theme.color,
                backgroundColor: theme.background,
              }}
              placeholder='Organistaion Phone Number'
              required
            />
            <label htmlFor='email' className='w-full mb-[2vw] mt-2 mr-1'>
              <strong> Email {compulsory} </strong>
            </label>
            <input
              type='email'
              id='OrganisationEmail'
              name='OrganisationEmail'
              value={formData.OrganisationEmail}
              onChange={handleInputChange}
              className='pl-2 border-2 border-gray-300 hover:border-red-800 rounded-lg flex-grow h-10 w-full mb-[2vw]'
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
              <strong> Address {compulsory} </strong>
            </label>
            <input
              type='text'
              id='OrganisationAddress'
              name='OrganisationAddress'
              value={formData.OrganisationAddress}
              onChange={handleInputChange}
              className='pl-2 border-2 border-gray-300 hover:border-red-800 rounded-lg flex-grow h-[11vh] w-full mb-5'
              style={{
                color: theme.color,
                backgroundColor: theme.background,
              }}
              placeholder=' Organisation Address'
              required
            />
            <label htmlFor='OrganisationState' className='w-full mt-2'>
              <strong> State {compulsory} </strong>
            </label>
            <select
              id='OrganisationState'
              name='OrganisationState'
              value={formData.OrganisationState}
              onChange={handleInputChange}
              className='pl-2 border-2 border-gray-300 hover:border-red-800 rounded-lg flex-grow h-10 w-full mb-[2vw]'
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
              <strong> City {compulsory}</strong>
            </label>
            <select
              id='OrganisationCity'
              name='OrganisationCity'
              value={formData.OrganisationCity}
              onChange={handleInputChange}
              className='pl-2 border-2 border-gray-300 hover:border-red-800 rounded-lg flex-grow w-full h-10'
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
              className='w-full sm:w-1/2 mx-auto bg-red-900 hover:bg-red-800 text-white font-bold py-2 px-4 rounded-lg'
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
