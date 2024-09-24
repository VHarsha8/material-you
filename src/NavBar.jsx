import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = ({ onScrollToEventSchedule }) => { // Receive the prop here
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative flex flex-col z-50 w-full transition-all duration-300">
      {/* Marquee section */}
      <div
        className={`w-full bg-darkgreybackground p-2 overflow-hidden flex transition-transform duration-300 ease-in-out ${
          isScrolled ? '-translate-y-full' : 'translate-y-0'
        }`}
      >
        <div className="text-md flex gap-20 font-poppins text-white animate-marquee whitespace-nowrap">
          <p>Registration Fee is 100/-</p>
          <p>Registration Fee is 100/-</p>
          <p>Registration Fee is 100/-</p>
          <p>Registration Fee is 100/-</p>
        </div>
      </div>

      {/* Navbar */}
      <nav
        className={`fixed w-full px-6 py-2 border border-b bg-pearl transition-transform duration-300 ease-in-out ${
          isScrolled ? 'top-0' : 'top-[40px]' // Move to top when scrolled
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-center text-2xl tracking-wider md:text-3xl font-AmericanCaptainMdEY">
            <img src="alietlogo.png" className="md:w-12 w-8" alt="Logo" />
          </div>

          {/* Hamburger Menu Icon */}
          <div className="md:hidden">
            <button className="focus:outline-none" onClick={toggleMenu}>
              <div className="relative w-8 h-8 flex gap-[9px] flex-col justify-center items-center">
                <span
                  className={`block w-8 h-[2px] bg-gray-800 transform transition-transform duration-300 ${
                    isOpen ? 'rotate-45 translate-y-1.5' : ''
                  }`}
                ></span>
                <span
                  className={`block w-8 h-[2px] bg-gray-800 transform transition-transform duration-300 ${
                    isOpen ? '-rotate-45 -translate-y-1.5' : ''
                  }`}
                ></span>
              </div>
            </button>
          </div>

          {/* Menu for larger screens */}
          <div className="items-center justify-center hidden gap-4 md:flex">
            <button
              className="flex items-center justify-center px-3 py-2 font-medium hover:text-white duration-200 delay-75 hover:bg-gray-700 rounded-lg font-poppins"
              onClick={onScrollToEventSchedule} // Use the passed function
            >
              Event Schedule
            </button>
            <a href='https://www.aliet.ac.in/' target='_blank' 
          rel='noopener noreferrer'> <button
            className="flex items-center justify-center px-3 py-2 font-medium text-white bg-darkgreybackground rounded-lg font-poppins">
            Know More
          </button></a>
            
          </div>
        </div>

        {/* Dropdown Menu for small screens */}
        <div
          className={`absolute top-[60px] left-0 w-full border bg-white p-6 z-10 flex flex-col space-y-4 items-center transform transition-transform duration-300 md:hidden ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <button
            className="flex items-center justify-center px-3 py-2 font-medium text-white bg-gray-500 rounded-lg font-poppins"
            onClick={onScrollToEventSchedule} // Use the passed function
          >
            Event Schedule
          </button>

        <a href='https://www.aliet.ac.in/' target='_blank' 
          rel='noopener noreferrer'> <button
            className="flex items-center justify-center px-3 py-2 font-medium text-white bg-darkgreybackground rounded-lg font-poppins">
            Know More
          </button></a> 
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
