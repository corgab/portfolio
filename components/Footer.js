'use client';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import gsap from 'gsap';
import SplitText from 'gsap/SplitText';
import { useRef, useEffect } from 'react';
import { socials } from '@/utils/socials';

gsap.registerPlugin(SplitText);

export default function Footer() {
  const buttonRefs = useRef([]);

  useEffect(() => {
    buttonRefs.current.forEach((el) => {
      if (!el) return;

      const text = el.querySelector('.text');
      const shadow = el.querySelector('.shadow');

      if (!text || !shadow) return;

      const splittedText = new SplitText(text, { type: 'chars' });
      const splittedShadow = new SplitText(shadow, { type: 'chars' });

      gsap.set(splittedShadow.chars, { scaleY: 0 });

      const onEnter = () => {
        gsap.to(splittedText.chars, {
          scaleY: 0,
          duration: (i) => 0.15 + i * 0.1,
        });
        gsap.to(splittedShadow.chars, {
          scaleY: 1,
          duration: (i) => 0.15 + i * 0.1,
        });
      };

      const onLeave = () => {
        gsap.to(splittedText.chars, {
          scaleY: 1,
          duration: (i) => 0.15 + i * 0.1,
        });
        gsap.to(splittedShadow.chars, {
          scaleY: 0,
          duration: (i) => 0.15 + i * 0.1,
        });
      };

      shadow.addEventListener('mouseenter', onEnter);
      shadow.addEventListener('mouseleave', onLeave);

      // Cleanup
      return () => {
        shadow.removeEventListener('mouseenter', onEnter);
        shadow.removeEventListener('mouseleave', onLeave);
      };
    });
  }, []);

  return (
    <div className='bg-primary-200 overflow-x-hidden'>
      <div className='mx-auto px-12 min-h-[50vh] md:min-h-[60vh] text-center text-white flex flex-col justify-between py-5 gap-y-10'>
        <div className='pt-6'>
          <div className='bg-primary-100 rounded-full px-4 md:px-5 md:py-4 py-3 text-base md:text-lg uppercase font-semibold text-white inline-flex flex-row items-center gap-2 md:gap-3 tracking-wide'>
            <span className='block'>disponibile per nuove opportunità</span>
            <span className='hidden md:block w-5 h-5 bg-white rounded-full animate-pulse mt-2 sm:mt-0'></span>
          </div>
        </div>

        <div className='py-10'>
          <h2 className='font-bold text-5xl leading-normal'>
            <span className='italic font-satisfy font-normal text-6xl text-secondary-200'>
              Passione
            </span>{' '}
            e{' '}
            <span className='italic font-satisfy font-normal text-6xl text-secondary-200'>
              competenza
            </span>
            <br />
            per il digitale
          </h2>
          <Link
            href='https://github.com/corgab'
            target='_blank'
            className='uppercase px-7 py-3 bg-white rounded-full text-primary-200 font-semibold text-lg mt-10 inline-flex items-center gap-3 duration-300 tracking-wide transition-transform transform hover:scale-110 hover:shadow-2xl'
          >
            Scopri il mio lavoro
            <ArrowRightIcon className='w-5 h-5 text-primary-200' />
          </Link>
        </div>

        <ul className='grid grid-cols-1 sm:grid-cols-3 gap-4 '>
          {socials.map((social, i) => (
            <li
              key={i}
              ref={(el) => (buttonRefs.current[i] = el)}
              className='button relative uppercase font-semibold text-lg cursor-pointer overflow-y-hidden '
            >
              <Link
                href={social.href}
                target='_blank'
                className='relative inline-block text-white'
                aria-label={social.label}
              >
                <span className='text block relative'>{social.name}</span>
                <span className='shadow text-secondary-200 absolute top-0 left-0'>
                  {social.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
