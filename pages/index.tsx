import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import Work from '../components/Work';
import Writing from '../components/Writing';
import { Ideas, Interests } from '../components/Ideas';
import { About, Footer } from '../components/AboutFooter';

export type Theme = 'dark' | 'light';

const ThreeBackground = dynamic(() => import('../components/ThreeBackground'), {
  ssr: false,
});

export default function Home() {
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    const saved = (localStorage.getItem('ck-theme') as Theme | null) || 'dark';
    setTheme(saved);
    document.documentElement.setAttribute('data-theme', saved);
  }, []);

  const toggleTheme = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('ck-theme', next);
  };

  return (
    <>
      <Head>
        <title>Cherika Kaushal</title>
      </Head>

      <ThreeBackground theme={theme} />
      <Nav theme={theme} toggleTheme={toggleTheme} />

      <main>
        <Hero />
        <Intro />
        <Work />
        <Writing />
        <Ideas />
        <Interests />
        <About />
      </main>

      <Footer />
    </>
  );
}
