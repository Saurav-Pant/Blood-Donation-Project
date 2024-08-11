"use client"
import React from "react";
import Script from 'next/script'
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { usePathname } from 'next/navigation';

const Page = () => {
  const pathname = usePathname();
  const isNotFindBloodPage = pathname !== '/FindBlood';

  return (
    <div>
      <Hero />
      {isNotFindBloodPage && (
        <>
          <Script src="https://cdn.botpress.cloud/webchat/v2/inject.js" />
          <Script src="https://mediafiles.botpress.cloud/2f8d7521-9c5a-498e-b78d-79c034fbb577/webchat/v2/config.js" defer />
        </>
      )}
      <Footer />
    </div>
  );
};

export default Page;
