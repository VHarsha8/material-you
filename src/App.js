import React, { useRef } from 'react';
import EpistemiconHomePage from './EpistemiconHomePage';
import Footer from './footer';
import CseTabs from './CseTabs';
import Epistemicon from './Epistemicon';
import About from './About';
import NavbarWithMarquee from './NavBar';

function App() {
  const cseTabsRef = useRef(null);

  // Function to perform the smooth scroll with a 1-second duration
  const scrollToEventSchedule = () => {
    const targetPosition = cseTabsRef.current.offsetTop;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1000; // 1 second in milliseconds
    let startTime = null;

    // Easing function for smooth scroll
    const easeInOutQuad = (time, start, change, duration) => {
      time /= duration / 2;
      if (time < 1) return (change / 2) * time * time + start;
      time--;
      return (-change / 2) * (time * (time - 2) - 1) + start;
    };

    // Animation function
    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    requestAnimationFrame(animation);
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
      <NavbarWithMarquee />

      {/* Main sections */}
      <EpistemiconHomePage onScrollToEventSchedule={scrollToEventSchedule} />
      <About />
      <Epistemicon />

      {/* Event Schedule Section */}
      <div ref={cseTabsRef}>
        <CseTabs />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
