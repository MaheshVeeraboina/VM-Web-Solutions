/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import Navbar from './components/Navbar';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Footer from './components/Footer';

import Home from './pages/Home';
import HyderabadWebDesign from './pages/HyderabadWebDesign';
import GymWebDesign from './pages/GymWebDesign';
import CoachingWebDesign from './pages/CoachingWebDesign';
import RealEstateWebDesign from './pages/RealEstateWebDesign';
import { PageTransition } from './components/animations/PageTransition';

// Component to scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  const location = useLocation();

  return (
    <div className="font-sans antialiased bg-slate-50 selection:bg-indigo-500/30 overflow-x-hidden">
      <ScrollToTop />
      <Navbar />
      <FloatingWhatsApp />
      
      <AnimatePresence mode="wait">
        <motion.div key={location.pathname}>
          <Routes location={location}>
            <Route path="/" element={<PageTransition><Home /></PageTransition>} />
            <Route path="/hyderabad-web-design" element={<PageTransition><HyderabadWebDesign /></PageTransition>} />
            <Route path="/gym-website-developer-india" element={<PageTransition><GymWebDesign /></PageTransition>} />
            <Route path="/coaching-institute-website-development" element={<PageTransition><CoachingWebDesign /></PageTransition>} />
            <Route path="/real-estate-website-design-india" element={<PageTransition><RealEstateWebDesign /></PageTransition>} />
          </Routes>
        </motion.div>
      </AnimatePresence>

      <Footer />
    </div>
  );
}

export default App;
