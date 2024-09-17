import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/benifits.css"; // Adjust the path as necessary

const benefitsData = [
  {
    title: "Reduce Manual Effort",
    description:
      "Automate repetitive tasks and reduce manual effort by 90%, allowing your team to focus on more important work.",
    icon: "💼",
  },
  {
    title: "AI-Powered Insights",
    description:
      "Leverage AI-powered insights to ensure you choose the top candidates for your open positions.",
    icon: "🤖",
  },
  {
    title: "Team Collaboration",
    description:
      "Enhanced collaboration tools to seamlessly integrate your hiring team’s feedback and decisions.",
    icon: "🤝",
  },
  {
    title: "Scalable Solutions",
    description:
      "Our platform scales with your hiring needs, whether you're hiring for 10 or 10,000 roles.",
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
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Slider settings for react-slick
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "40px",
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: "30px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "20px",
        },
      },
    ],
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-black">
      <div className="w-full max-w-5xl mt-18">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          Why Choose CandidHR?
        </h2>

        {/* Benefits Cards */}
        <Slider {...sliderSettings} className="px-4">
          {benefitsData.map((benefit, index) => (
            <motion.div
              key={index}
              className={`relative w-64 h-96 flex flex-col items-center justify-center p-6 mx-4 my-2 overflow-hidden rounded-xl bg-gray-700 bg-opacity-70 shadow-lg ${hasScrolled ? "flip" : ""}`}
              initial="hidden"
              animate="visible"
              custom={index}
              variants={cardVariants}
            >
              {/* Content */}
              <div className="relative z-20 text-center flex flex-col items-center justify-center h-full">
                <div className="text-5xl text-blue-400 mb-4">{benefit.icon}</div> {/* Icon */}
                <h3 className="text-2xl font-bold mb-2 text-white">{benefit.title}</h3> {/* Title */}
                <p className="text-gray-300">{benefit.description}</p> {/* Description */}
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Benefits;
