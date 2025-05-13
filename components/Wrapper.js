'use client';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { useEffect, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { usePathname } from 'next/navigation';

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

export default function Wrapper({ children }) {
  const smootherRef = useRef(null);
  const pathname = usePathname();

  useGSAP(() => {
    //  Crea SmootherRef
    smootherRef.current = ScrollSmoother.create({
      wrapper: '#smooth-wrapper',
      content: '#smooth-content',
      smooth: 2,
      effects: true,
      normalizeScroll: true,
      ignoreMobileResize: true,
      smoothTouch: 0.1,
    });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div id='smooth-wrapper'>
      <div id='smooth-content'>{children}</div>
    </div>
  );
}
