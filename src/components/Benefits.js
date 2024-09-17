import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaRobot, FaHandshake, FaChartLine } from "react-icons/fa";
import Slider from "react-slick";
import "../styles/benifits.css";

// Benefits Data
const benefitsData = [
  {
    title: "Reduce Manual Effort",
    description:
      "Automate repetitive tasks and reduce manual effort by 90%, allowing your team to focus on more important work.",
    icon: <FaBriefcase />,
  },
  {
    title: "AI-Powered Insights",
    description:
      "Leverage AI-powered insights to ensure you choose the top candidates for your open positions.",
    icon: <FaRobot />,
  },
  {
    title: "Team Collaboration",
    description:
      "Enhanced collaboration tools to seamlessly integrate your hiring team’s feedback and decisions.",
    icon: <FaHandshake />,
  },
  {
    title: "Scalable Solutions",
    description:
      "Our platform scales with your hiring needs, whether you're hiring for 10 or 10,000 roles.",
    icon: <FaChartLine />,
  },
  // Add more data if needed
];

// Framer Motion Variants
const cardVariants = {
  hidden: { opacity: 0, y: 50, rotateY: 90 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    rotateY: 0,
    transition: { delay: i * 0.2, duration: 0.8, ease: "easeInOut" },
  }),
};

const Benefits = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

  // Handle Scroll Event to Trigger Animation
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setHasScrolled(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Slider settings
  const sliderSettings = {
    
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="relative  flex items-center justify-center bg-black py-16">
      {/* Animated Background Circles */}
      <ul className="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>

      <div className="w-full max-w-4xl px-8 relative z-10">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          Why Choose{" "}
          <span className="bg-clip-text text-transparent py-5 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-800">
            CandidHR
          </span>
          ?
        </h2>

        {/* Benefits Slider */}
        <div className="relative">
          <Slider {...sliderSettings}>
            {benefitsData.map((benefit, index) => (
              <motion.div
                key={index}
                className="relative w-72 h-96 flex flex-col items-center justify-center p-6 rounded-xl bg-gray-950 shadow-2xl hover:shadow-blue-500/40 text-center " 
                initial="hidden"
                animate={hasScrolled ? "visible" : ""}
                custom={index}
                variants={cardVariants}
              >
                {/* React Icon */}
                <div className="flex items-center justify-center text-6xl text-blue-700 mb-14 mt-8">
                  {benefit.icon}
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
