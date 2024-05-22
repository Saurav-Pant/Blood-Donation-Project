"use client";

import React, { useState, useEffect } from "react";
import DonorCard from "@/components/DonorCard";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
  const [loading, setLoading] = useState(true);
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
    if (bloodGroupFilter === "" || bloodGroupFilter === "all") {
      setFilteredDonors(donors);
    } else {
      setFilteredDonors(
        donors.filter((donor) => donor.bloodGroup === bloodGroupFilter)
      );
    }
  }, [bloodGroupFilter, donors]);

  const handleBloodGroupChange = (value: string) => {
    setBloodGroupFilter(value);
  };

  return (
    <div>
      {loading ? (
        <div className="loader">
          <div className="spinner"></div>
          &nbsp; Loading...
        </div>
      ) : (
        <div className="mb-10">
          <div className="md:w-full lg:w-1/2 pr-4 lg:pr-8 px-6 mx-4 xl:pr-16 mb-4 md:mb-0">
            <h1 className="mt-8 text-4xl">Recipient Details</h1>
            <div className="mt-12">
              <div className="">
                <label
                  htmlFor="bloodGroup"
                  className="font-semibold text-gray-400"
                >
                  Filter by Blood Group
                </label>
                {/* Select */}
                <div className="my-2">
                  <Select
                    name="bloodGroup"
                    value={bloodGroupFilter}
                    onValueChange={handleBloodGroupChange}
                  >
                    <SelectTrigger className="w-[380px]">
                      <SelectValue placeholder="Select Blood Group" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="all"> All </SelectItem>
                        <SelectItem value="A+"> A + </SelectItem>
                        <SelectItem value="A-"> A - </SelectItem>
                        <SelectItem value="B+">B +</SelectItem>
                        <SelectItem value="B-"> B -</SelectItem>
                        <SelectItem value="AB+"> AB+ </SelectItem>
                        <SelectItem value="AB-"> AB- </SelectItem>
                        <SelectItem value="O+"> O + </SelectItem>
                        <SelectItem value="O-"> O - </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:wd-1/2 mx-auto">
            <div className="grid grid-cols-1 gap-4 mt-5 sm:w-full lg:grid-cols-2 xl:grid-cols-3 place-items-center">
              {filteredDonors.map((donor) => (
                <DonorCard
                  key={donor.id}
                  name={donor.firstName + " " + donor.lastName}
                  age={donor.age}
                  phone={donor.phone}
                  address={donor.address}
                  bloodGroup={donor.bloodGroup}
                  // city={donor.city}
                  // pincode={donor.pincode}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FindBlood;
