import Wrapper from '@/app/components/Wrapper';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Footer from '@/app/components/Footer';

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const URL = process.env.API_URL;

  const res = await fetch(`${URL}/api/posts/${slug}`, {
    next: 86400,
  });
  const data = await res.json();
  const post = await data.data;

  return {
    title: post.title,
    description: post.description,
    // etc
  };
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const URL = process.env.API_URL;

  const res = await fetch(`${URL}/api/posts/${slug}`);
  if (!res.ok) notFound();

  const data = await res.json();
  const post = await data.data;

  if (!post) return <p>Caricamento...</p>;

  return (
    <Wrapper>
      <div className='container py-10'>
        <div className='text-center space-y-5'>
          <h1 className='text-4xl font-bold text-secondary-200'>
            {post.title}
          </h1>
          <p className='text-lg text-primary-200'>{post.description}</p>
          <Image
            src={post.image}
            alt={`Immagine copertina del post: ${post.title}`}
            width={1000}
            height={950}
            quality={100}
            priority
            className='w-full h-auto block'
          />
        </div>

        <div
          className='mt-4 text-lg'
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
      <Footer />
    </Wrapper>
  );
}
