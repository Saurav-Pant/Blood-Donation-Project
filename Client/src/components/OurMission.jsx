import React from "react";

const OurMission = () => {
    
    const missionStyle = {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 300,
        fontSize: '18px',
        lineHeight: '21px',
        letterSpacing: '0.05em',
        color: '#3C3C3C',
      };
    
  return (
    <div>
      <h1 className="text-4xl font-bold mb-4 pl-12 pt-10">Our Mission</h1>
      <p className="text-lg pl-16 font-light" style={missionStyle}>
        Our mission is to fulfill the blood requirement in the country by
        connecting the blood donors with the blood recipients and to provide the blood donors a platform to donate blood and save
        lives.
      </p>
    </div>
  );
};

export default OurMission;
