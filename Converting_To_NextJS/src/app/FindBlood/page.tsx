import React from "react";

const FindBlood = () => {
    return (
        <div className="md:flex justify-center px-4">
            <div className="mx-auto w-96 mt-8">
                <div className="grid grid-cols-1 gap-4">

                    <div
                        className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white p-4 text-center rounded-lg shadow-lg relative overflow-hidden"
                    >
                        Name
                        <div className="mb-2 text-xl font-semibold">
                        </div>
                        <div className="mb-2 text-gray-300">email</div>
                        <div className="flex items-center justify-between">
                            <div className="text-yellow-400">
                                Blood Group:
                            </div>
                            <div className="text-gray-300">Age: </div>
                        </div>
                        <button className="bg-black w-full rounded-md p-2 mt-5">
                            Check
                        </button>
                    </div>
                </div>
            </div>

            <div className="md:pr-4 lg:pr-8 xl:pr-16 md:w-1/3">
                <h1 className="mt-8 text-4xl text-center ">Recipient Details</h1>

                <form className="mx-auto max-w-sm">
                    <div className="mt-12 ">
                        <label htmlFor="bloodGroup" className="">
                            Blood Group
                        </label>
                        <select
                            name="bloodGroup"
                            id="bloodGroup"
                            className=" hover:border-red-800 w-full mt-1 bg-white border-2"
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
                        className="w-full sm:w-2/3 mt-4  mx-auto sm:block p-2 bg-black text-white rounded"
                    >
                        Current Location
                    </button>

                    <p className="text-center ml-[210px] mt-4">OR</p>

                    <div className=" flex flex-col  my-12">
                        <div className=" mb-8">
                            <label htmlFor="state" className="">
                                State
                            </label>
                            <input
                                type="text"
                                name="state"
                                id="state"
                                placeholder="State"
                                className="hover:border-red-800 border-2 w-full mt-1 bg-white"
                            >
                            </input>
                        </div>
                        <div className="">
                            <label htmlFor="city" className="">
                                City
                            </label>
                            <input
                                type="text"
                                name="city"
                                id="city"
                                placeholder="City"
                                className=" hover:border-red-800 border-2 w-full mt-1 bg-white"
                            ></input>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className=" w-full sm:w-2/3 mt-4 mx-auto sm:block p-2 bg-black text-white rounded"

                    >
                        Proceed &gt;
                    </button>
                </form>
            </div>
        </div>
    );
};

export default FindBlood;
