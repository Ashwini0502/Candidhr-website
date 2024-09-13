import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="min-h-screen p-8 bg-black text-white flex flex-col items-center">
      <h2 className="text-3xl font-bold text-pink-400 mb-6">
        Ready to Experience candidhr?
      </h2>
      
      <motion.form
        className="space-y-4 max-w-lg w-full bg-gray-800 p-6 rounded-lg shadow-lg"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div>
          <motion.input
            type="text"
            placeholder="Name"
            className="w-full p-2 border border-gray-600 rounded bg-gray-900 text-white"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
        </div>
        <div>
          <motion.input
            type="email"
            placeholder="Email"
            className="w-full p-2 border border-gray-600 rounded bg-gray-900 text-white"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          />
        </div>
        <div>
          <motion.input
            type="text"
            placeholder="Phone"
            className="w-full p-2 border border-gray-600 rounded bg-gray-900 text-white"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          />
        </div>
        <div>
          <motion.textarea
            placeholder="Message"
            className="w-full p-2 border border-gray-600 rounded bg-gray-900 text-white"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          ></motion.textarea>
        </div>
        <motion.button
          className="bg-gradient-to-r from-pink-400 to-blue-500 px-6 py-3 rounded hover:opacity-90 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
        >
          Send Message
        </motion.button>
      </motion.form>
    </section>
  );
};

export default Contact;
