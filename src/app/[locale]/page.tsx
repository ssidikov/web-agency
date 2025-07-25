import { Hero } from '@/components/Hero'
import { Services } from '@/components/Services'
import Portfolio from '@/components/Portfolio'
import { FAQ } from '@/components/FAQ'
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
      <section id='hero' className='p-0 m-0'>
        <Hero dict={dict.hero} common={dict.common} locale={locale} />
      </section>
      <section id='services'>
        <Services dictionary={dict.services} locale={locale} />
      </section>
      <section id='portfolio'>
        <Portfolio dictionary={dict.portfolio} locale={locale} />
      </section>
      <section id='faq'>
        <FAQ dictionary={dict.faq} />
      </section>
      <section id='contact'>
        <Contact dictionary={dict.contact} locale={locale} />
      </section>
    </>
  )
}
