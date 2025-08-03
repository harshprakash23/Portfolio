import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const year = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'Twitter',
      url: 'https://x.com/HarshPraka91113',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      ),
      color: 'hover:text-blue-400',
      gradient: 'from-blue-400 to-blue-600'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/harsh-prakash-510b38246/',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      color: 'hover:text-blue-600',
      gradient: 'from-blue-500 to-blue-700'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/harshprakash23',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      color: 'hover:text-purple-400',
      gradient: 'from-gray-400 to-purple-400'
    }
  ];



  return (
    <motion.footer 
      className="relative bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 border-t border-white/10 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Enhanced Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm"
            style={{
              width: Math.random() * 150 + 30,
              height: Math.random() * 150 + 30,
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: Math.random() * 12 + 8,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-30"
            style={{
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8">
          
          {/* Brand Section */}
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <motion.h3 
              className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 mb-3"
              whileHover={{ scale: 1.05 }}
            >
              Harsh Prakash
            </motion.h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Software Engineer passionate about creating innovative solutions 
              and building the future through code.
            </p>
            <motion.div 
              className="inline-block px-4 py-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 
                         border border-green-500/30 rounded-full text-green-400 text-sm font-medium"
              animate={{ 
                boxShadow: ["0 0 0 0px rgba(34, 197, 94, 0.4)", "0 0 0 10px rgba(34, 197, 94, 0)"],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🟢 Available for opportunities
            </motion.div>
          </motion.div>

          {/* Contact & Social */}
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold text-white mb-4">Let's Connect</h4>
            <p className="text-gray-400 text-sm mb-6">
              Follow me on social media and let's build something amazing together!
            </p>
            
            {/* Enhanced Social Links */}
            <div className="flex justify-center md:justify-start gap-4 mb-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group"
                  whileHover={{ 
                    scale: 1.1, 
                    y: -3,
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.4, 
                    delay: 0.3 + index * 0.1,
                    type: "spring",
                    stiffness: 300
                  }}
                  viewport={{ once: true }}
                >
                  <div className="p-3 rounded-xl bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 
                                text-gray-400 transition-all duration-300 group-hover:border-white/30">
                    {social.icon}
                    
                    {/* Glow effect on hover */}
                    <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${social.gradient} 
                                   opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                    
                    {/* Ripple effect */}
                    <motion.div
                      className={`absolute inset-0 rounded-xl bg-gradient-to-r ${social.gradient}`}
                      initial={{ scale: 0, opacity: 0.5 }}
                      whileHover={{ scale: 1.5, opacity: 0 }}
                      transition={{ duration: 0.6 }}
                    />
                  </div>
                  
                  {/* Tooltip */}
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 
                                bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 
                                group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    {social.name}
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Decorative Divider */}
        <motion.div
          className="relative mb-8"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent" />
          <motion.div
            className="absolute inset-0 h-px bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-50"
            animate={{ 
              opacity: [0.5, 1, 0.5],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </motion.div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* Copyright */}
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-400 text-sm">
              © {year}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 font-semibold">
                Harsh Prakash
              </span>
              . All rights reserved.
            </p>
            <p className="text-gray-600 text-xs mt-1">
              Crafted with 💜 and lots of ☕
            </p>
          </motion.div>

          {/* Inspirational Quote */}
          <motion.div
            className="text-center md:text-right max-w-md"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
          >
            <motion.p 
              className="text-gray-500 text-xs italic leading-relaxed"
              animate={{ 
                opacity: [0.7, 1, 0.7],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              "The only way to do great work is to love what you do." 
              <span className="block text-gray-600 mt-1">- Steve Jobs</span>
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Enhanced gradient overlay at bottom */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
        animate={{ 
          opacity: [0.5, 1, 0.5],
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </motion.footer>
  );
};

export default Footer;