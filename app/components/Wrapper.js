'use client';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

export default function Wrapper({ children }) {
  const smootherRef = useRef(null);

  useEffect(() => {
    // Se SmootherRef non esiste
    if (!smootherRef.current) {
      // Crea SmootherRef
      smootherRef.current = ScrollSmoother.create({
        wrapper: '#smooth-wrapper',
        content: '#smooth-content',
        smooth: 1.5,
        effects: true,
      });
    }
  }, []);

  return (
    <div id='smooth-wrapper'>
      <div id='smooth-content'>{children}</div>
    </div>
  );
}
