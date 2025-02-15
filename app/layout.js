import './globals.css';

export const metadata = {
  title: 'Gabriele Corbani',
  description: 'Il portfolio di Gabriele Corbani',
};

export default function RootLayout({ children }) {
  return (
    <html lang="it" suppressHydrationWarning>
      <body suppressHydrationWarning className="bg-neutral-500 overflow-hidden">
        {children}
      </body>
    </html>
  );
}
