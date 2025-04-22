import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import LoadingScreen from './components/Loading';
import LatestPosts from './components/LatestPosts';
import { notFound } from 'next/navigation';

export default async function Home() {
  const URL = process.env.API_URL;
  const res = await fetch(`${URL}/api/tags/web-development`, {
    next: 86400,
  });
  if (!res.ok) {
    return notFound;
  }
  const posts = await res.json();

  return (
    <>
      <LoadingScreen />
      {/* <Navbar /> */}
      <Hero />
      <About />
      <Projects />
      <LatestPosts posts={posts.data.posts} />
      <Footer />
    </>
  );
}
