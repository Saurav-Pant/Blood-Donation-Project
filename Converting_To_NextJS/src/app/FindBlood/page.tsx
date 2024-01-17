"use client"
import React, { useState } from "react";
import { BiFemale } from "react-icons/bi";
import { FaCircleUser } from "react-icons/fa6";



const FindBlood = () => {
    const [bloodGroup, setBloodGroup] = useState("");
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleQuery = async () => {
        try {
            setLoading(true);

            const response = await fetch("http://localhost:3000/api/DonorForm");
            const data = await response.json();
            console.log(data);

            const filteredResults = data.filter((donor: any) => donor.bloodGroup === bloodGroup);

            setTimeout(() => {
                setResults(filteredResults);
                setLoading(false);
            }, 2000);
        } catch (error) {
            console.error("Error fetching data:", error);
            setLoading(false);
        }
    };

    const handleBloodGroupChange = (e: any) => {
        setBloodGroup(e.target.value);
    };

    return (
        <div className="flex justify-center px-4">
            <div className="md:w-1/2 pr-4 lg:pr-8 xl:pr-16">
                <h1 className="mt-8 text-4xl text-center">Recipient Details</h1>
                <form className="mx-auto max-w-sm">
                    <div className="mt-12">
                        <label htmlFor="bloodGroup" className="font-semibold text-gray-700">
                            Blood Group
                        </label>
                        <select
                            name="bloodGroup"
                            id="bloodGroup"
                            className="hover:border-red-800 w-full mt-1 bg-white border-2 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
                            value={bloodGroup}
                            onChange={handleBloodGroupChange}
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
                    </div>

                    <button
                        type="button"
                        onClick={handleQuery}
                        className="w-full sm:w-2/3 mt-4 mx-auto sm:block p-2 bg-black text-white rounded-lg shadow-md hover:bg-gray-800 transition duration-200 ease-in"
                    >
                        Proceed &gt;
                    </button>
                </form>
            </div>

            <div className="md:w-1/2">
                {loading ? (
                    <div className="text-center mt-8">
                        <h2 className="text-2xl font-semibold">Loading...</h2>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 gap-4 mx-auto w-96 mt-8">
                        {results.map((result: any) => (
                            <div key={result.id} className="relative bg-white shadow-lg rounded-lg p-4 text-center mb-4">
                                {result.gender.toLowerCase() === "male" ? (
                                    <FaCircleUser className="absolute top-0 right-0 mt-2 mr-2 w-10 h-10 rounded-full" />
                                ) : (
                                    <BiFemale className="absolute top-0 right-0 mt-2 mr-2 w-10 h-10 rounded-full" />
                                )}
                                <FaCircleUser className="absolute top-0 right-0 mt-2 mr-2 w-10 h-10 rounded-full" />
                                <h2 className="text-2xl font-semibold text-gray-800">{`${result.firstName} ${result.lastName}`}</h2>
                                <p className="text-gray-500 mb-2">{result.address}</p>
                                <div className="flex justify-between items-center border-t pt-2">
                                    <div className="text-yellow-400">
                                        Blood Group: {result.bloodGroup}
                                    </div>
                                    <div className="text-gray-500">
                                        Age: {result.age}
                                    </div>
                                    <div className="text-gray-500">
                                        Phone: {result.phone}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>


                )}
            </div>
        </div>
    );
};

export default FindBlood;

