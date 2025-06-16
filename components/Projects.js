'use client';
import gsap from 'gsap';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import { useRef, useMemo } from 'react';
import gestioneUtenti from '@/public/projects/gestione-utenti.jpg';
import cms from '@/public/projects/CMS.jpg';
import deliveboo from '@/public/projects/deliveboo.png';
import gameCreator from '@/public/projects/game.jpg';
import dcComics from '@/public/projects/dc.png';
import craftedHub from '@/public/projects/craftedhub.png';
import landing from '@/public/projects/simple-landingpage.jpg';
import sitipronti from '@/public/projects/sitipronti.png';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

const Project = ({ name, img, technologies, description, link }) => {
  const techIcons = useMemo(
    () => ({
      'Express.js':
        'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/express.svg',
      'Node.js':
        'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/nodedotjs.svg',
      MySQL: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/mysql.svg',
      'Vue.js':
        'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/vuedotjs.svg',
      Laravel: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/laravel.svg',
      Tailwind:
        'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/tailwindcss.svg',
      Bootstrap:
        'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/bootstrap.svg',
      'Next.js':
        'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/nextdotjs.svg',
    }),
    []
  );

  return (
    <div className='project-card w-[400px] h-[600px] bg-primary-200 text-white rounded-lg shadow-2xl  flex flex-col'>
      {/* Immagine del progetto */}
      <div className='relative w-full h-48'>
        <Image
          src={img}
          alt={'Immagine del progetto ' + name}
          fill
          className='object-cover object-top'
          placeholder='blur'
          priority={true}
        />
      </div>

      {/* Contenuto della card */}
      <div className='flex-1 p-6 flex flex-col justify-between'>
        {/* Titolo e descrizione */}
        <div>
          <h1 className='text-3xl font-bold text-center'>{name}</h1>
          <p className='mt-6 text-base text-gray-300 text-center'>
            {description}
          </p>
        </div>

        {/* Tecnologie utilizzate */}
        <div className='mt-4 flex flex-wrap justify-center gap-2'>
          {technologies.map((tech, index) => (
            <div
              key={index}
              className='flex items-center bg-primary-100 rounded-full px-3 py-1'
            >
              <div className='relative w-5 h-5 mr-1'>
                <Image
                  src={techIcons[tech]}
                  alt={'immagine ' + tech}
                  fill
                  className='object-contain'
                />
              </div>
              <span className='text-xs font-semibold'>{tech}</span>
            </div>
          ))}
        </div>

        {/* Bottone con menu a tendina per i repository */}
        <div className='relative mt-4'>
          <Link
            href={link}
            target='_blank'
            className='w-full px-4 py-2 bg-secondary-200 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300 block text-center'
          >
            Scopri di più
          </Link>
        </div>
      </div>
    </div>
  );
};

export default function Projects() {
  const container = useRef(null);
  const wrapper = useRef(null);

  const projects = [
    {
      name: 'SitiPronti',
      img: sitipronti,
      link: 'https://www.sitipronti.com/',
      technologies: ['Next.js', 'Tailwind'],
      description:
        'Una landing page moderna e veloce  per la promozione di servizi digitali. Realizzata per offrire performance elevate e SEO ottimizzata.',
    },
    {
      name: 'CraftedHub',
      img: craftedHub,
      link: 'https://www.craftedhub.it/',
      technologies: ['Next.js', 'Laravel', 'Tailwind', 'Bootstrap', 'MySQL'],
      description:
        'Un Blog che parla di tecnologia, con funzionalità avanzate e design moderno',
    },
    {
      name: 'Gestione Utenti',
      img: gestioneUtenti,
      link: 'https://github.com/corgab/user-management-app',
      technologies: ['Express.js', 'Node.js', 'MySQL'],
      description:
        'Un sistema di gestione utenti con autenticazione e creazione post.',
    },
    {
      name: 'CMS',
      img: cms,
      link: 'https://github.com/corgab/kigab-restaurant',
      technologies: ['Laravel', 'MySQL', 'Tailwind', 'Bootstrap'],
      description:
        'Un CMS personalizzato per la gestione di contenuti di un ristorante.',
    },
    {
      name: 'Simple Landing Page',
      img: landing,
      link: 'https://github.com/corgab/simple-landingpage',
      technologies: ['Vue.js', 'Bootstrap'],
      description:
        'Una landing page veloce e personalizzabile con possibilità di aggiungere features',
    },
    {
      name: 'Deliveboo',
      img: deliveboo,
      link: 'https://github.com/corgab/deliveboo-api',
      technologies: ['Vue.js', 'Laravel', 'Bootstrap'],
      description:
        'Una piattaforma di delivery con gestione ordini in tempo reale.',
    },
    {
      name: 'Game Creator',
      img: gameCreator,
      link: 'https://github.com/rachelpatrocinio/game-creator',
      technologies: ['Laravel', 'Bootstrap', 'MySQL'],
      description:
        'Un tool per creare e gestire giochi in modo semplice e intuitivo.',
    },
    {
      name: 'DC Comics',
      img: dcComics,
      link: 'https://github.com/corgab/laravel-dc-comics',
      technologies: ['Vue.js', 'Laravel', 'Bootstrap'],
      description: 'Un sito web dedicato ai fumetti DC Comics.',
    },
  ];

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: 'top top',
        end: () => '+=' + wrapper.current.scrollWidth,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    tl.to(wrapper.current, {
      x: -(wrapper.current.scrollWidth - container.current.offsetWidth),
      ease: 'none',
    });

    gsap.utils.toArray('.project-card').forEach((card) => {
      const trigger = ScrollTrigger.create({
        trigger: card,
        containerAnimation: tl,
        start: 'left center',
        end: 'right center',
        scrub: true,
        toggleActions: 'play reverse play reverse',
        // markers: true,
        onLeave: () => {
          gsap.killTweensOf(card);
          gsap.to(card, {
            opacity: 0.5,
            y: 50,
            scale: 0.8,
            ease: 'power2.inOut',
            duration: 0.6,
          });
        },
        onLeaveBack: () => {
          gsap.killTweensOf(card);
          gsap.to(card, {
            opacity: 0.5,
            y: 50,
            scale: 0.8,
            ease: 'power2.inOut',
            duration: 0.6,
          });
        },
        onEnter: () => {
          gsap.killTweensOf(card);
          gsap.to(card, {
            opacity: 1,
            y: 0,
            scale: 1.05,
            ease: 'power2.out',
            duration: 0.6,
          });
        },
        onEnterBack: () => {
          gsap.killTweensOf(card);
          gsap.to(card, {
            opacity: 1,
            y: 0,
            scale: 1.05,
            ease: 'power2.out',
            duration: 0.6,
          });
        },
      });

      gsap.fromTo(
        card,
        {
          opacity: 0.5,
          y: 50,
          scale: 0.8,
        },
        {
          opacity: 1,
          y: 0,
          scale: 0.8,
          ease: 'none',
          scrollTrigger: trigger,
        }
      );
    });
  }, []);

  return (
    <>
      <div className='overflow-hidden'>
        <div
          className='container mx-auto'
          ref={container}
        >
          <div
            className='h-screen w-max flex gap-40 items-center py-40 pr-[40vw] pl-[30vw]'
            ref={wrapper}
          >
            {projects.map((proj, i) => (
              <Project
                name={proj.name}
                img={proj.img}
                technologies={proj.technologies}
                description={proj.description}
                link={proj.link || ''}
                key={i}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
