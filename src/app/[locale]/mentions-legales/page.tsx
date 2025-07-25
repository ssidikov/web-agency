import { getDictionary } from '@/lib/dictionaries'
import { Locale } from '@/lib/i18n'
import { Metadata } from 'next'

interface LegalSection {
  title?: string
  company_info_title?: string
  company_name_label?: string
  company_name?: string
  company_type_label?: string
  company_type?: string
  siren_label?: string
  siren?: string
  address_label?: string
  address?: string
  phone_label?: string
  phone?: string
  email_label?: string
  email?: string
  director_title?: string
  director_name?: string
  hosting_title?: string
  host_label?: string
  host?: string
  host_address_label?: string
  host_address?: string
  host_website_label?: string
  host_website?: string
  ip_title?: string
  ip_text?: string
  data_title?: string
  data_text?: string
  cookies_title?: string
  cookies_text?: string
}

export const metadata: Metadata = {
  title: 'Mentions légales | SIDIKOFF DIGITAL',
  description: 'Informations légales et RGPD de SIDIKOFF DIGITAL',
}

interface MentionsLegalesPageProps {
  params: Promise<{ locale: Locale }>
}

export default async function MentionsLegalesPage({ params }: MentionsLegalesPageProps) {
  const { locale } = await params
  const dict = await getDictionary(locale)
  const legal: LegalSection = dict.legal || {}

  return (
    <main className='max-w-3xl mx-auto py-16 px-4 mt-20 md:mt-32'>
      <h1 className='text-4xl font-bold mb-8'>{legal.title || 'Mentions légales'}</h1>
      <section className='mb-8'>
        <h2 className='text-2xl font-semibold mb-2'>
          {legal.company_info_title || "Informations sur l'entreprise"}
        </h2>
        <ul className='space-y-1 text-gray-700'>
          <li>
            <strong>{legal.company_name_label || 'Nom commercial'}:</strong>{' '}
            {legal.company_name || 'SIDIKOFF DIGITAL'}
          </li>
          <li>
            <strong>{legal.company_type_label || 'Forme juridique'}:</strong>{' '}
            {legal.company_type || 'Micro-entreprise'}
          </li>
          <li>
            <strong>{legal.siren_label || 'Numéro SIREN'}:</strong> {legal.siren || '943 266 213'}
          </li>
          <li>
            <strong>{legal.address_label || 'Adresse du siège social'}:</strong>{' '}
            {legal.address || 'Paris, France'}
          </li>
          <li>
            <strong>{legal.phone_label || 'Téléphone'}:</strong>{' '}
            {legal.phone || '+33 6 26 93 27 34'}
          </li>
          <li>
            <strong>{legal.email_label || 'Email'}:</strong> {legal.email || 's.sidikoff@gmail.com'}
          </li>
        </ul>
      </section>
      <section className='mb-8'>
        <h2 className='text-2xl font-semibold mb-2'>
          {legal.director_title || 'Directeur de la publication'}
        </h2>
        <p>{legal.director_name || 'Sardorbek SIDIKOV'}</p>
      </section>
      <section className='mb-8'>
        <h2 className='text-2xl font-semibold mb-2'>{legal.hosting_title || 'Hébergement'}</h2>
        <ul className='space-y-1 text-gray-700'>
          <li>
            <strong>{legal.host_label || 'Hébergeur'}:</strong> {legal.host || 'Vercel Inc.'}
          </li>
          <li>
            <strong>{legal.host_address_label || 'Adresse'}:</strong>{' '}
            {legal.host_address || '340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis'}
          </li>
          <li>
            <strong>{legal.host_website_label || 'Site web'}:</strong>{' '}
            <span>{legal.host_website || 'vercel.com'}</span>
          </li>
        </ul>
      </section>
      <section className='mb-8'>
        <h2 className='text-2xl font-semibold mb-2'>
          {legal.ip_title || 'Propriété intellectuelle'}
        </h2>
        <p>
          {legal.ip_text ||
            "Ce site web et tous ses éléments (textes, images, logos, etc.) sont protégés par le droit d'auteur. Toute reproduction, même partielle, est interdite sans autorisation préalable."}
        </p>
      </section>
      <section className='mb-8'>
        <h2 className='text-2xl font-semibold mb-2'>
          {legal.data_title || 'Protection des données personnelles'}
        </h2>
        <p>
          {legal.data_text ||
            "Conformément au RGPD, vous disposez de droits sur vos données personnelles. Les données collectées via le formulaire de contact sont utilisées uniquement pour répondre à vos demandes et ne sont pas transmises à des tiers. Vous pouvez exercer vos droits concernant vos données personnelles en contactant à l'adresse e-mail : s.sidikoff@gmail.com."}
        </p>
      </section>
      <section className='mb-8'>
        <h2 className='text-2xl font-semibold mb-2'>{legal.cookies_title || 'Cookies'}</h2>
        <p>
          {legal.cookies_text ||
            'Ce site utilise des cookies essentiels au fonctionnement du site. En continuant à naviguer sur ce site, vous acceptez leur utilisation.'}
        </p>
      </section>
    </main>
  )
}
