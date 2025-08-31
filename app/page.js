// import Navbar from './components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import LoadingScreen from '../components/Loading';
import LatestPosts from '../components/LatestPosts';
import Wrapper from '../components/Wrapper';

export default async function Home() {
  // const URL = process.env.API_URL;
  // const res = await fetch(`${URL}/api/posts?per_page=3`, {
  //   next: 86400,
  // });

  // if (!res.ok) {
  //   return null;
  // }
  // const posts = await res.json();

  return (
    <>
      <LoadingScreen />

      <Wrapper>
        {/* <Navbar /> */}
        <Hero />
        <About />
        <Projects />
        {/* <LatestPosts posts={posts.data} /> */}
        <Footer />
      </Wrapper>
    </>
  );
}
