import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const OurMission = () => {
  const { theme } = useContext(ThemeContext);

  const missionStyle = {
    fontWeight: 300,
    fontSize: "18px",
    lineHeight: "21px",
    letterSpacing: "0.05em",
  };

  const divStyle = {
    borderRadius: "3xl",
    boxShadow: "xl",
    background: theme.mode === "light" ? "#F7FAFC" : "#374151",
  };

  return (
    <div
      className="sm:h-[45vh] md:h-[45vh] lg:h-[30vh] pt-3"
      style={{
        borderRadius: divStyle.borderRadius,
        boxShadow: divStyle.boxShadow,
        background: divStyle.background,
      }}
    >
      <h1 className="text-4xl font-bold pl-16 pt-4 font-mono">Our Mission</h1>
      <p
        className="text-lg px-12 font-light font-sans py-4 text-justify"
        style={missionStyle}
      >
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
