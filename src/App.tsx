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
import { trackEvent } from './utils/analytics';

// UTM Tracking Hook
const UTMTracker = () => {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const source = params.get('utm_source');
    if (source && !sessionStorage.getItem('utm_tracked')) {
      trackEvent('traffic_source', {
        source,
        medium: params.get('utm_medium'),
        campaign: params.get('utm_campaign')
      });
      sessionStorage.setItem('utm_tracked', 'true');
    }
  }, []);
  return null;
};

// Component to scroll to top or hash on route change
const ScrollHandler = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) element.scrollIntoView();
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
};

function App() {
  const location = useLocation();

  return (
    <div className="font-sans antialiased bg-slate-50 selection:bg-indigo-500/30 overflow-x-hidden">
      <ScrollHandler />
      <UTMTracker />
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
