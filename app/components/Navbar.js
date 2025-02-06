'use client';

import Link from 'next/link';
import Image from 'next/image';
import { gsap } from 'gsap';

import { useRef, useEffect, useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const hamburgerRef = useRef(null);
  const navItemsRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    setIsOpen(false);
    gsap.from(navRef.current, {
      y: window.innerHeight,
      autoAlpha: 0,
      duration: 2,
      ease: 'power3.out',
    });
    console.log('start', isOpen);

    gsap.to(menuRef.current, { autoAlpha: 0 });
  }, []);

  const toggleMenu = () => {
    setIsOpen((prevState) => {
      const newState = !prevState;
      const tl = gsap.timeline({
        defaults: {
          duration: 0.5,
          autoAlpha: newState ? 0 : 1,
        },
      });
      const navItems = navItemsRef.current.querySelectorAll('li');

      tl.to(hamburgerRef.current, {
        rotation: newState ? 180 : 0,
        transformOrigin: 'center center',
        autoAlpha: 1,
      });
      tl.to(navItems, {
        y: newState ? -50 : 0,
        stagger: 0.2,
      });
      tl.fromTo(
        menuRef.current,
        {
          y: newState ? window.innerHeight : 0,
          autoAlpha: newState ? 0 : 1,
        },
        {
          y: newState ? 0 : window.innerHeight,
          autoAlpha: newState ? 1 : 0,
        }
      );

      return newState;
    });
  };
  const navItems = [
    {
      name: 'Home',
      href: '/',
    },
    {
      name: 'About',
      href: '/about',
    },
    {
      name: 'Work',
      href: '/work',
    },
    {
      name: 'Contact',
      href: '/contact',
    },
  ];
  return (
    <nav className="container mx-auto px-5">
      <div className="flex justify-between items-center p-6" ref={navRef}>
        <Image
          src="/logo.svg"
          alt="logo"
          width="1"
          height="1"
          className="w-max h-max"
          priority={true}
        />
        <ul className="flex space-x-4" ref={navItemsRef}>
          {navItems.map((nav) => {
            return (
              <li key={nav.name} className="text-neutral-300">
                <Link href={nav.href}>{nav.name}</Link>
              </li>
            );
          })}
          <li className="div-line"></li>
          <button className="space-y-1" onClick={toggleMenu} ref={hamburgerRef}>
            <div className="w-6 h-1 bg-neutral-300"></div>
            <div className="w-6 h-1 bg-neutral-300"></div>
            <div className="w-6 h-1 bg-neutral-300"></div>
          </button>
        </ul>
      </div>

      <ul ref={menuRef} className="space-y-4 bg-neutral-700">
        {navItems.map((nav) => (
          <li key={nav.name} className="text-neutral-300">
            <Link href={nav.href}>{nav.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
