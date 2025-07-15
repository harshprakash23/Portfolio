import React from 'react';
import { motion } from 'framer-motion';
import '../App.css';
import { services } from '../constants';
import ButtonLink from './ButtonLink';
import Footer from './Footer';

const ServiceCard = ({ service, index }) => (
  <motion.div 
    className='sm:w-[280px] w-full'
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1, duration: 0.6 }}
    viewport={{ once: true }}
  >
    <motion.div
      className='w-full bg-gradient-to-r from-blue-500/20 to-purple-600/20 p-[1px] rounded-[20px] backdrop-blur-sm'
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <div
        className='rounded-[20px] py-8 px-6 min-h-[300px] flex justify-evenly items-center flex-col bg-gradient-to-br from-slate-800/90 to-purple-900/90 backdrop-blur-md border border-white/10'
      >
        <motion.img
          src={service.icon}
          alt='service icon'
          className='w-20 h-20 object-contain'
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
        />
        <h3 className='text-white text-[22px] font-bold text-center leading-tight'>
          {service.title}
        </h3>
      </div>
    </motion.div>
  </motion.div>
);

const About = () => {
  return (
    <div className='relative w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden'>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-blue-400/10 to-purple-400/10"
            style={{
              width: Math.random() * 200 + 100,
              height: Math.random() * 200 + 100,
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
            animate={{
              x: [0, Math.random() * 50 - 25],
              y: [0, Math.random() * 50 - 25],
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 8 + 8,
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
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className='relative z-10 min-h-screen py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          
          {/* Header Section */}
          <motion.div 
            className='text-center mb-16'
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.h1 
              className='text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
            >
              About{' '}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500'>
                Me
              </span>
            </motion.h1>
            <motion.div 
              className='w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full'
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            />
          </motion.div>

          {/* Introduction Section */}
          <motion.div 
            className='mb-20'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className='bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md rounded-3xl p-8 sm:p-12 border border-white/10 shadow-2xl'>
              <motion.h2 
                className='text-3xl sm:text-4xl font-bold text-white mb-8 text-center'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500'>
                  Introduction
                </span>
              </motion.h2>
              
              <motion.div 
                className='text-gray-300 text-lg leading-relaxed space-y-6'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <p>
                  👨‍💻 Hi, I am <span className='text-blue-400 font-semibold'>Harsh Prakash</span>, a third-year B.Tech student at 
                  <span className='text-purple-400 font-semibold'> Vellore Institute of Technology</span>🎓, majoring in Computer Software Engineering.
                </p>
                
                <p>
                  ✍️My academic journey has equipped me with a solid foundation in programming languages such as 
                  <span className='text-green-400 font-semibold'> Python, C, C++, and Java</span>. Additionally, I possess skills in web development technologies including 
                  <span className='text-yellow-400 font-semibold'> HTML, CSS, JavaScript, and React.js</span>, along with a strong understanding of Data Structures and Algorithms.
                </p>
                
                <p>
                  I am also proficient in <span className='text-pink-400 font-semibold'>SQL, MySQL, Tableau, and Power BI</span> for data analysis and visualization, 
                  and have foundational knowledge in <span className='text-orange-400 font-semibold'>AWS S3 and cybersecurity</span>. Furthermore, I have a great interest in cloud computing.
                </p>
                
                <p>
                  🚀My journey in the field of computer science has been marked by a continuous quest for knowledge and practical experience. 
                  I am passionate about leveraging my skills to solve complex problems and deliver impactful solutions. Feel free to connect with me on{' '}
                  <motion.a 
                    className='text-blue-400 hover:text-blue-300 duration-300 font-semibold underline decoration-2 underline-offset-4' 
                    href='https://www.linkedin.com/in/harsh-prakash-510b38246/' 
                    target='_blank'
                    whileHover={{ scale: 1.05 }}
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </motion.a>
                </p>
              </motion.div>
              
              <motion.div 
                className='mt-10 flex justify-center'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ButtonLink
                    url='https://drive.google.com/file/d/1c5S_-S2ZkFB8xRKgGU_URLbk1fVa3i7r/view?usp=drive_link'
                    text='View Resume →'
                    padding='px-8 py-4'
                  />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Services Section */}
          <motion.div 
            className='mb-20'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className='text-3xl sm:text-4xl font-bold text-white mb-12 text-center'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              What I{' '}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
                Offer
              </span>
            </motion.h2>
            
            <div className='flex justify-center flex-wrap gap-8'>
              {services?.map((service, index) => (
                <ServiceCard key={index} service={service} index={index} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default About;