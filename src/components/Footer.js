import React from "react";
import '../styles/footer.css'; // Import the custom CSS for animations and additional styles

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
        
        {/* CandidHR.ai Logo */}
        <div>
          <h1 className="text-6xl md:text-7xl font-bold text-gradient animate-text">
            CandidHR.ai
          </h1>
          <p className="mt-4 text-sm">Copyright © 2024. All rights reserved.</p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row md:space-x-12">
          <div>
            <h2 className="font-semibold mb-3">Products</h2>
            <ul>
              <li>
                <a href="#" className="hover:text-pink-400 transition-colors">
                  Talent
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-500 transition-colors">
                  AI Interviewer
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500 transition-colors">
                  COR
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold mb-3">For engineers</h2>
            <ul>
              <li>
                <a href="#" className="hover:text-pink-400 transition-colors">
                  CandidHR Certified
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold mb-3">Company</h2>
            <ul>
              <li>
                <a href="#" className="hover:text-purple-500 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500 transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-400 transition-colors">
                  Vetting Process
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-500 transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold mb-3">Other</h2>
            <ul>
              <li>
                <a href="#" className="hover:text-blue-500 transition-colors">
                  Sitemap
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-400 transition-colors">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-500 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500 transition-colors">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-3">
          <a
            href="#"
            className="block bg-gray-700 p-2 rounded hover:bg-purple-500 transition"
          >
            <img src="/linkedin-icon.svg" alt="LinkedIn" className="w-6 h-6" />
          </a>
          <a
            href="#"
            className="block bg-gray-700 p-2 rounded hover:bg-blue-500 transition"
          >
            <img src="/instagram-icon.svg" alt="Instagram" className="w-6 h-6" />
          </a>
          <a
            href="#"
            className="block bg-gray-700 p-2 rounded hover:bg-pink-400 transition"
          >
            <img src="/close-icon.svg" alt="Close" className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
