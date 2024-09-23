function Footer(){
      return(
          <div className="bg-darkgreybackground h-auto w-full p-10 md:px-16   flex flex-col  ">
  
              <div className="container  mx-auto flex flex-col ">
                  <img src="alietlogo.png"  alt="alto"className="w-16"/>
              <h1 className="font-Vogue  text-white text-3xl text-left md:text-4xl font-medium py-6 md:pt-5">Epistemicon - 2K24</h1>
              <div className="flex md:flex-row   flex-col justify-between md:items-center ">
                  <div className="flex  gap-4  md:gap-10">
                      <div className="flex  md:w-auto md:h-auto w-1/2 flex-col  ">
                      <h1 className="font-poppins  text-base md:text-md text-white"> About</h1>
                      <h1 className="font-poppins  text-gray-400 text-sm md:text-md"> Forum</h1>
                     <a href="https://www.aliet.ac.in/" rel="noreferrer" target="_blank"> <h1 className="font-poppins  text-gray-400 text-sm md:text-md"> About ALIET</h1></a>
  
                      </div>
                      <div className="flex md:w-auto md:h-auto w-1/2 flex-col ">
                      <h1 className="font-poppins  text-base md:text-md text-white"> Contact</h1>
                      <h1 className="font-poppins  text-gray-400 text-sm md:text-md"> e-mail</h1>
                      <h1 className="font-poppins  text-gray-400 text-sm md:text-md"> Developers</h1>
  
                      </div>
                  </div>
                  <div className="flex py-6">
                  <h1 className="font-poppins md:flex hidden md:text-md text-sm  text-left md:text-right text-white"> GM55+CCQ, ITI Rd, <br /> Beside Ramesh Hospital,   Jayaprakash Nagar, <br /> Vijayawada,  Andhra Pradesh 520008.</h1>
                  <h1 className="font-poppins md:text-md text-sm flex md:hidden  text-left md:text-right text-white"> GM55+CCQ, ITI Rd, <br /> Beside Ramesh Hospital,   Jayaprakash Nagar,   Vijayawada,  Andhra Pradesh 520008.</h1>
                  </div>
              </div>
              <div className=" flex md:justify-end md:items-end justify-start items-start">
              <h1 className="font-poppins text-gray-500 md:text-left text-right  ">Developed by ALIET © </h1>
  
              </div>
              </div>
              
  
              
  
          </div>
      );
  }
  export default Footer;