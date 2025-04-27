'use client';
import { useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

export default function LatestPosts({ posts = [] }) {
  const containerRef = useRef();

  useGSAP(
    (context) => {
      const cards = context.selector('.post-card');

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
    },
    { scope: containerRef }
  );

  return (
    <>
      {posts.length > 0 && (
        <section
          ref={containerRef}
          className='my-16 px-4 md:px-10'
        >
          <h2 className='text-3xl font-bold font-josefin text-primary-100 dark:text-secondary-100 mb-10 text-center'>
            Ultimi Post
          </h2>
          <div className='grid gap-6 sm:grid-cols-2 md:grid-cols-3'>
            {posts.map((post, i) => (
              <Link
                href={post.seo.canonical_url}
                key={i}
                className='group'
              >
                <article className='post-card bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl'>
                  <div className='p-5'>
                    <h3 className='text-lg font-semibold mb-2 text-primary-100 font-josefin'>
                      {post.title}
                    </h3>
                    <p className='text-sm text-zinc-600 mb-4 line-clamp-3'>
                      {post.description}
                    </p>
                    <span className='text-secondary-200 font-medium hover:underline'>
                      Leggi →
                    </span>
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
