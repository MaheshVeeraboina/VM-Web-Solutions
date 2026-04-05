/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import Navbar from './components/Navbar';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Footer from './components/Footer';
import { PageTransition } from './components/animations/PageTransition';
import { trackEvent } from './utils/analytics';

// Component Loading Skeleton
const PageSkeleton = () => (
  <div className="min-h-screen bg-slate-50 flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin opacity-50" />
  </div>
);

// Eagerly Load Critical Path
import Home from './pages/Home';

// Lazy Load Chunked Routes
const HyderabadWebDesign = lazy(() => import('./pages/HyderabadWebDesign'));
const GymWebDesign = lazy(() => import('./pages/GymWebDesign'));
const CoachingWebDesign = lazy(() => import('./pages/CoachingWebDesign'));
const RealEstateWebDesign = lazy(() => import('./pages/RealEstateWebDesign'));
const NotFound = lazy(() => import('./pages/NotFound'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));

// UTM Tracking Hook
const UTMTracker = () => {
  useEffect(() => {
    if (!import.meta.env.PROD) return;
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
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
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
          <Suspense fallback={<PageSkeleton />}>
            <Routes location={location}>
              <Route path="/" element={<PageTransition><Home /></PageTransition>} />
              <Route path="/hyderabad-web-design" element={<PageTransition><HyderabadWebDesign /></PageTransition>} />
              <Route path="/gym-website-developer-india" element={<PageTransition><GymWebDesign /></PageTransition>} />
              <Route path="/coaching-institute-website-development" element={<PageTransition><CoachingWebDesign /></PageTransition>} />
              <Route path="/real-estate-website-design-india" element={<PageTransition><RealEstateWebDesign /></PageTransition>} />
              <Route path="/privacy-policy" element={<PageTransition><PrivacyPolicy /></PageTransition>} />
              <Route path="/terms-of-service" element={<PageTransition><TermsOfService /></PageTransition>} />
              <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
            </Routes>
          </Suspense>
        </motion.div>
      </AnimatePresence>

      <Footer />
    </div>
  );
}

export default App;
