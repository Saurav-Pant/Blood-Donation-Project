"use client";

import React, { useState, useEffect } from "react";
import DonorCard from "@/components/DonorCard";
import  BloodGroupFilter  from "@/components/BloodGroupFilter";

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
    setFilteredDonors(
      bloodGroupFilter === ""
        ? donors
        : donors.filter((donor) => donor.bloodGroup === bloodGroupFilter)
    );
  }, [bloodGroupFilter, donors]);

  const handleBloodGroupChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setBloodGroupFilter(e.target.value);
  };

  return (
    <div className="mb-10 overflow-x-hidden mx-5">
      <div className="md:w-full lg:w-1/2 pr-4 lg:pr-8 xl:pr-16 mb-4 md:mb-0">
        <h1 className="mt-8 text-4xl text-center">Donor's Information</h1>
        <BloodGroupFilter
          bloodGroupFilter={bloodGroupFilter}
          handleBloodGroupChange={handleBloodGroupChange}
        />
      </div>

      <div className="lg:wd-1/2">
        {loading ? (
          <div className="text-center mt-8">
            <h2 className="text-2xl font-semibold">Loading...</h2>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 mt-8 sm:w-full lg:grid-cols-2 xl:grid-cols-3">
            {filteredDonors.map((donor) => (
              <DonorCard key={donor.id} donor={donor} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FindBlood;
