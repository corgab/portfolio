'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = ({ alignment, children }) => {
  return (
    <div className='border-b-2 border-primary-100'>
      <div
        className={`flex justify-center items-center font-bold text-2xl md:text-5xl lg:text-7xl text-white py-7 ${alignment}`}
      >
        {children}
      </div>
    </div>
  );
};

const AboutContainer = () => {
  const scrollTrigger = {
    trigger: '.about-container',
    start: 'top center',
    end: 'bottom top',
    scrub: 2,
    // markers: true,
  };

  useGSAP(() => {
    gsap.utils.toArray('.left').forEach((el) => {
      gsap.to(el, {
        x: '50%',
        ease: 'none',
        scrollTrigger,
      });
    });

    gsap.utils.toArray('.right').forEach((el) => {
      gsap.to(el, {
        x: '-50%',
        ease: 'none',
        scrollTrigger,
      });
    });
  }, []);

  return (
    <div
      className='about-container bg-primary-200 overflow-x-hidden'
      id='about'
    >
      <AboutSection alignment='right'>
        <h2>Frontend</h2>
        <div className='w-10 lg:w-28 h-1 mx-3 bg-white'></div>
        <h2>React & Vue</h2>
      </AboutSection>
      <AboutSection alignment='left'>
        <h2>Backend</h2>
        <div className='w-10 lg:w-28 h-1 mx-3 bg-white'></div>
        <h2>Laravel</h2>
      </AboutSection>
      <AboutSection alignment='right'>
        <h2>CSS</h2>
        <div className='w-10 lg:w-28 h-1 mx-3 bg-white'></div>
        <h2>Tailwind & Bootstrap</h2>
      </AboutSection>
    </div>
  );
};

export default AboutContainer;
