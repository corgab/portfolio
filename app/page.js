'use client';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import LoadingScreen from './components/Loading';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Quando carica body è hidden
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflowX = 'hidden';
      document.body.style.overflowY = 'auto';
    }
  }, [loading]);

  return (
    <>
      <LoadingScreen setLoading={setLoading} loading={loading} />

      <Hero loading={loading} />
      <About />
      <Projects />
      <Footer />
    </>
  );
}
