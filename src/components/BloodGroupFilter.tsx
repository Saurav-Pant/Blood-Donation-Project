import React from "react";

const BloodGroupFilter: React.FC<{
    bloodGroupFilter: string;
    handleBloodGroupChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  }> = ({ bloodGroupFilter, handleBloodGroupChange }) => (
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
  );
  

export default BloodGroupFilter