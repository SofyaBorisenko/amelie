import type { Metadata } from 'next';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Selection from '../components/Selection';
import Team from '../components/Team';

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
            height: '100vh',
            backgroundImage: `url('/images/header-hero-bg1.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'top',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <Header />
          <Hero />
        </div>
        <Selection />
        <Team />
        <Footer />
      </body>
    </html>
  );
}
