import React, { useRef } from "react";
import { motion } from "framer-motion";
import Features from "./Features";
import Benefits from "./Benefits";
// import "../styles/home.css";
import HowItWorks from "./HowItWorks";
// import runMatter from "./MatterAnimation";
import KeyHighlights from "./KeyHighlights";
import video from "../assets/video1.mp4";

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
     <div className="w-full min-h-screen relative bg-black isolate">
     <div 
        aria-hidden="true"
        className=" absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>
      <div className="  min-h-screen w-full">
        <section className="   flex flex-col items-center justify-center min-h-screen text-center  text-white px-2 py-28 relative hero">
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
            Discover the power of CandidHR – transforming hiring with
            intelligent automation.
          </motion.p>

          <div className="cta mt-12 space-x-6">
            <motion.button
              className="bg-blue-700 hover:bg-blue-600 text-white px-4 py-3  font-semibold rounded-lg hover:scale-105 transition-transform transform"
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
              className="bg-white  ring-2 ring-gray-500 hover:bg-gray-50 text-black px-5 py-3  font-semibold rounded-lg hover:scale-105 transition-transform transform"
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
      </div>
     </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <KeyHighlights />
      </motion.div>

      <div className="features-section bg-gray-100 text-black ">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <HowItWorks />
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
