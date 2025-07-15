import React from 'react';
import { motion } from 'framer-motion';

const ButtonLink = ({ url, text, padding = 'px-6 py-3', variant = 'primary', size = 'md' }) => {
  // Variant styles
  const variants = {
    primary: {
      base: 'bg-gradient-to-r from-blue-500 to-purple-600 text-white border-transparent shadow-lg hover:shadow-xl',
      hover: 'hover:from-blue-600 hover:to-purple-700 hover:shadow-2xl hover:shadow-purple-500/25'
    },
    secondary: {
      base: 'bg-transparent text-white border-2 border-white/30 backdrop-blur-sm hover:bg-white/10',
      hover: 'hover:border-white/50 hover:shadow-lg hover:shadow-white/10'
    },
    accent: {
      base: 'bg-gradient-to-r from-pink-500 to-orange-500 text-white border-transparent shadow-lg',
      hover: 'hover:from-pink-600 hover:to-orange-600 hover:shadow-xl hover:shadow-pink-500/25'
    },
    outline: {
      base: 'bg-transparent text-purple-400 border-2 border-purple-400/50 hover:bg-purple-400/10',
      hover: 'hover:border-purple-400 hover:text-purple-300 hover:shadow-lg hover:shadow-purple-400/20'
    }
  };

  // Size styles
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl'
  };

  const selectedVariant = variants[variant] || variants.primary;
  const selectedSize = sizes[size] || sizes.md;
  const finalPadding = padding !== 'px-6 py-3' ? padding : selectedSize;

  return (
    <motion.a
      href={url}
      target='_blank'
      rel="noopener noreferrer"
      className={`
        group relative inline-flex items-center justify-center
        ${finalPadding} rounded-full font-semibold
        ${selectedVariant.base} ${selectedVariant.hover}
        transition-all duration-300 ease-out
        transform hover:scale-105 active:scale-95
        cursor-pointer overflow-hidden
        focus:outline-none focus:ring-4 focus:ring-purple-500/50
      `}
      whileHover={{ 
        scale: 1.05,
        y: -2
      }}
      whileTap={{ 
        scale: 0.95,
        y: 0
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.3,
        ease: "easeOut"
      }}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-purple-600/0 to-pink-600/0 group-hover:from-blue-600/20 group-hover:via-purple-600/20 group-hover:to-pink-600/20 transition-all duration-500 rounded-full" />
      
      {/* Shimmer effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      </div>
      
      {/* Glowing border effect */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-300" />
      
      {/* Button content */}
      <span className="relative z-10 flex items-center gap-2">
        {text}
        
        {/* Animated arrow */}
        {text.includes('→') ? (
          <motion.span
            className="inline-block"
            animate={{ x: [0, 4, 0] }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            →
          </motion.span>
        ) : text.toLowerCase().includes('resume') || text.toLowerCase().includes('download') ? (
          <motion.svg
            className="w-4 h-4 ml-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            animate={{ y: [0, 2, 0] }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </motion.svg>
        ) : text.toLowerCase().includes('contact') || text.toLowerCase().includes('touch') ? (
          <motion.svg
            className="w-4 h-4 ml-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            animate={{ rotate: [0, 10, 0] }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </motion.svg>
        ) : text.toLowerCase().includes('work') || text.toLowerCase().includes('project') ? (
          <motion.svg
            className="w-4 h-4 ml-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </motion.svg>
        ) : (
          <motion.svg
            className="w-4 h-4 ml-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            animate={{ x: [0, 2, 0] }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </motion.svg>
        )}
      </span>
      
      {/* Ripple effect on click */}
      <div className="absolute inset-0 rounded-full overflow-hidden">
        <div className="absolute inset-0 bg-white/20 scale-0 group-active:scale-100 transition-transform duration-300 rounded-full" />
      </div>
    </motion.a>
  );
};

export default ButtonLink;