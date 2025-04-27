'use client';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';

const LoadingScreen = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflowY = 'scroll';
        tl.kill();
      },
    });

    tl.to('.loading-text', { autoAlpha: 1, y: 0, duration: 1 })
      .to('.loading-bar', { width: '95%', duration: 2 }, '-=0.5')
      .to('.loading-screen', { autoAlpha: 0, duration: 1, delay: 0.5 });
  }, []);

  return (
    <div className='loading-screen fixed top-0 left-0 w-full h-full  bg-primary-200 z-50 flex flex-col items-center justify-center text-white overflow-hidden'>
      <div className='loading-text text-4xl opacity-0 translate-y-10 text-center'>
        <Image
          src='/memoji.png'
          width={250}
          height={250}
          alt='Gabriele Corbani - memoji'
          priority={true}
          // preload="true"
        />
        <h6 className=''>Caricamento...</h6>
      </div>
      <div className='loading-bar mt-4 w-0 h-2 inline-block bg-white rounded-full'></div>
    </div>
  );
};

export default LoadingScreen;
