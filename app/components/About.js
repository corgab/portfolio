'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = ({ alignment, children }) => {
  return (
    <div className='border-b-2 border-primary-100'>
      <div
        className={`flex justify-center items-center font-bold text-2xl md:text-5xl	 lg:text-7xl text-white py-7 ${alignment}`}
      >
        {children}
      </div>
    </div>
  );
};

const AbountContainer = () => {
  useGSAP(() => {
    gsap.to('.left', {
      x: '50%',
      ease: 'none',
      scrollTrigger: {
        trigger: '.left',
        top: 'center bottom',
        end: 'center start',
        scrub: 1,
        // markers: true,
      },
    });
    gsap.to('.right', {
      x: '-50%',
      ease: 'none',
      scrollTrigger: {
        trigger: '.left',
        top: 'center bottom',
        end: 'center start',
        scrub: 1,
        // markers: true,
      },
    });
  }, []);
  return (
    <div className='bg-primary-200 overflow-x-hidden'>
      <AboutSection alignment='right'>
        <h2>Frontend</h2>
        <div className='w-10 lg:w-28 h-1 mx-3 bg-white'></div>
        <h2>React & Vue</h2>
      </AboutSection>
      <AboutSection alignment='left'>
        <h2>Backend </h2>
        <div className='w-10 lg:w-28 h-1 mx-3 bg-white'></div>
        <h2>API Design</h2>
      </AboutSection>
      <AboutSection alignment='right'>
        <h2>Tailwind CSS</h2>
        <div className='w-10 lg:w-28 h-1 mx-3 bg-white'></div>
        <h2>Bootstrap</h2>
      </AboutSection>
    </div>
  );
};

export default AbountContainer;
