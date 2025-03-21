'use client';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function Footer() {

  const items = [
    {
      name: 'e-mail',
      link: 'mailto:corbanigabriele@gmail.com',
    },
    {
      name: 'curriculum',
      link: '/Gabriele Corbani - Curriculum.pdf',
    },
    {
      name: 'linkedin',
      link: 'https://www.linkedin.com/in/gabriele-corbani-01a11a315/',
    },
  ];

  return (
    <div className="bg-primary-200 overflow-x-hidden">
      <div className="mx-auto px-12 min-h-[50vh] md:min-h-[60vh] text-center text-white flex flex-col justify-between py-5 gap-y-10">
        <div className="pt-6">
          <div className="bg-primary-100 rounded-full px-4 md:px-5 md:py-4 py-3 text-base md:text-lg uppercase font-semibold text-white inline-flex flex-row items-center gap-2 md:gap-3 tracking-wide">
            <span className='block'>disponibile per nuove opportunità</span>
            <span className="hidden md:block w-5 h-5 bg-white rounded-full animate-pulse mt-2 sm:mt-0"></span>
          </div>
        </div>

        <div className="py-10">
          <h4 className="font-bold text-5xl leading-normal">
            <span className="italic font-satisfy font-normal text-6xl text-secondary-200">
              Passione
            </span>{' '}
            e{' '}
            <span className="italic font-satisfy font-normal text-6xl text-secondary-200">
              competenza
            </span>
            <br />
            per il digitale
          </h4>
          <a
            href="https://github.com/corgab"
            target="_blank"
            className="uppercase px-7 py-3 bg-white rounded-full text-primary-200 font-semibold text-lg mt-10 inline-flex items-center gap-3 duration-300 tracking-wide transition-transform transform hover:scale-110 hover:shadow-2xl"
          >
            Scopri il mio lavoro
            <ArrowRightIcon className="w-5 h-5 text-primary-200" />
          </a>
        </div>

        {/* Griglia con gli item */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

          {items.map((item) => (
            <Link href={item.link} target="_blank" className='uppercase text-white font-semibold text-lg hover:text-xl transition-all duration-300' key={item.name}>{item.name}</Link>
          ))}

        </div>
      </div>
    </div>
  );
}
