import React from "react";
import { motion } from "framer-motion";

const KeyHighlights = () => {
  const highlights = [
    {
      id: 1,
      title: "AI-Powered Candidate Ranking",
      description: "Automate resume screening and rank candidates with precision.",
    },
    {
      id: 2,
      title: "Streamlined Personality Screening",
      description: "Leverage video and audio interviews to evaluate personality fit.",
    },
    {
      id: 3,
      title: "Comprehensive Hiring Workflow",
      description: "From resume parsing to technical tests, candidhr streamlines every step.",
    },
    {
      id: 4,
      title: "Maximized Efficiency",
      description: "Cut manual tasks by 90%, focus on the final interview with top candidates.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50" id="key-highlights">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-10">Key Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.id}
              className="bg-white shadow-lg p-6 rounded-lg border border-gray-200"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2, ease: "easeOut" }}
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }}
            >
              <motion.div
                className="rounded-full w-12 h-12 bg-purple-400 text-white flex items-center justify-center text-lg font-bold mb-4"
                whileHover={{ scale: 1.2 }}
              >
                {highlight.id}
              </motion.div>
              <h3 className="text-2xl font-semibold text-gray-700 mb-2">
                {highlight.title}
              </h3>
              <p className="text-gray-600">{highlight.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyHighlights;
