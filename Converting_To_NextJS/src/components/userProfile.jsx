import React,{useContext, useState} from 'react';
import { ThemeContext } from "../context/ThemeContext";
import {MdDeleteOutline} from "react-icons/md";
import { motion } from "framer-motion";
import userProfile from "../asset/avatar.png";

const UserProfile = () => {
    const { theme} = useContext(ThemeContext);
    const [selectedPhoto, setSelectedPhoto] = useState(userProfile);
    const [formData, setFormData] = useState({
      fullName:"",
      userName:"",
      contactNumber:"",
      bloodGroup:"",
      age:"",
      changeEmail:"",
      newPassword:"",
      confirmPassword:"",
    });

    const handlePhotoChange = (e) => {
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        setSelectedPhoto(reader.result);
      };

      if(file){
        reader.readAsDataURL(file);
      }
    };

    const handleSubmit = (e) => {
      e.preventDefault();

      const userData = {
        fullName : formData.fullName,
        userName : formData.userName,
        contactNumber : formData.contactNumber,
        bloodGroup : formData.bloodGroup,
        age : formData.age,
        changeEmail : formData.changeEmail,
        newPassword : formData.newPassword,
        confirmPassword : formData.confirmPassword,
      }

      //perform Edit form logics here
    }

    const handleChange = (e) => {
      const {name, value} = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name] : value,
      }));
    };

  return (
    <div className='flex flex-wrap gap-10 justify-center'>
      <motion.div className='flex  flex-col justify-center items-center mt-5 w-72 bg-white max-h-72'
        initial={{ opacity: 0, position: "relative", left: "-100px" }}
        animate={{ opacity: 1, position: "relative", left: "0px" }}
        transition={{ duration: 1 }}
        style={{
        boxShadow: theme.boxShadow,
        color: theme.color,
        backgroundColor: theme.background,
        }}>
         <div className='flex flex-col justify-center mt-2 text-center gap-2 text-lg font-bold mb-4'>
                <h1 className=''>Madanraj</h1>
                <h1>@Madanraj0519</h1>
         </div>
         <div className="col-span-1 flex flex-col items-center justify-center">
           <div className="relative mb-4">
              <div className="relative mt-2 h-24 w-24 rounded-full mb-3 ml-12 bg-gray-200 overflow-hidden">
                <img
                  className="relative h-full w-full object-cover"
                  src={selectedPhoto}
                  alt="Profile Preview"
                />
                <div className='absolute top-0 w-10 h-10 text-black' >
                  <MdDeleteOutline/>
                </div>
              </div>
            <input
              className="hidden"
              id="photo"
              type="file"
              accept="image/*"
              onChange={handlePhotoChange}
            />
            <label
              htmlFor="photo"
              className="bg-red-900 cursor-pointer ml-3 hover:bg-red-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Upload New Photo
            </label>
          </div>
         </div>
         <div className='mt-2 text-base'>
            <h4 className='font-semibold'>Member Since : <span className='font-medium'>10 December 2023</span></h4>
         </div>
        </motion.div>

        <motion.form
        type="submit"
        className='max-w-xl '
        style={{
          boxShadow: theme.boxShadow,
        }}
        initial={{ opacity: 0, position: "relative", right: "-100px" }}
        animate={{ opacity: 1, position: "relative", right: "0px" }}
        transition={{ duration: 1 }}
        onSubmit={handleSubmit}
      >
      <div className='flex items-center bg-gradient-to-r from-red-900 via-red-900 to-red-800 h-[11vh] mt-4 rounded w-full mb-[2vh]'>
          <h1 className='text-white text-2xl font-bold ml-4'>
            Edit User Info
          </h1>
        </div>
        <div className='shadow border-1 p-8 grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div className='mb-2'>
            <label htmlFor='name' className='w-full mb-[2vw] mt-2'>
              <h1>Full Name </h1>
            </label>
            <input
              type='text'
              id='fullName'
              name='fullName'
              value={formData.fullName}
              onChange={handleChange}
              className='pl-2 border-2 border-gray-300 hover:border-red-800  h-10 w-full flex-grow'
              style={{
                color: theme.color,
                backgroundColor: theme.background,
              }}
              placeholder='Full Name'
            />
          </div>

          <div className='mb-2'>
            <label htmlFor='name' className='w-full mb-[2vw] mt-2'>
              <h1>User Name </h1>
            </label>
            <input
              type='text'
              id='userName'
              name='userName'
              value={formData.userName}
              onChange={handleChange}
              className='pl-2 border-2 border-gray-300 hover:border-red-800  h-10 w-full flex-grow'
              style={{
                color: theme.color,
                backgroundColor: theme.background,
              }}
              placeholder='User Name'
            />
          </div>

          <div className='mb-2'>
            <label htmlFor='phone' className='w-full mb-[2vw] mt-2'>
              Contact Number 
            </label>
            <input
              type='text'
              id='contactNumber'
              name='contactNumber'
              value={formData.contactNumber}
              onChange={handleChange}
              className='pl-2 border-2 border-gray-300 hover:border-red-800 flex-grow h-10 w-full mb-[2vw]'
              style={{
                color: theme.color,
                backgroundColor: theme.background,
              }}
              placeholder='Organistaion Phone Number'
            />
          </div>

          <div className='mb-2'>
          <label htmlFor='email' className='w-full mb-[2vw] mt-2 mr-1'>
              Blood Group 
            </label>
            <input
              type='text'
              id='bloodGroup'
              name='bloodGroup'
              value={formData.bloodGroup}
              onChange={handleChange}
              className='pl-2 border-2 border-gray-300 hover:border-red-800 flex-grow h-10 w-full mb-[2vw]'
              style={{
                color: theme.color,
                backgroundColor: theme.background,
              }}
              placeholder='Blood Group'
            />
          </div>

          <div className='mb-2'>
          <label htmlFor='email' className='w-full mb-[2vw] mt-2 mr-1'>
              Age 
            </label>
            <input
              type='number'
              id='age'
              name='age'
              value={formData.age}
              onChange={handleChange}
              className='pl-2 border-2 border-gray-300 hover:border-red-800 flex-grow h-10 w-full mb-[2vw]'
              style={{
                color: theme.color,
                backgroundColor: theme.background,
              }}
              placeholder='age'
            />
          </div>

          <div className='mb-2'>
          <label htmlFor='email' className='w-full mb-[2vw] mt-2 mr-1'>
             Change Email ID 
            </label>
            <input
              type='email'
              id='changeEmail'
              name='changeEmail'
              value={formData.changeEmail}
              onChange={handleChange}
              className='pl-2 border-2 border-gray-300 hover:border-red-800 flex-grow h-10 w-full mb-[2vw]'
              style={{
                color: theme.color,
                backgroundColor: theme.background,
              }}
              placeholder=' Change Email'
            />
          </div>

          <div className='mb-2'>
          <label htmlFor='email' className='w-full mb-[2vw] mt-2 mr-1'>
              New Password 
            </label>
            <input
              type='password'
              id='newPassword'
              name='newPassword'
              value={formData.newPassword}
              onChange={handleChange}
              className='pl-2 border-2 border-gray-300 hover:border-red-800 flex-grow h-10 w-full mb-[2vw]'
              style={{
                color: theme.color,
                backgroundColor: theme.background,
              }}
              placeholder='NewPassword'
            />
          </div>

          <div className='mb-2'>
          <label htmlFor='email' className='w-full mb-[2vw] mt-2 mr-1'>
              Confirm New Password 
            </label>
            <input
              type='password'
              id='confirmPassword'
              name='confirmPassword'
              value={formData.confirmPassword}
              onChange={handleChange}
              className='pl-2 border-2 border-gray-300 hover:border-red-800 flex-grow h-10 w-full mb-[2vw]'
              style={{
                color: theme.color,
                backgroundColor: theme.background,
              }}
              placeholder='ConfirmNewPassword'
            />
          </div>

        </div>
        <div className='flex justify-end'>
            <button
              type='submit'
              className=' sm:w-1/2 md:w-1/4 mx-auto bg-red-900 hover:bg-red-800 text-white font-bold py-2 px-4 rounded'
            >
              Update info
            </button>
          </div>
        </motion.form>
    </div>
    
  )
}

export default UserProfile