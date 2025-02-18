import './globals.css';
// import { Metadata } from 'next';

// Metadata globale per il portfolio
export const metadata = {
  // Titolo e descrizione principale
  title: 'Gabriele Corbani - Web Developer',
  description:
    'Il portfolio di Gabriele Corbani, sviluppatore web specializzato in React, Laravel e tecnologie moderne.',

  openGraph: {
    title: 'Gabriele Corbani - Web Developer',
    description:
      'Portfolio di un sviluppatore web specializzato in tecnologie moderne e innovative',
    images: [
      {
        url: '/memoji.png',
        width: 1200,
        height: 630,
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
    'Laravel',
    'Next.js',
    'Sviluppatore Web',
    'Frontend',
    'Backend',
    'Full-stack',
    'Sviluppo Software',
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
      url: 'https://portfolio-corgab.netlify.app/',
    },
  ],

  // Metadati per applicazioni
  applicationName: 'Gabriele Corbani Portfolio',

  // Informazioni aggiuntive
  metadataBase: new URL('https://portfolio-corgab.netlify.app/'),
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#5F85DB',
};

export default function RootLayout({ children }) {
  return (
    <html lang="it" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
