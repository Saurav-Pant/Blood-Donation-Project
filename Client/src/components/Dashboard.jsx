import React, { useState, useEffect } from 'react';

const Dashboard = () => {
  const [donorData, setDonorData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8080/api/donors')
      .then(response => response.json())
      .then(data => {
        setDonorData(data);
        console.log(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-[80vh] ">
      <h1 className="text-4xl font-bold mb-8 text-white">Dashboard</h1>
      <div className="grid grid-cols-2 gap-4 w-96 bg-white rounded-lg shadow-lg p-6 bg-gradient-to-r from-red-500 to-red-700">
        {/* Render donorData values */}
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
          <p className="text-gray-800">{donorData?.name}</p>
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">Blood Group</label>
          <p className="text-gray-800">{donorData?.bloodGroup}</p>
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">Age</label>
          <p className="text-gray-800">{donorData?.age}</p>
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">Phone Number</label>
          <p className="text-gray-800">{donorData?.phoneNumber}</p>
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">Address</label>
          <p className="text-gray-800">{donorData?.address}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
