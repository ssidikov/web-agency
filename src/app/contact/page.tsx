import Contact from '@/components/Contact'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import LocaleProvider from '@/components/LocaleProvider'
import { getDictionary } from '@/lib/dictionaries'
import { defaultLocale } from '@/lib/i18n'

export default async function ContactPage() {
  const dictionary = await getDictionary(defaultLocale)
  
  return (
    <LocaleProvider locale={defaultLocale}>
      <div className='min-h-screen'>
        <Header locale={defaultLocale} dictionary={dictionary} />
        <main className='m-0 p-0'>
          <Contact dictionary={dictionary.contact} locale={defaultLocale} className='pt-[140px]' />
        </main>
        <Footer dictionary={dictionary} locale={defaultLocale} />
      </div>
    </LocaleProvider>
  )
}
