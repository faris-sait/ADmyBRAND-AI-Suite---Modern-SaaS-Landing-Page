'use client';

import React from 'react';
import Hero from './components/sections/Hero';
import Features from './components/sections/Features';
import Pricing from './components/sections/Pricing';
import Testimonials from './components/sections/Testimonials';
import FAQ from './components/sections/FAQ';
import Demo from './components/sections/Demo';
import Blog from './components/sections/Blog';
import ContactForm from './components/ContactForm';
import Footer from './components/sections/Footer';
import CTASection from './components/ui/CTASection';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Features />
      <Demo />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Blog />
      <ContactForm />
      <CTASection
        title="Ready to Scale Your Marketing with AI?"
        description="Join over 50,000 businesses already using ADmyBRAND AI Suite to drive exceptional results. Start your free trial today and see the difference AI can make."
        buttonText="Start Free Trial"
        className="mx-6 mb-20"
      />
      <Footer />
    </div>
  );
}

export default App;