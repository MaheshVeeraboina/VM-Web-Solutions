import React from 'react';
import Hero from '../components/Hero';
import Problem from '../components/Problem';
import Solution from '../components/Solution';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';
import WhyChooseUs from '../components/WhyChooseUs';
import FAQ from '../components/FAQ';
import CTASection from '../components/CTASection';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <main>
      <Hero />
      <Problem />
      <Solution />
      <Services />
      <Portfolio />
      <Pricing />
      <Testimonials />
      <WhyChooseUs />
      <FAQ />
      <Contact />
      <CTASection />
    </main>
  );
};

export default Home;
