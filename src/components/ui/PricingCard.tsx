'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';
import { PricingCardProps } from '@/types';
import Button from './Button';
import Badge from './Badge';

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  period = 'month',
  features,
  popular = false,
  buttonText = 'Get Started',
  onSelect,
  className = ''
}) => {
  const handleSelect = () => {
    if (onSelect) {
      onSelect();
    } else if (buttonText.toLowerCase().includes('trial')) {
      // If button text contains "trial", open free trial modal
      const event = new CustomEvent('openFreeTrialModal');
      window.dispatchEvent(event);
    } else {
      // Default behavior - open demo modal
      const event = new CustomEvent('openDemoModal');
      window.dispatchEvent(event);
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -5 }}
      className={`
        relative bg-white/70 backdrop-blur-lg rounded-2xl border-2 p-8 shadow-xl
        ${popular ? 'border-indigo-500 bg-gradient-to-br from-indigo-50/50 to-purple-50/50' : 'border-white/20'}
        ${className}
      `}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <Badge variant="primary" className="flex items-center gap-1">
            <Star className="w-3 h-3" />
            Most Popular
          </Badge>
        </div>
      )}

      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
        <div className="flex items-baseline justify-center">
          <span className="text-5xl font-bold text-gray-900">${price}</span>
          <span className="text-gray-600 ml-2">/{period}</span>
        </div>
      </div>

      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <Check className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>

      <Button
        variant={popular ? 'primary' : 'outline'}
        size="lg"
        onClick={handleSelect}
        className="w-full"
      >
        {buttonText}
      </Button>
    </motion.div>
  );
};

export default PricingCard;