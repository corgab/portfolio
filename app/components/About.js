'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = ({ alignment, children }) => {
  return (
    <div className="border-b-2 border-primary-100">
      <div
        className={`flex justify-center items-center font-bold text-7xl text-white py-7 ${alignment}`}
      >
        {children}
      </div>
    </div>
  );
};

const AbountContainer = () => {
  useGSAP(() => {
    gsap.to('.left', {
      x: '100%',
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
      x: '-100%',
      ease: 'none',
      scrollTrigger: {
        trigger: '.left',
        top: 'center bottom',
        end: 'center start',
        scrub: 1,
        // markers: true,
      },
    });
  });
  return (
    <div className="bg-primary-200">
      <AboutSection alignment="right">
        <h2>LOREM</h2>
        <div className="w-28 h-1 mx-3 bg-white"></div>
        <h2>LOREM</h2>
      </AboutSection>
      <AboutSection alignment="left">
        <h2>LOREM</h2>
        <div className="w-28 h-1 mx-3 bg-white"></div>
        <h2>LOREM</h2>
      </AboutSection>
      <AboutSection alignment="right">
        <h2>LOREM</h2>
        <div className="w-28 h-1 mx-3 bg-white"></div>
        <h2>LOREM</h2>
      </AboutSection>
      <AboutSection alignment="left">
        <h2>LOREM</h2>
        <div className="w-28 h-1 mx-3 bg-white"></div>
        <h2>LOREM</h2>
      </AboutSection>
    </div>
  );
};

export default AbountContainer;
