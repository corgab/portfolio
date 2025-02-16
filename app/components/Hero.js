'use client';
import { EnvelopeIcon, DocumentIcon } from '@heroicons/react/24/solid';
import LinkedInIcon from './LinkedInIcon';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  useGSAP(() => {
    gsap.to(['.socials', '.surname'], {
      x: '-500',
      scrollTrigger: {
        trigger: '.socials',
        start: 'bottom center',
        end: 'top top',
        scrub: 1,
        ease: 'none',
        // markers: true,
      },
    });

    gsap.to('.name', {
      x: '500',
      scrollTrigger: {
        trigger: '.socials',
        start: 'top center',
        end: 'top top',
        scrub: 1,
        ease: 'none',
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
              className="rounded-full bg-secondary-200 p-2 block"
            >
              <EnvelopeIcon className="text-white w-5 h-5 md:w-10 md:h-10" />
            </a>
            <a
              href="https://www.linkedin.com/in/gabriele-corbani-01a11a315/"
              target="_blank"
              className="rounded-full bg-secondary-200 p-2 block"
            >
              <LinkedInIcon className="text-white w-5 h-5 md:w-10 md:h-10" />
            </a>
            <a
              href="#"
              target="_blank"
              className="rounded-full bg-secondary-200 p-2 block"
            >
              <DocumentIcon className="text-white w-5 h-5 md:w-10 md:h-10" />
            </a>
          </div>

          <div className="text-6xl md:text-8xl lg:text-9xl font-josefin font-black md:space-y-4 lg:space-y-8 tracking-7 leading-none uppercase ">
            <h1 className="text-primary-200 text-start name">GABRIELE</h1>
            <h1
              className="text-white uppercase text-end surname"
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
