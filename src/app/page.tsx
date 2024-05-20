import React from "react";
import Script from 'next/script'
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <div>
      <Hero />
      <Script src="https://cdn.botpress.cloud/webchat/v2/inject.js" />
      <Script src="https://mediafiles.botpress.cloud/2f8d7521-9c5a-498e-b78d-79c034fbb577/webchat/v2/config.js" defer />
      <Footer/>
    </div>
  );
};

export default page;
