'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, Maximize } from 'lucide-react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

const Demo = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            See ADmyBRAND AI Suite in{' '}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Action
            </span>
          </h2>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
            Watch how our AI-powered platform transforms marketing campaigns from setup to optimization.
            See real results in under 3 minutes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Video Player */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="relative overflow-hidden bg-black/20 border-white/10">
              <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                {/* Placeholder Video Interface */}
                <div className="relative w-full h-full flex items-center justify-center">
                  <img
                    src="https://images.pexels.com/photos/3184632/pexels-photo-3184632.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Demo Video Thumbnail"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={togglePlay}
                      className="w-20 h-20 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center border border-white/30 hover:bg-white/30 transition-all"
                    >
                      {isPlaying ? (
                        <Pause className="w-8 h-8 text-white" />
                      ) : (
                        <Play className="w-8 h-8 text-white ml-1" />
                      )}
                    </motion.button>
                  </div>
                </div>

                {/* Video Controls */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between bg-black/50 backdrop-blur-lg rounded-lg p-3">
                  <div className="flex items-center gap-3">
                    <button onClick={togglePlay} className="text-white hover:text-purple-300 transition-colors">
                      {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                    </button>
                    <div className="text-white text-sm">2:45 / 3:12</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Volume2 className="w-5 h-5 text-white" />
                    <Maximize className="w-5 h-5 text-white hover:text-purple-300 cursor-pointer transition-colors" />
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Demo Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold mb-6">What You'll See in the Demo</h3>
              <div className="space-y-4">
                {[
                  {
                    time: '0:00 - 0:45',
                    title: 'Quick Setup Process',
                    description: 'See how easy it is to connect your existing marketing channels and import your data.'
                  },
                  {
                    time: '0:45 - 1:30',
                    title: 'AI Analysis in Real-Time',
                    description: 'Watch our AI analyze your audience and campaign performance to generate insights.'
                  },
                  {
                    time: '1:30 - 2:15',
                    title: 'Campaign Optimization',
                    description: 'See automated optimizations being applied and performance improvements.'
                  },
                  {
                    time: '2:15 - 3:12',
                    title: 'Results Dashboard',
                    description: 'Explore the comprehensive analytics dashboard showing real ROI improvements.'
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20"
                  >
                    <div className="flex items-start gap-4">
                      <div className="bg-purple-500 text-white px-2 py-1 rounded text-sm font-medium whitespace-nowrap">
                        {item.time}
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                        <p className="text-purple-100 text-sm">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              <Button
                variant="secondary"
                size="lg"
                onClick={() => {
                  const event = new CustomEvent('openFreeTrialModal');
                  window.dispatchEvent(event);
                }}
              >
                Start Free Trial
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10"
                onClick={() => {
                  // Scroll to hero and trigger demo modal
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  setTimeout(() => {
                    const event = new CustomEvent('openDemoModal');
                    window.dispatchEvent(event);
                  }, 500);
                }}
              >
                Schedule Demo Call
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Key Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-400 mb-2">3 Minutes</div>
            <div className="text-purple-100">Setup Time</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-400 mb-2">247%</div>
            <div className="text-purple-100">Average ROI Increase</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-400 mb-2">15 Hours</div>
            <div className="text-purple-100">Saved Per Week</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Demo;