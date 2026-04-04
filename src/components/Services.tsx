import React from 'react';
import { LayoutDashboard, MousePointerClick, Search } from 'lucide-react';
import { FadeIn } from './animations/FadeIn';
import { StaggerContainer, StaggerItem } from './animations/Stagger';

const Services = () => {
  const services = [
    {
      icon: <LayoutDashboard size={32} className="text-indigo-600" />,
      title: "Business Websites",
      benefit: "Turn visitors into customers",
      desc: "We build a professional online shop for your brand that makes people trust you instantly.",
      color: "bg-indigo-50 border-indigo-100"
    },
    {
      icon: <MousePointerClick size={32} className="text-purple-600" />,
      title: "Landing Pages",
      benefit: "Perfect for running ads",
      desc: "Running Facebook or Instagram ads? We build special pages that capture leads perfectly.",
      color: "bg-purple-50 border-purple-100"
    },
    {
      icon: <Search size={32} className="text-emerald-600" />,
      title: "Google Maps SEO",
      benefit: "Rank higher locally",
      desc: "When locals search for your services near them, you will show up first.",
      color: "bg-emerald-50 border-emerald-100"
    }
  ];

  return (
    <section id="services" className="py-24 px-6 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            What We Do For You
          </h2>
          <p className="text-lg text-slate-600">
            Our goal is simple: get you more calls, more WhatsApp messages, and more walk-ins.
          </p>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <StaggerItem 
              key={i}
              className="bg-white p-10 rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full group relative overflow-hidden"
            >
              {/* Subtle top border highlight */}
              <div className={`absolute top-0 left-0 w-full h-1 ${s.color.split(' ')[0]} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
              
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 ${s.color}`}>
                {s.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">{s.title}</h3>
              <div className="text-emerald-600 font-bold mb-4 flex items-center gap-2 text-sm uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                {s.benefit}
              </div>
              <p className="text-slate-600 leading-relaxed flex-grow">{s.desc}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default Services;
