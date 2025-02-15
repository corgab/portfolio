import { EnvelopeIcon } from '@heroicons/react/24/solid';
import LinkedInIcon from './LinkedInIcon';
import Image from 'next/image';
export default function Hero() {
  return (
    <>
      <div className="container mx-auto p-4 h-screen w-full">
        <div className="flex justify-between items-center h-full ">
          <div className="space-y-5">
            <a href="#" className="rounded-full bg-secondary-200 p-2 block">
              <EnvelopeIcon className="text-white w-5 h-5 md:w-10 md:h-10" />
            </a>
            <a href="#" className="rounded-full bg-secondary-200 p-2 block">
              <LinkedInIcon className="text-white w-5 h-5 md:w-10 md:h-10" />
            </a>
          </div>
          <div className="text-6xl md:text-8xl lg:text-9xl font-josefin font-black md:space-y-4 lg:space-y-8 tracking-7 leading-none uppercase">
            <h1 className="text-primary-200">GABRIELE</h1>
            <h1
              className="text-white uppercase text-end"
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
