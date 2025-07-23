'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { LinkedInIcon, GitHubIcon } from '@/components/icons'

const getFullYear = () => new Date().getFullYear()

// Social links data
const socialLinks = [
  { name: 'LinkedIn', href: 'https://linkedin.com', icon: <LinkedInIcon size={20} /> },
  { name: 'GitHub', href: 'https://github.com', icon: <GitHubIcon size={20} /> },
]

const quickLinks = [
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Contact', href: '/contact' },
]

export function Footer() {
  return (
    <footer className='relative bg-black overflow-hidden'>
      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Main Footer */}
        <div className='py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}>
            <h3 className='text-lg font-bold text-white mb-4'>
              <Image
                src='/logo-sidikoff.webp'
                alt='Sidikoff Digital Logo'
                width={220}
                height={64}
                className='invert h-16 w-auto inline-block'
              />
            </h3>
            <p className='text-gray-300 mb-4'>
              Creating exceptional digital experiences that drive growth and engagement through
              innovative design and cutting-edge technology.
            </p>
            <div className='flex space-x-4'>
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className='p-2 rounded-full bg-gray-700 text-gray-300 hover:bg-white hover:text-black transition-colors duration-200 cursor-pointer'
                  aria-label={link.name}>
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}>
            <h3 className='text-lg font-semibold text-white mb-4'>Quick Links</h3>
            <ul className='space-y-2'>
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className='text-gray-300 hover:text-blue-400 transition-colors duration-200 cursor-pointer'>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}>
            <h3 className='text-lg font-semibold text-white mb-4'>Services</h3>
            <ul className='space-y-2'>
              {['Web Development', 'Mobile Apps', 'UI/UX Design', 'Consulting'].map((service) => (
                <li key={service}>
                  <Link
                    href='/services'
                    className='text-gray-300 hover:text-blue-400 transition-colors duration-200 cursor-pointer'>
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}>
            <h3 className='text-lg font-semibold text-white mb-4'>Contact Info</h3>
            <div className='space-y-2 text-gray-300'>
              <p>Paris, France <br /> Toulouse, France</p>
              <p>+33 06 26 93 27 34</p>
              <p><a href='mailto:s.sidikoff@gmail.com' className='hover:text-blue-400'>s.sidikoff@gmail.com</a></p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className='py-6 border-t border-gray-700'>
          <div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
            <p className='text-gray-300 text-sm'>
              © {getFullYear()} SIDIKOFF DIGITAL. All rights reserved.
            </p>
            <div className='flex space-x-6'>
              <Link
                href='/mentions-legales'
                className='text-gray-300 hover:text-blue-400 text-sm transition-colors duration-200 cursor-pointer'>
                Mentions Légales
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
