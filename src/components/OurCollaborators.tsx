"use client"
import React from "react";
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import SwiperCore from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const OurCollaborators = () => {
  return (
    <>
      <div className="hidden sm:block">
        <h1 className="text-3xl lg:text-4xl font-bold inline-block w-full text-center pt-10 font-mono hover:text-red-300 transition-colors duration-300 ease-in-out">
          Our Collaborators
        </h1>

        <motion.div
          className="flex justify-center items-center h-[50vh] px-10"
          initial={{ opacity: 0, position: "relative", top: "-100px" }}
          animate={{ opacity: 1, position: "relative", top: "0px" }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          <div className="m-2 p-4 bg-white text-black shadow-md flex items-center justify-center w-[200px] h-[200px] hover:bg-red-50 rounded-sm collaborator-hover">
            <p className="text-center">NCC</p>
          </div>
          <div className="m-2 p-4 bg-white text-black shadow-md flex items-center justify-center w-[200px] h-[200px] hover:bg-red-50 rounded-sm collaborator-hover">
            <p className="text-center">NSS</p>
          </div>
          <div className="m-2 p-4 bg-white text-black shadow-md flex items-center justify-center w-[200px] h-[200px] hover:bg-red-50 rounded-sm collaborator-hover">
            <p className="text-center">YMCA</p>
          </div>
        </motion.div>

        <div>
          <h1 className="text-7xl font-bold flex justify-center items-center text-gray-300 hover:text-red-300 transition-colors duration-300 ease-in-out">
            ...
          </h1>
        </div>
      </div>

      {/* mobile view */}
      <div className="sm:hidden">
        <h1 className="text-3xl lg:text-4xl font-bold pt-10 mb-10 inline-block w-full text-center font-mono hover:text-red-300 transition-colors duration-300 ease-in-out">
          Our Collaborators
        </h1>

        <div className="flex items-center justify-center px-4">
          <Swiper
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            navigation={true}
            className="sample-slider"
          >
            <SwiperSlide>
              <div className="relative mx-auto w-3/4 h-64 p-4 bg-white text-black shadow-lg flex items-center justify-center hover:bg-red-50 rounded-md transition duration-300">
                NSS
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative mx-auto w-3/4 h-64 p-4 bg-white text-black shadow-lg flex items-center justify-center hover:bg-red-50 rounded-md transition duration-300">
                NCC
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative mx-auto w-3/4 h-64 p-4 bg-white text-black shadow-lg flex items-center justify-center hover:bg-red-50 rounded-md transition duration-300">
                YMCA
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div>
          <h1 className="text-7xl font-bold flex justify-center items-center text-gray-300 hover:text-red-300 transition-colors duration-300 ease-in-out">
            ...
          </h1>
        </div>
      </div>
    </>
  );
};

export default OurCollaborators;
