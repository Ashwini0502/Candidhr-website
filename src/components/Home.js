import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Features from "./Features";
import Benefits from "./Benefits";
import About from "./About";
import Contact from "./Contact";
import runMatter from "./MatterAnimation"; 
import KeyHighlights from "./KeyHighlights";

const Home = () => {
  useEffect(() => {
    // Initialize the Matter.js animation
    const matterInstance = runMatter();

    // Adjust canvas size on window resize
    const handleResize = () => {
      matterInstance.render.canvas.width = window.innerWidth;
      matterInstance.render.canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Cleanup on component unmount
    return () => {
      matterInstance.stop();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {/* Background Canvas for Matter.js Animation */}
      <div id="wrapper-canvas" className="absolute inset-0 -z-10"></div>

      {/* Section: Hero */}
      <section className="flex flex-col items-center justify-center min-h-screen text-center bg-black text-white px-2 relative">
        <motion.h1
          className="headline text-7xl font-bold bg-clip-text text-transparent py-5 bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
        >
          <span className="text-white">Revolutionize Hiring with</span><br/>AI-Powered Efficiency
        </motion.h1>

        <motion.p
          className="subheadline text-xl mt-4 text-gray-400"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
        >
          Discover the power of CandidHR – transforming hiring with intelligent automation.
        </motion.p>

        {/* Call to Action Buttons */}
        <div className="cta mt-8 space-x-4">
          <motion.button
            className="bg-blue-700 hover:bg-pink-500 text-white px-8 py-4 text-xl font-semibold rounded-lg hover:scale-105 transition-transform transform"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1, ease: "easeOut" }}
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 4px 10px rgba(255, 105, 180, 0.5)",
            }}
          >
            Request a Demo
          </motion.button>
          <motion.button
            className="bg-pink-500 hover:bg-blue-700 text-white px-8 py-4 text-xl font-semibold rounded-lg hover:scale-105 transition-transform transform"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 4px 10px rgba(100, 149, 237, 0.5)",
            }}
          >
            Contact Us
          </motion.button>
        </div>
      </section>

      {/* Key Highlights Section */}
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
        <KeyHighlights />  {/* Adding Key Highlights Section */}
      </motion.div>

      {/* Features, Benefits, About, and Contact Sections */}
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
        <Features />
      </motion.div>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
        <Benefits />
      </motion.div>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
        <About />
      </motion.div>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
        <Contact />
      </motion.div>
    </>
  );
};

export default Home;
