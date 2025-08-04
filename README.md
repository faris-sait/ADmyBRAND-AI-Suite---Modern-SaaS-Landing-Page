# ADmyBRAND AI Suite - Landing Page

A modern, high-converting SaaS landing page built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: 2025 design trends with glassmorphism and micro-interactions
- **Reusable Components**: 12+ production-ready components
- **Interactive Elements**: Pricing calculator, testimonials carousel, FAQ accordion
- **Form Validation**: Real-time validation with react-hook-form and Zod
- **Animations**: Smooth animations powered by Framer Motion
- **Responsive**: Mobile-first design with perfect cross-device compatibility
- **Performance**: Optimized for fast loading and smooth interactions

## 🏗️ Component Library

### Core Components
- `Button` - Multi-variant button with loading states
- `Input` - Form input with validation styling
- `Card` - Flexible card container with glassmorphism
- `Modal` - Overlay modal with backdrop blur
- `Accordion` - Collapsible content sections
- `Badge` - Status and category badges

### Specialized Components
- `PricingCard` - Pricing tier display with features
- `TestimonialCard` - Customer testimonial display
- `FeatureCard` - Feature showcase with icons
- `CTASection` - Call-to-action sections
- `BlogCard` - Blog post preview cards
- `PricingCalculator` - Interactive pricing tool

## 🎨 Design System

### Colors
- Primary: #6366F1 (Indigo)
- Secondary: #8B5CF6 (Purple)  
- Accent: #F59E0B (Amber)
- Success: #10B981 (Emerald)
- Warning: #F59E0B (Amber)
- Error: #EF4444 (Red)

### Typography
- Font Family: Inter
- Headings: 120% line height
- Body: 150% line height
- Max 3 font weights

### Spacing
- 8px base spacing system
- Consistent margins and padding

## 🚀 Getting Started

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the landing page.

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px  
- Desktop: > 1024px

## 🔧 Component Usage

### Button Component
```tsx
<Button variant="primary" size="lg" loading={false}>
  Get Started
</Button>
```

### PricingCard Component  
```tsx
<PricingCard
  title="Pro"
  price={49}
  features={['Feature 1', 'Feature 2']}
  popular={true}
/>
```

### Modal Component
```tsx
<Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
  <p>Modal content</p>
</Modal>
```

## 🎯 Performance Features

- Image optimization
- Component lazy loading
- Smooth animations with performance monitoring
- Mobile-first responsive design
- Fast loading with optimized bundles

## 📝 Form Validation

All forms use react-hook-form with Zod validation schemas for type-safe form handling with real-time validation feedback.

## 🎨 Animation Features

- Page transitions
- Scroll-triggered animations
- Hover micro-interactions
- Loading states
- Smooth carousels

Built with ❤️ using modern web technologies and best practices.