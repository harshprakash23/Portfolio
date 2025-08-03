import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState('Home');

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  // Function to get current page from URL
  const getCurrentPage = () => {
    const path = window.location.pathname;
    switch (path) {
      case '/':
        return 'Home';
      case '/about':
        return 'About';
      case '/projects':
        return 'Projects';
      case '/experience':
        return 'Experience';
      case '/contact':
        return 'Contact';
      default:
        return 'Home';
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    // Set active item based on current URL on component mount
    setActiveItem(getCurrentPage());

    // Update active item when URL changes (for browser back/forward)
    const handlePopState = () => {
      setActiveItem(getCurrentPage());
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('popstate', handlePopState);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Experience', path: '/experience' },
    { name: 'Contact', path: '/contact' }
  ];

  // Handle navigation with actual page navigation
  const handleNavigation = (item) => {
    setActiveItem(item.name);
    closeMobileMenu();
    
    // Actually navigate to the page
    window.location.href = item.path;
  };

  return (
    <>
      <motion.nav 
        className={`fixed w-full z-50 top-0 transition-all duration-300 ${
          scrolled 
            ? 'bg-black/80 backdrop-blur-xl shadow-lg border-b border-white/10' 
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="mx-auto px-6 py-4">
          <div className="flex justify-center items-center max-w-7xl mx-auto relative">
            
            {/* Logo/Brand - Centered */}
            <motion.div 
              className="text-2xl lg:text-3xl font-bold absolute left-1/2 transform -translate-x-1/2"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <button 
                onClick={() => handleNavigation({ name: 'Home', path: '/' })}
                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 hover:from-pink-500 hover:via-purple-500 hover:to-blue-400 transition-all duration-300"
              >
                Harsh Prakash
              </button>
            </motion.div>

            {/* Left Navigation - Desktop */}
            <div className="hidden lg:flex space-x-8 items-center absolute left-0">
              {navItems.slice(0, 2).map((item) => (
                <NavLink 
                  key={item.name} 
                  item={item}
                  activeItem={activeItem}
                  onNavigate={handleNavigation}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>

            {/* Right Navigation - Desktop */}
            <div className="hidden lg:flex space-x-8 items-center absolute right-0">
              {navItems.slice(2).map((item) => (
                <NavLink 
                  key={item.name} 
                  item={item}
                  activeItem={activeItem}
                  onNavigate={handleNavigation}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors duration-200 absolute right-0"
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={isMobileMenuOpen ? "open" : "closed"}
                className="w-6 h-6 flex flex-col justify-center items-center"
              >
                <motion.span
                  className="w-6 h-0.5 bg-white block"
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: 45, y: 6 }
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="w-6 h-0.5 bg-white block mt-1.5"
                  variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 }
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="w-6 h-0.5 bg-white block mt-1.5"
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: -45, y: -6 }
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden fixed inset-0 z-40 bg-black/95 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 50 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  <button
                    onClick={() => handleNavigation(item)}
                    className={`text-3xl font-semibold transition-all duration-300 ${
                      activeItem === item.name
                        ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500'
                        : 'text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-500'
                    }`}
                  >
                    {item.name}
                  </button>
                </motion.div>
              ))}
            </div>

            {/* Floating Particles in Mobile Menu */}
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
                    y: [0, -30, 0],
                    opacity: [0.2, 0.5, 0.2],
                  }}
                  transition={{
                    duration: Math.random() * 3 + 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// Custom NavLink Component
const NavLink = ({ item, activeItem, onNavigate, children }) => {
  const isActive = activeItem === item.name;
  
  return (
    <motion.div
      className="relative"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      <button
        onClick={() => onNavigate(item)}
        className={`text-lg font-medium transition-all duration-300 ${
          isActive
            ? 'text-white'
            : 'text-gray-300 hover:text-white'
        }`}
      >
        {children}
      </button>
      
      {/* Active indicator */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
            layoutId="activeIndicator"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            exit={{ opacity: 0, scaleX: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </AnimatePresence>
      
      {/* Hover indicator */}
      <motion.div
        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400/50 to-purple-500/50 rounded-full"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: isActive ? 0 : 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default Navbar;