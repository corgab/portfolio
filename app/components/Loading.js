'use client';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const LoadingScreen = ({ onComplete, setLoading }) => {
  useGSAP(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        setLoading(false);
        if (onComplete) onComplete();
      },
    });

    tl.to('.loading-text', { autoAlpha: 1, y: 0, duration: 1 })
      .to('.loading-bar', { width: '100%', duration: 2 }, '-=0.5')
      .to('.loading-screen', { autoAlpha: 0, duration: 1, delay: 0.5 });
  }, []);

  return (
    <div className="loading-screen fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-primary-200 text-white z-50">
      <h1 className="loading-text text-4xl opacity-0 translate-y-10">
        Caricamento...
      </h1>
      <div className="loading-bar mt-4 w-0 h-2 inline-block bg-white"></div>
    </div>
  );
};

export default LoadingScreen;
