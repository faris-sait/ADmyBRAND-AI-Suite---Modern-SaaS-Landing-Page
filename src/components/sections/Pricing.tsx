'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ToggleLeft, ToggleRight } from 'lucide-react';
import PricingCard from '@/components/ui/PricingCard';
import PricingCalculator from '@/components/ui/PricingCalculator';
import PaywallModal from '@/components/ui/PaywallModal';
const Pricing = () => {
  const [isPaywallOpen, setIsPaywallOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState({ name: '', price: 0, period: 'month' });
  const [isYearly, setIsYearly] = useState(false);

  const handleStartTrial = () => {
    const event = new CustomEvent('openDemoModal');
    window.dispatchEvent(event);
  };

  const handlePlanSelect = (plan: { title: string; price: number }) => {
    const period = isYearly ? 'year' : 'month';
    const price = isYearly ? plan.price * 10 : plan.price; // 2 months free on yearly
    setSelectedPlan({ name: plan.title, price: price, period: period });
    setIsPaywallOpen(true);
  };

  const monthlyPlans = [
    {
      title: 'Starter',
      price: 29,
      features: [
        'Up to 5 team members',
        'Basic AI insights',
        '10 active campaigns',
        'Email support',
        'Standard integrations',
        'Monthly reports'
      ]
    },
    {
      title: 'Professional',
      price: 79,
      features: [
        'Up to 25 team members',
        'Advanced AI analytics',
        'Unlimited campaigns',
        'Priority support',
        'Advanced integrations',
        'Real-time reporting',
        'A/B testing',
        'Custom dashboards'
      ],
      popular: true
    },
    {
      title: 'Enterprise',
      price: 199,
      features: [
        'Unlimited team members',
        'Full AI suite access',
        'White-label options',
        'Dedicated support',
        'Custom integrations',
        'Advanced security',
        'API access',
        'Training sessions'
      ]
    }
  ];

  const currentPlans = monthlyPlans.map(plan => ({
    ...plan,
    price: isYearly ? plan.price * 10 : plan.price,
    period: isYearly ? 'year' : 'month'
  }));
  return (
    <section id="pricing" className="py-20 px-6 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Simple, Transparent{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Pricing
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Choose the perfect plan for your business. Save 20% with yearly billing.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <span className={`font-medium ${!isYearly ? 'text-gray-900' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="relative inline-flex items-center"
            >
              {isYearly ? (
                <ToggleRight className="w-12 h-6 text-indigo-600" />
              ) : (
                <ToggleLeft className="w-12 h-6 text-gray-400" />
              )}
            </button>
            <span className={`font-medium ${isYearly ? 'text-gray-900' : 'text-gray-500'}`}>
              Yearly
            </span>
            {isYearly && (
              <span className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded-full text-sm font-medium">
                Save 20%
              </span>
            )}
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {currentPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <PricingCard
                {...plan}
                onSelect={() => handlePlanSelect(plan)}
              />
            </motion.div>
          ))}
        </div>

        {/* Pricing Calculator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Calculate Your Custom Price
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Use our interactive calculator to estimate your monthly costs based on your specific needs and team size.
            </p>
          </div>
          <PricingCalculator />
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-white/80 to-indigo-50/80 backdrop-blur-lg rounded-3xl border border-white/30 shadow-2xl p-8 md:p-12"
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">
              Everything You Need to Succeed
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              All plans come with these essential features to ensure your success from day one
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "14-day free trial",
                description: "Full access to all features"
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                ),
                title: "No setup fees",
                description: "Start immediately at no cost"
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ),
                title: "Cancel anytime",
                description: "No long-term commitments"
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "24/7 support",
                description: "Always here when you need us"
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                ),
                title: "Regular updates",
                description: "New features every month"
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                  </svg>
                ),
                title: "Data migration help",
                description: "Seamless transition assistance"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -2 }}
                className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/40 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center text-white">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{benefit.title}</h4>
                    <p className="text-sm text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200/50">
            <p className="text-center text-gray-600 font-medium">
              Join 50,000+ businesses already growing with ADmyBRAND AI Suite
            All plans include:
            </p>
          </div>
        </motion.div>
      </div>

      {/* Paywall Modal */}
      <PaywallModal
        isOpen={isPaywallOpen}
        onClose={() => setIsPaywallOpen(false)}
        selectedPlan={selectedPlan}
      />
    </section>
  );
};

export default Pricing;