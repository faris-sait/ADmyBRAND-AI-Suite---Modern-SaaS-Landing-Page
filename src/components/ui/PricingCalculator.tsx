'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Users, Zap, BarChart } from 'lucide-react';
import { PricingCalculatorProps } from '@/types';
import Card from './Card';

const PricingCalculator: React.FC<PricingCalculatorProps> = ({ onPriceChange }) => {
  const [users, setUsers] = useState(10);
  const [features, setFeatures] = useState({
    analytics: false,
    automation: false,
    priority: false,
    integration: false
  });
  const [totalPrice, setTotalPrice] = useState(0);

  const basePrice = 29;
  const pricePerUser = 5;
  const featurePrices = {
    analytics: 19,
    automation: 39,
    priority: 29,
    integration: 49
  };

  useEffect(() => {
    let price = basePrice + (users * pricePerUser);

    Object.entries(features).forEach(([feature, enabled]) => {
      if (enabled) {
        price += featurePrices[feature as keyof typeof featurePrices];
      }
    });

    setTotalPrice(price);
    onPriceChange?.(price);
  }, [users, features, onPriceChange]);

  const handleFeatureChange = (feature: keyof typeof features) => {
    setFeatures(prev => ({
      ...prev,
      [feature]: !prev[feature]
    }));
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center text-white">
          <Calculator className="w-5 h-5" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900">Pricing Calculator</h3>
      </div>

      <div className="space-y-6">
        {/* Users Slider */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Number of Users: {users}
          </label>
          <input
            type="range"
            min="1"
            max="100"
            value={users}
            onChange={(e) => setUsers(parseInt(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>1</span>
            <span>100</span>
          </div>
        </div>

        {/* Feature Toggles */}
        <div>
          <h4 className="font-medium text-gray-900 mb-3">Additional Features</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <motion.label
              whileHover={{ scale: 1.02 }}
              className={`
                flex items-center p-3 rounded-xl border-2 cursor-pointer transition-all
                ${features.analytics ? 'border-indigo-500 bg-indigo-50' : 'border-gray-200 hover:border-gray-300'}
              `}
            >
              <input
                type="checkbox"
                checked={features.analytics}
                onChange={() => handleFeatureChange('analytics')}
                className="sr-only"
              />
              <BarChart className="w-5 h-5 text-indigo-600 mr-3" />
              <div className="flex-1">
                <div className="font-medium text-gray-900">Advanced Analytics</div>
                <div className="text-sm text-gray-600">+${featurePrices.analytics}/month</div>
              </div>
            </motion.label>

            <motion.label
              whileHover={{ scale: 1.02 }}
              className={`
                flex items-center p-3 rounded-xl border-2 cursor-pointer transition-all
                ${features.automation ? 'border-indigo-500 bg-indigo-50' : 'border-gray-200 hover:border-gray-300'}
              `}
            >
              <input
                type="checkbox"
                checked={features.automation}
                onChange={() => handleFeatureChange('automation')}
                className="sr-only"
              />
              <Zap className="w-5 h-5 text-indigo-600 mr-3" />
              <div className="flex-1">
                <div className="font-medium text-gray-900">AI Automation</div>
                <div className="text-sm text-gray-600">+${featurePrices.automation}/month</div>
              </div>
            </motion.label>

            <motion.label
              whileHover={{ scale: 1.02 }}
              className={`
                flex items-center p-3 rounded-xl border-2 cursor-pointer transition-all
                ${features.priority ? 'border-indigo-500 bg-indigo-50' : 'border-gray-200 hover:border-gray-300'}
              `}
            >
              <input
                type="checkbox"
                checked={features.priority}
                onChange={() => handleFeatureChange('priority')}
                className="sr-only"
              />
              <Users className="w-5 h-5 text-indigo-600 mr-3" />
              <div className="flex-1">
                <div className="font-medium text-gray-900">Priority Support</div>
                <div className="text-sm text-gray-600">+${featurePrices.priority}/month</div>
              </div>
            </motion.label>

            <motion.label
              whileHover={{ scale: 1.02 }}
              className={`
                flex items-center p-3 rounded-xl border-2 cursor-pointer transition-all
                ${features.integration ? 'border-indigo-500 bg-indigo-50' : 'border-gray-200 hover:border-gray-300'}
              `}
            >
              <input
                type="checkbox"
                checked={features.integration}
                onChange={() => handleFeatureChange('integration')}
                className="sr-only"
              />
              <Zap className="w-5 h-5 text-indigo-600 mr-3" />
              <div className="flex-1">
                <div className="font-medium text-gray-900">API Integration</div>
                <div className="text-sm text-gray-600">+${featurePrices.integration}/month</div>
              </div>
            </motion.label>
          </div>
        </div>

        {/* Price Display */}
        <motion.div
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 text-center"
        >
          <div className="text-3xl font-bold text-gray-900 mb-2">
            ${totalPrice}
            <span className="text-lg text-gray-600 font-normal">/month</span>
          </div>
          <div className="text-gray-600">
            Base: ${basePrice} + Users: ${users * pricePerUser} + Features: ${Object.entries(features).reduce((sum, [feature, enabled]) => enabled ? sum + featurePrices[feature as keyof typeof featurePrices] : sum, 0)}
          </div>
        </motion.div>
      </div>
    </Card>
  );
};

export default PricingCalculator;