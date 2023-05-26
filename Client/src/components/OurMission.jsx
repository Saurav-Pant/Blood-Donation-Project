import React from "react";

const OurMission = () => {
  const missionStyle = {
    fontWeight: 300,
    fontSize: "18px",
    lineHeight: "21px",
    letterSpacing: "0.05em",
  };

  return (
    <div className="h-[25vh] bg-gray-200 rounded-xl mx-3">
      <h1 className="text-4xl font-bold mb-4 pl-16 pt-10 ">Our Mission</h1>
      <p className="text-lg px-12  font-light font-sans" style={missionStyle}>
        Our mission is to address the critical need for blood supply in the
        country by connecting donors and recipients. We provide a seamless
        platform for blood donations, bridging the gap in the supply chain. With
        a reliable system, we empower individuals to make a significant impact
        on society. Through compassion and unity, we inspire more donors, saving
        lives one donation at a time.
      </p>
    </div>
  );
};

export default OurMission;
