# ADmyBRAND AI Suite - Landing Page

A modern, high-converting SaaS landing page built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## 🌐 Live Demo

**Deployed Site**: https://capable-brioche-21f940.netlify.app/

## 🚀 Features

- **Modern Design**: 2025 design trends with glassmorphism and micro-interactions
- **Reusable Components**: 12+ production-ready components
- **Interactive Elements**: Pricing calculator, testimonials carousel, FAQ accordion
- **Form Validation**: Real-time validation with react-hook-form and Zod
- **Animations**: Smooth animations powered by Framer Motion
- **Responsive**: Mobile-first design with perfect cross-device compatibility
- **Performance**: Optimized for fast loading and smooth interactions
- **TypeScript**: Full type safety throughout the codebase
- **SEO Optimized**: Meta tags, structured data, and performance optimization

## 🏗️ Component Library

### Core Components
- `Button` - Multi-variant button with loading states and hover effects
- `Input` - Form input with validation styling and focus states
- `Card` - Flexible card container with glassmorphism effects
- `Modal` - Overlay modal with backdrop blur and smooth transitions
- `Accordion` - Collapsible content sections with animated expand/collapse
- `Badge` - Status and category badges with color variants

### Specialized Components
- `PricingCard` - Pricing tier display with feature lists and CTA buttons
- `TestimonialCard` - Customer testimonial display with ratings and avatars
- `FeatureCard` - Feature showcase with icons and hover animations
- `CTASection` - Call-to-action sections with gradient backgrounds
- `BlogCard` - Blog post preview cards with metadata
- `PricingCalculator` - Interactive pricing tool with real-time calculations

## 🎨 Design System

### Color Palette
- **Primary**: #6366F1 (Indigo) - Main brand color
- **Secondary**: #8B5CF6 (Purple) - Secondary actions
- **Accent**: #F59E0B (Amber) - Highlights and CTAs
- **Success**: #10B981 (Emerald) - Success states
- **Warning**: #F59E0B (Amber) - Warning states
- **Error**: #EF4444 (Red) - Error states
- **Neutral**: Gray scale from #F8FAFC to #1E293B

### Typography
- **Font Family**: Inter (Google Fonts)
- **Headings**: Font weights 600-700, 120% line height
- **Body Text**: Font weight 400, 150% line height
- **Responsive**: Fluid typography scaling across breakpoints

### Spacing & Layout
- **Base Unit**: 8px spacing system (4px, 8px, 16px, 24px, 32px, etc.)
- **Container**: Max-width 1200px with responsive padding
- **Grid System**: CSS Grid and Flexbox for layouts

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/admybrand-landing-page.git

# Navigate to project directory
cd admybrand-landing-page

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the landing page.

### Build & Deploy

```bash
# Build for production
npm run build

# Preview production build
npm run start

# Deploy to Netlify (if using Netlify CLI)
netlify deploy --prod
```

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 768px (Stack layouts, simplified navigation)
- **Tablet**: 768px - 1024px (Hybrid layouts, collapsible sidebar)
- **Desktop**: 1024px - 1440px (Full layouts, hover states)
- **Large Desktop**: > 1440px (Max-width constraints)

## 🔧 Component Usage Examples

### Button Component
```tsx
import { Button } from '@/components/ui/Button'

<Button 
  variant="primary" 
  size="lg" 
  loading={false}
  onClick={handleClick}
>
  Get Started Free
</Button>

// Available variants: primary, secondary, outline, ghost
// Available sizes: sm, md, lg, xl
```

### PricingCard Component
```tsx
import { PricingCard } from '@/components/PricingCard'

<PricingCard
  title="Pro Plan"
  price={49}
  billingCycle="monthly"
  features={[
    'Unlimited projects',
    'Advanced analytics',
    'Priority support',
    'Custom branding'
  ]}
  popular={true}
  ctaText="Start Free Trial"
  onCtaClick={handleSubscribe}
/>
```

### Modal Component
```tsx
import { Modal } from '@/components/ui/Modal'

<Modal 
  isOpen={isOpen} 
  onClose={() => setIsOpen(false)}
  title="Contact Us"
  size="md"
>
  <ContactForm onSubmit={handleSubmit} />
</Modal>
```

## 🎯 Performance Features

- **Image Optimization**: Next.js Image component with WebP format
- **Code Splitting**: Component-level lazy loading
- **Bundle Optimization**: Tree shaking and minification
- **Caching**: Static generation and API route caching
- **Core Web Vitals**: Optimized for LCP, FID, and CLS scores
- **Animation Performance**: GPU-accelerated animations

## 📝 Form Validation

All forms implement robust validation using:
- **react-hook-form**: Performant form handling
- **Zod**: TypeScript-first schema validation
- **Real-time feedback**: Instant validation on blur/change
- **Accessibility**: ARIA labels and error announcements

```tsx
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  message: z.string().min(10, "Message must be at least 10 characters")
})
```

## 🎨 Animation System

### Animation Types
- **Page Transitions**: Smooth enter/exit animations
- **Scroll Animations**: Intersection Observer triggered effects
- **Micro-interactions**: Button hovers, card lifts, input focus
- **Loading States**: Skeleton screens and spinners
- **Carousel/Slider**: Touch-friendly swipe gestures

### Performance Considerations
- Hardware acceleration with `transform` and `opacity`
- Reduced motion support with `prefers-reduced-motion`
- Animation frame optimization with Framer Motion

## 🧪 Testing & Quality

- **TypeScript**: Full type coverage
- **ESLint**: Code quality and consistency
- **Prettier**: Automatic code formatting
- **Responsive Testing**: Cross-device compatibility
- **Performance Audits**: Lighthouse optimization

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 📋 Additional Documentation

- [AI Usage Report](AI-USAGE.md) - Detailed breakdown of AI tool usage in development


---

*Built with ❤️ using modern web technologies and best practices for performance and accessibility.*
