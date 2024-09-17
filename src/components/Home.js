import React, { useRef } from "react";
import { motion } from "framer-motion";
import Features from "./Features";
import Benefits from "./Benefits";
import KeyHighlights from "./KeyHighlights";
import video from "../assest/video1.mp4";
import "../styles/home.css";  

const Home = () => {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    videoRef.current.play();
  };

  const handleMouseLeave = () => {
    videoRef.current.pause();
  };

  return (
    <>
      <section className="flex flex-col items-center justify-center min-h-screen text-center bg-black text-white px-2 py-28 relative hero">
       
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>

        <motion.h1 className="headline text-7xl font-extrabold bg-clip-text text-transparent py-5 bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 mt-12">
          <span className="text-white">Revolutionize Hiring with</span>
          <br />
          AI-Powered Efficiency
        </motion.h1>

        <motion.p className="subheadline text-xl mt-4 text-gray-400">
          Discover the power of CandidHR – transforming hiring with intelligent
          automation.
        </motion.p>

        <div className="cta mt-8 space-x-4">
          <motion.button className="bg-blue-700 hover:bg-pink-500 text-white px-8 py-4 text-xl font-semibold rounded-lg">
            Request a Demo
          </motion.button>
          <motion.button className="bg-pink-500 hover:bg-blue-700 text-white px-8 py-4 text-xl font-semibold rounded-lg">
            Contact Us
          </motion.button>
        </div>

        <motion.div className="mt-12 mb-14">
          <div className="relative w-full max-w-4xl mx-auto">
            <video
              ref={videoRef}
              className="w-full rounded-lg shadow-lg hover:shadow-2xl"
              src={video}
              muted
              loop
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          </div>
        </motion.div>
      </section>

      <div className="key-highlights-section bg-white text-black ">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <KeyHighlights />
        </motion.div>
      </div>

      <div className="features-section bg-gray-100 text-black ">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Features />
        </motion.div>
      </div>

      <div className="benefits-section bg-white text-black ">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Benefits />
        </motion.div>
      </div>
    </>
  );
};

export default Home;
