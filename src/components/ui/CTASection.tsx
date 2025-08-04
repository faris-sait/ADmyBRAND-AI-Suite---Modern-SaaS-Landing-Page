'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CTASectionProps } from '@/types';
import Button from './Button';

const CTASection: React.FC<CTASectionProps> = ({
  title,
  description,
  buttonText,
  onButtonClick,
  variant = 'primary',
  className = ''
}) => {
  const handleButtonClick = () => {
    if (onButtonClick) {
      onButtonClick();
    } else if (buttonText.toLowerCase().includes('trial')) {
      // If button text contains "trial", open free trial modal
      const event = new CustomEvent('openFreeTrialModal');
      window.dispatchEvent(event);
    } else {
      // Default behavior for other buttons - open demo modal
      const event = new CustomEvent('openDemoModal');
      window.dispatchEvent(event);
    }
  };

  const bgVariants = {
    primary: 'bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600',
    secondary: 'bg-gradient-to-br from-gray-900 to-gray-700'
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`
        ${bgVariants[variant]} text-white py-20 px-6 rounded-3xl ${className}
      `}
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          {title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          {description}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Button
            variant="secondary"
            size="lg"
            onClick={handleButtonClick}
            className="bg-white text-gray-900 hover:bg-gray-100"
          >
            {buttonText}
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CTASection;