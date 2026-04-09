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
import ErrorBoundary from './components/ErrorBoundary';
import { SEOHelmet } from './components/SEOHelmet';

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
  const { pathname } = useLocation();
  useEffect(() => {
    // Handle section scrolling for clean URLs
    const sectionRoutes = ['/services', '/portfolio', '/pricing', '/testimonials', '/contact'];
    
    if (sectionRoutes.includes(pathname)) {
      // For section navigation, scroll directly to the section without scrolling to top first
      // Use multiple attempts to ensure the element is available after page transition
      const scrollToSection = () => {
        const id = pathname.replace('/', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          // Retry after a short delay if element not found
          setTimeout(scrollToSection, 50);
        }
      };
      
      // Initial attempt after a brief delay
      setTimeout(scrollToSection, 150);
    } else {
      // For other page navigation, scroll to top instantly
      // This prevents the footer from staying visible during AnimatePresence exit.
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  }, [pathname]);
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
          <ErrorBoundary>
            <Suspense fallback={<PageSkeleton />}>
              <Routes location={location}>
                <Route path="/" element={<SEOHelmet title="Best Web Design Agency" description="High-converting website development for local Indian businesses."><PageTransition><Home /></PageTransition></SEOHelmet>} />
                <Route path="/services" element={<SEOHelmet title="Web Design Services - VM Web Solutions" description="Professional web design services for local Indian businesses including responsive design, SEO optimization, and lead generation."><PageTransition><Home /></PageTransition></SEOHelmet>} />
                <Route path="/portfolio" element={<SEOHelmet title="Web Design Portfolio - VM Web Solutions" description="View our portfolio of high-converting websites for gyms, coaching institutes, real estate, and local businesses."><PageTransition><Home /></PageTransition></SEOHelmet>} />
                <Route path="/pricing" element={<SEOHelmet title="Web Design Pricing - VM Web Solutions" description="Affordable web design packages for Indian businesses. Get a quote for your website development project."><PageTransition><Home /></PageTransition></SEOHelmet>} />
                <Route path="/testimonials" element={<SEOHelmet title="Client Testimonials - VM Web Solutions" description="Read reviews from satisfied clients who got more leads and customers through our web design services."><PageTransition><Home /></PageTransition></SEOHelmet>} />
                <Route path="/contact" element={<SEOHelmet title="Contact VM Web Solutions" description="Get in touch for your web design project. Free consultation and quote for Indian businesses."><PageTransition><Home /></PageTransition></SEOHelmet>} />
                <Route path="/hyderabad-web-design" element={<SEOHelmet title="Hyderabad Web Design Agency" description="Top-rated web designers in Hyderabad producing WhatsApp leads."><PageTransition><HyderabadWebDesign /></PageTransition></SEOHelmet>} />
                <Route path="/gym-website-developer-india" element={<SEOHelmet title="Gym Website Developer India" description="Premium website designs for Fitness centers and Gyms."><PageTransition><GymWebDesign /></PageTransition></SEOHelmet>} />
                <Route path="/coaching-institute-website-development" element={<SEOHelmet title="Coaching Institute Web Design" description="Direct admissions and student portfolios via stunning digital prospectuses."><PageTransition><CoachingWebDesign /></PageTransition></SEOHelmet>} />
                <Route path="/real-estate-website-design-india" element={<SEOHelmet title="Real Estate Web Design" description="Reduce CPL by 50% with targeted Real Estate landing pages."><PageTransition><RealEstateWebDesign /></PageTransition></SEOHelmet>} />
                <Route path="/privacy-policy" element={<SEOHelmet title="Privacy Policy"><PageTransition><PrivacyPolicy /></PageTransition></SEOHelmet>} />
                <Route path="/terms-of-service" element={<SEOHelmet title="Terms of Service"><PageTransition><TermsOfService /></PageTransition></SEOHelmet>} />
                <Route path="*" element={<SEOHelmet title="404 Not Found"><PageTransition><NotFound /></PageTransition></SEOHelmet>} />
              </Routes>
            </Suspense>
          </ErrorBoundary>
        </motion.div>
      </AnimatePresence>

      <Footer />
    </div>
  );
}

export default App;
