import Image from "next/image";
import React from "react";

function DonorCard({
    name = "XYZ",
    phone = 9999999999,
    age = 20,
    gender = "Male",
    address = "Bakers Street ",
    city = "Mumbai",
    pincode = 400002,
    bloodGroup = "A+",
}: any) {
    {
    }
    return (
        <div className="rounded-xl border-8 border-red-800 w-96 h-[350px] transition duration-300 hover:scale-[1.025] cursor-pointer m-1">
            <div className="h-3/5 flex flex-col rounded bg-white p-2">
                <div className="w-full flex flex-row">
                    <Image
                        src={`/blood.svg`}
                        width={90}
                        height={90}
                        alt="blood-drom"
                    />
                    <h3 className="text-[50px] font-bold text-red-700">
                        {bloodGroup}
                    </h3>
                </div>
                <div className=" px-4 w-full text-black">
                    <p className="text-sm my-1">
                        <strong>Address: </strong>
                        {address}
                    </p>
                    <p className="">
                        <strong>City: </strong>
                        {city}
                    </p>
                    <p className="mb-1">
                        <strong>Pincode: </strong> {pincode}
                    </p>
                </div>
            </div>
            <div className="bg-red-800 h-2/5 m-0 px-4 py-3">
                <p>
                    <strong>Name:</strong> {name}
                </p>
                <p>
                    <strong>Phone:</strong> {phone}
                </p>
                <p>
                    <strong>Age:</strong> {age}
                </p>
                <p>
                    <strong>Gender:</strong> {gender}
                </p>
            </div>
        </div>
    );
}

export default DonorCard;
