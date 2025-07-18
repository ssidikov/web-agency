import { PortfolioItem } from '@/types';

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    description: 'A modern, scalable e-commerce platform built with Next.js and Stripe integration, featuring real-time inventory management and advanced analytics.',
    category: 'Web Development',
    image: '/portfolio/ecommerce.jpg',
    url: 'https://example-ecommerce.com',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Tailwind CSS'],
    featured: true,
    completedAt: '2024-01-15',
  },
  {
    id: 'healthcare-app',
    title: 'Healthcare Management App',
    description: 'A comprehensive healthcare management system with patient portals, appointment scheduling, and telemedicine capabilities.',
    category: 'Mobile App',
    image: '/portfolio/healthcare.jpg',
    technologies: ['React Native', 'Node.js', 'MongoDB', 'Socket.io'],
    featured: true,
    completedAt: '2023-11-20',
  },
  {
    id: 'fintech-dashboard',
    title: 'FinTech Analytics Dashboard',
    description: 'Real-time financial analytics dashboard with advanced data visualization and automated reporting features.',
    category: 'Dashboard',
    image: '/portfolio/fintech.jpg',
    technologies: ['React', 'D3.js', 'Python', 'FastAPI', 'Redis'],
    featured: false,
    completedAt: '2023-09-10',
  },
  {
    id: 'brand-identity',
    title: 'Tech Startup Brand Identity',
    description: 'Complete brand identity design for a innovative tech startup, including logo, guidelines, and marketing materials.',
    category: 'Branding',
    image: '/portfolio/branding.jpg',
    technologies: ['Adobe Creative Suite', 'Figma'],
    featured: false,
    completedAt: '2023-12-05',
  },
];

export const portfolioCategories = [
  'All',
  'Web Development',
  'Mobile App',
  'Dashboard',
  'Branding',
];
