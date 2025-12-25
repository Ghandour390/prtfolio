import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  onClick, 
  type = 'button',
  disabled = false,
  className = '',
  icon,
  fullWidth = false
}) => {
  const baseStyles = 'font-medium rounded-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-gradient-to-r from-[#F5B301] to-[#d99f01] text-[#0D0D0D] hover:shadow-[0_0_30px_rgba(245,179,1,0.5)] hover:scale-105',
    secondary: 'bg-[#1A1A1A] text-[#F5B301] border-2 border-[#F5B301] hover:bg-[#F5B301] hover:text-[#0D0D0D] hover:shadow-[0_0_20px_rgba(245,179,1,0.3)]',
    danger: 'bg-red-600 text-white hover:bg-red-700 hover:shadow-[0_0_20px_rgba(220,38,38,0.4)]',
    ghost: 'bg-transparent text-[#F5B301] hover:bg-[#1A1A1A] hover:shadow-inner'
  };
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5 text-base',
    lg: 'px-7 py-3.5 text-lg'
  };
  
  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`}
    >
      {icon && <span>{icon}</span>}
      {children}
    </motion.button>
  );
};

export default Button;
