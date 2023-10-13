import React, { useState, useContext, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";
import axios from "axios";
import Loading from "../components/Loading";

const FindBlood = () => {
  const { theme } = useContext(ThemeContext);
  const [loading, setLoading] = useState(true);
  const [Donors, setDonors] = useState([]);
  const [formData, setFormData] = useState({
    bloodGroup: "",
    state: "",
    city: "",
  });
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/donors/all", {
        withCredentials: true,
      });
      setDonors(response.data);
      setLoading(false);
      // console.log(response.data);
      console.log(Donors);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="md:flex justify-center px-4">
      <div className="mx-auto w-96 mt-8">
        {loading ? (
          <Loading />
        ) : (
          <div className="grid grid-cols-1 gap-4">
            {Donors.map((donor, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white p-4 text-center rounded-lg shadow-lg relative overflow-hidden"
              >
                <div className="mb-2 text-xl font-semibold">
                  {`${donor.firstName} ${donor.lastName}`}
                </div>
                <div className="mb-2 text-gray-300">{donor.gender}</div>
                <div className="flex items-center justify-between">
                  <div className="text-yellow-400">
                    Blood Group: {donor.bloodGroup}
                  </div>
                  <div className="text-gray-300">Age: {donor.age}</div>
                </div>
                <button className="bg-black w-full rounded-md p-2 mt-5">
                  {donor.phone}
                </button>
              </div>
            ))}
          </div>
        )}
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
              onChange={handleInput}
              className=" hover:border-red-800 w-full mt-1 bg-white border-2"
              style={{
                color: theme.color,
                backgroundColor: theme.background,
              }}
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
            className="w-full sm:w-2/3 mt-4  mx-auto sm:block p-2 bg-black text-white rounded w-auto"
            style={{
              color: theme.button.buttonTextColor,
              backgroundColor: theme.button.buttonBgColor,
            }}
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
                value={setFormData.state}
                name="state"
                id="state"
                placeholder="State"
                onChange={handleInput}
                className="hover:border-red-800 border-2 w-full mt-1 bg-white"
                style={{
                  color: theme.color,
                  backgroundColor: theme.background,
                }}
              >
                {/* <option value=""> select -</option> */}
              </input>
            </div>
            <div className="">
              <label htmlFor="city" className="">
                City
              </label>
              <input
                type="text"
                value={setFormData.city}
                name="city"
                id="city"
                placeholder="City"
                onChange={handleInput}
                className=" hover:border-red-800 border-2 w-full mt-1 bg-white"
                style={{
                  color: theme.color,
                  backgroundColor: theme.background,
                }}
              ></input>
            </div>
          </div>
          <button
            type="submit"
            className=" w-full sm:w-2/3 mt-4 mx-auto sm:block p-2 bg-black text-white rounded"
            style={{
              color: theme.button.buttonTextColor,
              backgroundColor: theme.button.buttonBgColor,
            }}
          >
            Proceed &gt;
          </button>
        </form>
      </div>
    </div>
  );
};

export default FindBlood;
