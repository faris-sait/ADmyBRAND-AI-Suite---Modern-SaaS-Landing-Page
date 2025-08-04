'use client';

import React from 'react';
import { motion } from 'framer-motion';
import BlogCard from '@/components/ui/BlogCard';
import Button from '@/components/ui/Button';

const Blog = () => {
  const handleNewsletterSubscribe = () => {
    const event = new CustomEvent('openFreeTrialModal');
    window.dispatchEvent(event);
  };

  const blogPosts = [
    {
      title: '10 AI Marketing Trends That Will Dominate 2025',
      excerpt: 'Discover the latest AI marketing trends and how they\'re reshaping the industry. From predictive analytics to personalized content generation.',
      author: 'Sarah Mitchell',
      date: 'Jan 15, 2025',
      readTime: '8 min read',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['AI', 'Marketing', 'Trends'],
      href: '/blog/ai-marketing-trends-2025'
    },
    {
      title: 'How to Increase ROI by 300% with AI Automation',
      excerpt: 'Learn the exact strategies our top customers use to achieve incredible ROI improvements through intelligent marketing automation.',
      author: 'Mike Johnson',
      date: 'Jan 12, 2025',
      readTime: '12 min read',
      image: 'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['ROI', 'Automation', 'Strategy'],
      href: '/blog/increase-roi-ai-automation'
    },
    {
      title: 'The Complete Guide to Customer Journey Mapping',
      excerpt: 'Master the art of customer journey mapping with AI insights. Optimize every touchpoint for maximum conversion and retention.',
      author: 'Emily Chen',
      date: 'Jan 10, 2025',
      readTime: '15 min read',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Customer Journey', 'Analytics', 'Optimization'],
      href: '/blog/customer-journey-mapping-guide'
    },
    {
      title: 'Privacy-First Marketing: Building Trust in 2025',
      excerpt: 'Navigate the new privacy landscape while maintaining effective marketing campaigns. Learn compliant strategies that build customer trust.',
      author: 'David Rodriguez',
      date: 'Jan 8, 2025',
      readTime: '10 min read',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Privacy', 'Compliance', 'Trust'],
      href: '/blog/privacy-first-marketing-2025'
    },
    {
      title: 'Advanced A/B Testing with Machine Learning',
      excerpt: 'Take your A/B testing to the next level with ML-powered insights. Discover which variations perform best and why.',
      author: 'Lisa Wang',
      date: 'Jan 5, 2025',
      readTime: '9 min read',
      image: 'https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['A/B Testing', 'Machine Learning', 'Optimization'],
      href: '/blog/advanced-ab-testing-ml'
    },
    {
      title: 'Content Personalization at Scale',
      excerpt: 'Deliver personalized content experiences to thousands of customers simultaneously. Learn the tools and techniques that make it possible.',
      author: 'Alex Thompson',
      date: 'Jan 3, 2025',
      readTime: '11 min read',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Personalization', 'Content', 'Scale'],
      href: '/blog/content-personalization-scale'
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Latest Insights &{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Resources
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay ahead of the curve with expert insights, marketing strategies, and AI innovations
            from our team of industry experts.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <BlogCard {...post} />
            </motion.div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-8 text-center"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Stay Updated with Marketing AI Insights
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Get the latest AI marketing strategies, case studies, and industry insights
            delivered to your inbox weekly.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-indigo-500 focus:outline-none"
            />
            <Button variant="primary" onClick={handleNewsletterSubscribe}>
              Subscribe
            </Button>
          </div>
          <p className="text-sm text-gray-500 mt-3">
            No spam, unsubscribe at any time. We respect your privacy.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;