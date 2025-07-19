'use client';

import { 
  Header, 
  Hero, 
  About, 
  Services, 
  Portfolio, 
  FAQ, 
  Contact, 
  Footer 
} from '@/components';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
