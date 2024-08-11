"use client"
import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import statesData from "../../Content/State.json"
import { toast, Toaster } from "sonner";
import { BorderBeam } from "@/components/ui/border-beam";


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

  const states = statesData.states;


  const handleCheckboxChange = (e: any) => {
    setIsChecked(e.target.checked);
  };

  const router = useRouter();

  const validationSchema = Yup.object().shape({
    OrganisationName: Yup.string().required("Organization Name is required"),
    OrganisationPhone: Yup.string().required("Organization Number is required"),
    OrganisationEmail: Yup.string().email("Invalid email").required("Email is required"),
    OrganisationAddress: Yup.string().required("Organization Address is required"),
    OrganisationState: Yup.string().required("Organization Address is required"),
    OrganisationCity: Yup.string()
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
  };

  const compulsory = <span className='text-red-600'>*</span>;

  return (
    <>
      <form
        onSubmit={formik.handleSubmit}
        className='mx-auto max-w-xl my-5'
      >
        <div className='flex items-center bg-gradient-to-r from-red-900 via-red-900 to-red-800 h-[11vh] mt-4 rounded w-full mb-[2vh]'>
          <h1 className='text-white text-2xl font-bold ml-4'>
            Register as Organisation
          </h1>
        </div>
        <div className='shadow border-1 p-8 relative h-full w-full rounded-xl'>
        <BorderBeam/>

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
              id="OrganisationState" 
              name="OrganisationState"  
              value={formik.values.OrganisationState}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="pl-2 border-2 border-gray-300 hover:border-red-800 flex-grow h-10 w-full mb-[2vw]"
              required
            >
              {formik.touched.OrganisationState && formik.errors.OrganisationState && (
                <div className="text-red-600">{formik.errors.OrganisationState}</div>
              )}

              <option value="">-- Choose State --</option>
              {states.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>


            {formik.touched.OrganisationState && formik.errors.OrganisationState && (
              <div className="text-red-600">
                {formik.errors.OrganisationState}
              </div>
            )}
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
            <Toaster/>
            <button
            onClick={()=>{toast.success('Organisation added successfully')}}
              type='submit'
              className='w-full sm:w-1/2 mx-auto bg-red-900 hover:bg-red-800 text-white font-bold py-2 px-4 rounded'
              disabled={!formik.isValid || !formik.dirty}
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
