'use client';
import { useState } from 'react';
import Image from 'next/image';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import LoadingScreen from './components/Loading';

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? (
        <LoadingScreen setLoading={setLoading} />
      ) : (
        <>
          <Navbar />
          <Hero />
          <About />
          <Projects />
          <Footer />
        </>
      )}
    </>
  );
}
