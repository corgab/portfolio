'use client';
import { EnvelopeIcon, DocumentIcon } from '@heroicons/react/24/solid';
import LinkedInIcon from './LinkedInIcon';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  useGSAP(() => {
    gsap.to('.name', {
      x: '50%',
      scrollTrigger: {
        trigger: '.socials',
        start: 'bottom center',
        end: 'bottom top',
        scrub: 1,
        ease: 'none',
        // markers: true,
      },
    });

    gsap.to(['.socials', '.surname'], {
      x: '-50%',
      scrollTrigger: {
        trigger: '.socials',
        start: 'bottom center',
        end: 'bottom top',
        scrub: 1,
        ease: 'none',
        // markers: true,
      },
    });
  }, []);

  return (
    <>
      <div className="container mx-auto p-4 h-screen w-full ">
        <div className="flex justify-between items-center h-full ">
          <div className="space-y-5 socials ">
            <a
              href="mailto:corbanigabriele@gmail.com"
              className="rounded-full bg-secondary-200 p-2 block transition-all duration-300 ease-in-out transform hover:scale-110"
            >
              <EnvelopeIcon className="text-white w-5 h-5 md:w-10 md:h-10" />
            </a>
            <a
              href="https://www.linkedin.com/in/gabriele-corbani-01a11a315/"
              target="_blank"
              className="rounded-full bg-secondary-200 p-2 block transition-all duration-300 ease-in-out transform  hover:scale-110"
            >
              <LinkedInIcon className="text-white w-5 h-5 md:w-10 md:h-10" />
            </a>
            <a
              href="/Gabriele Corbani - Curriculum.pdf"
              target="_blank"
              className="rounded-full bg-secondary-200 p-2 block transition-all duration-300 ease-in-out transform hover:scale-110"
            >
              <DocumentIcon className="text-white w-5 h-5 md:w-10 md:h-10" />
            </a>
          </div>

          <div className="flex flex-col items-end justify-end text-6xl md:text-8xl lg:text-[10em] font-josefin font-black md:space-y-4 lg:space-y-8 tracking-7 leading-none uppercase">
            <h1 className="text-secondary-200 name">GABRIELE</h1>
            <h1
              className="text-white uppercase surname"
              style={{
                textShadow:
                  '-1px 0 0 #000, 0 1px 0 #000, 1px 0 0 #000, 0 -1px 0 #000',
              }}
            >
              CORBANI
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
