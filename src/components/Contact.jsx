import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { EMAIL_JS_SERVICE_ID, EMAIL_JS_TEMPLATE_ID, EMAIL_JS_PUBLIC_KEY } from "../constants";
import Footer from "./Footer";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // cleaning the form data
    const username = form.name.trim();
    const user_email = form.email.trim();
    const user_message = form.message.trim();

    if (username === '' || user_email === '' || user_message === '') {
      setLoading(false);
      toast.error("Please fill all the fields.", {
        position: 'bottom-right',
        theme: 'dark',
      });
      return;
    }

    emailjs
      .send(
        EMAIL_JS_SERVICE_ID,
        EMAIL_JS_TEMPLATE_ID,
        {
          from_name: username,
          to_name: "Harsh Prakash",
          reply_to: user_email,
          to_email: "harshprakash5189@gmail.com",
          message: user_message,
        },
        EMAIL_JS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          toast.success("Message sent successfully!", {
            position: 'bottom-right',
            theme: 'dark',
          });
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          toast.error("Uh, oh! Something went wrong. Please try again later.", {
            position: 'bottom-right',
            theme: 'dark',
          });
        }
      );
  };

  return (
    <div className='relative w-full min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden'>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-blue-400/10 to-purple-400/10"
            style={{
              width: Math.random() * 300 + 100,
              height: Math.random() * 300 + 100,
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
            animate={{
              x: [0, Math.random() * 50 - 25],
              y: [0, Math.random() * 50 - 25],
              scale: [1, 1.1, 1],
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

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />

      {/* Main Content */}
      <div className='relative z-10 min-h-screen py-20'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          
          {/* Header Section */}
          <motion.div 
            className='text-center mb-16'
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.p 
              className='text-purple-400 font-light text-lg mb-4 tracking-wider'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              REACH OUT TO ME
            </motion.p>
            <motion.h1 
              className='text-5xl sm:text-6xl lg:text-7xl font-bold mb-6'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 1 }}
            >
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500'>
                Contact
              </span>
              <span className='text-white'>.</span>
            </motion.h1>
            <motion.div 
              className='w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full'
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            />
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className='max-w-2xl mx-auto'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <div className='bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md rounded-3xl p-8 sm:p-12 border border-white/10 shadow-2xl'>
              <form ref={formRef} onSubmit={handleSubmit} className='space-y-8'>
                {/* Name Field */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                >
                  <label className='block'>
                    <span className='text-white font-medium mb-4 block text-lg'>
                      Your Name
                    </span>
                    <div className='relative'>
                      <motion.input
                        type='text'
                        name='name'
                        value={form.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Enter your name"
                        className='w-full py-4 px-6 rounded-xl bg-slate-800/90 backdrop-blur-sm border-2 border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/70 focus:border-purple-500/50 transition-all duration-300'
                        required
                        animate={{
                          scale: focusedField === 'name' ? 1.02 : 1,
                        }}
                        transition={{ duration: 0.2 }}
                      />
                      {focusedField === 'name' && (
                        <motion.div
                          className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 -z-10"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </div>
                  </label>
                </motion.div>

                {/* Email Field */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1, duration: 0.6 }}
                >
                  <label className='block'>
                    <span className='text-white font-medium mb-4 block text-lg'>
                      Your Email
                    </span>
                    <div className='relative'>
                      <motion.input
                        type='email'
                        name='email'
                        value={form.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Ex: abc@gmail.com"
                        className='w-full py-4 px-6 rounded-xl bg-slate-800/90 backdrop-blur-sm border-2 border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/70 focus:border-purple-500/50 transition-all duration-300'
                        required
                        animate={{
                          scale: focusedField === 'email' ? 1.02 : 1,
                        }}
                        transition={{ duration: 0.2 }}
                      />
                      {focusedField === 'email' && (
                        <motion.div
                          className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 -z-10"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </div>
                  </label>
                </motion.div>

                {/* Message Field - Fixed visibility */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                >
                  <label className='block'>
                    <span className='text-white font-medium mb-4 block text-lg'>
                      Your Message
                    </span>
                    <div className='relative'>
                      <motion.textarea
                        rows={7}
                        name='message'
                        value={form.message}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        placeholder='Do you have anything to say?'
                        className='w-full py-4 px-6 rounded-xl bg-slate-800/90 backdrop-blur-sm border-2 border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/70 focus:border-purple-500/50 transition-all duration-300 resize-none min-h-[180px]'
                        required
                        style={{ zIndex: 1 }}
                        animate={{
                          scale: focusedField === 'message' ? 1.02 : 1,
                        }}
                        transition={{ duration: 0.2 }}
                      />
                      {focusedField === 'message' && (
                        <motion.div
                          className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10"
                          style={{ zIndex: 0 }}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        />
                      )}
                    </div>
                  </label>
                </motion.div>

                {/* Submit Button */}
                <motion.div
                  className="flex justify-center pt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4, duration: 0.6 }}
                >
                  <motion.button
                    type='submit'
                    disabled={loading}
                    className='relative group px-12 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden'
                    whileHover={{ scale: loading ? 1 : 1.05 }}
                    whileTap={{ scale: loading ? 1 : 0.95 }}
                  >
                    {/* Button background animation */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    </div>
                    
                    {/* Button content */}
                    <span className="relative z-10 flex items-center gap-2">
                      {loading ? (
                        <>
                          <motion.div
                            className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <motion.svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            animate={{ x: [0, 4, 0] }}
                            transition={{ 
                              duration: 1.5, 
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                          </motion.svg>
                        </>
                      )}
                    </span>
                  </motion.button>
                </motion.div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      <ToastContainer 
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        toastStyle={{
          backgroundColor: 'rgba(30, 41, 59, 0.95)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        }}
      />
      
      <Footer />
    </div>
  );
};

export default Contact;