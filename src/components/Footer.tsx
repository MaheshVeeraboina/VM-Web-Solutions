import React from 'react';
import { Mail, Phone, MapPin, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from './icons/Logo';

const Footer = () => {
  const location = useLocation();

  const handleNavClick = (href: string) => {
    // Use React Router navigation for clean URLs
    window.location.href = href;
  };
  return (
    <footer className="bg-slate-950 text-slate-400 pt-20 pb-10 px-6 border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <Logo width={42} height={42} className="text-white" />
              <span className="font-extrabold text-2xl tracking-tight text-white font-heading">
                VM Web <span className="text-indigo-500">Solutions</span>
              </span>
            </div>
            <p className="leading-relaxed mb-6 max-w-sm">
              We help local Indian businesses build a commanding online presence, get found on Google, and convert website visitors into paying customers.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/vmwebsolutions" target="_blank" rel="noreferrer" aria-label="Instagram" className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com/company/vmwebsolutions" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://twitter.com/vmwebsolutions" target="_blank" rel="noreferrer" aria-label="Twitter" className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://youtube.com/vmwebsolutions" target="_blank" rel="noreferrer" aria-label="YouTube" className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div className="md:col-span-2 grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li><button onClick={() => handleNavClick('/services')} className="hover:text-indigo-400 transition-colors">Services</button></li>
                <li><button onClick={() => handleNavClick('/portfolio')} className="hover:text-indigo-400 transition-colors">Portfolio</button></li>
                <li><button onClick={() => handleNavClick('/pricing')} className="hover:text-indigo-400 transition-colors">Pricing</button></li>
                <li><button onClick={() => handleNavClick('/testimonials')} className="hover:text-indigo-400 transition-colors">Testimonials</button></li>
                <li><a href="https://wa.me/918309358319" className="text-[#25D366] hover:text-white transition-colors font-semibold">WhatsApp Chat</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold text-lg mb-6">Expertise</h4>
              <ul className="space-y-3">
                <li><Link to="/hyderabad-web-design" className="hover:text-indigo-400 transition-colors">Hyderabad Agency</Link></li>
                <li><Link to="/gym-website-developer-india" className="hover:text-indigo-400 transition-colors">Gym Website Design</Link></li>
                <li><Link to="/coaching-institute-website-development" className="hover:text-indigo-400 transition-colors">Coaching Web Design</Link></li>
                <li><Link to="/real-estate-website-design-india" className="hover:text-indigo-400 transition-colors">Real Estate Web Design</Link></li>
              </ul>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-indigo-500 shrink-0 mt-1" />
                <span>Hyderabad, Telangana, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-indigo-500 shrink-0" />
                <a href="tel:+918309358319" className="hover:text-white transition-colors">+91 83093 58319</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-indigo-500 shrink-0" />
                <a href="mailto:maheshveeraboina632@gmail.com" className="hover:text-white transition-colors break-all">maheshveeraboina632@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} VM Web Solutions. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
