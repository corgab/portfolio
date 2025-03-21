'use client';
import { EnvelopeIcon, DocumentIcon, ArrowDownIcon } from '@heroicons/react/24/solid';
import LinkedInIcon from './LinkedInIcon';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export default function Hero({ loading }) {

  console.log(loading)

  useGSAP(() => {
    gsap.to('.name', {
      x: '50%',
      scrollTrigger: {
        trigger: '.surname',
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
        trigger: '.surname',
        start: 'bottom center',
        end: 'bottom top',
        scrub: 1,
        ease: 'none',
        // markers: true,
      },
    });
  }, []);

  useGSAP(() => {
    if (!loading) {
      gsap.to('.icon', {
        y: 25,
        duration: 0.5,
        repeat: -1,
        yoyo: true
      })
    }

  }, [loading])


  return (
    <>
      <div className="overflow-hidden">
        <div className="container mx-auto p-4 h-screen w-full">
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-5 h-5/6">
            <div className="md:space-y-5 socials flex md:flex-col space-x-4 md:space-x-0 md:space-y-4">
              <a
                href="mailto:corbanigabriele@gmail.com"
                className="rounded-full sm:rounded-3xl bg-secondary-200 p-2 block transition-all duration-300 ease-in-out transform hover:scale-110 flex md:flex-col items-center justify-center"
              >
                <EnvelopeIcon className="text-white w-5 h-5 md:w-10 md:h-10 " />
                <span className="text-1xl text-white font-medium py-1 hidden md:inline">
                  email
                </span>
              </a>

              <a
                href="https://www.linkedin.com/in/gabriele-corbani-01a11a315/"
                target="_blank"
                className="rounded-full sm:rounded-3xl bg-secondary-200 p-2 block transition-all duration-300 ease-in-out transform hover:scale-110 flex md:flex-col items-center justify-center"
              >
                <LinkedInIcon className="text-white w-5 h-5 md:w-10 md:h-10" />
                <span className="text-1xl text-white font-medium py-1 hidden md:inline">
                  LinkedIn
                </span>
              </a>
              <a
                href="/Gabriele Corbani - Curriculum.pdf"
                target="_blank"
                className="rounded-full sm:rounded-3xl bg-secondary-200 p-2 block transition-all duration-300 ease-in-out transform hover:scale-110 flex md:flex-col items-center justify-center"
              >
                <DocumentIcon className="text-white w-5 h-5 md:w-10 md:h-10" />
                <span className="text-1xl text-white font-medium py-1 hidden md:inline">
                  CV
                </span>
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
          <div className='flex justify-center'>
            <div className='bg-secondary-200 p-3 rounded-full icon'>
              <ArrowDownIcon className="h-10 w-10 text-white " />
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
