import React from 'react';
import { Check, Info } from 'lucide-react';
import { FadeIn } from './animations/FadeIn';
import { StaggerContainer, StaggerItem } from './animations/Stagger';

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "4,999",
      desc: "Perfect for new local businesses getting online.",
      features: [
        "1-Page High Converting Website",
        "Mobile-First Responsive Design",
        "Direct WhatsApp Chat Button",
        "Basic Contact Form",
        "Hosting Setup Assistance"
      ],
      popular: false,
      cta: "Start Now"
    },
    {
      name: "Business",
      price: "9,999",
      desc: "Ideal for growing businesses needing more presence.",
      features: [
        "Up to 5 Pages Website",
        "Premium UI/UX Design",
        "WhatsApp & Lead Forms Integration",
        "Local SEO Basics setup",
        "Google Maps Setup",
        "Fast Page Load Optimization",
        "1 Month Free Support"
      ],
      popular: true,
      cta: "Get Business Plan"
    },
    {
      name: "Premium",
      price: "19,999",
      desc: "For dominance in your local area with SEO.",
      features: [
        "Up to 10 Pages Website",
        "Custom Animated UI (Like this site)",
        "Advanced SEO Optimization",
        "Lead Generation Dashboard Setup",
        "Social Media Integration",
        "Priority WhatsApp Support",
        "3 Months Free Support"
      ],
      popular: false,
      cta: "Go Premium"
    }
  ];

  return (
    <section id="pricing" className="py-24 px-6 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Clear Pricing. <span className="text-indigo-600">No Hidden Fees.</span>
          </h2>
          <p className="text-lg text-slate-600">
            Invest in a website that pays for itself by bringing you more customers every single month.
          </p>
        </FadeIn>

        <StaggerContainer className="grid lg:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
          {plans.map((p, i) => (
            <StaggerItem 
              key={i}
              className={`bg-white rounded-[2rem] p-8 md:p-10 relative ${
                p.popular 
                  ? 'border-2 border-indigo-600 shadow-2xl scale-100 lg:scale-[1.05] z-10' 
                  : 'border border-slate-200 shadow-lg scale-100 z-0'
              } hover:-translate-y-2 hover:shadow-2xl transition-all duration-300`}
            >
              {p.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{p.name}</h3>
                <p className="text-slate-500 text-sm h-10">{p.desc}</p>
              </div>

              <div className="mb-8 flex items-baseline gap-1">
                <span className="text-3xl font-bold text-slate-900">₹</span>
                <span className="text-5xl font-extrabold text-slate-900 tracking-tight">{p.price}</span>
              </div>

              <a 
                href={`https://wa.me/918309358319?text=I'm%20interested%20in%20the%20${p.name}%20plan%20for%20%E2%82%B9${p.price}`}
                target="_blank"
                rel="noreferrer"
                className={`w-full py-4 rounded-xl font-bold text-center block mb-8 transition-all ${
                  p.popular 
                    ? 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg hover:shadow-indigo-500/25' 
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-900'
                } hover:scale-105 duration-300`}
              >
                {p.cta}
              </a>

              <div className="space-y-4">
                {p.features.map((f, j) => (
                  <div key={j} className="flex gap-3">
                    <div className={`mt-1 rounded-full p-0.5 shrink-0 h-fit ${p.popular ? 'bg-indigo-100 text-indigo-600' : 'bg-slate-100 text-slate-600'}`}>
                      <Check size={14} strokeWidth={3} />
                    </div>
                    <span className="text-sm text-slate-600 font-medium">{f}</span>
                  </div>
                ))}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default Pricing;
