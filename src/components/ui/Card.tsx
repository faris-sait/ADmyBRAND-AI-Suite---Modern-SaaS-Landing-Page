'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CardProps } from '@/types';

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  padding = 'md',
  hover = false
}) => {
  const paddingStyles = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  };

  const baseStyles = `
    bg-white/70 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl
    ${paddingStyles[padding]} ${className}
  `;

  if (hover) {
    return (
      <motion.div
        whileHover={{
          scale: 1.02,
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
        }}
        transition={{ duration: 0.2 }}
        className={baseStyles}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div className={baseStyles}>
      {children}
    </div>
  );
};

export default Card;