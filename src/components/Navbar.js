// src/components/Navbar.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assest/Logo_on_colourB1.png"; // Adjust path as per your project structure

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

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.nav
      className={`relative flex items-center justify-between p-6 shadow-lg w-full sticky top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-black bg-opacity-70 backdrop-blur-md"
          : "bg-black bg-opacity-100"
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="w-56 h-auto">
        <img src={logo} alt="CandidHR Logo" className="h-full w-full object-cover" />
      </div>

      <div className="flex items-center">
        {/* Hamburger Icon */}
        <button
          onClick={toggleMenu}
          className="block lg:hidden text-white focus:outline-none"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        {/* Navigation Links */}
        <ul
          className={`lg:flex lg:space-x-8 text-white text-2xl lg:static lg:bg-transparent bg-black lg:bg-transparent lg:opacity-100 absolute mt-7 top-full left-0 w-full transition-all duration-300 ease-in-out ${
            isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
          }`}
        >
          {["Home", "Features", "Benefits", "About", "Contact"].map((item, index) => (
            <li key={index} className="lg:mr-8 py-2 lg:py-0">
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
    </motion.nav>
  );
};

export default Navbar;
