import React from "react";
import pencil from "../../asset/pencil.svg";
import heartbeat from "../../asset/heartbeat.svg";
import Image from "next/image";

interface InfoCardProps {
  infotext: string;
  infonumber: number;
}

const InfoCard: React.FC<InfoCardProps> = ({ infotext, infonumber }) => {
  return (
    <div className="h-[45vh] w-[90vw] sm:w-[70vw] md:w-[50vw] lg:w-[25vw] my-0 p-0 relative flex items-center justify-center">
      <div
        className="absolute flex items-center justify-center h-[12vmin] w-[12vmin] sm:h-[11vmin] sm:w-[11vmin] md:h-[11vmin] md:w-[11vmin] lg:h-[13vmin] lg:w-[13vmin] -left-7 sm:-left-10 md:-left-12 lg:-left-7 top-1/3 md:top-1/3 lg:top-28 transform translate-x-1/4 rounded-full"
        style={{ border: "5px solid", textShadow: "0 0 2px black" }}
      >
        {infonumber}
      </div>
      <div
        className="absolute flex flex-col items-center justify-center h-[25vmax] w-[25vmax] sm:h-[23vmax] sm:w-[23vmax] md:h-[25vmax] md:w-[25vmax] top-[40%] rounded-full overflow-hidden shadow-lg bg-white text-red-600"
      >
        <div className="h-[6vmin] w-[6vmin] md:h-[11vmin] md:w-[11vmin] overflow-hidden rounded-full">
          <Image src={pencil} alt="" className="scale-[0.8] md:scale-75" />
        </div>
        <div className="w-[85%] p-2 text-center text-xs sm:text-xs md:text-base lg:text-base xl:text-lg">
          {infotext}
        </div>
      </div>
    </div>
  );
};

const GetBlood = () => {
  return (
    <div className="sm:mb-[50px] md:mb-[150px] lg:mb-[200px]">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center pt-10 text-red-800 transition-colors duration-300 ease-in-out">
        How to get Blood?
      </h1>
      <div
        className="flex justify-center items-center px-4 sm:px-10"
      >
        <div
          className="h-fit w-full mb-6 flex flex-col items-center justify-center relative"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="hidden md:block"></div>
            <div>
              <InfoCard
                infotext="Donate blood and save lives, your contribution can make a difference."
                infonumber={1}
              />
            </div>
            <div className="hidden md:block"></div>
          </div>
          <div className="absolute top-[34vmax] md:top-[28vmax] lg:top-[30vmax]">
            <Image
              src={heartbeat}
              alt=""
              className="scale-[0.6] lg:scale-[1.1] hidden md:block"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <InfoCard
                infotext="Help those in need by donating blood, a selfless act of kindness"
                infonumber={2}
              />
            </div>
            <div className="hidden md:flex justify-center items-center">
              <Image
                src={heartbeat}
                alt=""
                className="scale-x-[0.1] md:scale-x-110 lg:scale-x-130 opacity-0"
              />
            </div>
            <div className="flex justify-end">
              <InfoCard
                infotext="Need blood? Connect with blood banks or donors to get the support you require"
                infonumber={3}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetBlood;
