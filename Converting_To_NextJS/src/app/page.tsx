import React from "react";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const page = () => {
  return (
    <div>
      <Navbar/>
      <Hero />
      <Footer/>
    </div>
  );
};

export default page;
