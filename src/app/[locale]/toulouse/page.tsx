import { Metadata } from 'next'
import { generateFrenchSEOMetadata, generateLocalContent } from '@/lib/french-seo'
import { generateLocalBusinessSchema, businessLocations } from '@/lib/local-seo'
import { getDictionary } from '@/lib/dictionaries'
import SEOHead from '@/components/SEOHead'
import Link from 'next/link'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const localContent = generateLocalContent('Toulouse')

  return generateFrenchSEOMetadata('contact', {
    title: localContent.title,
    description: localContent.description,
    keywords:
      'agence web Toulouse, création site internet Toulouse, développeur web Toulouse, e-commerce Toulouse, SEO Toulouse, React Next.js Toulouse',
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/${locale}/toulouse`,
    locale,
  })
}

export default async function ToulousePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  // const dict = await getDictionary(locale)
  const localContent = generateLocalContent('Toulouse')
  const toulouseLocation = businessLocations.find(
    (loc) => loc.address.addressLocality === 'Toulouse'
  )!

  return (
    <>
      <SEOHead
        city='Toulouse'
        pageType='contact'
        structuredData={generateLocalBusinessSchema(toulouseLocation)}
      />

      {/* Hero Section Local */}
      <section className='relative py-20 bg-gradient-to-br from-[#3F72AF] to-[#112D4E] text-white overflow-hidden'>
        <div className='absolute inset-0'>
          <div className='absolute inset-0 bg-black/30' />
          <img
            src='/images/hero/hero-bg2.png'
            alt='Toulouse ville rose'
            className='w-full h-full object-cover'
          />
        </div>

        <div className='container mx-auto px-4 relative z-10'>
          <div className='max-w-4xl mx-auto text-center'>
            <h1 className='text-4xl md:text-6xl font-bold mb-6'>{localContent.content.heading}</h1>
            <p className='text-xl md:text-2xl mb-8 opacity-90'>{localContent.content.intro}</p>

            <div className='flex flex-wrap justify-center gap-4 mb-8'>
              <Link
                href='/fr/contact'
                className='bg-[#F9F7F7] text-[#112D4E] px-8 py-4 rounded-full font-semibold hover:bg-white transition-colors'>
                Devis Gratuit Toulouse
              </Link>
              <a
                href={`tel:${toulouseLocation.phone}`}
                className='border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#112D4E] transition-colors'>
                {toulouseLocation.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Spécificités Toulouse */}
      <section className='py-16 bg-[#F9F7F7]'>
        <div className='container mx-auto px-4'>
          <div className='max-w-6xl mx-auto'>
            <h2 className='text-3xl md:text-4xl font-bold text-center mb-12 text-[#112D4E]'>
              SIDIKOFF DIGITAL, Votre Agence Web dans la Ville Rose
            </h2>

            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
              {localContent.content.localAdvantages.map((advantage, index) => (
                <div
                  key={index}
                  className='bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow'>
                  <div className='w-12 h-12 bg-[#E91E63] text-white rounded-lg flex items-center justify-center mb-4'>
                    <span className='text-xl font-bold'>{index + 1}</span>
                  </div>
                  <p className='text-[#112D4E] font-medium'>{advantage}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Spécifiques Toulouse */}
      <section className='py-16'>
        <div className='container mx-auto px-4'>
          <div className='max-w-6xl mx-auto'>
            <h2 className='text-3xl md:text-4xl font-bold text-center mb-12 text-[#112D4E]'>
              Expertise Web pour l&apos;Écosystème Toulousain
            </h2>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {[
                {
                  title: 'Startups Aerospace & Tech',
                  description: "Solutions web pour l'écosystème aéronautique et spatial toulousain",
                  icon: '🚀',
                  keywords: 'startup web Toulouse, aerospace web',
                },
                {
                  title: 'E-commerce Occitanie',
                  description: 'Plateformes de vente adaptées au marché du Sud-Ouest',
                  icon: '🛒',
                  keywords: 'e-commerce Toulouse, boutique Occitanie',
                },
                {
                  title: 'PME Technologiques',
                  description: 'Applications React/Next.js pour entreprises innovantes',
                  icon: '⚡',
                  keywords: 'application web Toulouse, tech Toulouse',
                },
                {
                  title: 'SEO Local Sud-Ouest',
                  description: 'Référencement pour dominer le marché toulousain',
                  icon: '📈',
                  keywords: 'SEO Toulouse, référencement Occitanie',
                },
                {
                  title: 'Universités & Recherche',
                  description: 'Portails web pour institutions académiques',
                  icon: '🎓',
                  keywords: 'site université Toulouse, recherche web',
                },
                {
                  title: 'Support de Proximité',
                  description: 'Équipe locale disponible rapidement sur Toulouse',
                  icon: '🛠️',
                  keywords: 'support web Toulouse, maintenance locale',
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className='bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group border-l-4 border-[#E91E63]'>
                  <div className='text-4xl mb-4'>{service.icon}</div>
                  <h3 className='text-xl font-bold mb-4 text-[#112D4E] group-hover:text-[#E91E63] transition-colors'>
                    {service.title}
                  </h3>
                  <p className='text-gray-600 mb-4'>{service.description}</p>
                  <div className='text-sm text-[#E91E63] font-medium'>{service.keywords}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Secteurs Toulouse */}
      <section className='py-16 bg-[#F9F7F7]'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto text-center'>
            <h2 className='text-3xl md:text-4xl font-bold mb-8 text-[#112D4E]'>
              Zones d&apos;Intervention à Toulouse et Alentours
            </h2>
            <p className='text-lg mb-8 text-gray-600'>
              Service complet sur Toulouse Métropole et région Occitanie
            </p>

            <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mb-8'>
              {localContent.content.nearbyAreas.map((area, index) => (
                <div
                  key={index}
                  className='bg-white p-4 rounded-lg shadow border-l-2 border-[#E91E63]'>
                  <span className='text-[#112D4E] font-medium'>{area}</span>
                </div>
              ))}
              {[
                'Blagnac',
                'Colomiers',
                'Muret',
                'Balma',
                "L'Union",
                'Ramonville',
                'Labège',
                'Tournefeuille',
              ].map((area, index) => (
                <div
                  key={index + 3}
                  className='bg-white p-4 rounded-lg shadow border-l-2 border-[#E91E63]'>
                  <span className='text-[#112D4E] font-medium'>{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Écosystème Toulouse */}
      <section className='py-16'>
        <div className='container mx-auto px-4'>
          <div className='max-w-6xl mx-auto'>
            <h2 className='text-3xl md:text-4xl font-bold text-center mb-12 text-[#112D4E]'>
              Connectés à l&apos;Écosystème Innovant Toulousain
            </h2>

            <div className='grid md:grid-cols-3 gap-8'>
              <div className='text-center'>
                <div className='w-20 h-20 bg-[#E91E63] text-white rounded-full flex items-center justify-center mx-auto mb-4'>
                  🚁
                </div>
                <h3 className='text-xl font-bold mb-4'>Aéronautique & Spatial</h3>
                <p className='text-gray-600'>
                  Partenaires des acteurs majeurs de l&apos;aerospace toulousain
                </p>
              </div>

              <div className='text-center'>
                <div className='w-20 h-20 bg-[#E91E63] text-white rounded-full flex items-center justify-center mx-auto mb-4'>
                  🎓
                </div>
                <h3 className='text-xl font-bold mb-4'>Recherche & Innovation</h3>
                <p className='text-gray-600'>
                  Collaboration avec universités et centres de recherche
                </p>
              </div>

              <div className='text-center'>
                <div className='w-20 h-20 bg-[#E91E63] text-white rounded-full flex items-center justify-center mx-auto mb-4'>
                  🏢
                </div>
                <h3 className='text-xl font-bold mb-4'>Startups & Scale-ups</h3>
                <p className='text-gray-600'>
                  Support technique pour l&apos;écosystème entrepreneurial
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Toulouse */}
      <section className='py-16 bg-[#F9F7F7]'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto text-center'>
            <h2 className='text-3xl md:text-4xl font-bold mb-8 text-[#112D4E]'>
              Rencontrons-nous dans la Ville Rose
            </h2>

            <div className='grid md:grid-cols-3 gap-8 mb-12'>
              <div className='text-center'>
                <div className='w-16 h-16 bg-[#E91E63] text-white rounded-full flex items-center justify-center mx-auto mb-4'>
                  📍
                </div>
                <h3 className='font-bold mb-2'>Bureau Toulouse</h3>
                <p className='text-gray-600'>{localContent.content.contactInfo.address}</p>
              </div>

              <div className='text-center'>
                <div className='w-16 h-16 bg-[#E91E63] text-white rounded-full flex items-center justify-center mx-auto mb-4'>
                  📞
                </div>
                <h3 className='font-bold mb-2'>Direct Toulouse</h3>
                <a
                  href={`tel:${localContent.content.contactInfo.phone}`}
                  className='text-[#E91E63] font-medium hover:underline'>
                  {localContent.content.contactInfo.phone}
                </a>
              </div>

              <div className='text-center'>
                <div className='w-16 h-16 bg-[#E91E63] text-white rounded-full flex items-center justify-center mx-auto mb-4'>
                  ✉️
                </div>
                <h3 className='font-bold mb-2'>Email Toulouse</h3>
                <a
                  href={`mailto:${localContent.content.contactInfo.email}`}
                  className='text-[#E91E63] font-medium hover:underline'>
                  {localContent.content.contactInfo.email}
                </a>
              </div>
            </div>

            <div className='flex flex-wrap justify-center gap-4'>
              <Link
                href='/fr/contact'
                className='bg-[#E91E63] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#112D4E] transition-colors'>
                Consultation Gratuite
              </Link>
              <Link
                href='/fr/portfolio'
                className='border-2 border-[#E91E63] text-[#E91E63] px-8 py-4 rounded-full font-semibold hover:bg-[#E91E63] hover:text-white transition-colors'>
                Voir nos Réalisations
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
