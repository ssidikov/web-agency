import { Hero } from '@/components/Hero'
import { Services } from '@/components/Services'
import Portfolio from '@/components/Portfolio'
import { FAQ } from '@/components/FAQNew'
import Contact from '@/components/Contact'
import { getDictionary } from '@/lib/dictionaries'
import { Locale } from '@/lib/i18n'

interface HomePageProps {
  params: Promise<{ locale: Locale }>
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params

  const dict = await getDictionary(locale)

  return (
    <>
      <section id='hero'>
        <Hero dict={dict} locale={locale} />
      </section>
      <section id='services'>
        <Services />
      </section>
      <section id='portfolio'>
        <Portfolio locale={locale} dictionary={dict} />
      </section>
      <section id='faq'>
        <FAQ dictionary={dict} />
      </section>
      <section id='contact'>
        <Contact dictionary={dict} />
      </section>
    </>
  )
}
