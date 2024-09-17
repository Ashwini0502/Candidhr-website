import React from "react";
import { motion } from "framer-motion";
import { FaUser, FaGlobe, FaCheckCircle, FaChartBar } from "react-icons/fa";

const KeyHighlights = () => {
  const highlights = [
    {
      id: 1,
      title: "Best talent at half the cost",
      description: "Hire engineers that have gone through a 4h+ vetting process for an average of $38/hour.",
      icon: <FaUser className="text-blue-500 text-3xl" />, // React Icon
    },
    {
      id: 2,
      title: "Global compliance and benefits",
      description: "We handle international employment laws, benefits, and global payroll on your behalf.",
      icon: <FaGlobe className="text-blue-500 text-3xl" />, // React Icon
    },
    {
      id: 3,
      title: "1 week free, 0 risk",
      description: "1 week free trial per engineer. No card on file required.",
      icon: <FaCheckCircle className="text-blue-500 text-3xl" />, // React Icon
    },
    {
      id: 4,
      title: "Management dashboard",
      description: "Easily track the hours & performance of each engineer, receive weekly summaries, and more.",
      icon: <FaChartBar className="text-blue-500 text-3xl" />, // React Icon
    },
  ];

  return (
    <section className="flex items-center justify-center min-h-screen bg-black" id="key-highlights">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-10">
          Key{" "}
          <span className="bg-clip-text text-transparent py-5 bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500">
            Highlights
          </span>
        </h2>
        <div className="   border  w-full md:w-6/12 content-center mx-auto mb-20 rounded-lg">
          <div className="gap-8 py-5 px-5">
            {highlights.map((highlight) => (
              <motion.div
                key={highlight.id}
                className="bg-black mt-5 p-6 rounded-lg border border-gray-800 hover:shadow-lg hover:shadow-blue-500 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center">
                  <div className="mr-8 border border-blue-500 px-5 py-5 rounded-xl">
                    {highlight.icon}
                  </div>
                  <div className="text-left">
                    <h3 className="text-2xl font-semibold text-white mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-gray-400">{highlight.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyHighlights;
