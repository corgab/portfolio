import './globals.css';
import Head from 'next/head';
import { Josefin_Sans, Satisfy } from 'next/font/google';

const josefin = Josefin_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-josefin',
});

const satisfy = Satisfy({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-satisfy',
});
// Metadata globale per il portfolio
export const metadata = {
  // Titolo e descrizione principale
  title: 'Gabriele Corbani - Web Developer',
  description:
    'Il portfolio di Gabriele Corbani, sviluppatore web specializzato in React, Laravel e tecnologie moderne',

  openGraph: {
    title: 'Gabriele Corbani - Web Developer',
    description:
      'Portfolio di un sviluppatore web specializzato in tecnologie moderne e innovative',
    images: [
      {
        url: '/memoji.png',
        // width: 1200,
        // height: 630,
      },
    ],
    type: 'website',
    siteName: 'Gabriele Corbani Portfolio',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Gabriele Corbani - Web Developer',
    description:
      'Scopri i progetti e le competenze di un sviluppatore web full-stack',
    images: ['/memoji.png'],
  },

  keywords: [
    'Gabriele Corbani',
    'Web Developer',
    'React',
    'Vue',
    'JavaScript',
    'PHP',
    'Tailwind',
    'Laravel',
    'Next.js',
    'Sviluppatore Web',
    'Sviluppo Web',
    'Frontend',
    'Backend',
    'Full-stack',
  ],

  icons: {
    icon: '/favicon.ico',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Verifica per motori di ricerca
  verification: {
    google: 'Icqt8HNsCaYxJNtancEBnlgm9vKsRDO9UM3yYv_ZPmE',
  },

  authors: [
    {
      name: 'Gabriele Corbani',
      url: 'https://www.gabrielecorbani.dev/',
    },
  ],

  // Metadati per applicazioni
  applicationName: 'Gabriele Corbani Portfolio',

  // Informazioni aggiuntive
  metadataBase: new URL('https://gabrielecorbani.dev/'),
};

export default function RootLayout({ children }) {
  return (
    <html
      lang='it'
      suppressHydrationWarning
    >
      <Head>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no'
        />
        <meta
          name='theme-color'
          content='#5F85DB'
        />
      </Head>
      <body
        className={`${josefin.className} ${satisfy.variable} font-josefin`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
