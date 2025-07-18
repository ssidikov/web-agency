'use client';

import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function About() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
              About Our Agency
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-balance">
              We are a team of passionate designers and developers dedicated to creating digital experiences that make a difference.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                Founded in 2020, our agency emerged from a simple belief: that great design and technology should be accessible to businesses of all sizes. We started as a small team of freelancers and have grown into a full-service digital agency.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                Today, we work with startups, established businesses, and everything in between. Our approach combines strategic thinking with creative execution to deliver solutions that not only look great but drive real business results.
              </p>
            </motion.div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-400 dark:from-gray-600 dark:to-gray-800 rounded-2xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gray-50 dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-balance">
              These core principles guide everything we do and shape how we work with our clients.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                title: 'Innovation',
                description: 'We stay ahead of trends and embrace new technologies to deliver cutting-edge solutions.',
                icon: '⚡'
              },
              {
                title: 'Collaboration',
                description: 'We work closely with our clients as partners, not just vendors, to achieve shared success.',
                icon: '🤝'
              },
              {
                title: 'Excellence',
                description: 'We are committed to delivering the highest quality work and exceeding expectations.',
                icon: '🏆'
              }
            ].map((value) => (
              <motion.div
                key={value.title}
                variants={fadeInUp}
                className="text-center p-8 bg-white dark:bg-gray-800 rounded-xl"
              >
                <div className="text-5xl mb-6">{value.icon}</div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-balance">
              The talented individuals who bring your digital visions to life.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                name: 'Sarah Johnson',
                role: 'Creative Director',
                description: 'Leading our design team with 8+ years of experience in digital design and branding.',
              },
              {
                name: 'Mike Chen',
                role: 'Lead Developer',
                description: 'Full-stack developer specializing in modern web technologies and scalable architectures.',
              },
              {
                name: 'Emily Rodriguez',
                role: 'UX Designer',
                description: 'User experience expert focused on creating intuitive and accessible digital experiences.',
              }
            ].map((member) => (
              <motion.div
                key={member.name}
                variants={fadeInUp}
                className="text-center"
              >
                <div className="w-32 h-32 bg-gradient-to-br from-gray-200 to-gray-400 dark:from-gray-600 dark:to-gray-800 rounded-full mx-auto mb-6"></div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
                  {member.role}
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gray-900 dark:bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { number: '50+', label: 'Projects Completed' },
              { number: '30+', label: 'Happy Clients' },
              { number: '4', label: 'Years of Experience' },
              { number: '99%', label: 'Client Satisfaction' }
            ].map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeInUp}
              >
                <div className="text-4xl md:text-5xl font-bold text-white dark:text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 dark:text-gray-600">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
