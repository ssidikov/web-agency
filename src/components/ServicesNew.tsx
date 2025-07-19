'use client';

import { motion } from 'framer-motion';
import { Dictionary } from '@/lib/i18n';
import {
  WebDevelopmentIcon,
  MobileDevIcon,
  DigitalMarketingIcon,
  ConsultingIcon
} from '@/components/icons';

interface ServicesProps {
  dictionary: Dictionary;
}

export function Services({ dictionary }: ServicesProps) {
  const services = [
    {
      title: dictionary.services.web_development.title,
      description: dictionary.services.web_development.description,
      features: dictionary.services.web_development.features,
      icon: WebDevelopmentIcon,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: dictionary.services.mobile_development.title,
      description: dictionary.services.mobile_development.description,
      features: dictionary.services.mobile_development.features,
      icon: MobileDevIcon,
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: dictionary.services.digital_marketing.title,
      description: dictionary.services.digital_marketing.description,
      features: dictionary.services.digital_marketing.features,
      icon: DigitalMarketingIcon,
      color: 'from-green-500 to-teal-500',
    },
    {
      title: dictionary.services.consulting.title,
      description: dictionary.services.consulting.description,
      features: dictionary.services.consulting.features,
      icon: ConsultingIcon,
      color: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {dictionary.services.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {dictionary.services.subtitle}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6`}>
                  <Icon size={32} className="text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature: string, idx: number) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
