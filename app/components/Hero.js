'use client';
import { EnvelopeIcon, DocumentIcon, ArrowDownIcon } from '@heroicons/react/24/solid';
import LinkedInIcon from './LinkedInIcon';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

export default function Hero({ loading }) {

  // console.log(loading)

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
        <div className="container mx-auto p-4 h-screen w-full relative">
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-5 h-full">
            {/* Socials  */}
            <div className="md:space-y-5 socials flex md:flex-col space-x-4 md:space-x-0 md:space-y-4 ">
              <Link
                href="mailto:corbanigabriele@gmail.com"
                className="rounded-full sm:rounded-3xl bg-secondary-200 p-3 block transition-all duration-300 ease-in-out transform hover:scale-110 flex md:flex-col items-center justify-center"
                aria-label="Invia un'email a corbanigabriele@gmail.com"
              >
                <EnvelopeIcon className="text-white w-5 h-5 md:w-10 md:h-10 " aria-hidden="true" />
                <span className="text-1xl text-white font-medium py-1 hidden md:inline">
                  email
                </span>
              </Link>

              <Link
                href="https://www.linkedin.com/in/gabriele-corbani-01a11a315/"
                target="_blank"
                className="rounded-full sm:rounded-3xl bg-secondary-200 p-3 block transition-all duration-300 ease-in-out transform hover:scale-110 flex md:flex-col items-center justify-center"
                aria-label="Profilo LinkedIn di Gabriele Corbani"

              >
                <LinkedInIcon className="text-white w-5 h-5 md:w-10 md:h-10" aria-hidden="true" />
                <span className="text-1xl text-white font-medium py-1 hidden md:inline">
                  LinkedIn
                </span>
              </Link>
              <Link
                href="/Gabriele Corbani - Curriculum.pdf"
                target="_blank"
                className="rounded-full sm:rounded-3xl bg-secondary-200 p-3 block transition-all duration-300 ease-in-out transform hover:scale-110 flex md:flex-col items-center justify-center"
                aria-label="Curriculum di Gabriele Corbani"

              >
                <DocumentIcon className="text-white w-5 h-5 md:w-10 md:h-10" aria-hidden="true" />
                <span className="text-1xl text-white font-medium py-1 hidden md:inline">
                  CV
                </span>
              </Link>
            </div>
            {/* Nome e cognome */}
            <div className=" flex flex-col items-end justify-end text-6xl md:text-8xl lg:text-[10em] font-josefin font-black md:space-y-4 lg:space-y-8 tracking-7 leading-none uppercase">
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
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
              <div className='bg-secondary-200 p-3 rounded-full icon'>
                <ArrowDownIcon className="h-5 w-5 md:h-10 md:w-10 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
