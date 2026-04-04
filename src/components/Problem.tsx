import React from 'react';
import { Ghost, Store, Clock } from 'lucide-react';
import { motion } from 'motion/react';

const Problem = () => {
  const problems = [
    {
      icon: <Ghost size={32} className="text-red-500" />,
      title: "Hard to Find",
      desc: "When people search on Google, they find your competitors instead of you.",
    },
    {
      icon: <Store size={32} className="text-orange-500" />,
      title: "Useless Websites",
      desc: "Your website looks fine, but nobody ever calls you from it.",
    },
    {
      icon: <Clock size={32} className="text-amber-500" />,
      title: "Slow on Mobile",
      desc: "Your site takes too long to load on phones, so people just leave.",
    }
  ];

  return (
    <section className="py-24 px-6 bg-slate-50 relative overflow-hidden">
      {/* Top subtle fade */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-1.5 rounded-full text-sm font-bold mb-6"
          >
            The Painful Truth
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight"
          >
            Why Aren't Customers Calling You?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600"
          >
            If you don't have a strong online presence, you are losing money to your competitors every single day.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((p, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * (i + 1) }}
              className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 relative group"
            >
              <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {p.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{p.title}</h3>
              <p className="text-slate-600 leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
