import { ContactData } from '@/types/contact'
import { 
  EmailIcon, 
  PhoneIcon, 
  WhatsAppIcon, 
  TelegramIcon, 
  LinkedInIcon, 
  TwitterIcon, 
  GitHubIcon 
} from '@/components/icons'
import { LocationIcon, ClockIcon } from '@/components/icons/location'

export const contactData: ContactData = {
  channels: [
    {
      name: 'Email',
      icon: EmailIcon,
      href: 'mailto:hello@yourcompany.com',
      description: 'Get in touch via email for detailed discussions',
      color: 'bg-blue-500 hover:bg-blue-600'
    },
    {
      name: 'WhatsApp',
      icon: WhatsAppIcon,
      href: 'https://wa.me/1234567890',
      description: 'Chat with us instantly on WhatsApp',
      color: 'bg-green-500 hover:bg-green-600'
    },
    {
      name: 'Telegram',
      icon: TelegramIcon,
      href: 'https://t.me/yourcompany',
      description: 'Connect with us on Telegram',
      color: 'bg-blue-400 hover:bg-blue-500'
    },
    {
      name: 'Phone',
      icon: PhoneIcon,
      href: 'tel:+1234567890',
      description: 'Call us directly for immediate assistance',
      color: 'bg-purple-500 hover:bg-purple-600'
    }
  ],
  info: [
    {
      title: 'Address',
      icon: LocationIcon,
      value: '123 Business Street, Suite 100, New York, NY 10001',
      link: 'https://maps.google.com/?q=123+Business+Street+New+York+NY'
    },
    {
      title: 'Phone',
      icon: PhoneIcon,
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      title: 'Email',
      icon: EmailIcon,
      value: 'hello@yourcompany.com',
      link: 'mailto:hello@yourcompany.com'
    },
    {
      title: 'Business Hours',
      icon: ClockIcon,
      value: 'Monday - Friday: 9:00 AM - 6:00 PM'
    }
  ],
  socialLinks: [
    {
      platform: 'LinkedIn',
      url: 'https://linkedin.com/company/yourcompany',
      icon: LinkedInIcon
    },
    {
      platform: 'Twitter',
      url: 'https://twitter.com/yourcompany',
      icon: TwitterIcon
    },
    {
      platform: 'GitHub',
      url: 'https://github.com/yourcompany',
      icon: GitHubIcon
    }
  ]
}
