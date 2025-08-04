'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Brain,
  BarChart3,
  Zap,
  Target,
  Users,
  Shield,
  Rocket,
  TrendingUp
} from 'lucide-react';
import FeatureCard from '@/components/ui/FeatureCard';

const Features = () => {
  const handleScheduleDemo = () => {
    const event = new CustomEvent('openDemoModal');
    window.dispatchEvent(event);
  };

  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'AI-Powered Insights',
      description: 'Advanced machine learning algorithms analyze your data to provide actionable insights and predictive recommendations for your marketing campaigns.'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Precision Targeting',
      description: 'Reach the right audience at the right time with our intelligent targeting system that optimizes for maximum conversion rates.'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Automated Campaigns',
      description: 'Set up intelligent automation workflows that handle your marketing campaigns 24/7, optimizing performance in real-time.'
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Advanced Analytics',
      description: 'Comprehensive dashboards and reports give you deep visibility into campaign performance and ROI across all channels.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Customer Journey Mapping',
      description: 'Visualize and optimize every touchpoint in your customer journey to maximize engagement and conversion rates.'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Data Security',
      description: 'Enterprise-grade security ensures your data is protected with encryption, compliance, and robust access controls.'
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: 'Lightning Fast Setup',
      description: 'Get up and running in minutes with our intuitive onboarding process and pre-built campaign templates.'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Performance Optimization',
      description: 'Continuous AI optimization ensures your campaigns improve over time, delivering better results with minimal effort.'
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-indigo-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Powerful Features for{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Modern Marketing
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Everything you need to create, manage, and optimize high-performing marketing campaigns
            with the power of artificial intelligence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;