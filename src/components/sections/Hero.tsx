'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight, Star, Users, Award, Calendar } from 'lucide-react';
import Button from '@/components/ui/Button';
import Modal from '@/components/ui/Modal';
import Badge from '@/components/ui/Badge';
import PaywallModal from '@/components/ui/PaywallModal';
import DemoModal from '@/components/ui/DemoModal';
const Hero = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isFreeTrialModalOpen, setIsFreeTrialModalOpen] = useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const handleGetStarted = () => {
    setIsFreeTrialModalOpen(true);
  };

  const handleScheduleDemo = () => {
    setIsDemoModalOpen(true);
  };

  // Listen for demo modal trigger from other components
  React.useEffect(() => {
    const handleOpenDemoModal = () => {
      setIsDemoModalOpen(true);
    };

    const handleOpenFreeTrialModal = () => {
      setIsFreeTrialModalOpen(true);
    };

    window.addEventListener('openDemoModal', handleOpenDemoModal);
    window.addEventListener('openFreeTrialModal', handleOpenFreeTrialModal);

    return () => {
      window.removeEventListener('openDemoModal', handleOpenDemoModal);
      window.removeEventListener('openFreeTrialModal', handleOpenFreeTrialModal);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%236366f1%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight"
        >
          Transform Your Marketing with{' '}
          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            AI Power
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          ADmyBRAND AI Suite empowers your marketing team with intelligent automation,
          data-driven insights, and personalized campaigns that convert.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12"
        >
          <Button size="lg" className="px-8 py-4" onClick={handleGetStarted}>
            Start Free Trial
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button
            variant="ghost"
            size="lg"
            onClick={handleScheduleDemo}
            className="px-8 py-4 border-2 border-gray-200 hover:border-gray-300"
          >
            <Calendar className="w-5 h-5 mr-2" />
            Schedule Demo Call
          </Button>
        </motion.div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col md:flex-row items-center justify-center gap-8 text-gray-600"
        >
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5" />
            <span>50,000+ Active Users</span>
          </div>
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5" />
            <span>98% Customer Satisfaction</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5" />
            <span>4.9/5 Rating</span>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16"
        >
          <div className="relative max-w-5xl mx-auto">
            <div className="bg-white/70 backdrop-blur-lg rounded-2xl border border-white/20 shadow-2xl p-2">
              <img
                src="https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="ADmyBRAND AI Suite Dashboard"
                className="w-full rounded-xl"
              />
            </div>
            {/* Floating Elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-4 -left-4 bg-white/80 backdrop-blur-lg rounded-xl p-3 shadow-lg"
            >
              <div className="text-sm font-semibold text-gray-900">🚀 Campaign ROI</div>
              <div className="text-2xl font-bold text-emerald-600">+247%</div>
            </motion.div>
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 4, repeat: Infinity, delay: 2 }}
              className="absolute -bottom-4 -right-4 bg-white/80 backdrop-blur-lg rounded-xl p-3 shadow-lg"
            >
              <div className="text-sm font-semibold text-gray-900">⚡ Time Saved</div>
              <div className="text-2xl font-bold text-indigo-600">15hrs/week</div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Video Modal */}
      <Modal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        size="xl"
        title="Product Demo"
      >
        <div className="aspect-video bg-gray-100 rounded-xl flex items-center justify-center">
          <div className="text-center">
            <Play className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600">Demo video would be embedded here</p>
          </div>
        </div>
      </Modal>

      {/* Free Trial Modal */}
      <PaywallModal
        isOpen={isFreeTrialModalOpen}
        onClose={() => setIsFreeTrialModalOpen(false)}
        selectedPlan={{ name: '7-Day Free Trial', price: 0, period: 'trial' }}
      />

      {/* Demo Scheduling Modal */}
      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />
    </section>
  );
};

export default Hero;