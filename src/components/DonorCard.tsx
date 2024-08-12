import React from "react";
import { BiFemale } from "react-icons/bi";
import { FaCircleUser } from "react-icons/fa6";

interface Donor {
  id: number;
  firstName: string;
  lastName: string;
  gender: string;
  bloodGroup: string;
  age: number;
  phone: string;
  address: string;
}


const DonorCard: React.FC<{ donor: Donor }> = ({ donor }) => (
  <div className="bg-white shadow-md rounded-xl p-6 text-center mb-4 md:mb-0 transform transition duration-300 hover:shadow-lg">
    <div className="mb-4">
      {donor.gender.toLowerCase() === "male" ? (
        <FaCircleUser className="w-16 h-16 text-blue-600 inline-block" />
      ) : (
        <BiFemale className="w-16 h-16 text-pink-600 inline-block" />
      )}
    </div>
    <h2 className="text-2xl font-bold text-gray-800 mb-3">{`${donor.firstName} ${donor.lastName}`}</h2>
    <p className="text-gray-600 mb-4">{donor.address}</p>
    <div className="flex flex-col space-y-2 border-t pt-4">
      <div className="flex justify-between items-center">
        <span className="font-semibold">Blood Group:</span>
        <span className="text-red-600 font-bold">{donor.bloodGroup}</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="font-semibold">Age:</span>
        <span>{donor.age}</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="font-semibold">Phone:</span>
        <span>{donor.phone}</span>
      </div>
    </div>
  </div>
);

export default DonorCard