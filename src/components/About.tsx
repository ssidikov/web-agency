'use client'

import React from 'react'
import { motion, useInView } from 'framer-motion'
import { Dictionary } from '@/lib/dictionaries'
import {
  InnovationIcon,
  QualityIcon,
  PartnershipIcon
} from '@/components/icons'

interface AboutProps {
  dictionary: Dictionary
}

const About: React.FC<AboutProps> = ({ dictionary }) => {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  // Add safety checks for dictionary
  if (!dictionary || !dictionary.about) {
    return <div>Loading About section...</div>
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  const values = [
    {
      icon: InnovationIcon,
      title: dictionary.about.values.innovation.title,
      description: dictionary.about.values.innovation.description
    },
    {
      icon: QualityIcon,
      title: dictionary.about.values.quality.title,
      description: dictionary.about.values.quality.description
    },
    {
      icon: PartnershipIcon,
      title: dictionary.about.values.partnership.title,
      description: dictionary.about.values.partnership.description
    }
  ]

  return (
    <section ref={ref} id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {dictionary.about.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {dictionary.about.subtitle}
            </p>
          </motion.div>

          {/* About Content */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {dictionary.about.story.title}
              </h3>
              <div className="space-y-4 text-gray-600">
                <p>{dictionary.about.story.paragraph1}</p>
                <p>{dictionary.about.story.paragraph2}</p>
                <p>{dictionary.about.story.paragraph3}</p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {dictionary.about.mission.title}
              </h3>
              <div className="space-y-4 text-gray-600">
                <p>{dictionary.about.mission.description}</p>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 mt-8">
                {dictionary.about.stats?.map((stat: { value: string; label: string }, index: number) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600">
                      {stat.label}
                    </div>
                  </div>
                )) || null}
              </div>
            </motion.div>
          </div>

          {/* Values Section */}
          <motion.div variants={itemVariants}>
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
              {dictionary.about.values.title}
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-blue-50 transition-colors duration-300"
                  >
                    <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-blue-100 rounded-full">
                      <Icon size={32} className="text-blue-600" />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">
                      {value.title}
                    </h4>
                    <p className="text-gray-600">
                      {value.description}
                    </p>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About