/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import Navbar from './components/Navbar';
import { PageTransition } from './components/animations/PageTransition';
import { trackEvent } from './utils/analytics';
import ErrorBoundary from './components/ErrorBoundary';
import { SEOHelmet } from './components/SEOHelmet';
import { useScrollToSection } from './utils/scrollUtils';

// Component Loading Skeleton
const PageSkeleton = () => (
  <div className="min-h-screen bg-slate-50 flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin opacity-50" />
  </div>
);

// Lazy Load All Routes
const Home = lazy(() => import('./pages/Home'));
const FloatingWhatsApp = lazy(() => import('./components/FloatingWhatsApp'));
const Footer = lazy(() => import('./components/Footer'));

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
  useScrollToSection({
    sectionRoutes: ['/services', '/portfolio', '/pricing', '/testimonials', '/contact'],
    preserveScroll: true,
    offset: 80,
    behavior: 'smooth', // Using optimized custom smooth scroll
    delay: 10 // Minimal delay for better responsiveness
  });
  return null;
};

function App() {
  const location = useLocation();

  return (
    <div className="font-sans antialiased bg-slate-50 selection:bg-indigo-500/30 overflow-x-hidden">
      <ScrollHandler />
      <UTMTracker />
      <Navbar />
      <Suspense fallback={null}>
        <FloatingWhatsApp />
      </Suspense>
      
      <AnimatePresence mode="wait">
        <motion.div key={location.pathname}>
          <ErrorBoundary>
            <Suspense fallback={<PageSkeleton />}>
              <Routes location={location}>
                <Route path="/" element={<SEOHelmet title="Website Design in Hyderabad" description="VM Web Solutions delivers website design in Hyderabad for local businesses, gyms, coaching centers, and real estate. Get fast, mobile-first sites that generate WhatsApp leads and rank better on Google."><PageTransition><Home /></PageTransition></SEOHelmet>} />
                <Route path="/services" element={<SEOHelmet title="Hyderabad Website Design Services | VM Web Solutions" description="Explore Hyderabad website design services focused on conversions, local SEO, and WhatsApp lead capture for small businesses and service providers."><PageTransition><Home /></PageTransition></SEOHelmet>} />
                <Route path="/portfolio" element={<SEOHelmet title="Hyderabad Web Design Portfolio | VM Web Solutions" description="View our portfolio of Hyderabad website designs for gyms, coaching centers, real estate, and local businesses that consistently convert visitors into customers."><PageTransition><Home /></PageTransition></SEOHelmet>} />
                <Route path="/pricing" element={<SEOHelmet title="Affordable Web Design Pricing | Hyderabad" description="Compare affordable web design pricing packages in Hyderabad for fast, mobile-friendly business websites with strong local SEO and WhatsApp integration."><PageTransition><Home /></PageTransition></SEOHelmet>} />
                <Route path="/testimonials" element={<SEOHelmet title="Hyderabad Website Design Testimonials | VM Web Solutions" description="Read client testimonials from Hyderabad business owners who gained more leads and customers through our web design and digital marketing solutions."><PageTransition><Home /></PageTransition></SEOHelmet>} />
                <Route path="/contact" element={<SEOHelmet title="Contact VM Web Solutions | Hyderabad Web Design" description="Contact VM Web Solutions for Hyderabad website design, local SEO, and high-converting WhatsApp lead generation. Schedule a free consultation today."><PageTransition><Home /></PageTransition></SEOHelmet>} />
                <Route path="/hyderabad-web-design" element={<SEOHelmet title="Hyderabad Web Design Agency | Local Website Design" description="Hire a Hyderabad web design agency that builds fast, conversion-focused websites for small businesses, coaches, gyms, and real estate firms."><PageTransition><HyderabadWebDesign /></PageTransition></SEOHelmet>} />
                <Route path="/gym-website-developer-india" element={<SEOHelmet title="Gym Website Design India | Fitness Websites" description="Gym website design in India built for fitness centers that want more memberships and WhatsApp leads through local search optimization."><PageTransition><GymWebDesign /></PageTransition></SEOHelmet>} />
                <Route path="/coaching-institute-website-development" element={<SEOHelmet title="Coaching Institute Website Development | India" description="Coaching institute website development in India with high-converting layouts, student admission funnels, and WhatsApp lead generation."><PageTransition><CoachingWebDesign /></PageTransition></SEOHelmet>} />
                <Route path="/real-estate-website-design-india" element={<SEOHelmet title="Real Estate Website Design India | Property Websites" description="Real estate website design in India for agents and brokers who need faster sales, higher quality leads, and better Google Maps visibility."><PageTransition><RealEstateWebDesign /></PageTransition></SEOHelmet>} />
                <Route path="/privacy-policy" element={<SEOHelmet title="Privacy Policy | VM Web Solutions" description="Privacy policy for VM Web Solutions, a Hyderabad website design agency providing local SEO and lead generation services."><PageTransition><PrivacyPolicy /></PageTransition></SEOHelmet>} />
                <Route path="/terms-of-service" element={<SEOHelmet title="Terms of Service | VM Web Solutions" description="Terms of service for VM Web Solutions, a Hyderabad-based website design and digital marketing agency."><PageTransition><TermsOfService /></PageTransition></SEOHelmet>} />
                <Route path="*" element={<SEOHelmet title="404 Not Found"><PageTransition><NotFound /></PageTransition></SEOHelmet>} />
              </Routes>
            </Suspense>
          </ErrorBoundary>
        </motion.div>
      </AnimatePresence>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
