import { ContactData } from '@/types/contact'
import {
  EmailIcon,
  PhoneIcon,
  WhatsAppIcon,
  TelegramIcon,
  LinkedInIcon,
  GitHubIcon,
} from '@/components/icons'
import { LocationIcon } from '@/components/icons/location'

export const contactData: ContactData = {
  channels: [
    {
      name: 'Email',
      icon: EmailIcon,
      href: 'mailto:s.sidikoff@gmail.com',
      description: 'Get in touch via email for detailed discussions',
      color: '',
    },
    {
      name: 'WhatsApp',
      icon: WhatsAppIcon,
      href: 'https://wa.me/+33626932734',
      description: 'Chat with us instantly on WhatsApp',
      color: 'bg-green-500 hover:bg-green-600',
    },
    {
      name: 'Telegram',
      icon: TelegramIcon,
      href: 'https://t.me/sardorbek_sidikov',
      description: 'Connect with us on Telegram',
      color: 'bg-blue-400 hover:bg-blue-500',
    },
    {
      name: 'Phone',
      icon: PhoneIcon,
      href: 'tel:+330626932734',
      description: 'Call us directly for immediate assistance',
      color: 'bg-purple-500 hover:bg-purple-600',
    },
  ],
  info: [
    {
      title: 'Localisations',
      icon: LocationIcon,
      value: 'Paris, France <br /> Toulouse, France',
      link: '',
    },
    {
      title: 'Téléphone',
      icon: PhoneIcon,
      value: '+33 06 26 93 27 34',
      link: 'tel:+330626932734',
    },
    {
      title: 'Email',
      icon: EmailIcon,
      value: 's.sidikoff@gmail.com',
      link: 'mailto:s.sidikoff@gmail.com',
    },
  ],
  socialLinks: [
    {
      platform: 'LinkedIn',
      url: 'https://www.linkedin.com/in/sardorbeksidikov/',
      icon: LinkedInIcon,
    },
    {
      platform: 'GitHub',
      url: 'https://github.com/ssidikov',
      icon: GitHubIcon,
    },
  ],
}
