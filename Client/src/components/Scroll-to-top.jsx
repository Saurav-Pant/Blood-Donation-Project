import React, { useState, useEffect } from 'react';
import { FaArrowUp } from "react-icons/fa";
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      className={`fixed right-4 bottom-4 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } transition-opacity duration-300 ease-in-out bg-red-500 hover:bg-red-600 text-white p-4 rounded-full shadow-lg`}
      onClick={scrollToTop}
    >
        
      <FaArrowUp/>
    </button>
  );
};

export default ScrollToTopButton;
