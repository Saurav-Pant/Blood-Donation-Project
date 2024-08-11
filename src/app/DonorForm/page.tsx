"use client"
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import statesData from "../../Content/State.json"
import { Toaster, toast } from 'sonner'
import { BorderBeam } from "@/components/ui/border-beam";




const DonorForm = () => {

  const states = statesData.states;

  const router = useRouter();

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    phone: Yup.string().required("Phone Number is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    bloodGroup: Yup.string().required("Blood Group is required"),
    age: Yup.number().required("Age is required"),
    address: Yup.string().required("Address is required"),
    state: Yup.string().required("State is required"),
    city: Yup.string(),
    gender: Yup.string().required("Gender is required"),
  });

  const handleSubmit = async (values: any) => {
    try {
      const { isChecked, ...dataToSend } = values;

      const response = await fetch("/api/DonorForm", {
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
      isChecked: false,
    },
    validationSchema,
    onSubmit: handleSubmit,
  });

  const [error, setError] = useState<string | null>(null);

const handleCheckboxChange = (e: any) => {
  formik.setFieldValue("isChecked", e.target.checked);
  console.log(e.target.checked)
};
const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
  formik.handleChange(e);
};

  const compulsory = <span className="text-red-600">*</span>;

  return (
    <motion.form
      className="mx-auto max-w-xl my-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.7 }}
      onSubmit={formik.handleSubmit}
    >
      <div className="flex items-center bg-gradient-to-r from-red-900 via-red-900 to-red-800 h-[11vh] mt-6 rounded w-full mb-[2vh] ">
        <h1 className="text-white text-2xl font-bold ml-4">
          Register as donor
        </h1>
      </div>
      <div className="shadow border-1 p-8 relative h-full w-full rounded-xl">
        <BorderBeam/>
        <div className="mb-5">
          <label htmlFor="firstName" className="w-full mb-[2vw] mt-2">
            <h1>First Name {compulsory}</h1>
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="mb-[2vw] pl-2 border-2 border-gray-300 hover:border-red-800 flex-grow h-10 w-full"
            placeholder="First"
            required
          />
          {formik.touched.firstName && formik.errors.firstName && (
            <div className="text-red-600">
              {formik.errors.firstName}
            </div>
          )}

          <label htmlFor="lastName" className="w-full mb-[2vw] mt-2 mr-1">
            Last Name {compulsory}
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formik.values.lastName}
            onChange={handleInputChange}
            onBlur={formik.handleBlur}
            className=" mb-[2vw] pl-2 border-2 border-gray-300 hover:border-red-800 flex-grow h-10 w-full"
            placeholder="Last"
            required
          />
          {formik.touched.lastName && formik.errors.lastName && (
            <div className="text-red-600">
              {formik.errors.lastName}
            </div>
          )}

        </div>
        <div className="mb-5">
          <label htmlFor="phone" className="w-full mb-[2vw] mt-2 mr-1">
            Phone {compulsory}
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formik.values.phone}
            onBlur={formik.handleBlur}
            onChange={handleInputChange}
            className="pl-2 border-2 border-gray-300 hover:border-red-800 flex-grow h-10 w-full mb-[2vw]"

            placeholder="Phone Number"
            required
          />

          {formik.touched.phone && formik.errors.phone && (
            <div className="text-red-600">
              {formik.errors.phone}
            </div>
          )}

          <label htmlFor="email" className="w-full mb-[2vw] mt-2 mr-1">
            Email {compulsory}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formik.values.email}
            onBlur={formik.handleBlur}
            onChange={handleInputChange}
            className="pl-2 border-2 border-gray-300 hover:border-red-800 flex-grow h-10 w-full mb-[2vw]"
            placeholder="Email"
            required
          />

          {formik.touched.email && formik.errors.email && (
            <div className="text-red-600 ">
              {formik.errors.email}
            </div>
          )}

        </div>
        <div className="mb-5">
          <label htmlFor="bloodGroup" className="w-full mb-[2vw] mt-2 mr-1">
            Blood Group {compulsory}
          </label>
          <select
            id="bloodGroup"
            name="bloodGroup"
            value={formik.values.bloodGroup}
            onChange={handleInputChange}
            onBlur={formik.handleBlur}
            className="pl-2 border-2  border-gray-300 hover:border-red-600  h-10 w-full mb-[2vw] "
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
          {formik.touched.bloodGroup && formik.errors.bloodGroup && (
            <div className="text-red-600">
              {formik.errors.bloodGroup}
            </div>
          )}

          <label htmlFor="age" className=" mb-[2vw] mt-2 mr-1 w-full ">
            Age {compulsory}
          </label>
          <input
            type="number"
            id="age"
            name="age"
            value={formik.values.age}
            onChange={handleInputChange}
            onBlur={formik.handleBlur}
            className="pl-2 border-2 border-gray-300 hover:border-red-600 w-full h-10"
            placeholder="Age"
            required
          />
          {formik.touched.age && formik.errors.age && (
            <div className="text-red-600">
              {formik.errors.age}
            </div>
          )}

        </div>
        <div className="mb-5 ">
          <label htmlFor="address" className=" mt-2 mr-[2vw] w-full">
            Address {compulsory}
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formik.values.address}
            onChange={handleInputChange}
            onBlur={formik.handleBlur}
            className="pl-2 border-2 border-gray-300 hover:border-red-800 h-[12vh] w-full"
            placeholder="Address"
            required
          />

          {formik.touched.address && formik.errors.address && (
            <div className="text-red-600 ">
              {formik.errors.address}
            </div>
          )}

          <label htmlFor="state" className="mt-2 w-full">
            State {compulsory}
          </label>
          <select
            id="state"
            name="state"
            value={formik.values.state}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="pl-2 border-2 border-gray-300 hover:border-red-800 flex-grow h-10 w-full mb-[2vw]"
            required
          >
            {formik.touched.state && formik.errors.state && (
              <div className="text-red-600">{formik.errors.state}</div>
            )}

            <option value="">-- Choose State --</option>
            {states.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
          {formik.touched.state && formik.errors.state && (
            <div className="text-red-600">
              {formik.errors.state}
            </div>
          )}

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
    onBlur={formik.handleBlur}
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
    onBlur={formik.handleBlur}
    className="mr-1"
    required
  />
  <label htmlFor="other">Others</label>
</div>
          {formik.touched.isChecked && formik.errors.isChecked && (
            <div className="text-red-600">{formik.errors.isChecked}</div>
          )}
        </div>
        <div className="mb-[4vh] font-bold">
          <label>
            <input
              type="checkbox"
              checked={formik.values.isChecked}
              onChange={handleCheckboxChange}
              onBlur={formik.handleBlur}
              className="mr-6"
            />
            All the details which are filled by me are right and ethical.
          </label>
          {formik.touched.isChecked && formik.errors.isChecked && (
            <div className="text-red-600">{formik.errors.isChecked}</div>
          )}
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
          <Toaster/>
          <button
          onClick={()=>{toast.success('Donner added successfully')}}
            type="submit"
            className="w-full sm:w-1/2 mx-auto bg-red-900 hover:bg-red-800 text-white font-bold py-2 px-4 rounded"
            disabled={!formik.isValid || !formik.dirty || !formik.values.isChecked}
          >
            Register
          </button>
        </div>
      </div>
    </motion.form>
  );
};

export default DonorForm;

