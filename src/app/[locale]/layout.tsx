import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { getDictionary } from '@/lib/dictionaries'
import { Locale } from '@/lib/i18n'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

interface RootLayoutProps {
  children: React.ReactNode
  params: Promise<{ locale: Locale }>
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Web Agency - Professional Web Development',
    description: 'Professional web development services for modern businesses',
    other: {
      'google-site-verification': 'your-verification-code',
    },
  }
}

export default async function LocaleLayout({ children, params }: RootLayoutProps) {
  const { locale } = await params

  const fallbackDict = {
    common: {
      app_name: 'Web Agency',
      description: 'Professional web development',
      loading: 'Loading...',
      error: 'An error occurred.',
      try_again: 'Try Again',
      learn_more: 'Learn More',
      view_all: 'View All',
      back: 'Back',
      next: 'Next',
      previous: 'Previous',
      close: 'Close',
      open: 'Open',
    },
    navigation: {
      home: 'Home',
      services: 'Services',
      portfolio: 'Portfolio',
      faq: 'FAQ',
      contact: 'Contact',
      language: 'Language',
    },
    footer: {
      description: 'Professional digital solutions',
      quick_links: 'Quick Links',
      services_links: 'Services',
      contact_info: 'Contact Info',
      social_media: 'Follow Us',
      services: {
        web_creation: 'Website Creation',
        web_redesign: 'Website Redesign',
        seo_optimization: 'SEO Optimization',
        maintenance: 'Maintenance',
        web_applications: 'Web Applications',
        ecommerce: 'E-commerce',
      },
    },
    '404': {
      title: 'Page Not Found',
      description: 'Sorry, the page you are looking for does not exist.',
      search_placeholder: 'Search...',
      search_button: 'Search',
      go_home: 'Go Home',
      popular_pages: 'Popular Pages',
    },
    hero: {
      badge: 'Badge',
      title: 'Welcome',
      subtitle: 'Your digital partner',
      cta_primary: 'Get Started',
      cta_secondary: 'Learn More',
      features: [],
    },
    services: {
      title: 'Our Services',
      subtitle: 'What we offer',
      web_creation: {
        title: 'Website Creation',
        subtitle: 'Modern websites',
        features: [],
        description: 'We create modern websites.',
      },
      web_redesign: {
        title: 'Website Redesign',
        features: [],
        description: 'We redesign your website.',
      },
      seo_optimization: {
        title: 'SEO Optimization',
        features: [],
        description: 'Improve your SEO.',
      },
      maintenance: {
        title: 'Maintenance',
        features: [],
        description: 'Website maintenance.',
      },
      cta_banner: {
        background: '',
        description: 'Get in touch for a quote.',
        cta: 'Contact Us',
      },
      list: [],
    },
    faq: {
      title: 'FAQ',
      subtitle: 'Frequently Asked Questions',
      categories: {
        general: 'General',
        pricing: 'Pricing',
        support: 'Support',
      },
      questions: {},
    },
    portfolio: {
      title: 'Portfolio',
      subtitle: 'Our work',
      filter: {
        all: 'All',
        web: 'Web',
        mobile: 'Mobile',
        design: 'Design',
      },
      projects: {},
      view_project: 'View Project',
      live_demo: 'Live Demo',
      github: 'GitHub',
      list: [],
    },
    contact: {
      title: 'Contact',
      subtitle: 'Get in touch',
      description: 'Contact us for more information.',
      quickContact: 'Quick Contact',
      social: 'Social Media',
      socialDesc: 'Follow us on social media.',
      form: {
        title: 'Contact Form',
        name: {
          label: 'Name',
          placeholder: 'Enter your name',
        },
        email: {
          label: 'Email',
          placeholder: 'Enter your email',
        },
        phone: {
          label: 'Phone',
          placeholder: 'Enter your phone number',
        },
        subject: {
          label: 'Subject',
          placeholder: 'Enter subject',
        },
        message: {
          label: 'Message',
          placeholder: 'Enter your message',
        },
        submit: 'Submit',
        sending: 'Sending...',
        send: 'Send',
        success: 'Message sent!',
        error: 'Error sending message.',
      },
      info: {
        title: 'Contact Info',
        localisations: 'Localisations',
        locations: [],
        phone_label: 'Phone',
        email_label: 'Email',
        address: 'Address',
        phone: 'Phone',
        email: 'Email',
        hours: 'Hours',
      },
      channels: {
        title: 'Contact Channels',
        email: 'Email',
        emailDesc: 'Contact us by email.',
        whatsapp: 'WhatsApp',
        whatsappDesc: 'Chat with us on WhatsApp.',
        telegram: 'Telegram',
        telegramDesc: 'Message us on Telegram.',
        phone: 'Phone',
        phoneDesc: 'Call us by phone.',
        address: 'Address',
      },
    },
    legal: {
      title: 'Legal Notice',
      company_info_title: 'Company Information',
      company_name_label: 'Company Name',
      company_name: 'Web Agency',
      company_type_label: 'Company Type',
      company_type: 'SAS',
      siren_label: 'SIREN',
      siren: '000 000 000',
      address_label: 'Address',
      address: '123 Main St, Paris',
      phone_label: 'Phone',
      phone: '+33 1 23 45 67 89',
      email_label: 'Email',
      email: 'info@webagency.com',
      director_title: 'Director',
      director_name: 'John Doe',
      hosting_title: 'Hosting',
      host_label: 'Host',
      host: 'Vercel Inc.',
      host_address_label: 'Host Address',
      host_address: '340 S Lemon Ave #4133, Walnut, CA 91789, USA',
      host_website_label: 'Host Website',
      host_website: 'https://vercel.com',
      ip_title: 'Intellectual Property',
      ip_text: 'All content is protected.',
      data_title: 'Data Protection',
      data_text: 'Your data is safe.',
      cookies_title: 'Cookies',
      cookies_text: 'This site uses cookies.',
    },
  }

  try {
    const dict = await getDictionary(locale)

    // Debug logging to see what we're getting
    console.log('Dictionary loaded for locale:', locale)
    console.log('Dictionary keys:', Object.keys(dict))
    console.log('Navigation object:', dict.navigation)

    // Ensure dict is an object and navigation exists, provide fallback if needed
    if (typeof dict !== 'object' || dict === null) {
      console.warn('Dictionary is not an object for locale:', locale)
      return (
        <html lang={locale}>
          <body className={`${inter.className} text-[#112D4E] antialiased`}>
            <div className='min-h-screen'>
              <Header locale={locale} dictionary={fallbackDict} />
              <main className='m-0 p-0'>
                <div className='p-4'>
                  <h1>Loading Error</h1>
                  <p>There was an error loading the page. Please refresh.</p>
                </div>
              </main>
              <Footer dictionary={fallbackDict} locale={locale} />
            </div>
          </body>
        </html>
      )
    }

    if (!('navigation' in dict)) {
      if (typeof console !== 'undefined' && typeof console.warn === 'function') {
        console.warn('Navigation object is missing from dictionary for locale:', locale)
      }
      // Add navigation object to dictionary with proper typing
      Object.assign(dict, {
        navigation: {
          home: 'Home',
          services: 'Services',
          portfolio: 'Portfolio',
          faq: 'FAQ',
          contact: 'Contact',
          language: 'Language',
        },
      })
    }

    return (
      <html lang={locale}>
        <body className={`${inter.className} text-[#112D4E] antialiased`}>
          <div className='min-h-screen'>
            <Header locale={locale} dictionary={dict} />
            <main className='m-0 p-0'>{children}</main>
            <Footer dictionary={dict} locale={locale} />
          </div>
        </body>
      </html>
    )
  } catch (error) {
    console.error('Error in LocaleLayout:', error)

    return (
      <html lang={locale}>
        <body className={`${inter.className} text-[#112D4E] antialiased`}>
          <div className='min-h-screen'>
            <Header locale={locale} dictionary={fallbackDict} />
            <main className='m-0 p-0'>
              <div className='p-4'>
                <h1>Loading Error</h1>
                <p>There was an error loading the page. Please refresh.</p>
              </div>
            </main>
            <Footer dictionary={fallbackDict} locale={locale} />
          </div>
        </body>
      </html>
    )
  }
}
