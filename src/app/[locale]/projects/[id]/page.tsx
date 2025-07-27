import React from 'react'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import { getDictionary } from '@/lib/dictionaries'
import { Locale } from '@/lib/i18n'
import { projects } from '@/data/projects'

interface ProjectPageProps {
  params: Promise<{ locale: Locale; id: string }>
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { locale, id } = await params
  const project = projects.find((p) => p.id === id)

  if (!project) {
    return {
      title: 'Projet non trouvé',
    }
  }

  return {
    title: `${project.title} | Sidikoff - Projets`,
    description: project.description,
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/${locale}/projects/${id}`,
      languages: {
        'fr': `/fr/projects/${id}`,
        'en': `/en/projects/${id}`,
        'ru': `/ru/projects/${id}`,
      }
    },
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.image],
      locale: locale,
    },
  }
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }))
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { locale, id } = await params
  const project = projects.find((p) => p.id === id)

  if (!project) {
    notFound()
  }

  const dict = await getDictionary(locale)

  return (
    <div className='min-h-screen bg-white'>
      <div className='container mx-auto px-4 py-16'>
        <Link
          href={`/${locale}/projects`}
          className='text-blue-600 hover:text-blue-800 mb-8 inline-block'>
          ← {dict.common?.back || 'Retour'} {dict.navigation?.portfolio || 'aux projets'}
        </Link>

        <div className='max-w-4xl mx-auto'>
          <h1 className='text-4xl font-bold mb-6'>{project.title}</h1>

          <div className='relative h-96 mb-8'>
            <Image
              src={project.image}
              alt={project.title}
              fill
              className='object-cover rounded-lg'
              priority
            />
          </div>

          <div className='prose max-w-none'>
            <p className='text-xl text-gray-600 mb-6'>{project.description}</p>

            <div className='grid md:grid-cols-2 gap-8 mb-8'>
              <div>
                <h3 className='text-xl font-semibold mb-4'>
                  {locale === 'fr' ? 'Technologies utilisées' : 
                   locale === 'en' ? 'Technologies used' : 
                   'Используемые технологии'}
                </h3>
                <div className='flex flex-wrap gap-2'>
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className='px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm'>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className='text-xl font-semibold mb-4'>
                  {locale === 'fr' ? 'Liens' : 
                   locale === 'en' ? 'Links' : 
                   'Ссылки'}
                </h3>
                <div className='space-y-2'>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='block text-blue-600 hover:text-blue-800'>
                      🌐 {locale === 'fr' ? 'Voir le site' : 
                           locale === 'en' ? 'View site' : 
                           'Посмотреть сайт'} →
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='block text-blue-600 hover:text-blue-800'>
                      🔗 {locale === 'fr' ? 'Code source' : 
                           locale === 'en' ? 'Source code' : 
                           'Исходный код'} →
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
