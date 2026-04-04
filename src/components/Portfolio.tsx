import React from 'react';
import { ArrowUpRight, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';

const Portfolio = () => {
  const cases = [
    {
      title: "Excel Coaching Institute",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800",
      problem: "Had 0 online presence. Relied only on local pamphlets for student admissions.",
      solution: "Built a conversion-focused landing page with direct 'Book Free Demo Class' WhatsApp buttons.",
      result: "Received 120+ student inquiries in the first 30 days of launching.",
      metric: "120+ Inquiries/mo"
    },
    {
      title: "IronCore Fitness Gym",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800",
      problem: "Slow, broken website that didn't work on mobile. Missing out on local gym searches.",
      solution: "Redesigned a fast, mobile-first website optimized for local SEO in their area.",
      result: "Ranked #1 on Google Maps locally, driving a 40% increase in daily footfalls.",
      metric: "40% More Leads"
    },
    {
      title: "VR Properties & Real Estate",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800",
      problem: "Spending high ad budget but getting junk leads to a generic homepage.",
      solution: "Created targeted property landing pages designed specifically for ad traffic.",
      result: "Cut Cost-Per-Lead (CPL) by half while doubling the quality of property inquiries.",
      metric: "50% Lower CPL"
    }
  ];

  return (
    <section id="portfolio" className="py-24 px-6 bg-slate-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
              Don't take our word for it. <span className="text-indigo-400">See the results.</span>
            </h2>
            <p className="text-lg text-slate-400">
              We help local Indian businesses transform their online presence into predictable lead-generation engines. Here is what happens when you work with us.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {cases.map((c, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
              className="bg-slate-800 rounded-[2rem] overflow-hidden border border-slate-700/50 hover:border-indigo-500/50 transition-colors group flex flex-col"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img 
                  src={c.image} 
                  alt={c.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 border border-white/20">
                  <TrendingUp size={16} className="text-emerald-400" />
                  {c.metric}
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-6 group-hover:text-indigo-400 transition-colors flex items-center justify-between">
                  {c.title}
                  <ArrowUpRight size={24} className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all text-indigo-400" />
                </h3>
                
                <div className="space-y-4 mb-6 flex-grow">
                  <div>
                    <div className="text-red-400 text-xs font-bold uppercase tracking-wider mb-1">The Problem</div>
                    <p className="text-sm text-slate-300 leading-relaxed">{c.problem}</p>
                  </div>
                  <div>
                    <div className="text-indigo-400 text-xs font-bold uppercase tracking-wider mb-1">Our Solution</div>
                    <p className="text-sm text-slate-300 leading-relaxed">{c.solution}</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-700">
                  <div className="text-emerald-400 text-xs font-bold uppercase tracking-wider mb-1">The Result</div>
                  <p className="text-base font-bold text-white leading-relaxed">{c.result}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Background glow */}
      <div className="absolute bottom-0 right-0 w-[50%] h-[50%] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>
    </section>
  );
};

export default Portfolio;
