import { Metadata } from 'next'
import { generateFrenchSEOMetadata, generateLocalContent } from '@/lib/french-seo'
import { generateLocalBusinessSchema, businessLocations } from '@/lib/local-seo'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const localContent = generateLocalContent('Paris')

  return generateFrenchSEOMetadata('contact', {
    title: localContent.title,
    description: localContent.description,
    keywords:
      'agence web Paris, création site internet Paris, développeur web Paris, e-commerce Paris, SEO Paris, React Next.js Paris',
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/${locale}/paris`,
    locale,
  })
}

export default async function ParisPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const localContent = generateLocalContent('Paris')
  const parisLocation = businessLocations.find((loc) => loc.address.addressLocality === 'Paris')!

  return (
    <>
      {/* Structured Data for Paris */}
      <Script
        id="paris-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateLocalBusinessSchema(parisLocation), null, 0),
        }}
      />

      {/* Hero Section Local */}
      <section className='relative py-20 bg-gradient-to-br from-[#3F72AF] to-[#112D4E] text-white overflow-hidden'>
        <div className='absolute inset-0'>
          <div className='absolute inset-0 bg-black/30' />
          <Image
            src='/images/hero/hero-bg1.webp'
            alt='Paris skyline'
            className='w-full h-full object-cover'
            fill
            priority
          />
        </div>

        <div className='container mx-auto px-4 relative z-10'>
          <div className='max-w-4xl mx-auto text-center'>
            <h1 className='text-4xl md:text-6xl font-bold mb-6'>{localContent.content.heading}</h1>
            <p className='text-xl md:text-2xl mb-8 opacity-90'>{localContent.content.intro}</p>

            <div className='flex flex-wrap justify-center gap-4 mb-8'>
              <Link
                href={`/${locale}/contact`}
                className='bg-[#F9F7F7] text-[#112D4E] px-8 py-4 rounded-full font-semibold hover:bg-white transition-colors'>
                Devis Gratuit Paris
              </Link>
              <a
                href={`tel:${parisLocation.phone}`}
                className='border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#112D4E] transition-colors'>
                {parisLocation.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Avantages Locaux */}
      <section className='py-16 bg-[#F9F7F7]'>
        <div className='container mx-auto px-4'>
          <div className='max-w-6xl mx-auto'>
            <h2 className='text-3xl md:text-4xl font-bold text-center mb-12 text-[#112D4E]'>
              Pourquoi Choisir SIDIKOFF DIGITAL à Paris ?
            </h2>

            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
              {localContent.content.localAdvantages.map((advantage, index) => (
                <div
                  key={index}
                  className='bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow'>
                  <div className='w-12 h-12 bg-[#3F72AF] text-white rounded-lg flex items-center justify-center mb-4'>
                    <span className='text-xl font-bold'>{index + 1}</span>
                  </div>
                  <p className='text-[#112D4E] font-medium'>{advantage}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services à Paris */}
      <section className='py-16'>
        <div className='container mx-auto px-4'>
          <div className='max-w-6xl mx-auto'>
            <h2 className='text-3xl md:text-4xl font-bold text-center mb-12 text-[#112D4E]'>
              Nos Services Web à Paris
            </h2>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {[
                {
                  title: 'Création Sites Web Paris',
                  description: 'Sites vitrine et corporate sur mesure pour entreprises parisiennes',
                  icon: '🎨',
                  keywords: 'site vitrine Paris, site corporate Paris',
                },
                {
                  title: 'E-commerce Paris',
                  description: 'Boutiques en ligne performantes adaptées au marché parisien',
                  icon: '🛒',
                  keywords: 'boutique en ligne Paris, e-commerce Paris',
                },
                {
                  title: 'Applications Web',
                  description: 'Solutions React/Next.js pour startups et PME parisiennes',
                  icon: '⚡',
                  keywords: 'application web Paris, React Paris',
                },
                {
                  title: 'SEO Local Paris',
                  description: 'Référencement local pour être visible dans Paris et Île-de-France',
                  icon: '📈',
                  keywords: 'SEO Paris, référencement local Paris',
                },
                {
                  title: 'Refonte & Modernisation',
                  description: 'Mise à jour de sites existants avec technologies modernes',
                  icon: '🔄',
                  keywords: 'refonte site web Paris, modernisation Paris',
                },
                {
                  title: 'Maintenance & Support',
                  description: 'Support technique réactif depuis notre bureau parisien',
                  icon: '🛠️',
                  keywords: 'maintenance site Paris, support web Paris',
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className='bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group'>
                  <div className='text-4xl mb-4'>{service.icon}</div>
                  <h3 className='text-xl font-bold mb-4 text-[#112D4E] group-hover:text-[#3F72AF] transition-colors'>
                    {service.title}
                  </h3>
                  <p className='text-gray-600 mb-4'>{service.description}</p>
                  <div className='text-sm text-[#3F72AF] font-medium'>{service.keywords}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Zone de Couverture Paris */}
      <section className='py-16 bg-[#F9F7F7]'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto text-center'>
            <h2 className='text-3xl md:text-4xl font-bold mb-8 text-[#112D4E]'>
              Zones d&apos;Intervention à Paris
            </h2>
            <p className='text-lg mb-8 text-gray-600'>
              Nous intervenons dans tous les arrondissements parisiens et la région Île-de-France
            </p>

            <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mb-8'>
              {localContent.content.nearbyAreas.map((area, index) => (
                <div key={index} className='bg-white p-4 rounded-lg shadow'>
                  <span className='text-[#112D4E] font-medium'>{area}</span>
                </div>
              ))}
              {[
                '1er arrondissement',
                '2ème arrondissement',
                '8ème arrondissement',
                '16ème arrondissement',
                '17ème arrondissement',
                'Neuilly-sur-Seine',
                'Boulogne-Billancourt',
                'Levallois-Perret',
              ].map((area, index) => (
                <div key={index + 4} className='bg-white p-4 rounded-lg shadow'>
                  <span className='text-[#112D4E] font-medium'>{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Local */}
      <section className='py-16'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto text-center'>
            <h2 className='text-3xl md:text-4xl font-bold mb-8 text-[#112D4E]'>
              Contactez Notre Équipe Parisienne
            </h2>

            <div className='grid md:grid-cols-3 gap-8 mb-12'>
              <div className='text-center'>
                <div className='w-16 h-16 bg-[#3F72AF] text-white rounded-full flex items-center justify-center mx-auto mb-4'>
                  📍
                </div>
                <h3 className='font-bold mb-2'>Adresse Paris</h3>
                <p className='text-gray-600'>{localContent.content.contactInfo.address}</p>
              </div>

              <div className='text-center'>
                <div className='w-16 h-16 bg-[#3F72AF] text-white rounded-full flex items-center justify-center mx-auto mb-4'>
                  📞
                </div>
                <h3 className='font-bold mb-2'>Téléphone Paris</h3>
                <a
                  href={`tel:${localContent.content.contactInfo.phone}`}
                  className='text-[#3F72AF] font-medium hover:underline'>
                  {localContent.content.contactInfo.phone}
                </a>
              </div>

              <div className='text-center'>
                <div className='w-16 h-16 bg-[#3F72AF] text-white rounded-full flex items-center justify-center mx-auto mb-4'>
                  ✉️
                </div>
                <h3 className='font-bold mb-2'>Email Paris</h3>
                <a
                  href={`mailto:${localContent.content.contactInfo.email}`}
                  className='text-[#3F72AF] font-medium hover:underline'>
                  {localContent.content.contactInfo.email}
                </a>
              </div>
            </div>

            <Link
              href='/fr/contact'
              className='inline-block bg-[#3F72AF] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#112D4E] transition-colors'>
              Demander un Devis Gratuit
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
