// src/components/Navbar.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/Logo_on_colourB1.png"; 

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

 
  return (
    <motion.nav
      className={` flex items-center justify-between p-3 shadow-lg w-full sticky top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-black bg-opacity-70 backdrop-blur-md"
          : "bg-black bg-opacity-100"
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="h-auto flex gap-2 items-center px-7 ">
        <img src={logo} alt="CandidHR Logo" className="h-full w-6 object-cover" /><span className="text-white text-lg font-semibold">CandidHR.ai</span>
      </div>

      <div className="flex items-center">
        <ul
          className={`lg:flex lg:space-x-8 text-white text-sm font-bold px-6 lg:static  bg-black lg:bg-transparent lg:opacity-100 absolute mt-7 top-full left-0 w-full transition-all duration-300 ease-in-out ${
            isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
          }`}
        >
          {["Home", "About", "Contact"].map((item, index) => (
            <li key={index} className=" py-2 lg:py-0">
              <motion.div
                whileHover={{
                  y: -3,
                  color: "pink",
                  borderRadius: "8px",
                }}
                whileTap={{ scale: 0.95 }}
                className="transition-all duration-300"
              >
                <Link
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`} 
                  onClick={() => {
                    console.log(`Navigating to /${item.toLowerCase()}`);
                    if (isOpen) {
                      setIsOpen(false); // Close menu after navigation on mobile
                    }
                  }}
                >
                  {item}
                </Link>
              </motion.div>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="px-9">
      <Link to="/contact">
            <motion.button
              className="bg-black text-white border border-white px-4 py-2 text-sm font-semibold rounded-lg hover:bg-white hover:text-black transition-colors"
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 4px 10px rgba(255, 255, 255, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.button>
          </Link>
      </div>
    </motion.nav>
  );
};

export default Navbar;
