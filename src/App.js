import React from 'react';
import EpistemiconHomePage from './EpistemiconHomePage';
import Footer from './footer';
import CseTabs from './CseTabs';
import Navbar from './NavBar';
import Epistemicon from './Epistemicon';
import About from './About';





function App() {
  
  return (
    

    <div className='relative flex flex-col'>

    <div className='fixed z-20 m md:w-12 bottom-10 right-6 md:right-12'>
    <a href="https://chat.whatsapp.com/Iw22bVdtbXs3iHtU9ppMTg" target='_blank'> <img src='whatsapp.svg' className='w-12 rounded-full'></img>
  </a>
    </div>

    
    <Navbar />
    <EpistemiconHomePage />
    <About />
      
         <Epistemicon />
          
          <CseTabs />
       
         <Footer />
    </div>
  );
}

export default App;
