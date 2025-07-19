# UI Components Documentation

This directory contains all the reusable and animated UI components for the Next.js 14 project.

## Components Overview

### Layout Components

#### Header
- **File**: `Header.tsx`
- **Features**: 
  - Sticky navigation with scroll detection
  - Dark/light mode toggle
  - Mobile-responsive hamburger menu
  - Smooth animations with Framer Motion
  - Active link highlighting
- **Usage**: `import { Header } from '@/components'`

#### Footer
- **File**: `Footer.tsx`
- **Features**:
  - Social media links with hover animations
  - Legal links and quick navigation
  - Company information and contact details
  - Responsive grid layout
- **Usage**: `import { Footer } from '@/components'`

### Section Components

#### Hero
- **File**: `Hero.tsx`
- **Features**:
  - Animated background with floating shapes
  - Gradient text effects
  - Call-to-action buttons with hover effects
  - Statistics display
  - Scroll indicator animation
- **Usage**: `import { Hero } from '@/components'`

#### About
- **File**: `About.tsx`
- **Features**:
  - Interactive timeline with alternating layout
  - Company values grid
  - Team member cards with avatar placeholders
  - Mission statement section
- **Usage**: `import { About } from '@/components'`

#### Services
- **File**: `Services.tsx`
- **Features**:
  - Service cards with custom icons
  - Technology stack display
  - Process timeline with connecting lines
  - Hover effects and animations
- **Usage**: `import { Services } from '@/components'`

#### Portfolio
- **File**: `Portfolio.tsx`
- **Features**:
  - Category filtering system
  - Project cards with overlay effects
  - Technology badges
  - Featured project highlighting
- **Usage**: `import { Portfolio } from '@/components'`

#### FAQ
- **File**: `FAQ.tsx`
- **Features**:
  - Category-based question filtering
  - Accordion-style Q&A with smooth animations
  - Search functionality
  - CTA section for additional questions
- **Usage**: `import { FAQ } from '@/components'`

#### Contact
- **File**: `Contact.tsx`
- **Features**:
  - Form validation with error handling
  - Multiple contact methods (WhatsApp, Telegram, Email, Phone)
  - Office information display
  - Responsive form layout
- **Usage**: `import { Contact } from '@/components'`

### Page Components

#### NotFound
- **File**: `NotFound.tsx`
- **Features**:
  - Animated 404 error display
  - Page search functionality
  - Navigation suggestions
  - Floating background animations
  - Back/Home navigation buttons
- **Usage**: `import { NotFound } from '@/components'`

## Design System

### Colors
- **Primary**: `#000000` (light) / `#ffffff` (dark)
- **Secondary**: `#ffffff` (light) / `#000000` (dark)
- **Accent**: `#6366f1` (indigo-600)
- **Background**: `#ffffff` (light) / `#0a0a0a` (dark)

### Animation Library
All components use **Framer Motion** for smooth animations:
- Fade in/out effects
- Slide animations
- Scale transforms
- Stagger animations for lists
- Hover and tap interactions

### Responsive Design
- **Mobile-first approach**
- Breakpoints: `sm: 640px`, `md: 768px`, `lg: 1024px`, `xl: 1280px`
- All components are fully responsive
- Touch-friendly interactive elements

### Accessibility Features
- ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- Color contrast compliance
- Focus indicators

## Usage Examples

### Basic Page Structure
```tsx
import { Header, Hero, About, Services, Portfolio, FAQ, Contact, Footer } from '@/components';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
```

### 404 Page
```tsx
import { NotFound } from '@/components';

export default function NotFoundPage() {
  return <NotFound />;
}
```

### Individual Component Usage
```tsx
import { Hero, Services } from '@/components';

export default function LandingPage() {
  return (
    <div>
      <Hero />
      <Services />
    </div>
  );
}
```

## Customization

### Theme Variables
Update CSS custom properties in `globals.css`:
```css
:root {
  --primary: #your-color;
  --accent: #your-accent;
  /* ... other variables */
}
```

### Component Props
Most components accept standard React props and can be extended:
```tsx
interface ComponentProps {
  className?: string;
  children?: React.ReactNode;
  // ... other props
}
```

### Animation Customization
Modify Framer Motion animations by updating the motion configurations in each component:
```tsx
const customAnimation = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 }
};
```

## Performance Considerations

- All components use React.memo where appropriate
- Lazy loading for heavy animations
- Optimized image placeholders
- Efficient re-renders with proper key props
- CSS-in-JS optimizations with Tailwind CSS

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Responsive design tested across devices
- Fallbacks for older browsers where needed

## Dependencies

- **Next.js 14**: React framework
- **Framer Motion**: Animation library
- **Tailwind CSS**: Utility-first CSS framework
- **TypeScript**: Type safety
- **React**: UI library

## Contributing

When adding new components:
1. Follow the existing naming conventions
2. Include proper TypeScript types
3. Add responsive design considerations
4. Include accessibility features
5. Document props and usage examples
6. Export from `index.ts`
