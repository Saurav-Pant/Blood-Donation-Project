import React from "react";
import PropTypes from "prop-types";
import pencil from "../asset/pencil.svg";
import heartbeat from "../asset/heartbeat.svg";
import { motion } from "framer-motion";

const InfoCard = ({ infotext, infonumber }) => {
    return (
        <div className="h-[45vh] w-[25vw] my-0 p-0 relative flex items-center justify-center">
            <div
                className="absolute flex items-center justify-center lg:h-[13vmin] lg:w-[13vmin] md:h-[11vmin] md:w-[11vmin] h-[12vmin] w-[12vmin] md:-left-12 lg:-left-7 md:top-1/3 lg:top-28 top-1/3 -left-7 sm:text-xl md:text-2xl lg:text-4xl  transform translate-x-1/4 rounded-full"
                style={{ border: "5px solid ", textShadow: "0 0 2px black" }}
            >
                {infonumber}
            </div>
            <div
                className="h-[21vmax] w-[21vmax] md:h-[23vmax] md:w-[23vmax]   absolute flex flex-col top-1/4 items-center justify-center rounded-full overflow-hidden shadow-lg bg-white text-red-600"
                style={{ top: "40%" }}
            >
                <div className="md:h-[11vmin] md:w-[11vmin] h-[6vmin] w-[6vmin] overflow-hidden rounded-full">
                    <img
                        src={pencil}
                        alt=""
                        className="md:scale-75 scale-[0.8]"
                    />
                </div>
                <div className="w-[85%] break-normal inline-block p-2 text-center text-xs md:text-sm lg:text-base">
                    {infotext}
                </div>
            </div>
        </div>
    );
};

InfoCard.propTypes = {
    infotext: PropTypes.string.isRequired,
    infonumber: PropTypes.number.isRequired,
};

const GetBlood = () => {
    return (
        <div className="sm:mb-[50px] md:mb-[150px]  lg:mb-[200px]">
            <h1 className="text-4xl font-bold pl-16 pt-10 font-mono hover:text-red-300 transition-colors duration-300 ease-in-out">
                How to get Blood?
            </h1>
            <motion.div
                className="flex justify-center items-center px-10"
                initial={{ opacity: 0, position: "relative", top: "-50px" }}
                animate={{ opacity: 1, position: "relative", top: "0px" }}
                transition={{ duration: 1 }}
            >
                <motion.div
                    className="h-fit w-full md:mb-18 lg:mb-24 mb-6 flex flex-col items-center justify-center"
                    initial={{
                        opacity: 0,
                        position: "relative",
                        right: "-100px",
                    }}
                    animate={{ opacity: 1, position: "relative", right: "0px" }}
                    transition={{ duration: 1 }}
                >
                    <div className="grid grid-cols-3">
                        <div></div>
                        <div>
                            <InfoCard
                                infotext="Donate blood and save lives, your contribution can make a difference."
                                infonumber={1}
                            />
                        </div>
                        <div></div>
                    </div>
                    <div className="absolute top-[34vmax]  md:top-[28vmax]  lg:top-[30vmax]">
                        <img
                            src={heartbeat}
                            alt=""
                            className=" scale-[0.6] lg:scale-[1.1]"
                        />
                    </div>
                    <div className="grid grid-cols-3">
                        <div>
                            <InfoCard
                                infotext="Help those in need by donating blood, a selfless act of kindness"
                                infonumber={2}
                            />
                        </div>
                        <div>
                            <img
                                src={heartbeat}
                                alt=""
                                className=" scale-x-.1 md:scale-x-110 lg:scale-x-130"
                                style={{ opacity: "0" }}
                            />
                        </div>
                        <div className="flex justify-end">
                            <InfoCard
                                infotext="Need blood? Connect with blood banks or donors to get the support you require"
                                infonumber={3}
                            />
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default GetBlood;
