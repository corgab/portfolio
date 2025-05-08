import Footer from '../components/Footer';
import Wrapper from '../components/Wrapper';
import Image from 'next/image';
import Link from 'next/link';

export default async function Blog() {
  const URL = process.env.API_URL;
  // Aggiungere query per filtrare la categoria
  const res = await fetch(`${URL}/api/posts?per_page=21`, {
    next: 86400,
  });
  if (!res.ok) {
    return null;
  }
  const data = await res.json();
  const posts = data.data;

  return (
    <Wrapper>
      <div className='container py-10'>
        <section className='text-center mb-16'>
          <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold text-secondary-200 mb-6'>
            Il mio blog
          </h1>
          <div className='space-y-4 text-lg md:text-xl text-primary-200 max-w-2xl mx-auto'>
            <p>Appunti, soluzioni e idee dal mio percorso da developer.</p>
            <p>
              Questo spazio nasce dal desiderio di mettere ordine nei pensieri e
              condividere quello che imparo ogni giorno, tra codice, errori e
              piccole vittorie.
            </p>
            <p>
              Non è un blog da manuale: è un luogo dove raccolgo esperienze
              concrete, spunti pratici e riflessioni su come crescere in questo
              mestiere.
            </p>
          </div>
        </section>

        <section className='py-10'>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-12'>
            {posts.map((post) => (
              <Link
                href={`/blog/${post.slug}`}
                key={post.id}
              >
                <article className='flex flex-col gap-6'>
                  <div className='relative w-full aspect-[3/2] overflow-hidden rounded-xl'>
                    <Image
                      src={post.image}
                      alt={`Anteprima: ${post.title}`}
                      fill
                      className='object-cover'
                      sizes='(max-width: 768px) 100vw, 50vw'
                      priority
                    />
                  </div>
                  <div className='flex flex-col justify-center'>
                    <h2 className='text-2xl font-semibold text-secondary-100 mb-2'>
                      {post.title}
                    </h2>
                    <p className='text-primary-100 text-sm md:text-base line-clamp-6'>
                      {post.description}
                    </p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </Wrapper>
  );
}
