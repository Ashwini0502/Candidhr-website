import React from "react";
import { motion } from "framer-motion";
import "../styles/benifits.css"; 

const benefitsData = [
  {
    title: "Reduce Manual Effort",
    description: "Automate repetitive tasks and reduce manual effort by 90%, allowing your team to focus on more important work.",
    icon: "💼",
  },
  {
    title: "AI-Powered Insights",
    description: "Leverage AI-powered insights to ensure you choose the top candidates for your open positions.",
    icon: "🤖",
  },
  {
    title: "Team Collaboration",
    description: "Enhanced collaboration tools to seamlessly integrate your hiring team’s feedback and decisions.",
    icon: "🤝",
  },
  {
    title: "Scalable Solutions",
    description: "Our platform scales with your hiring needs, whether you're hiring for 10 or 10,000 roles.",
    icon: "📈",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5 },
  }),
};

const Benefits = () => {
  return (
    <section className="min-h-screen flex items-center  justify-center bg-black">
      <div className="w-full max-w-5xl mt-18 p-8">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          Why Choose CandidHR?
        </h2>

        {/* Benefits Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-center">
          {benefitsData.map((benefit, index) => (
            <motion.div
              key={index}
              className="one-div w-64 h-80 p-6 flex flex-col items-center space-y-4 hover:bg-gray-700 hover:shadow-xl transition-colors duration-300 mx-auto"
              initial="hidden"
              animate="visible"
              custom={index}
              variants={cardVariants}
            >
              <div className="text-5xl text-blue-400">{benefit.icon}</div>
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2 text-white">
                  {benefit.title}
                </h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
