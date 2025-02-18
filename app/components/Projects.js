'use client';
import gsap from 'gsap';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const Project = ({ name, img, repo, technologies }) => {
  return (
    <div className="text-center bg-white shadow-lg rounded-xl p-5 cursor-pointer my-36 min-w-[300px] sm:min-w-[400px] md:min-w-[450px]">
      <div className="w-full h-60 overflow-hidden rounded-t-xl">
        <Image
          src={img}
          alt={name}
          width={300}
          height={300}
          className="w-full object-cover object-top"
        />
      </div>
      <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold mt-4 text-primary-200 w-full">
        {name}
      </h3>
      <div className="mt-2 text-sm text-gray-600">
        <p>Stack:</p>
        <ul className="flex justify-center gap-4 flex-wrap pt-5">
          {technologies.map((tech, index) => (
            <li
              key={index}
              className="bg-secondary-100 rounded-full px-3 py-1 text-xs font-semibold text-primary-100"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-4">
        {Array.isArray(repo) ? (
          repo.map((r, index) => (
            <a
              key={index}
              href={'https://github.com' + r}
              className="text-blue-600 hover:text-blue-800 hover:underline hover:underline-offset-4 md:mt-2 inline-block md:pt-7 px-4"
              target="_blank"
            >
              <Image src="/github.svg" alt={name} width={50} height={50} />
            </a>
          ))
        ) : (
          <a
            href={'https://github.com/' + repo}
            className="text-blue-600 hover:text-blue-800 hover:underline hover:underline-offset-4 mt-2 inline-block pt-7"
            target="_blank"
          >
            <Image src="/github.svg" alt={name} width={50} height={50} />
          </a>
        )}
      </div>
    </div>
  );
};

export default function Projects() {
  const projRef = useRef(null);

  function getScrollAmount() {
    let width = projRef.current.scrollWidth;
    return -(width - window.innerWidth) - 50;
  }

  useGSAP(() => {
    const tween = gsap.to('.projects', {
      x: getScrollAmount,
      // duration: 3,
      ease: 'none',
    });

    ScrollTrigger.create({
      trigger: '.projects',
      start: 'top top',
      end: () => `+=${getScrollAmount() * -1}`,
      pin: true,
      animation: tween,
      scrub: 1,
      invalidateOnRefresh: true,
      // markers: true,
    });
  }, []);

  const projects = [
    {
      name: 'Gestione Utenti',
      img: '/projects/gestione-utenti.jfif',
      repo: '/corgab/user-management-app',
      technologies: ['Express.js', 'Node.js', 'MySQL'],
    },
    {
      name: 'Cms',
      img: '/projects/CMS.jfif',
      repo: [
        '/corgab/kigab-restaurant-front',
        '/corgab/kigab-restaurant',
        '/corgab/kigab-home',
      ],
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'Tailwind', 'Bootstrap'],
    },
    {
      name: 'Deliveboo',
      img: '/projects/deliveboo.png',
      repo: '/corgab/deliveboo-api',
      technologies: ['Laravel', 'Vue.js', 'Bootstrap'],
    },
    {
      name: 'Game Creator',
      img: '/projects/game.jpg',
      repo: '/rachelpatrocinio/game-creator',
      technologies: ['Laravel', 'Bootstrap', 'MySQL'],
    },
    {
      name: 'DC Comics',
      img: '/projects/dc.png',
      repo: '/corgab/laravel-dc-comics',
      technologies: ['Laravel', 'Vue.js', 'Bootstrap'],
    },
  ];

  return (
    <div className="min-h-96 w-full overflow-hidden">
      <div
        className="flex flex-nowrap space-x-6 p-4 projects items-center"
        ref={projRef}
      >
        {projects.map((proj, index) => (
          <Project
            key={index}
            ref={(el) => (projRefs.current[index] = el)} // Assegniamo il ref alla card
            name={proj.name}
            img={proj.img}
            repo={proj.repo}
            technologies={proj.technologies}
          />
        ))}
      </div>
    </div>
  );
}
