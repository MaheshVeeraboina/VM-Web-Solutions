import React, { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';
import { FadeIn } from './animations/FadeIn';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import { isMobileDevice } from '../utils/mobilePerformance';

const CTASection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(isMobileDevice());
  }, []);

  return (
    <section className="py-24 px-6 relative overflow-hidden bg-indigo-600">
      {/* Background Ornaments - Hide on mobile for performance */}
      {!isMobile && (
        <>
          <div className="absolute top-0 right-0 w-[50%] h-[100%] bg-indigo-500 rounded-full blur-[100px] pointer-events-none origin-top-right"></div>
          <div className="absolute bottom-0 left-0 w-[50%] h-[100%] bg-purple-600 rounded-full blur-[100px] pointer-events-none origin-bottom-left"></div>
        </>
      )}
      
      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30"></div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <FadeIn className={`bg-white/10 ${!isMobile ? 'backdrop-blur-xl' : ''} border border-white/20 p-10 md:p-16 rounded-[3rem] shadow-2xl`}>
          <div className="inline-flex items-center gap-2 bg-white/20 text-white px-5 py-2 rounded-full text-sm font-bold mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Accepting 3 new projects this month
          </div>
          
          <h2 className="text-3xl md:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight">
            Stop Losing Customers to Your Competitors.
          </h2>
          <p className="text-lg md:text-xl text-indigo-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            Every day you delay is another day your competitors get leads that should be yours. Start getting customers online today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://wa.me/918309358319?text=Hi,%20I%20want%20to%20start%20my%20website%20project%20today!" 
              target="_blank"
              rel="noreferrer"
              className={`w-full sm:w-auto bg-[#25D366] hover:bg-[#1faa53] text-white px-8 py-5 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all duration-300 ${!isMobile ? 'transform hover:scale-105' : ''} shadow-[0_8px_30px_rgba(37,211,102,0.3)] ${!isMobile ? 'animate-[pulse_3s_ease-in-out_infinite]' : ''}`}
            >
              <WhatsAppIcon size={24} fill="#ffffff" />
              WhatsApp Now
            </a>
            <a 
              href="#contact" 
              className={`w-full sm:w-auto bg-white hover:bg-slate-50 text-indigo-900 px-8 py-5 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all duration-300 ${!isMobile ? 'hover:scale-105' : ''} shadow-xl hover:shadow-indigo-500/20`}
            >
              <Calendar size={24} />
              Book Free Call
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default CTASection;
