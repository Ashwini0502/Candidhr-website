import React from "react";
import { motion } from "framer-motion";


const cardVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  hover: { scale: 1.05, boxShadow: "0px 12px 24px rgba(0, 0, 255, 0.4)" }
};

const imageVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.1, opacity: 1 },
};

const featuresData = [
  {
    heading: "Resume Screening & Matching",
    text: "AI-driven matching aligns resumes with job descriptions, ensuring the right candidates rise to the top.",
    image: "https://itchronicles.com/wp-content/uploads/2020/11/where-is-ai-used.jpg"
  },
  {
    heading: "Centralized Resume Repository",
    text: "Store and search resumes in an intuitive, organized system for future use.",
    image: "https://itchronicles.com/wp-content/uploads/2020/11/where-is-ai-used.jpg"
  },
  {
    heading: "AI-Powered Candidate Ranking",
    text: "Analyze and rank candidates based on key skills, experience, and job relevance.",
    image: "https://itchronicles.com/wp-content/uploads/2020/11/where-is-ai-used.jpg"
  },
  {
    heading: "Personality Screening",
    text: "Conduct automated video and audio interviews to assess candidate personalities, reducing bias and manual effort.",
    image: "https://itchronicles.com/wp-content/uploads/2020/11/where-is-ai-used.jpg"
  },
  {
    heading: "Seamless Integration",
    text: "Integrate easily with your existing HR systems and workflows.",
    image: "https://itchronicles.com/wp-content/uploads/2020/11/where-is-ai-used.jpg"
  }
];

const Features = () => {
  return (
    <section className="relative min-h-screen p-8 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          All-in-One Solution for Smarter, Faster Hiring
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
          {featuresData.map((feature, index) => (
            <motion.div
              key={index}
              className="relative w-full max-w-md bg-black p-6 rounded-lg border-2 border-blue-500 shadow-lg flex flex-col items-center transition-transform duration-300"
              variants={cardVariants}
              initial="initial"
              whileInView="animate"
              whileHover="hover"
              transition={{ duration: 0.5, type: "spring", stiffness: 300 }}
            >
              {/* React Logo */}
             

              {/* Image */}
              <motion.div
                className="relative w-full h-48 overflow-hidden rounded-lg mb-4"
                variants={imageVariants}
                initial="initial"
                whileHover="hover"
              >
                <motion.img
                  src={feature.image}
                  alt={feature.heading}
                  className="w-full h-full object-cover"
                  initial={{ opacity: 1 }}
                  whileHover={{ opacity: 0.8 }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>

              {/* Content */}
              <div className="text-center">
                <h3 className="text-xl font-semibold text-white mb-2">{feature.heading}</h3>
                <p className="text-gray-300 text-sm">{feature.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
