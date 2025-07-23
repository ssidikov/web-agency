import Contact from '@/components/Contact'
import { getDictionary } from '@/lib/dictionaries'

export default async function ContactPage({ params }: { params: { locale: 'en' | 'fr' | 'ru' } }) {
  const dictionary = await getDictionary(params.locale)
  return <Contact dictionary={dictionary} />
}
