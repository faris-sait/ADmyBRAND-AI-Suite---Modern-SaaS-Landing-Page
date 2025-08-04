'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Accordion from '@/components/ui/Accordion';
import { AccordionItem } from '@/types';

const FAQ = () => {
  const faqItems: AccordionItem[] = [
    {
      id: '1',
      question: 'How does ADmyBRAND AI Suite work?',
      answer: 'ADmyBRAND AI Suite uses advanced machine learning algorithms to analyze your marketing data, customer behavior, and campaign performance. It provides intelligent recommendations, automates routine tasks, and optimizes your campaigns in real-time to maximize ROI.'
    },
    {
      id: '2',
      question: 'What integrations are available?',
      answer: 'We integrate with over 100+ popular marketing tools including Google Ads, Facebook Ads, HubSpot, Salesforce, Mailchimp, Shopify, and many more. Our API also allows for custom integrations with your existing tech stack.'
    },
    {
      id: '3',
      question: 'Is there a free trial available?',
      answer: 'Yes! We offer a 14-day free trial with full access to all features. No credit card required to start. You can explore all the capabilities and see the results before making any commitment.'
    },
    {
      id: '4',
      question: 'How secure is my data?',
      answer: 'We take data security very seriously. All data is encrypted in transit and at rest using AES-256 encryption. We are SOC 2 Type II compliant, GDPR compliant, and regularly undergo security audits. Your data is never shared with third parties.'
    },
    {
      id: '5',
      question: 'Can I cancel my subscription anytime?',
      answer: 'Absolutely! You can cancel your subscription at any time with no penalties or cancellation fees. Your access will continue until the end of your current billing period, and you can export all your data.'
    },
    {
      id: '6',
      question: 'What kind of support do you provide?',
      answer: 'We provide 24/7 customer support via chat, email, and phone. Our Professional and Enterprise plans include priority support with dedicated account managers. We also offer comprehensive documentation, video tutorials, and regular training webinars.'
    },
    {
      id: '7',
      question: 'How quickly can I see results?',
      answer: 'Most customers see initial improvements within the first week of implementation. Significant results typically appear within 30 days as our AI learns your audience and optimizes campaigns. The more data you provide, the faster and more accurate the results.'
    },
    {
      id: '8',
      question: 'Do you offer custom enterprise solutions?',
      answer: 'Yes! Our Enterprise plan includes custom integrations, white-label options, dedicated infrastructure, and personalized onboarding. We can tailor the platform to meet your specific business requirements and compliance needs.'
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Got questions? We've got answers. Here are the most common questions
            about ADmyBRAND AI Suite.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion items={faqItems} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12 bg-white/70 backdrop-blur-lg rounded-2xl border border-white/20 shadow-xl p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-6">
            Our team is here to help. Get in touch and we'll answer any questions you have.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="mailto:support@admybrand.com"
              className="inline-flex items-center justify-center px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors"
            >
              Email Support
            </a>
            <button
              onClick={() => {
                const event = new CustomEvent('openDemoModal');
                window.dispatchEvent(event);
              }}
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-indigo-600 text-indigo-600 rounded-xl hover:bg-indigo-600 hover:text-white transition-colors"
            >
              Schedule Demo
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;