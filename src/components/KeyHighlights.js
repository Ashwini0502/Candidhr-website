import React from "react";
import { motion } from "framer-motion";

const KeyHighlights = () => {
  const highlights = [
    {
      id: 1,
      title: "AI-Powered Candidate Ranking",
      description:
        "Automate resume screening and rank candidates with precision.",
    },
    {
      id: 2,
      title: "Streamlined Personality Screening",
      description:
        "Leverage video and audio interviews to evaluate personality fit.",
    },
    {
      id: 3,
      title: "Comprehensive Hiring Workflow",
      description:
        "From resume parsing to technical tests, candidhr streamlines every step.",
    },
    {
      id: 4,
      title: "Maximized Efficiency",
      description:
        "Cut manual tasks by 90%, focus on the final interview with top candidates.",
    },
  ];

  return (
    <section className="py-20 bg-gray-900" id="key-highlights">
      <div className="container mx-auto text-center ">
        <h2 className="text-4xl font-bold text-white mb-10">Key <span className="bg-clip-text text-transparent py-5 bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500" >Highlights</span></h2>
        <div className="grid  md:grid-cols-2 gap-8 ">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.id}
              className="bg-black shadow-lg p-4 rounded-lg border border-gray-200 hover:shadow-blue-400"
            >
              <div className="flex py-6 ">
              <div>
                {" "}
                <motion.div className="rounded-full w-12 h-12 bg-purple-600 text-white flex items-center justify-center text-lg font-bold mb-4">
                  {highlight.id}
                </motion.div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white mb-2">
                  {highlight.title}
                </h3>
                <p className="text-gray-600">{highlight.description}</p>
              </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyHighlights;
