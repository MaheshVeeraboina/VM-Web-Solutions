import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Logo } from './icons/Logo';
import { useScrollNavigation } from '../utils/scrollUtils';
import { reduceMotionOnMobile } from '../utils/mobilePerformance';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileSubMenu, setMobileSubMenu] = useState<string | null>(null);
  const [reduceMotion, setReduceMotion] = useState(false);
  const { navigateWithScroll } = useScrollNavigation({ scrollToSection: true });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setReduceMotion(reduceMotionOnMobile());
  }, []);

  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    setIsOpen(false);
    setMobileSubMenu(null);
    navigateWithScroll(href);
  };

  const navLinks = [
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Testimonials', href: '/testimonials' },
  ];

  const expertiseLinks = [
    { name: 'Hyderabad Web Design', href: '/hyderabad-web-design', description: 'Local web design agency' },
    { name: 'Gym Website Design', href: '/gym-website-developer-india', description: 'Fitness center websites' },
    { name: 'Coaching Institute Websites', href: '/coaching-institute-website-development', description: 'Educational portals' },
    { name: 'Real Estate Website Design', href: '/real-estate-website-design-india', description: 'Property platforms' },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms of Service', href: '/terms-of-service' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.05)] py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3" aria-label="Go to homepage" onClick={() => setIsOpen(false)}>
          <Logo width={42} height={42} className="text-slate-900" />
          <span className="font-extrabold text-2xl tracking-tight font-heading hidden sm:block">
            <span className="bg-gradient-to-r from-[#3B82F6] to-[#9333EA] bg-clip-text text-transparent">V</span>
            <span className="text-slate-900">M</span> 
            <span className="text-slate-900"> Web </span>
            <span className="text-indigo-600">Solutions</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 bg-white/50 backdrop-blur-md px-8 py-3 rounded-full border border-slate-200/50 shadow-sm relative">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              to={link.href}
              onClick={(event) => handleNavClick(event, link.href)}
              className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors"
            >
              {link.name}
            </Link>
          ))}

          {/* Desktop Expertise Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setOpenDropdown('expertise')}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors flex items-center gap-1.5">
              Expertise
              <ChevronDown 
                size={16} 
                className={`transition-transform ${openDropdown === 'expertise' ? 'rotate-180' : ''}`}
              />
            </button>

            <AnimatePresence>
              {openDropdown === 'expertise' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: reduceMotion ? 0.05 : 0.15 }}
                  className="absolute top-full -left-6 pt-2 w-64 bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden"
                >
                  {expertiseLinks.map((link, index) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      onClick={(event) => {
                        handleNavClick(event, link.href);
                        setOpenDropdown(null);
                      }}
                      className={`block px-4 py-3 text-sm font-medium text-slate-900 hover:bg-indigo-50 hover:text-indigo-600 transition-colors ${
                        index !== expertiseLinks.length - 1 ? 'border-b border-slate-100' : ''
                      }`}
                    >
                      <div className="font-semibold">{link.name}</div>
                      <div className="text-xs text-slate-500">{link.description}</div>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={() => navigateWithScroll('/contact')}
            className="group relative inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-full text-sm font-semibold transition-all shadow-lg hover:shadow-xl overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Book Free Call <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-slate-900 z-50 relative p-2 -mr-2" aria-label="Toggle menu" onClick={() => setIsOpen(prev => !prev)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: reduceMotion ? 0.1 : 0.3 }}
            className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-slate-100 shadow-2xl overflow-hidden md:hidden"
          >
            <div className="flex flex-col gap-4 p-6 max-h-[80vh] overflow-y-auto">
              {navLinks.map((link) => (
                <Link 
                  key={link.name}
                  to={link.href}
                  onClick={(event) => handleNavClick(event, link.href)}
                  className="text-lg font-bold text-slate-800 py-3 border-b border-slate-100/50 block w-full text-left"
                >
                  {link.name}
                </Link>
              ))}

              {/* Mobile Expertise Dropdown */}
              <div className="border-b border-slate-100/50">
                <button
                  onClick={() => setMobileSubMenu(mobileSubMenu === 'expertise' ? null : 'expertise')}
                  className="text-lg font-bold text-slate-800 py-3 w-full text-left flex items-center justify-between"
                >
                  Expertise
                  <ChevronDown
                    size={20}
                    className={`transition-transform ${mobileSubMenu === 'expertise' ? 'rotate-180' : ''}`}
                  />
                </button>

                <AnimatePresence>
                  {mobileSubMenu === 'expertise' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: reduceMotion ? 0.1 : 0.3 }}
                      className="bg-slate-50 rounded-lg overflow-hidden"
                    >
                      {expertiseLinks.map((link) => (
                        <Link
                          key={link.href}
                          to={link.href}
                          onClick={(event) => handleNavClick(event, link.href)}
                          className="block px-4 py-3 text-base font-medium text-slate-700 hover:text-indigo-600 border-b border-slate-100 last:border-b-0"
                        >
                          {link.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <button 
                onClick={() => navigateWithScroll('/contact')}
                className="bg-indigo-600 text-white text-center py-4 rounded-2xl font-bold mt-4 shadow-lg shadow-indigo-500/25 flex justify-center items-center gap-2 w-full"
              >
                Book Free Call <ArrowRight size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
