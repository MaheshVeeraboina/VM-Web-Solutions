/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { 
  Globe, 
  Search, 
  MapPin, 
  TrendingUp, 
  CheckCircle2, 
  MessageSquare, 
  Phone, 
  ArrowRight, 
  ChevronDown,
  Loader2,
  Menu, 
  X, 
  Star,
  Zap,
  Users,
  BarChart3,
  Mail,
  User,
  Briefcase,
  ShieldCheck
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Components ---

const FloatingWhatsApp = () => {
  return (
    <motion.a
      href="https://wa.me/918309358319?text=I'm%20interested%20in%20your%20web%20development%20and%20SEO%20services.%20Can%20we%20schedule%20a%20consultation%3F"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center group"
    >
      <MessageSquare size={28} />
      <span className="absolute right-full mr-4 bg-white text-brand-dark px-4 py-2 rounded-lg text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-slate-100">
        Chat with me!
      </span>
    </motion.a>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Process', href: '#process' },
    { name: 'Testimonials', href: '#testimonials' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-white/80 backdrop-blur-md border-b border-slate-100 py-4'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-brand-blue rounded-lg flex items-center justify-center text-white font-bold text-xl">V</div>
          <span className="font-bold text-xl tracking-tight text-brand-dark">
            VM<span className="text-brand-orange">Web</span>Solutions
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="font-medium text-slate-600 hover:text-brand-orange transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="bg-brand-orange hover:bg-orange-600 text-white px-6 py-2.5 rounded-full font-semibold transition-all shadow-lg shadow-orange-500/20"
          >
            Get Free Consultation
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-brand-dark" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl py-6 px-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-lg font-medium text-slate-700 py-2 border-b border-slate-100"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="bg-brand-blue text-white text-center py-3 rounded-xl font-bold mt-2"
              onClick={() => setIsOpen(false)}
            >
              Get Free Consultation
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-50">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-dark hidden lg:block skew-x-[-12deg] translate-x-20"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-blue-50 text-brand-blue px-4 py-1.5 rounded-full text-sm font-bold mb-6 border border-blue-100">
            <MapPin size={16} />
            #1 Website Developer in Hyderabad
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-brand-dark leading-[1.1] mb-6">
            Get More Customers with a <span className="text-brand-blue">Professional Website</span> & SEO
          </h1>
          <p className="text-base md:text-xl text-slate-600 mb-8 max-w-xl leading-relaxed">
            I help local businesses in Hyderabad grow with high-performance websites and Google ranking strategies. Turn your website into a lead-generating machine.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
            <a 
              href="#contact" 
              className="bg-brand-orange hover:bg-orange-600 text-white px-6 py-3.5 md:px-10 md:py-5 rounded-2xl font-bold text-base md:text-xl flex items-center justify-center gap-3 transition-all transform hover:scale-105 shadow-2xl shadow-orange-500/40"
            >
              Get Free Consultation <ArrowRight size={24} />
            </a>
            <a 
              href="#services" 
              className="bg-white border-2 border-brand-dark text-brand-dark hover:bg-slate-50 px-6 py-3.5 md:px-10 md:py-5 rounded-2xl font-bold text-base md:text-xl flex items-center justify-center transition-all transform hover:scale-105"
            >
              View Services
            </a>
          </div>
          
          <div className="mt-10 flex items-center gap-6 text-slate-500">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={18} className="text-green-500" />
              <span className="text-sm font-medium">Fast Loading</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={18} className="text-green-500" />
              <span className="text-sm font-medium">SEO Optimized</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={18} className="text-green-500" />
              <span className="text-sm font-medium">Mobile Ready</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-8 border-white/10">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" 
              alt="Professional Web Development" 
              className="w-full h-auto"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Floating Stats Card */}
          <div className="absolute -bottom-10 -left-10 glass-card p-6 rounded-2xl shadow-2xl z-20 animate-bounce-slow">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                <TrendingUp size={24} />
              </div>
              <div>
                <div className="text-2xl font-bold text-brand-dark">+200%</div>
                <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Traffic Increase</div>
              </div>
            </div>
          </div>
          {/* Floating SEO Card */}
          <div className="absolute -top-10 -right-10 glass-card p-6 rounded-2xl shadow-2xl z-20">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-orange-100 text-brand-orange rounded-full flex items-center justify-center">
                <Search size={24} />
              </div>
              <div>
                <div className="text-lg font-bold text-brand-dark">Rank #1</div>
                <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">On Google Maps</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Website Development",
      desc: "Fast, mobile-friendly, and high-converting websites tailored for local businesses like gyms, hostels, and coaching centers.",
      icon: <Globe className="text-brand-blue" size={32} />,
      features: ["Responsive Design", "Fast Loading Speed", "Secure Hosting"]
    },
    {
      title: "Local SEO Services",
      desc: "Rank your business on the first page of Google for local searches in Hyderabad. Be found when customers search for you.",
      icon: <Search className="text-brand-orange" size={32} />,
      features: ["Keyword Research", "On-Page SEO", "Backlink Building"]
    },
    {
      title: "Google Business Profile",
      desc: "Optimize your Google Maps listing to attract local customers. Get more calls and store visits directly from Google.",
      icon: <MapPin className="text-red-500" size={32} />,
      features: ["Profile Setup", "Review Strategy", "Local Citations"]
    },
    {
      title: "Lead Generation Systems",
      desc: "Automated systems to capture and nurture leads. Don't just get visitors, get paying customers for your business.",
      icon: <TrendingUp className="text-green-500" size={32} />,
      features: ["Contact Forms", "WhatsApp Integration", "Email Automation"]
    }
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-xs md:text-sm font-bold text-brand-blue uppercase tracking-[0.2em] mb-4">Our Services</h2>
          <h3 className="text-2xl md:text-5xl font-extrabold text-brand-dark mb-6">
            Everything You Need to <span className="text-brand-blue">Grow Online</span>
          </h3>
          <p className="text-slate-600 max-w-2xl mx-auto text-base md:text-lg px-4">
            I provide end-to-end digital solutions designed to help local business owners in Hyderabad dominate their local market.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="p-8 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-xl transition-all duration-300"
            >
              <div className="mb-6">{s.icon}</div>
              <h4 className="text-xl font-bold text-brand-dark mb-4">{s.title}</h4>
              <p className="text-slate-600 mb-6 text-sm leading-relaxed">{s.desc}</p>
              <ul className="space-y-2">
                {s.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                    <CheckCircle2 size={14} className="text-brand-blue" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Proof = () => {
  const projects = [
    {
      title: "Premium Gym Website",
      category: "Fitness & Health",
      metric: "150+ Leads/Month",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Coaching Center Portal",
      category: "Education",
      metric: "Ranked #1 for 'IIT Coaching'",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Luxury Hostel Website",
      category: "Hospitality",
      metric: "100% Occupancy in 3 Months",
      image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Dental Clinic Website",
      category: "Healthcare",
      metric: "80+ Appointments/Month",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Real Estate Landing Page",
      category: "Property",
      metric: "300% Increase in Leads",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Fine Dining Restaurant",
      category: "Food & Beverage",
      metric: "Ranked #1 for 'Best Biryani'",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=600"
    }
  ];

  return (
    <section id="portfolio" className="section-padding bg-brand-dark text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/20 rounded-full blur-[120px]"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end mb-12 md:mb-16 gap-8 text-center lg:text-left">
          <div className="max-w-2xl">
            <h2 className="text-xs md:text-sm font-bold text-brand-orange uppercase tracking-[0.2em] mb-4">Proof of Results</h2>
            <h3 className="text-2xl md:text-5xl font-extrabold mb-6">
              Optimized for <span className="text-brand-orange">Local Search</span> & Conversion
            </h3>
            <p className="text-slate-400 text-base md:text-lg px-4 lg:px-0">
              I don't just build websites; I build business assets that generate revenue. See how I've helped other Hyderabad businesses.
            </p>
          </div>
          <div className="flex gap-8 md:gap-12">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-brand-orange mb-1">50+</div>
              <div className="text-[10px] md:text-xs uppercase tracking-widest text-slate-500 font-bold">Projects Done</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-brand-orange mb-1">200%</div>
              <div className="text-[10px] md:text-xs uppercase tracking-widest text-slate-500 font-bold">Avg. ROI</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative rounded-2xl overflow-hidden bg-slate-800"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={p.image} 
                  alt={p.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6">
                <div className="text-brand-orange text-xs font-bold uppercase tracking-wider mb-2">{p.category}</div>
                <h4 className="text-xl font-bold mb-4">{p.title}</h4>
                <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-xs font-semibold">
                  <Zap size={14} className="text-yellow-400" />
                  {p.metric}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    {
      title: "Understand Your Business",
      desc: "We start with a free consultation to understand your business, target customers, and local competition in Hyderabad.",
      icon: <Users size={24} />
    },
    {
      title: "Build a Website That Converts",
      desc: "We create a fast, mobile-friendly website designed to turn visitors into real inquiries and calls.",
      icon: <Globe size={24} />
    },
    {
      title: "Optimize for Local Search",
      desc: "We optimize your website for Google so your business appears when people search for your services in Hyderabad.",
      icon: <Search size={24} />
    },
    {
      title: "Generate Consistent Leads",
      desc: "We implement proven strategies to help you get regular calls, messages, and customer inquiries.",
      icon: <BarChart3 size={24} />
    }
  ];

  return (
    <section id="process" className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-xs md:text-sm font-bold text-brand-blue uppercase tracking-[0.2em] mb-4">Our Process</h2>
          <h3 className="text-2xl md:text-5xl font-extrabold text-brand-dark mb-6">
            How We Turn Your Website Into a <span className="text-brand-blue">Customer Machine</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-1/4 left-0 w-full h-0.5 bg-slate-200 z-0"></div>
          
          {steps.map((s, i) => (
            <div key={i} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white border-4 border-slate-50 rounded-full flex items-center justify-center text-brand-blue shadow-lg mb-6 group hover:bg-brand-blue hover:text-white transition-all duration-300">
                {s.icon}
              </div>
              <div className="bg-brand-blue text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm mb-4">
                {i + 1}
              </div>
              <h4 className="text-lg font-bold text-brand-dark mb-3">{s.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      name: "Venkatesh Rao",
      role: "Founder, VR Real Estate Hyderabad",
      content: "The lead generation system they built for us is incredible. We're getting qualified inquiries daily for our new projects in Gachibowli and Kondapur.",
      stars: 5
    },
    {
      name: "Lakshmi Narayana",
      role: "Owner, Sai Lakshmi Silks",
      content: "Our retail store saw a 40% increase in footfall after we optimized our Google My Business and launched the new website. Truly professional work.",
      stars: 5
    },
    {
      name: "Suresh Reddy",
      role: "Director, CityStay Hostels",
      content: "They understood the local market perfectly. Our hostel bookings have increased significantly since the website went live. The ROI has been amazing.",
      stars: 5
    },
    {
      name: "Priyanka Goud",
      role: "Manager, Green Leaf Wellness",
      content: "The website is beautiful and works perfectly on mobile. Our clients love the new online booking experience. It's saved us so much time.",
      stars: 5
    },
    {
      name: "Ravi Teja",
      role: "Principal, Excellence Academy",
      content: "We've seen a huge spike in admissions inquiries. The SEO strategies they implemented for our local area are working wonders for our visibility.",
      stars: 5
    },
    {
      name: "Sai Teja",
      role: "CEO, TechServe Solutions",
      content: "Excellent service and technical expertise. They delivered a high-performance site that reflects our brand perfectly. Highly recommended!",
      stars: 5
    }
  ];

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const itemWidth = scrollRef.current.querySelector('div')?.offsetWidth || 0;
      const gap = 24; // gap-6 is 24px
      const index = Math.round(scrollLeft / (itemWidth + gap));
      setActiveIndex(index);
    }
  };

  const scrollTo = (index: number) => {
    if (scrollRef.current) {
      const itemWidth = scrollRef.current.querySelector('div')?.offsetWidth || 0;
      const gap = 24;
      scrollRef.current.scrollTo({
        left: index * (itemWidth + gap),
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="testimonials" className="section-padding bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-xs md:text-sm font-bold text-brand-blue uppercase tracking-[0.2em] mb-4">Success Stories</h2>
          <h3 className="text-2xl md:text-5xl font-extrabold text-brand-dark">
            What Local <span className="text-brand-blue">Business Owners</span> Say
          </h3>
        </div>

        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 no-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {testimonials.map((t, i) => (
            <div 
              key={i} 
              className="min-w-[85%] md:min-w-[calc(33.333%-16px)] snap-center p-8 rounded-[2rem] bg-slate-50 border border-slate-100 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:bg-white"
            >
              <div>
                <div className="flex gap-1 mb-6">
                  {[...Array(t.stars)].map((_, j) => (
                    <Star key={j} size={16} className="fill-brand-orange text-brand-orange" />
                  ))}
                </div>
                <p className="text-slate-600 italic mb-8 leading-relaxed text-lg">"{t.content}"</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-brand-blue/10 text-brand-blue rounded-2xl flex items-center justify-center font-bold text-xl">
                  {t.name[0]}
                </div>
                <div>
                  <div className="font-bold text-brand-dark text-lg">{t.name}</div>
                  <div className="text-sm text-slate-500 font-medium">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className={`h-2.5 rounded-full transition-all duration-500 ${
                activeIndex === i 
                  ? 'w-10 bg-brand-blue shadow-lg shadow-blue-500/20' 
                  : 'w-2.5 bg-slate-200 hover:bg-slate-300'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', business: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);
    setError(null);

    // Phone Validation
    if (formState.phone.replace(/\D/g, '').length < 10) {
      setError("Please enter a valid 10-digit phone number");
      setLoading(false);
      return;
    }

    // Replace these placeholders with your actual EmailJS credentials
    const SERVICE_ID = 'service_n20eayw';
    const TEMPLATE_ID = 'template_otynsid';
    const PUBLIC_KEY = 'xURJIlj4p-DZabNey';

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        setLoading(false);
        setSubmitted(true);
        // Instant WhatsApp Redirect (Power Move)
        const whatsappMessage = encodeURIComponent(`Hi, I'm ${formState.name}. I just submitted a request on your website for ${formState.business || 'my business'}. Can we discuss further?`);
        window.open(`https://wa.me/918309358319?text=${whatsappMessage}`, "_blank");
      })
      .catch((err) => {
        console.error('EmailJS Error:', err);
        setLoading(false);
        setError("Something went wrong. Please try again or contact me directly via WhatsApp.");
      });
  };

  return (
    <section id="contact" className="section-padding bg-slate-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#0f172a 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-xs md:text-sm font-bold text-brand-blue uppercase tracking-[0.2em] mb-4">Get In Touch</h2>
          <h3 className="text-2xl md:text-5xl font-extrabold text-brand-dark mb-6">
            Ready to Scale Your <span className="text-brand-blue">Business?</span>
          </h3>
          <p className="text-slate-500 text-base md:text-lg max-w-2xl mx-auto px-4">
            Fill out the form below for a free consultation and website audit. Let's build your digital success story in Hyderabad.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Contact Info Cards */}
          <div className="lg:col-span-6">
            <div className="h-full flex flex-col justify-between relative py-4 md:py-6">
              <div>
                <h4 className="text-2xl md:text-3xl font-extrabold mb-6 leading-tight text-brand-dark">Turn Your Website Into a <span className="text-brand-orange">Customer Machine</span></h4>
                <div className="space-y-4 text-slate-600 mb-8 md:mb-10">
                  <p className="text-base md:text-lg leading-relaxed">
                    Most websites don’t bring results. We build websites that generate real leads and business growth.
                  </p>
                  <p className="text-base md:text-lg leading-relaxed">
                    If you’re ready to get more customers, fill out the form now and let’s get started.
                  </p>
                  <p className="text-brand-orange font-bold text-lg md:text-xl italic">
                    Your next customer could be just one click away.
                  </p>
                </div>

                  <div className="flex flex-wrap gap-3 md:gap-4">
                    {/* WhatsApp Button */}
                    <a 
                      href="https://wa.me/918309358319?text=I'm%20interested%20in%20your%20web%20development%20and%20SEO%20services.%20Can%20we%20schedule%20a%20consultation%3F" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 md:gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white px-4 py-2.5 md:px-5 md:py-3 rounded-2xl font-bold transition-all shadow-lg shadow-green-500/10 group"
                    >
                      <MessageSquare size={18} className="group-hover:scale-110 transition-transform" />
                      <span className="text-xs md:text-sm">WhatsApp</span>
                    </a>

                    {/* Mail Button */}
                    <a 
                      href="mailto:maheshveeraboina632@gmail.com?subject=Inquiry%20about%20Web%20Development%20Services" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 md:gap-3 bg-brand-blue hover:bg-blue-700 text-white px-4 py-2.5 md:px-5 md:py-3 rounded-2xl font-bold transition-all shadow-lg shadow-blue-500/10 group"
                    >
                      <Mail size={18} className="group-hover:scale-110 transition-transform" />
                      <span className="text-xs md:text-sm">Email Me</span>
                    </a>

                    {/* Call Now Button */}
                    <a 
                      href="tel:+918309358319" 
                      className="flex items-center gap-2 md:gap-3 bg-brand-orange hover:bg-orange-600 text-white px-4 py-2.5 md:px-5 md:py-3 rounded-2xl font-bold transition-all shadow-lg shadow-orange-500/10 group"
                    >
                      <Phone size={18} className="group-hover:scale-110 transition-transform" />
                      <span className="text-xs md:text-sm">Call Now</span>
                    </a>
                  </div>
              </div>

              <div className="mt-12 pt-8 border-t border-slate-200 text-slate-500 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-brand-orange" />
                  <span>Available for projects in Hyderabad & Worldwide</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form Card */}
          <div className="lg:col-span-6">
            <div className="bg-white p-6 md:p-14 rounded-[2rem] md:rounded-[2.5rem] shadow-xl border border-slate-100 h-full relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-brand-blue to-brand-orange"></div>
              
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-20"
                >
                  <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
                    <CheckCircle2 size={48} />
                  </div>
                  <h4 className="text-3xl font-bold text-brand-dark mb-4">Message Sent Successfully!</h4>
                  <p className="text-slate-500 text-lg">Thank you! We have received your inquiry and will contact you within 24 hours.</p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="mt-10 text-brand-blue font-bold hover:underline text-lg"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
                  {/* Hidden fields for EmailJS */}
                  <input type="hidden" name="subject" value="New Lead from VM Web Solutions" />
                  <input type="hidden" name="time" value={Date.now()} />
                  
                  {error && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-red-50 border border-red-200 text-red-700 p-5 rounded-2xl flex items-start gap-4 shadow-sm"
                    >
                      <div className="bg-red-100 p-2 rounded-full text-red-600 shrink-0">
                        <X size={20} />
                      </div>
                      <div>
                        <div className="font-bold text-base mb-1">Submission Failed</div>
                        <p className="text-sm opacity-90 leading-relaxed">{error}</p>
                      </div>
                    </motion.div>
                  )}
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                      <div className="relative group">
                        <div className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand-blue transition-colors">
                          <User size={20} />
                        </div>
                        <input 
                          required
                          name="user_name"
                          type="text" 
                          placeholder="John Doe"
                          className="w-full pl-12 md:pl-14 pr-6 py-4 md:py-5 rounded-2xl bg-slate-50 border border-slate-200 focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10 outline-none transition-all text-base md:text-lg font-medium"
                          value={formState.name}
                          onChange={(e) => setFormState({...formState, name: e.target.value})}
                        />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                      <div className="relative group">
                        <div className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand-blue transition-colors">
                          <Mail size={20} />
                        </div>
                        <input 
                          required
                          name="user_email"
                          type="email" 
                          placeholder="john@example.com"
                          className="w-full pl-12 md:pl-14 pr-6 py-4 md:py-5 rounded-2xl bg-slate-50 border border-slate-200 focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10 outline-none transition-all text-base md:text-lg font-medium"
                          value={formState.email}
                          onChange={(e) => setFormState({...formState, email: e.target.value})}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-sm font-bold text-slate-700 ml-1">Phone Number</label>
                      <div className="relative group">
                        <div className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand-blue transition-colors">
                          <Phone size={20} />
                        </div>
                        <input 
                          required
                          name="user_phone"
                          type="tel" 
                          placeholder="+91 00000 00000"
                          className="w-full pl-12 md:pl-14 pr-6 py-4 md:py-5 rounded-2xl bg-slate-50 border border-slate-200 focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10 outline-none transition-all text-base md:text-lg font-medium"
                          value={formState.phone}
                          onChange={(e) => setFormState({...formState, phone: e.target.value})}
                        />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <label className="text-sm font-bold text-slate-700 ml-1">Business Type</label>
                      <div className="relative group">
                        <div className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand-blue transition-colors">
                          <Briefcase size={20} />
                        </div>
                        <select 
                          name="business_type"
                          className="w-full pl-12 md:pl-14 pr-12 py-4 md:py-5 rounded-2xl bg-slate-50 border border-slate-200 focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10 outline-none transition-all appearance-none text-base md:text-lg font-medium"
                          value={formState.business}
                          onChange={(e) => setFormState({...formState, business: e.target.value})}
                        >
                          <option value="">Select your business type</option>
                          <option value="education">Education & Training</option>
                          <option value="healthcare">Healthcare & Wellness</option>
                          <option value="realestate">Real Estate & Construction</option>
                          <option value="hospitality">Hospitality & Tourism</option>
                          <option value="food">Food & Restaurant</option>
                          <option value="retail">Retail & E-commerce</option>
                          <option value="professional">Professional Services</option>
                          <option value="service">Service Industry</option>
                          <option value="manufacturing">Manufacturing & Industrial</option>
                          <option value="other">Other Business</option>
                        </select>
                        <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                          <ChevronDown size={22} />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-sm font-bold text-slate-700 ml-1">Project Details</label>
                    <textarea 
                      name="message"
                      placeholder="Tell me about your goals (e.g., more leads, new website, SEO)..."
                      className="w-full px-6 py-5 rounded-2xl bg-slate-50 border border-slate-200 focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10 outline-none transition-all resize-none h-40 text-lg font-medium"
                      value={formState.message}
                      onChange={(e) => setFormState({...formState, message: e.target.value})}
                    ></textarea>
                  </div>

                  <div className="space-y-4">
                    <button 
                      type="submit"
                      disabled={loading}
                      className={`w-full bg-brand-blue hover:bg-blue-800 text-white py-4 md:py-6 rounded-2xl font-bold text-lg md:text-xl transition-all shadow-2xl shadow-blue-500/20 flex items-center justify-center gap-3 ${loading ? 'opacity-80 cursor-not-allowed' : 'hover:-translate-y-1 active:translate-y-0'}`}
                    >
                      {loading ? (
                        <>
                          <Loader2 size={24} className="animate-spin" />
                          Processing...
                        </>
                      ) : (
                        <>
                          Get Free Consultation
                          <ArrowRight size={24} />
                        </>
                      )}
                    </button>
                  </div>

                  <div className="flex items-center justify-center gap-3 text-xs text-slate-400 font-bold uppercase tracking-widest">
                    <ShieldCheck size={16} className="text-green-500" />
                    100% Secure & Private • No Spam
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white py-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-brand-blue rounded flex items-center justify-center text-white font-bold">V</div>
            <span className="font-bold text-lg tracking-tight">
              VM<span className="text-brand-orange">Web</span>Solutions
            </span>
          </div>
          <p className="text-slate-500 text-sm max-w-xs">
            Helping local businesses in Hyderabad grow with high-performance websites and SEO.
          </p>
        </div>
        
        <div className="flex gap-8 text-sm font-medium text-slate-400">
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a>
          <a href="#process" className="hover:text-white transition-colors">Process</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>

        <div className="text-slate-500 text-sm">
          © {new Date().getFullYear()} VM Web Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="antialiased">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Proof />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
