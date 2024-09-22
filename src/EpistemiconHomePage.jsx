import React from 'react';
import Timer from './Timer';
import { motion } from 'framer-motion';

function EpistemiconHomePage() {

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
            },
        },
    };

    const letterVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                damping: 20,
                stiffness: 100,
            },
        },
    };

    const text = "EPISTEMICON - 2K24";

    return (
        <div className="flex relative overflow-hidden flex-col items-center justify-center w-full px-8 md:gap-2 gap-4 mx-auto h-screen">
            <div className='flex justify-center mb-3 items-center'>
                <Timer />
             </div>
            <div className="absolute -z-50 h-full opacity-50 w-full bg-white bg-[linear-gradient(to_right,#E5E4E2_1px,transparent_1px),linear-gradient(to_bottom,#E5E4E2_1px,transparent_1px)] bg-[size:24px_24px]"></div>
              
            

            <div className="flex items-center justify-center">
                <motion.h1
                    className="font-medium text-[35px] md:text-[70px] leading-tight text-center font-AmericanCaptainPatrius"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    {text.split("").map((char, index) => (
                        <motion.span key={index} variants={letterVariants}>
                            {char === " " ? "\u00A0" : char}
                        </motion.span>
                    ))}
                </motion.h1>
            </div>

            <div className="flex flex-col items-center justify-center -mt-3">
                <h1 className="text-sm text-center text-gray-500 md:text-lg font-poppins">
                    Organized by Andhra Loyola Institute of Engineering and Technology.
                </h1>
            </div>

            <a href='https://maps.app.goo.gl/J6xyoMU2tPoFzV7y7' target='_blank' rel="noreferrer"><div className='md:hidden   flex flex-col justify-center mt-4 items-center pl-11 pr-8 py-2 bg-darkgreybackground'>
               <h1 className='text-md font-poppins  text-white'>28 SEPT 2024</h1>
               
               <div className='flex  justify-center -mt-1 items-center'>
               <h1 className='text-sm font-poppins   text-wrap text-white '>ALIET, Vijayawada</h1>
                <img src='arrowright.svg'alt ="Arrow"className='w-7  -rotate-45'/>
               </div>
          </div></a> 
          {/* Large screen reference  */}
           <a href='https://maps.app.goo.gl/J6xyoMU2tPoFzV7y7' target='_blank'rel="noreferrer"><div className='hidden  md:flex xs:flex  justify-center mt-4 items-center pl-11 pr-8 py-2 bg-darkgreybackground'>
               <h1 className='text-md font-poppins  text-white'>28 SEPT 2024 </h1>
               <h1 className='text-md font-poppins px-1 text-white'> |</h1>

               
               <div className='flex  justify-center items-center'>
               <h1 className='text-sm font-poppins   text-wrap text-white'> ALIET, Vijayawada</h1>
                <img src='arrowright.svg' alt="arrow"className='w-7  -rotate-45'/>
               </div>
          </div></a> 

            <div className="flex md:mt-4 gap-8 cursor-pointer">
                <h1 className="text-xl font-poppins hover:bg-black hover:text-white duration-200 font-medium py-1 px-4 border-2 border-black">
                    Event Schedule
                </h1>
            </div>
        </div>
    );
}

export default EpistemiconHomePage;
