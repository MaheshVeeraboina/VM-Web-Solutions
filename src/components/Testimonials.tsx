import React from 'react';
import { Star, Quote } from 'lucide-react';
import { FadeIn } from './animations/FadeIn';
import { StaggerContainer, StaggerItem } from './animations/Stagger';

const Testimonials = () => {
  const reviews = [
    {
      name: "Ramesh Kumar",
      role: "Owner, RK Fitness Studo",
      text: "I was struggling to get new gym memberships. VM Web Solutions built a landing page for us, and within 2 weeks, we got 45 new direct WhatsApp inquiries. The investment paid for itself in less than a month.",
      image: "https://ui-avatars.com/api/?name=Ramesh+Kumar&background=4f46e5&color=fff&size=100"
    },
    {
      name: "Lakshmi Narayana",
      role: "Director, Excellence Academy",
      text: "Our old website was just an online brochure. After they redesigned it and added lead capture forms, our student admissions increased by 60% compared to last year. Very professional and fast delivery.",
      image: "https://ui-avatars.com/api/?name=Lakshmi+Narayana&background=0f172a&color=fff&size=100"
    },
    {
      name: "Suresh Reddy",
      role: "Founder, VR Properties",
      text: "Real estate leads are expensive, but thanks to the specific property landing pages they created, our Cost Per Lead dropped by half. The fast loading speed on mobile made a huge difference.",
      image: "https://ui-avatars.com/api/?name=Suresh+Reddy&background=059669&color=fff&size=100"
    }
  ];

  return (
    <section id="testimonials" className="py-24 px-6 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Real Results from <span className="text-indigo-600">Local Business Owners</span>
          </h2>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <StaggerItem 
              key={i}
              className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 relative group hover:bg-white hover:shadow-2xl hover:border-indigo-100 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="absolute top-8 right-8 text-slate-200 group-hover:text-indigo-100 transition-colors">
                <Quote size={40} className="scale-x-[-1]" />
              </div>
              
              <div className="flex gap-1 text-emerald-500 mb-6 relative z-10">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={18} fill="currentColor" />
                ))}
              </div>
              
              <p className="text-slate-600 text-lg leading-relaxed mb-8 relative z-10">"{r.text}"</p>
              
              <div className="flex items-center gap-4 relative z-10">
                <img src={r.image} alt={r.name} className="w-12 h-12 rounded-full border-2 border-white shadow-sm" />
                <div>
                  <div className="font-bold text-slate-900">{r.name}</div>
                  <div className="text-sm text-slate-500 font-medium">{r.role}</div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default Testimonials;
