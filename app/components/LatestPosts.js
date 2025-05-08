'use client';
import { useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Link from 'next/link';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export default function LatestPosts({ posts = [] }) {
  const containerRef = useRef();

  useGSAP(() => {
    const cards = gsap.utils.toArray('.post-card');

    gsap.from(cards, {
      opacity: 0,
      y: 100,
      duration: 1,
      ease: 'power3.out',
      stagger: 0.25,
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        once: true,
      },
    });
  }, []);

  return (
    <>
      {posts.length > 0 && (
        <section
          ref={containerRef}
          className='my-16 px-4 md:px-10'
        >
          <h2 className='text-2xl md:text-5xl lg:text-7xl font-bold text-secondary-200  mb-10 text-center'>
            Ultimi Post
          </h2>
          <div className='grid gap-6 sm:grid-cols-2 md:grid-cols-3'>
            {posts.map((post, i) => (
              <Link
                href={post.seo.canonical_url}
                key={i}
                className='group'
              >
                <article className='bg-white rounded-2xl overflow-hidden shadow-md'>
                  <div className='relative w-full aspect-[16/9] overflow-hidden'>
                    <Image
                      src={post.image}
                      alt={post.title || 'Post'}
                      fill
                      className='object-cover object-top transition-transform duration-500 group-hover:scale-110'
                      sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                    />
                  </div>

                  <div className='p-6 flex flex-col justify-between'>
                    <h3 className='text-xl font-bold text-secondary-200 group-hover:text-secondary-200 transition-colors duration-300 mb-3 font-josefin'>
                      {post.title}
                    </h3>
                    <p className='text-primary-100 leading-relaxed mb-4 line-clamp-5'>
                      {post.description}
                    </p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
