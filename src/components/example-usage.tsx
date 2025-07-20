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
import { type Locale } from '@/lib/i18n';
import { Dictionary } from '@/lib/dictionaries';

interface ExampleHomePageProps {
  dictionary: Dictionary;
  locale: Locale;
}

export default function ExampleHomePage({ dictionary, locale }: ExampleHomePageProps) {
  return (
    <>
      <Header dictionary={dictionary} locale={locale} />
      <main>
        <Hero dict={dictionary} locale={locale} />
        <About dictionary={dictionary} />
        <Services dictionary={dictionary} />
        <Portfolio dictionary={dictionary} />
        <FAQ dictionary={dictionary} />
        <Contact dictionary={dictionary} />
      </main>
      <Footer />
    </>
  );
}
