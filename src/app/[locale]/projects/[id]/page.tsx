
import React from 'react'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import { getDictionary } from '@/lib/dictionaries'
import { projects } from '@/data/projects'

interface ProjectPageProps {
  params: Promise<{ locale: string; id: string }>
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { locale, id } = await params
  const project = projects.find(p => p.id === id)
  
  if (!project) {
    return {
      title: 'Projet non trouvé'
    }
  }

  return {
    title: `${project.title} | Sidikoff - Projets`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.image]
    }
  }
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }))
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { locale, id } = await params
  const project = projects.find(p => p.id === id)
  
  if (!project) {
    notFound()
  }

  const dict = await getDictionary(locale as any)

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <Link href={`/${locale}/projects`} className="text-blue-600 hover:text-blue-800 mb-8 inline-block">
          ← Retour aux projets
        </Link>
        
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">{project.title}</h1>
          
          <div className="relative h-96 mb-8">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
          
          <div className="prose max-w-none">
            <p className="text-xl text-gray-600 mb-6">{project.description}</p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Technologies utilisées</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Liens</h3>
                <div className="space-y-2">
                  {project.demo && (
                    <a 
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-blue-600 hover:text-blue-800"
                    >
                      🌐 Voir le site →
                    </a>
                  )}
                  {project.github && (
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-blue-600 hover:text-blue-800"
                    >
                      🔗 Code source →
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

