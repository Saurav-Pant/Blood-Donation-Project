import React from "react";

const Collaborators = () => {
  return (
    <div className="">
      <h1 className="text-4xl font-bold pl-16 pt-10 font-mono">
        Our Collaborators
      </h1>

      <div className="flex justify-center items-center h-[50vh] px-10">
        <div className="m-2 p-4 bg-white shadow-md flex items-center justify-center w-[200px] h-[200px] hover:bg-gray-50">
          <p className="text-center">NCC</p>
        </div>
        <div className="m-2 p-4 bg-white shadow-md flex items-center justify-center w-[200px] h-[200px] hover:bg-gray-50">
          <p className="text-center">NSS</p>
        </div>
        <div className="m-2 p-4 bg-white shadow-md flex items-center justify-center w-[200px] h-[200px] hover:bg-gray-50">
          <p className="text-center">YMCA</p>
        </div>
      </div>

      <div>
        <h1 className="text-7xl font-bold flex justify-center items-center  ">
          ...
        </h1>
      </div>
    </div>
  );
};

export default Collaborators;
