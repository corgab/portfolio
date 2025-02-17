'use client';

import { Bars2Icon, ArrowUpIcon } from '@heroicons/react/24/outline';
import { gsap } from 'gsap';
import { useState } from 'react';
import { useGSAP } from '@gsap/react';

const NavBarContent = ({ setActive, active }) => {
  const tl = gsap.timeline({ paused: true });

  useGSAP(() => {
    tl.from('.fullNav', {
      y: '-100%',
      // opacity: 0,
      display: 'none',
      duration: 1.5,
    });
    active ? tl.play() : tl.reverse(1);
  }, [active]);

  const handleClick = () => {
    tl.to('.fullNav', {
      y: '-100%',
      duration: 1.5,
      onComplete: () => setActive(false),
    });
    tl.play();
  };

  return (
    <div className="h-screen w-full container mx-auto fullNav py-6 ">
      <div className="w-full flex justify-end">
        <ArrowUpIcon
          className="h-5 w-5 lg:h-6 lg:w-6 cursor-pointer text-primary-100"
          onClick={handleClick}
        />
      </div>
      <div className="text-xl md:text-4xl lg:text-7xl font-josefin font-bold md:space-y-4 lg:space-y-8">
        <h1 className="navlinks">
          <a href="#" className="group hover:text-secondary-200 cursor-pointer">
            Ab
            <span className="text-secondary-200 group-hover:text-primary-200">
              o
            </span>
            ut
          </a>
        </h1>
        <h1 className="navlinks cursor-pointer">
          <a href="#" className="group hover:text-secondary-200 cursor-pointer">
            Pro
            <span className="text-secondary-200 group-hover:text-primary-200">
              je
            </span>
            cts
          </a>
        </h1>
        <h1 className="navlinks">
          <a href="#" className="group hover:text-secondary-200 cursor-pointer">
            Con
            <span className="text-secondary-200 group-hover:text-primary-200">
              t
            </span>
            act
          </a>
        </h1>
      </div>
    </div>
  );
};

export default function Navbar() {
  const [active, setActive] = useState(false);

  return (
    <div>
      {!active ? (
        <div className="filter backdrop-blur-md">
          <div className="flex items-center justify-between px-4 py-4 container mx-auto text-white">
            <h1 className="text-2xl md:text-3xl lg:text-3xl leading-normal cursor-pointer">
              {/* logo */}
            </h1>
            <Bars2Icon
              className="h-5 w-5 lg:h-6 lg:w-6 cursor-pointer text-primary-200"
              onClick={() => setActive(!active)}
            />
          </div>
        </div>
      ) : (
        <NavBarContent setActive={setActive} active={active} />
      )}
    </div>
  );
}
