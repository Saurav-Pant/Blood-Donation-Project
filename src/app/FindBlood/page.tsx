"use client";

import React, { useState, useEffect } from "react";
import { BiFemale } from "react-icons/bi";
import { FaCircleUser } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa";

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
  const [showTopButton, setShowTopButton] = useState<boolean>(false);

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

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setShowTopButton(true);
    } else {
      setShowTopButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="mb-10 overflow-x-hidden mx-5">
      <div className="md:w-full lg:w-1/2 pr-4 lg:pr-8 xl:pr-16 mb-4 md:mb-0">
        <h1 className="mt-8 text-4xl text-center">Donor Information</h1>
        <div className="mt-12">
          <label htmlFor="bloodGroup" className="font-semibold text-gray-700">
            Filter by Blood Group
          </label>
          <select
            name="bloodGroup"
            id="bloodGroup"
            className="hover:border-red-800 w-full mt-1 bg-white dark:bg-gray-700 border-2 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
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
          <div className="grid grid-cols-1 gap-6 mt-8 sm:w-full lg:grid-cols-2 xl:grid-cols-3">
            {filteredDonors.map((donor) => (
              <div
                key={donor.id}
                className="bg-white shadow-md rounded-xl p-6 text-center mb-4 md:mb-0 transform transition duration-300 hover:shadow-lg"
              >
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
            ))}
          </div>
        )}
      </div>
      
      {showTopButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          <FaArrowUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default FindBlood;
