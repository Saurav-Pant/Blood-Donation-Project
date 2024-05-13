"use client"

import { User } from "@clerk/nextjs/server";
import React, { useState, useEffect } from "react";
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

const FindBlood: React.FC = () => {
  const [donors, setDonors] = useState<Donor[]>([]);
  const [filteredDonors, setFilteredDonors] = useState<Donor[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [bloodGroupFilter, setBloodGroupFilter] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/DonorForm");
        const data: { Donors: Donor[] } = await response.json();
        console.log(data);
        setDonors(data.Donors);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (bloodGroupFilter === "") {
      setFilteredDonors(donors);
    } else {
      setFilteredDonors(donors.filter((donor) => donor.bloodGroup === bloodGroupFilter));
    }
  }, [bloodGroupFilter, donors]);

  const handleBloodGroupChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setBloodGroupFilter(e.target.value);
  };

  return (
    <div className="mb-10">
      <div className="md:w-full lg:w-1/2 pr-4 lg:pr-8 xl:pr-16 mb-4 md:mb-0">
        <h1 className="mt-8 text-4xl text-center">Recipient Details</h1>
        <div className="mt-12">
          <label htmlFor="bloodGroup" className="font-semibold text-gray-400 ml-4">
            Filter by Blood Group
          </label>
          <select
            name="bloodGroup"
            id="bloodGroup"
            className="hover:border-red-800 w-full mt-1 bg-white dark:bg-gray-300 border-2 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 h-11 m-7 mt-4 rounded-full dark:text-black bg-gray-500 text-slate-300"
            value={bloodGroupFilter}
            onChange={handleBloodGroupChange}
          >
            <option value="">-- All --</option>
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
      </div>
  
      <div className="lg:wd-1/2">
        {loading ? (
          <div className="text-center mt-8">
            <h2 className="text-2xl font-semibold">Loading...</h2>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4 mx-auto mt-5 sm:w-full lg:grid-cols-2">
            {filteredDonors.map((donor) => (
              <div
                key={donor.id}
                className="bg-white shadow-lg rounded-lg p-4 text-center mb-4 md:mb-0"
              >
                {donor.gender.toLowerCase() === "male" ? (
                  <FaCircleUser className="w-10 h-10 text-blue-500 inline-block mb-2" />
                ) : (
                  <BiFemale className="w-10 h-10 text-pink-500 inline-block mb-2" />
                )}
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{`${donor.firstName} ${donor.lastName}`}</h2>
                <p className="text-gray-600 mb-2">{donor.address}</p>
                <div className="flex justify-between items-center border-t pt-2">
                  <div className="text-yellow-500">Blood Group: {donor.bloodGroup}</div>
                  <div className="text-gray-500">Age: {donor.age}</div>
                  <div className="text-gray-500">Phone: {donor.phone}</div>
                </div>
              </div>
            ))}
            {/* Added mb-0 to the last donor card for better responsiveness */}
          </div>
        )}
      </div>
    </div>
  );
  
};

export default FindBlood;
