import React, { useState, useEffect } from "react";
import axios from "axios";

const Dashboard = () => {
  const [donorData, setDonorData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/donors/id", {
        withCredentials: true,
      });
      setDonorData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-[80vh]">
      <h1
        className="text-4xl font-bold mb-8 text-red-400 hover:text-red-600 
      transition-colors duration-300 ease-out"
      >
        Dashboard
      </h1>
      {donorData ? (
        <div className="grid grid-cols-2 gap-8 w-96 bg-gray-100 rounded-lg shadow-lg p-6">
          {donorData.map((donor) => (
            <div key={donor._id} className="flex flex-col border-b pb-4">
              <div className="flex items-center mb-2">
                <span className="text-gray-700 text-lg font-semibold mr-2">
                  Name:
                </span>
                <p className="text-gray-800 capitalize">
                  {donor.firstName} {donor.lastName}
                </p>
              </div>
              <div className="flex items-center mb-2">
                <span className="text-gray-700 text-lg font-semibold mr-2">
                  Blood Group:
                </span>
                <p className="text-gray-800">{donor.bloodGroup}</p>
              </div>
              <div className="flex items-center mb-2">
                <span className="text-gray-700 text-lg font-semibold mr-2">
                  Age:
                </span>
                <p className="text-gray-800">{donor.age}</p>
              </div>
              <div className="flex items-center mb-2">
                <span className="text-gray-700 text-lg font-semibold mr-2">
                  Phone Number:
                </span>
                <p className="text-gray-800">{donor.phone}</p>
              </div>
              <div className="flex items-center">
                <span className="text-gray-700 text-lg font-semibold mr-2">
                  Address:
                </span>
                <p className="text-gray-800">{donor.address}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Dashboard;
