"use client";

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
      setFilteredDonors(
        donors.filter((donor) => donor.bloodGroup === bloodGroupFilter)
      );
    }
  }, [bloodGroupFilter, donors]);

  const handleBloodGroupChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setBloodGroupFilter(e.target.value);
  };

  return (
    <div className="mb-10">
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
           <section className="text-gray-400  body-font">
            <div className="container px-5 py-24 mx-auto">
              <div className="flex flex-wrap -m-4">
                {filteredDonors.map((donor) => (
                  <div className="p-4 lg:w-1/3">
                    <div className="h-full bg-gray-800 bg-opacity-40 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                      {donor.gender.toLowerCase() === "male" ? (
                        <FaCircleUser className="w-10 h-10 text-blue-500 inline-block mb-2" />
                      ) : (
                        <BiFemale className="w-10 h-10 text-pink-500 inline-block mb-2" />
                      )}
                      <h1 className="title-font sm:text-2xl text-xl font-medium text-white mb-3">{`${donor.firstName} ${donor.lastName}`}</h1>
                      <p className="leading-relaxed mb-3">{donor.address}</p>
                      <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                        <span className="text-gray-500 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-700 border-opacity-50">
                          <svg
                            fill="#6b7280"
                            className="w-4 h-4 mr-1"
                            version="1.1"
                            id="Capa_1"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 162.978 162.978"
                          >
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g
                              id="SVGRepo_tracerCarrier"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                              <g>
                                <g>
                                  <path
                                    d="M162.978,101.101l-19.611-39.224l-19.611,39.224h13.209c-8.315,25.958-32.633,44.826-61.324,44.826
          c-35.529,0-64.438-28.908-64.438-64.438c0-35.529,28.909-64.438,64.438-64.438c27.376,0,50.764,17.19,60.077,41.325l6.44-12.882
          c-12.813-23.595-37.82-39.649-66.512-39.649C33.936,5.844,0,39.778,0,81.489c0,41.708,33.936,75.645,75.645,75.645
          c34.924,0,64.331-23.809,72.997-56.032H162.978z"
                                  ></path>
                                  <path
                                    d="M35.486,96.582h7.084l2.15-7.749h8.645l2.332,7.749h7.345l-9.362-30.192h-8.96L35.486,96.582z M47.494,77.32
          c0.493-1.749,0.941-4.034,1.39-5.823h0.088c0.449,1.789,0.988,4.036,1.527,5.823l1.882,6.413h-6.675L47.494,77.32z"
                                  ></path>
                                  <path
                                    d="M81.737,71.722c3.311,0,5.371,0.583,7.029,1.294l1.436-5.466c-1.479-0.715-4.482-1.48-8.377-1.48
          c-9.901,0-17.2,5.731-17.253,15.769c-0.042,4.434,1.48,8.372,4.26,10.978c2.778,2.688,6.763,4.076,12.277,4.076
          c3.98,0,7.975-0.985,10.075-1.701V79.289H79.943v5.331h4.665v6.313c-0.542,0.274-1.798,0.449-3.365,0.449
          c-5.604,0-9.497-3.677-9.497-9.904C71.746,74.944,76.042,71.722,81.737,71.722z"
                                  ></path>
                                  <polygon points="115.175,71.993 115.175,66.395 96.539,66.395 96.539,96.582 115.804,96.582 115.804,90.989 103.394,90.989 103.394,83.821 114.507,83.821 114.507,78.261 103.394,78.261 103.394,71.993"></polygon>
                                </g>
                              </g>
                            </g>
                          </svg>
                          {donor.age}
                        </span>
                        <span className="  text-gray-500 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-700 border-opacity-50">
                          <svg
                            fill="#6b7280"
                            className="w-4 h-4 mr-1"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 168.594 168.594"
                          >
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g
                              id="SVGRepo_tracerCarrier"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                              <path d="M84.297,0c-2.463,0-4.77,1.21-6.17,3.237C72.75,11.021,25.6,80.144,25.6,109.899c0.002,32.364,26.334,58.694,58.697,58.694c32.365,0,58.697-26.331,58.697-58.695c0-29.755-47.15-98.877-52.525-106.661C89.068,1.21,86.762,0,84.297,0z M84.297,153.594c-24.092,0-43.695-19.602-43.697-43.695c0-18.587,27.51-64.32,43.697-88.954c16.189,24.634,43.697,70.367,43.697,88.954C127.994,133.992,108.391,153.594,84.297,153.594z"></path>
                            </g>
                          </svg>
                          {donor.bloodGroup}
                        </span>
                        <span className="text-gray-500 inline-flex items-center leading-none text-sm  ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-4 h-4 mr-1  "
                            fill="#6b7280"
                            stroke="currentColor"
                            stroke-width="0"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            viewBox="0 0 24.00 24.00"
                          >
                            <path
                              d="M14.05 6C15.0268 6.19057 15.9244 6.66826 16.6281 7.37194C17.3318 8.07561 17.8095 8.97326 18 9.95M14.05 2C16.0793 2.22544 17.9716 3.13417 19.4163 4.57701C20.8609 6.01984 21.7721 7.91101 22 9.94M18.5 21C9.93959 21 3 14.0604 3 5.5C3 5.11378 3.01413 4.73086 3.04189 4.35173C3.07375 3.91662 3.08968 3.69907 3.2037 3.50103C3.29814 3.33701 3.4655 3.18146 3.63598 3.09925C3.84181 3 4.08188 3 4.56201 3H7.37932C7.78308 3 7.98496 3 8.15802 3.06645C8.31089 3.12515 8.44701 3.22049 8.55442 3.3441C8.67601 3.48403 8.745 3.67376 8.88299 4.05321L10.0491 7.26005C10.2096 7.70153 10.2899 7.92227 10.2763 8.1317C10.2643 8.31637 10.2012 8.49408 10.0942 8.64506C9.97286 8.81628 9.77145 8.93713 9.36863 9.17882L8 10C9.2019 12.6489 11.3501 14.7999 14 16L14.8212 14.6314C15.0629 14.2285 15.1837 14.0271 15.3549 13.9058C15.5059 13.7988 15.6836 13.7357 15.8683 13.7237C16.0777 13.7101 16.2985 13.7904 16.74 13.9509L19.9468 15.117C20.3262 15.255 20.516 15.324 20.6559 15.4456C20.7795 15.553 20.8749 15.6891 20.9335 15.842C21 16.015 21 16.2169 21 16.6207V19.438C21 19.9181 21 20.1582 20.9007 20.364C20.8185 20.5345 20.663 20.7019 20.499 20.7963C20.3009 20.9103 20.0834 20.9262 19.6483 20.9581C19.2691 20.9859 18.8862 21 18.5 21Z"
                              stroke="#6b7280"
                              stroke-width="0"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          {donor.phone}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default FindBlood;
