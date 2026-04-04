import React from 'react';
import { Rocket, Wallet, MessageSquareHeart, LineChart } from 'lucide-react';
import { motion } from 'motion/react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <Rocket size={24} className="text-white" />,
      title: "Fast Delivery",
      desc: "High-converting sites live in days, not months.",
      color: "bg-blue-500"
    },
    {
      icon: <Wallet size={24} className="text-white" />,
      title: "Affordable Pricing",
      desc: "Premium quality tailored for local Indian budgets.",
      color: "bg-emerald-500"
    },
    {
      icon: <MessageSquareHeart size={24} className="text-white" />,
      title: "Direct WhatsApp Support",
      desc: "Skip the tickets. Message us directly for fast replies.",
      color: "bg-purple-500"
    },
    {
      icon: <LineChart size={24} className="text-white" />,
      title: "Focus on Business Growth",
      desc: "We care entirely about the leads and sales we bring you.",
      color: "bg-orange-500"
    }
  ];

  return (
    <section className="py-24 px-6 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
              Why Local Businesses Choose <span className="text-indigo-400">VM Web</span>
            </h2>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              We skip the confusing tech talk and focus completely on growing your business.
            </p>
            <a 
              href="https://wa.me/918309358319?text=I%20want%20to%20know%20more%20about%20your%20services"
              target="_blank"
              rel="noreferrer"
              className="inline-flex bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-xl font-bold transition-all shadow-lg shadow-indigo-500/20"
            >
              Start Your Project Today
            </a>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {reasons.map((r, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
                className="bg-slate-800 p-6 rounded-3xl border border-slate-700/50 hover:border-indigo-500/50 transition-colors"
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 shadow-lg ${r.color}`}>
                  {r.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{r.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
