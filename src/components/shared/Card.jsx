import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ 
  children, 
  className = '', 
  hover = true,
  gradient = false,
  noPadding = false
}) => {
  const baseStyles = `bg-[#1A1A1A] backdrop-blur-lg border border-[#2A2A2A] rounded-2xl shadow-lg ${!noPadding ? 'p-6' : ''}`;
  const hoverStyles = hover ? 'hover:border-[#F5B301] hover:shadow-[0_0_30px_rgba(245,179,1,0.15)] transition-all duration-300' : '';
  const gradientStyles = gradient ? 'bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D]' : '';
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={`${baseStyles} ${hoverStyles} ${gradientStyles} ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default Card;
