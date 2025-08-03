import React from 'react';
import { motion } from 'framer-motion';
import { experiences } from '../constants';
import Footer from './Footer';

const Experience = () => {
  return (
    <div className='relative w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden min-h-screen'>
      {/* Animated Background Circles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-blue-400/15 to-purple-400/15 backdrop-blur-sm"
            style={{
              width: Math.random() * 200 + 100,
              height: Math.random() * 200 + 100,
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
            animate={{
              x: [0, Math.random() * 50 - 25],
              y: [0, Math.random() * 50 - 25],
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: Math.random() * 8 + 12,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20"
            style={{
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
            animate={{
              y: [0, -80, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className='relative z-10 pt-20 pb-20 px-6 sm:px-16'>
        {/* Header Section */}
        <motion.div 
          className='text-center mb-16'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.p 
            className='text-gray-400 font-light text-lg mb-4 tracking-widest uppercase'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            My Journey So Far
          </motion.p>
          <motion.h2 
            className='text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight'
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Work{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500'>
              Experience
            </span>
          </motion.h2>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <motion.div 
              className="absolute left-8 md:left-1/2 transform md:-translate-x-0.5 w-1 bg-gradient-to-b from-yellow-400 via-pink-500 to-purple-500 rounded-full"
              initial={{ height: 0 }}
              animate={{ height: '100%' }}
              transition={{ duration: 2, delay: 1 }}
            />

            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                className={`relative flex items-center mb-16 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 1.2 + index * 0.3,
                  ease: "easeOut" 
                }}
              >
                {/* Timeline Node */}
                <motion.div 
                  className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-purple-500 rounded-full border-4 border-slate-900 z-10"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 1.4 + index * 0.3,
                    type: "spring",
                    stiffness: 200
                  }}
                />

                {/* Company Logo */}
                <motion.div 
                  className={`hidden md:block w-20 h-20 rounded-full bg-white/90 backdrop-blur-sm border-2 border-gradient-to-r from-yellow-400 to-purple-500 p-3 shadow-lg ${
                    index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                  }`}
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,250,252,0.9) 100%)',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.4)'
                  }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img
                    src={experience.logo}
                    alt={experience.company}
                    className='w-full h-full object-contain filter brightness-100 contrast-110'
                  />
                </motion.div>

                {/* Experience Card */}
                <motion.div 
                  className={`flex-1 ml-16 md:ml-0 max-w-md ${
                    index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                  }`}
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="relative bg-gradient-to-br from-slate-800/80 to-purple-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl">
                    {/* Gradient Border Effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-400/20 via-pink-500/20 to-purple-500/20 opacity-0 hover:opacity-100 transition-opacity duration-300 -z-10" />
                    
                    {/* Duration Badge */}
                    <motion.div 
                      className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-white/20 rounded-full text-sm text-gray-300 mb-4"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.6 + index * 0.3 }}
                    >
                      {experience.duration}
                    </motion.div>

                    {/* Job Title */}
                    <h3 className='text-xl md:text-2xl font-bold text-white mb-2 leading-tight'>
                      {experience.role}
                    </h3>

                    {/* Company Name */}
                    <motion.a
                      href={experience.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className='text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500 font-semibold text-lg hover:from-pink-500 hover:to-purple-500 transition-all duration-300 inline-block mb-4'
                      whileHover={{ scale: 1.05 }}
                    >
                      {experience.company}
                    </motion.a>

                    {/* Points */}
                    <ul className='space-y-3'>
                      {experience.points.map((point, pointIndex) => (
                        <motion.li
                          key={pointIndex}
                          className='flex items-start text-gray-300 text-sm leading-relaxed'
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ 
                            delay: 1.8 + index * 0.3 + pointIndex * 0.1 
                          }}
                        >
                          <span className='w-2 h-2 bg-gradient-to-r from-yellow-400 to-purple-500 rounded-full mt-2 mr-3 flex-shrink-0' />
                          {point}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Section */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 1 }}
        >
          <p className='text-gray-300 text-lg mb-8 max-w-2xl mx-auto'>
            Ready to discuss your next project or explore collaboration opportunities?
          </p>
          <motion.a
            href="/contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Connect
          </motion.a>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default Experience;