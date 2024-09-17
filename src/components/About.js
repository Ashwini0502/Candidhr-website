import React from 'react';
import { motion } from 'framer-motion';


const AboutUs = () => {
  // Define the image animation
  const imageAnimation = {
    hidden: {
      scale: 0.8,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 2,
        ease: 'easeInOut',
      },
    },
  };

  const floatingEffect = {
    animate: {
      y: [0, -10, 0], // Move up and down
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: 'loop',
        ease: 'easeInOut',
      },
    },
  };

  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-8 flex flex-col justify-center items-center">
      <motion.div
        className="flex flex-col lg:flex-row items-center gap-6 lg:gap-12 max-w-5xl"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Left Section - Image */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center"
          initial="hidden"
          animate="visible"
          variants={imageAnimation}
        >
          {/* Floating effect on the image */}
          <motion.img
            src={require('../assets/About_image.png')} // Update with your correct image path
            alt="About Us"
            className="w-2/3 md:w-1/2"
            variants={floatingEffect}
            animate="animate"
          />
        </motion.div>

        {/* Right Section - Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            {/* Part 1 - "About Diacto and" in white */}
            <span className="text-white">About Diacto and </span>
            {/* Part 2 - "CandidHR.ai" with gradient */}
            <span
              className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500"
              
            >
              CandidHR.ai
            </span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl mb-4 md:mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4 }}
          >
            At Diacto, we believe in using technology to simplify and improve workflows. CandidHR is our latest innovation in streamlining the hiring process, making it faster, smarter, and more effective.
          </motion.p>

          <motion.h2
            className="text-2xl md:text-3xl font-semibold mb-4 text-transparent bg-clip-text"
            style={{
              backgroundImage: 'linear-gradient(90deg, #E0ADD0, #6867AC, #B6E0ED)',
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.6 }}
          >
            Our Vision
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.8 }}
          >
            To empower companies to hire the right talent efficiently, leveraging AI and automation.
          </motion.p>

          {/* CTA Button with Formal Color */}
          <motion.a
            href="#contact"
            className="inline-block px-6 py-3 text-lg font-semibold rounded-full text-white bg-gradient-to-r from-gray-800 to-gray-600 hover:from-gray-700 hover:to-gray-500 transition-all"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2 }}
          >
            Join Us on Our Journey
          </motion.a>
        </div>
      </motion.div>
    
    </div>
  );
};

export default AboutUs;
