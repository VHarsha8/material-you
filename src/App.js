import React, { useRef } from 'react';
import EpistemiconHomePage from './EpistemiconHomePage';
import Footer from './footer';
import CseTabs from './CseTabs';
import Epistemicon from './Epistemicon';
import About from './About';
import NavbarWithMarquee from './NavBar';

function App() {
  // No need for a separate ref for the CseTabs, we'll scroll to its ID directly

  // Scroll to "Event Schedule" section
  const scrollToEventSchedule = () => {
    const eventSection = document.getElementById('event-schedule');
    if (eventSection) {
      eventSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='relative flex flex-col'>
      {/* WhatsApp floating button */}
      <div className='fixed z-20 bottom-10 right-6 md:right-12'>
        <a 
          href="https://chat.whatsapp.com/Iw22bVdtbXs3iHtU9ppMTg" 
          target='_blank' 
          rel='noopener noreferrer'
        > 
          <img 
            src='whatsapp.svg' 
            alt='WhatsApp link' 
            className='w-12 rounded-full'
          />
        </a>
      </div>

      {/* Navbar with Marquee */}
      <NavbarWithMarquee onScrollToEventSchedule={scrollToEventSchedule} />

      {/* Main sections */}
      <EpistemiconHomePage onScrollToEventSchedule={scrollToEventSchedule} />
      <About onScrollToEventSchedule={scrollToEventSchedule} />
      <CseTabs /> {/* This should be the last section with the ID */}

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
