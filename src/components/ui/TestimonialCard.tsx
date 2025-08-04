'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { TestimonialCardProps } from '@/types';

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  company,
  content,
  avatar,
  rating = 5
}) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white/70 backdrop-blur-lg rounded-2xl border border-white/20 p-6 shadow-xl"
    >
      <div className="flex items-center mb-4">
        <Quote className="w-8 h-8 text-indigo-500 mb-2" />
      </div>

      <p className="text-gray-700 mb-6 italic leading-relaxed">{content}</p>

      <div className="flex items-center gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
        ))}
      </div>

      <div className="flex items-center">
        <img
          src={avatar}
          alt={name}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <div className="font-semibold text-gray-900">{name}</div>
          <div className="text-sm text-gray-600">{role} at {company}</div>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;