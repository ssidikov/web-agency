import { FAQItem } from '@/types';

export const faqItems: FAQItem[] = [
  {
    id: 'project-timeline',
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary depending on complexity and scope. A simple website typically takes 4-6 weeks, while complex web applications can take 3-6 months. We provide detailed timelines during our initial consultation.',
    category: 'General',
  },
  {
    id: 'project-cost',
    question: 'What are your pricing models?',
    answer: 'We offer flexible pricing models including fixed-price projects, hourly rates, and retainer agreements. Pricing depends on project scope, timeline, and complexity. Contact us for a personalized quote.',
    category: 'Pricing',
  },
  {
    id: 'technologies',
    question: 'What technologies do you work with?',
    answer: 'We specialize in modern web technologies including React, Next.js, TypeScript, Node.js, and various databases. We also work with mobile technologies like React Native and design tools like Figma.',
    category: 'Technical',
  },
  {
    id: 'maintenance',
    question: 'Do you provide ongoing maintenance?',
    answer: 'Yes, we offer comprehensive maintenance packages including security updates, performance optimization, content updates, and technical support. Maintenance plans can be customized to your needs.',
    category: 'Services',
  },
  {
    id: 'design-process',
    question: 'What is your design process?',
    answer: 'Our design process includes discovery, wireframing, prototyping, visual design, and user testing. We involve clients at every stage to ensure the final product meets their vision and goals.',
    category: 'Process',
  },
  {
    id: 'revisions',
    question: 'How many revisions are included?',
    answer: 'We include up to 3 rounds of revisions in our standard packages. Additional revisions can be accommodated and will be priced separately. We work closely with clients to minimize the need for extensive revisions.',
    category: 'Process',
  },
  {
    id: 'communication',
    question: 'How do you handle project communication?',
    answer: 'We maintain regular communication through weekly status meetings, project management tools, and dedicated Slack channels. You\'ll always be informed about project progress and any important updates.',
    category: 'Process',
  },
  {
    id: 'hosting',
    question: 'Do you provide hosting services?',
    answer: 'While we don\'t provide hosting directly, we can recommend reliable hosting providers and assist with deployment. We can also help set up cloud infrastructure on AWS, Vercel, or other platforms.',
    category: 'Technical',
  },
];

export const faqCategories = [
  'All',
  'General',
  'Pricing',
  'Technical',
  'Services',
  'Process',
];
