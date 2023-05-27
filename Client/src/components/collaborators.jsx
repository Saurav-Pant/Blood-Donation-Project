import React from "react";

const Collaborators = () => {
  return (
    <div className="">
      <h1 className="text-4xl font-bold pl-16 pt-10 font-mono">
        Our Collaborators
      </h1>

      <div class="flex justify-center items-center h-[50vh] px-10">
        <div class="m-2 p-4 bg-white text-black shadow-md flex items-center justify-center w-[200px] h-[200px] hover:bg-gray-100">
          <p class="text-center">NCC</p>
        </div>
        <div class="m-2 p-4 bg-white text-black shadow-md flex items-center justify-center w-[200px] h-[200px] hover:bg-gray-100">
          <p class="text-center">NSS</p>
        </div>
        <div class="m-2 p-4 bg-white text-black shadow-md flex items-center justify-center w-[200px] h-[200px] hover:bg-gray-100">
          <p class="text-center">YMCA</p>
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
