import type { Metadata } from 'next';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';

export const metadata: Metadata = {
  title: 'Amelie Cakery',
  description: 'Amelie Cakery',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <link
          href='https://fonts.cdnfonts.com/css/miama-nueva'
          rel='stylesheet'
        />
      </head>
      <body>
        <div
          style={{
            height: '90rem',
            backgroundImage: `url('/images/header-hero-bg.webp')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <Header />
          <Hero />
        </div>
        <Footer />
      </body>
    </html>
  );
}
