import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Loader from './components/Loader';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import WhatWeDo from './components/WhatWeDo';
import FAQ from './components/FAQ';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import ChatBot from './components/ChatBot';
import './index.css';

function MainPage() {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <main className="w-full">
        <Home />
        <About />
        <WhatWeDo />
        <FAQ />
        <Blog />
        <Contact />
      </main>
      <ChatBot />
    </div>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <AnimatePresence mode="wait">
        {loading ? (
          <Loader key="loader" />
        ) : (
          <motion.div
            key="app"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/gallery" element={<Gallery />} />
            </Routes>
          </motion.div>
        )}
      </AnimatePresence>
    </Router>
  );
}

export default App;