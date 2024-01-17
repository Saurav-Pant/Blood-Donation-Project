"use client"
import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";


const OrgForm = () => {
  const [formData, setFormData] = useState({
    OrganisationName: "",
    OrganisationPhone: "",
    OrganisationEmail: "",
    OrganisationAddress: "",
    OrganisationState: "",
    OrganisationCity: "",
  });
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e: any) => {
    setIsChecked(e.target.checked);
  };

  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([])
  const router = useRouter();


  const fetchStates = async () => {
    try {
      const response = await fetch("https://cdn-api.co-vin.in/api/v2/admin/location/states", {
        method: "GET",
        headers: {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36",
        },
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      setStates(data.states);
    } catch (error) {
      console.error('Error while fetching the states', error);
    }
  };

  useEffect(() => {
    fetchStates();
  }, []);


  const validationSchema = Yup.object().shape({
    OrganisationName: Yup.string().required("Organization Name is required"),
    OrganisationPhone: Yup.string().required("Organization Name is required"),
    OrganisationEmail: Yup.string().email("Invalid email").required("Email is required"),
    OrganisationAddress: Yup.string().required("Organization Address is required"),
    OrganisationState: Yup.string().required("Organization Address is required"),
    OrganisationCity: Yup.string().required("Organization City is required"),
  });

  const handleSubmit = async (values: any) => {
    try {
      const { ...dataToSend } = values;

      const response = await fetch("/api/orgForm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      console.log(dataToSend)
      const data = await response.json();
      console.log("Data submitted successfully:", data);
      router.push("/")
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };


  const formik = useFormik({
    initialValues: {
      OrganisationName: "",
      OrganisationPhone: "",
      OrganisationEmail: "",
      OrganisationAddress: "",
      OrganisationState: "",
      OrganisationCity: "",
    },
    validationSchema,
    onSubmit: handleSubmit,
  });

  const handleInputChange = async (e: any) => {
    const { name, value } = e.target;
    formik.handleChange(e);
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    if (name === 'OrganisationState') {
      try {
        const response = await fetch(`https://cdn-api.co-vin.in/api/v2/admin/location/districts/${value}`, {
          method: "GET",
          headers: {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36",
          },
        });
  
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
  
        const data = await response.json();
        setCities(data.districts)
      } catch (error) {
        console.log(`Error while fetching the cities ${error}`)
      }
    }
  };

  const compulsory = <span className='text-red-600'>*</span>;

  return (
    <>
      <form
        onSubmit={formik.handleSubmit}
        className='mx-auto max-w-xl '
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
              onBlur={formik.handleBlur}
              className='pl-2 border-2 border-gray-300 hover:border-red-800  h-10 w-full flex-grow'
              placeholder='Organistaion Name'
              required
            />
            {formik.touched.OrganisationName && formik.errors.OrganisationName && (
              <div className="text-red-600">
                {formik.errors.OrganisationName}
              </div>
            )}
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
              onBlur={formik.handleBlur}
              className='pl-2 border-2 border-gray-300 hover:border-red-800 flex-grow h-10 w-full mb-[2vw]'
              placeholder='Organistaion Phone Number'
              required
            />
            {formik.touched.OrganisationPhone && formik.errors.OrganisationPhone && (
              <div className="text-red-600">
                {formik.errors.OrganisationPhone}
              </div>
            )}

            <label htmlFor='email' className='w-full mb-[2vw] mt-2 mr-1'>
              Email {compulsory}
            </label>
            <input
              type='email'
              id='OrganisationEmail'
              name='OrganisationEmail'
              value={formData.OrganisationEmail}
              onChange={handleInputChange}
              onBlur={formik.handleBlur}
              className='pl-2 border-2 border-gray-300 hover:border-red-800 flex-grow h-10 w-full mb-[2vw]'
              placeholder=' Organistion Email'
              required
            />
            {formik.touched.OrganisationEmail && formik.errors.OrganisationEmail && (
              <div className="text-red-600">
                {formik.errors.OrganisationEmail}
              </div>
            )}
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
              onBlur={formik.handleBlur}
              className='pl-2 border-2 border-gray-300 hover:border-red-800 flex-grow h-[11vh] w-full mb-5'
              placeholder=' Organisation Address'
              required
            />

            {formik.touched.OrganisationAddress && formik.errors.OrganisationAddress && (
              <div className="text-red-600">
                {formik.errors.OrganisationAddress}
              </div>
            )}


            <label htmlFor='OrganisationState' className='w-full mt-2'>
              State {compulsory}
            </label>
            <select
              id='OrganisationState'
              name='OrganisationState'
              value={formData.OrganisationState}
              onChange={handleInputChange}
              onBlur={formik.handleBlur}
              className='pl-2 border-2 border-gray-300 hover:border-red-800 flex-grow h-10 w-full mb-[2vw]'
              required
            >
              {formik.touched.OrganisationState && formik.errors.OrganisationState && (
                <div className="text-red-600">
                  {formik.errors.OrganisationState}
                </div>
              )}
              <option value=''>-- Select --</option>
              {states.map((state: any) => (
                <option key={state.state_id} value={state.state_id}>
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
              onBlur={formik.handleBlur}
              className='pl-2 border-2 border-gray-300 hover:border-red-800 flex-grow w-full h-10'
              required
            >
              <option value=''>-- Select --</option>
              {cities.map((city: any) => (
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
                onBlur={formik.handleBlur}
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
