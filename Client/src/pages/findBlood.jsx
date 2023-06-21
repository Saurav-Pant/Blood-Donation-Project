import React , {useState} from "react";

import donor from "../asset/donor.jpg";
const FindBlood = () => {
  const [formData, setFormData]=useState({
    bloodGroup:"",
    state:"",
    city:""

  })
  const handleInput=(e)=>{
    const name = e.target.name 
    const value = e.target.value
    console.log(name,value)
    setFormData({
        ...formData,
          [name]:value
        })
  }
  return <div className="flex justify-center mt-12 px-32 ">
   <div className="mr-[32px] ">
    <img src={donor} className="w-[30vw] rounded-xl shadow "  />
   </div>
   <div className="flex flex-col flex-end ml-32" >
<h1 className="text-4xl ml-24 ">Recipient Details</h1>

   <form >
<div className="flex  mt-12 ">
  <label htmlFor="bloodGroup" className=" ">Blood Group</label>
  <select name="bloodGroup" id="bloodGroup" onChange={handleInput} className="w-64 bg-white rounded-xl ml-12">
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
</div>

<button className="ml-64 w-[10vw] mt-8 bg-black text-white rounded h-10 w-auto">Current Location</button>

<p className="mt-2  text-center ml-[210px] ">OR</p>


<div className=" flex flex-col  my-12">
  <div className=" mb-8">
    <label htmlFor="state" className="">State</label>
    <select name="state" id="state" onChange={handleInput} className=" ml-28 w-64 bg-white">
      <option value=""> select -</option>
    </select>
  </div>
  <div className="">
  <label htmlFor="city" className="">City</label>
    <select name="city" id="city" onChange={handleInput} className="ml-32 w-64 bg-white">
      <option value=""> select -</option>
    </select>
  </div>
</div>
<button  type="submit" className=" w-[10vw] ml-64 mt-6 bg-black text-white rounded h-10">Proceed &gt;</button>
   </form>
   </div>
  </div>;
};

export default FindBlood;
