import React from "react";
import { motion } from "framer-motion";
import aiImage from "../assest/Logo_on_colourB2.jpg"; // Replace with your actual image path

const About = () => {
  return (
    <section className="min-h-screen p-8 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-pink-400 mb-6">About Diacto and candidhr</h2>
      <div className="flex flex-col lg:flex-row items-center justify-between w-full">
        {/* Image Div */}
        <motion.div
          className="flex-1 p-4"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img src={aiImage} alt="AI" className="w-full h-auto object-cover rounded-lg shadow-lg" />
        </motion.div>
        
        {/* Text Div */}
        <motion.div
          className="flex-1 p-4 lg:ml-8"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p>
            At Diacto, we believe in using technology to simplify and improve workflows. 
            candidhr is our latest innovation in streamlining the hiring process, making 
            it faster, smarter, and more effective.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
