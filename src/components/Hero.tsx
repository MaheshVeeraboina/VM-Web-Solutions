import heroImage from '@/assets/images/desktop-mockup.webp';
import React from 'react';
import { ArrowRight, MessageSquare, Star, PlayCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { trackEvent } from '../utils/analytics';

const Hero = () => {
  return (
    <section className="relative min-h-[100svh] flex items-center pt-32 pb-20 overflow-hidden bg-[#FAFAFA]">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-blue-100/50 blur-[100px]" />
        <div className="absolute top-[40%] -left-[10%] w-[50%] h-[50%] rounded-full bg-indigo-100/50 blur-[100px]" />
        <div 
          className="absolute inset-0 opacity-[0.02]" 
          style={{ backgroundImage: 'radial-gradient(circle at center, #000 1px, transparent 1.5px)', backgroundSize: '24px 24px' }}
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 grid xl:grid-cols-12 gap-16 xl:gap-8 items-center relative z-10 w-full">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="xl:col-span-6 flex flex-col items-center xl:items-start text-center xl:text-left"
        >
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200 px-4 py-2 rounded-full text-sm font-bold mb-8 shadow-sm text-red-700">
            <span className="flex items-center gap-1 text-red-500">
              🔥
            </span>
            Only 3 Development Slots Available This Month
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-[1.1] mb-6 tracking-tight">
            Website Development for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Small Businesses</span> in India
          </h1>
          
          <h2 className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl font-normal">
            We are a top-rated web design agency in Hyderabad. We build lead-generating, affordable websites specifically designed to get you local customers via Google SEO and WhatsApp.
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a 
              href="https://wa.me/918309358319?text=I'm%20interested%20in%20getting%20more%20leads.%20Can%20we%20chat?" 
              target="_blank"
              rel="noreferrer"
              onClick={() => trackEvent('cta_click', { event_category: 'conversion', event_label: 'hero_cta_primary' })}
              className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-xl shadow-slate-900/10 hover:-translate-y-0.5"
            >
              Get More Customers <ArrowRight size={20} />
            </a>
            <a 
              href="#portfolio" 
              onClick={() => trackEvent('cta_click', { event_category: 'engagement', event_label: 'hero_cta_secondary' })}
              className="w-full sm:w-auto bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-sm group"
            >
              <PlayCircle size={20} className="text-indigo-600 group-hover:scale-110 transition-transform" />
              See Our Work
            </a>
          </div>

          <div className="mt-10 flex items-center gap-4 text-sm font-semibold text-slate-500">
            <div className="flex -space-x-3 mr-2">
              <img src="https://ui-avatars.com/api/?name=MK&background=0D8ABC&color=fff" alt="" width="40" height="40" loading="lazy" className="w-10 h-10 rounded-full border-2 border-white shadow-sm" />
              <img src="https://ui-avatars.com/api/?name=VR&background=E53E3E&color=fff" alt="" width="40" height="40" loading="lazy" className="w-10 h-10 rounded-full border-2 border-white shadow-sm" />
              <img src="https://ui-avatars.com/api/?name=SJ&background=38A169&color=fff" alt="" width="40" height="40" loading="lazy" className="w-10 h-10 rounded-full border-2 border-white shadow-sm" />
              <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-xs text-slate-600 font-bold z-10">+47</div>
            </div>
            <p>Joined by 50+ local businesses</p>
          </div>
        </motion.div>

        {/* Right Content - Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="xl:col-span-6 relative w-full h-[400px] sm:h-[500px]"
        >
          {/* Main Visual Composition */}
          <div className="absolute inset-0 w-full h-full">
            {/* Desktop Mockup */}
            <div className="absolute top-0 right-0 w-[85%] aspect-[16/10] bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-200 overflow-hidden transform perspective-1000 rotate-y-[-5deg] rotate-x-[2deg]">
              {/* Browser Header */}
              <div className="bg-slate-100 border-b border-slate-200 px-4 py-3 flex gap-2 items-center">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
              </div>
              {/* Content */}
              <img src={heroImage} alt="Web App Mockup" width="1200" height="800" fetchPriority="high" loading="eager" decoding="sync" className="w-full h-full object-cover" />
            </div>



            {/* Notification Popup */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.4 }}
              className="absolute top-1/2 -right-8 md:-right-12 bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-4 z-20"
            >
              <div className="w-10 h-10 rounded-full bg-[#25D366]/10 flex items-center justify-center text-[#25D366]">
                <MessageSquare size={20} />
              </div>
              <div>
                <p className="font-bold text-slate-900 text-sm">New Lead via WhatsApp</p>
                <p className="text-slate-500 text-xs">"Hi, I need a website..."</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
