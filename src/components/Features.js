import React from 'react';
import { FaClipboard, FaSearch, FaChartLine, FaVideo, FaCode, FaSyncAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Features = () => {
  const features = [
    {
      id: 1,
      title: 'Resume Screening & Matching',
      description: 'AI-driven matching that aligns resumes with job descriptions, ensuring the right candidates rise to the top.',
      icon: <FaClipboard className="text-4xl text-blue-400" />,
    },
    {
      id: 2,
      title: 'Centralized Resume Repository',
      description: 'Store and search resumes in an intuitive, organized system for future use.',
      icon: <FaSearch className="text-4xl text-blue-400" />,
    },
    {
      id: 3,
      title: 'AI-Powered Candidate Ranking',
      description: 'Analyze and rank candidates based on key skills, experience, and job relevance.',
      icon: <FaChartLine className="text-4xl text-blue-400" />,
    },
    {
      id: 4,
      title: 'Personality Screening',
      description: 'Conduct automated video and audio interviews to assess candidate personalities, reducing bias and manual effort.',
      icon: <FaVideo className="text-4xl text-blue-400" />,
    },
    {
      id: 5,
      title: 'Technical Test Integration',
      description: 'Built-in technical test capabilities to ensure candidates meet the required skill levels.',
      icon: <FaCode className="text-4xl text-blue-400" />,
    },
    {
      id: 6,
      title: 'Seamless Integration',
      description: 'Integrate easily with your existing HR systems and workflows.',
      icon: <FaSyncAlt className="text-4xl text-blue-400" />,
    },
  ];

  return (
    <section className="py-16  bg-black">
      <div className="container mx-auto text-center  ">
        <h2 className="text-4xl font-bold text-white mb-12">
          All-in-One Solution for{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-pink-500">
            Smarter, Faster Hiring
          </span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              className="glass-card p-6 rounded-lg border border-gray-700 bg-opacity-60 bg-clip-padding backdrop-filter backdrop-blur-lg bg-"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex flex-col items-center justify-center ">
                <div className="mb-8 mt-8 border  rounded-xl px-8 py-9 border-blue-500">{feature.icon}</div>
                <h3 className="text-2xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
