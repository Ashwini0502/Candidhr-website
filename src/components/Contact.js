import React from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="min-h-screen p-8 bg-black  text-white flex flex-col justify-center items-center">
      <div className="flex flex-col lg:flex-row max-w-6xl w-full mt-16 ">
        {/* Contact Details Section */}
        <div className="lg:w-1/2 p-8  bg-opacity-25 rounded-lg shadow-lg">
          <h2 className="text-4xl font-bold mb-6 ">Contact Us</h2>
          <p className="mb-6 text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Reach out to us with any inquiries.
          </p>

          <div className="space-y-6 text-lg">
            <div className="flex items-center">
              <FaMapMarkerAlt className="mr-4 text-gray-400" size={24} />
              <span className=" text-gray-400">Pune</span>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="mr-4 text-gray-400" size={24} />
              <span className=" text-gray-400">info@diacto.com</span>
            </div>
            <div className="flex items-center">
              <FaPhoneAlt className="mr-4 text-gray-400" size={24} />
              <span className=" text-gray-400">(+46) 033-112233</span>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="mt-10">
          

            <div className="flex space-x-6 mt-8">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">
                <FaFacebook size={24} />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
                <FaTwitter size={24} />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-500">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <motion.form
          className="lg:w-1/2 p-8 bg-black bg-opacity-80 rounded-lg shadow-lg space-y-6 mt-8 lg:mt-0 lg:ml-8"
          style={{ border: "2px solid black",
            boxShadow:"5px 5px 30px #c0bada"
            }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-4xl font-bold mb-6 ">Get in Touch</h2>

          {/* Name Field */}
          <motion.input
            type="text"
            placeholder="Name"
            className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white placeholder-gray-400"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />

          {/* Email Field */}
          <motion.input
            type="email"
            placeholder="Email"
            className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white placeholder-gray-400"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          />

          {/* Phone Number Field */}
          <motion.input
            type="tel"
            placeholder="Phone Number"
            className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white placeholder-gray-400"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          />

    

          {/* Message Field */}
          <motion.textarea
            placeholder="Your Message"
            rows="4"
            className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white placeholder-gray-400"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          ></motion.textarea>

          {/* Submit Button */}
          <motion.div className="flex justify-center mt-6">
            <motion.button
              className=" text-white bg-gradient-to-r from-gray-800 to-gray-600 hover:from-gray-700 hover:to-gray-500 px-8 py-2 rounded-full text-white font-semibold  transition"
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </motion.div>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
