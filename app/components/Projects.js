'use client'
import gsap from 'gsap';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import { useRef, useState } from 'react';
import gestioneUtenti from '@/public/projects/gestione-utenti.jpg';
import cms from '@/public/projects/CMS.jpg';
import deliveboo from '@/public/projects/deliveboo.png';
import gameCreator from '@/public/projects/game.jpg';
import dcComics from '@/public/projects/dc.png';
import craftedHub from '@/public/projects/craftedhub.png'
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

const Project = ({ name, img, repo, technologies, description, link }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const techIcons = {
    'Express.js': 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/express.svg',
    'Node.js': 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/nodedotjs.svg',
    'MySQL': 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/mysql.svg',
    'Vue.js': 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/vuedotjs.svg',
    'Laravel': 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/laravel.svg',
    'Tailwind': 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/tailwindcss.svg',
    'Bootstrap': 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/bootstrap.svg',
    'Next.js': 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/nextdotjs.svg',
  };

  return (
    <div className="w-[400px] h-[600px] bg-primary-200 text-white rounded-lg shadow-2xl  flex flex-col">
      {/* Immagine del progetto */}
      <div className="relative w-full h-48">
        <Image
          src={img}
          alt={'Immagine del progetto ' + name}
          fill
          className="object-cover object-top"
          placeholder='blur'
        />
      </div>

      {/* Contenuto della card */}
      <div className="flex-1 p-6 flex flex-col justify-between">
        {/* Titolo e descrizione */}
        <div>
          <h1 className="text-3xl font-bold text-center">{name}</h1>
          <p className="mt-6 text-base text-gray-300 text-center">
            {description}
          </p>
        </div>

        {/* Tecnologie utilizzate */}
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {technologies.map((tech, index) => (
            <div key={index} className="flex items-center bg-gray-800 rounded-full px-3 py-1">
              <div className="relative w-5 h-5 mr-1">
                <Image
                  src={techIcons[tech]}
                  alt={'immagine ' + tech}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xs font-semibold">{tech}</span>
            </div>
          ))}
        </div>

        {/* Bottone con menu a tendina per i repository */}
        <div className="relative mt-4">
          {repo ? <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Scopri di più
          </button> :
            <Link
              href={link}
              target='_blank'
              className="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300 block text-center"
            >
              Scopri di più
            </Link>

          }

          {/* Menu a tendina */}
          {isDropdownOpen && (
            <div className="absolute mt-2 w-full bg-white rounded-lg shadow-lg">
              {Array.isArray(repo) ? (
                repo.map((r, index) => (
                  <a
                    key={index}
                    href={`https://github.com${r}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Repo {index + 1}
                  </a>
                ))
              ) : (
                <a
                  href={`https://github.com${repo}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  Repository
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};


export default function Projects({ loading }) {

  const container = useRef(null)
  const wrapper = useRef(null)

  const projects = [
    {
      name: 'CraftedHub',
      img: craftedHub,
      link: 'https://www.craftedhub.it/',
      technologies: ['Next.js', 'Laravel', 'Tailwind', 'Bootstrap', 'MySQL'],
      description: 'Un Blog che parla di tecnologia, con funzionalità avanzate e design moderno'
    },
    {
      name: 'Gestione Utenti',
      img: gestioneUtenti,
      repo: '/corgab/user-management-app',
      technologies: ['Express.js', 'Node.js', 'MySQL'],
      description: 'Un sistema di gestione utenti con autenticazione e creazione post.',
    },
    {
      name: 'Cms',
      img: cms,
      repo: [
        '/corgab/kigab-restaurant-front',
        '/corgab/kigab-restaurant',
        '/corgab/kigab-home',
      ],
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'Tailwind', 'Bootstrap'],
      description: 'Un CMS personalizzato per la gestione di contenuti di un ristorante.',
    },
    {
      name: 'Deliveboo',
      img: deliveboo,
      repo: '/corgab/deliveboo-api',
      technologies: ['Vue.js', 'Laravel', 'Bootstrap'],
      description: 'Una piattaforma di delivery con gestione ordini in tempo reale.',
    },
    {
      name: 'Game Creator',
      img: gameCreator,
      repo: '/rachelpatrocinio/game-creator',
      technologies: ['Laravel', 'Bootstrap', 'MySQL'],
      description: 'Un tool per creare e gestire giochi in modo semplice e intuitivo.',
    },
    {
      name: 'DC Comics',
      img: dcComics,
      repo: '/corgab/laravel-dc-comics',
      technologies: ['Vue.js', 'Laravel', 'Bootstrap'],
      description: 'Un sito web dedicato ai fumetti DC Comics.',
    },
  ];

  useGSAP(() => {
    const tl = gsap.timeline({ paused: true })

    tl.to('.wrapper', {
      x: -(wrapper.current.clientWidth - container.current.clientWidth),
    })

    ScrollTrigger.create({
      animation: tl,
      trigger: '.wrapper',
      start: 'center center',
      end: () => '+=3000',
      scrub: 1,
      pin: true,
      // markers: true
    })

  }, [])

  return (
    <>
      <div className="overflow-hidden">
        <div className="container mx-auto" ref={container}>
          <div className="wrapper h-screen w-max flex gap-40 items-center py-40 " ref={wrapper}>
            {projects.map((proj, index) => (
              <Project name={proj.name} img={proj.img} repo={proj.repo || ''} technologies={proj.technologies} description={proj.description} link={proj.link || ''} key={index} />
            ))}
          </div>
        </div>

      </div>
    </>
  )
}