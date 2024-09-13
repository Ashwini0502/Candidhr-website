import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Features from "./components/Features";
import Benefits from "./components/Benefits";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <div className="">
        <Navbar />
        
        <Routes>
          <Route path="/"  element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/benefits" element={<Benefits />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
