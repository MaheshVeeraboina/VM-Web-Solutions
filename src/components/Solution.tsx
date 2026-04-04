import React from 'react';
import { Zap, Smartphone, Target } from 'lucide-react';
import { motion } from 'motion/react';

const Solution = () => {
  return (
    <section className="py-24 px-6 bg-white relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Images/UI mockup */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 w-full aspect-[4/5] md:aspect-square bg-gradient-to-br from-indigo-50 to-purple-50 rounded-[3rem] overflow-hidden border border-slate-100 flex items-center justify-center p-8">
              {/* Abstract Mobile Mockup */}
              <div className="w-full max-w-sm bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border-8 border-slate-900 relative">
                <div className="absolute top-0 w-full h-6 bg-slate-900 rounded-b-xl flex justify-center mb-6 z-20">
                  <div className="w-16 h-4 bg-black rounded-b-xl"></div>
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=600" 
                  alt="Mobile First Design" 
                  className="w-full h-full object-cover mt-6 opacity-90"
                />
                
                {/* Float Overlay on Mobile Screen */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-11/12 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-slate-100">
                  <div className="flex gap-3 items-center">
                    <div className="w-10 h-10 bg-[#25D366]/20 rounded-full flex items-center justify-center text-[#25D366]">
                      <Target size={20} />
                    </div>
                    <div>
                      <p className="font-bold text-sm text-slate-900">Lead Captured!</p>
                      <p className="text-xs text-slate-500">From Google Search</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-indigo-500/10 rounded-full blur-[80px] -z-10"></div>
          </motion.div>

          {/* Right Side: Copy */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-4 py-1.5 rounded-full text-sm font-bold mb-6">
              The VM Web Solution
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-[1.2]">
              We Build Websites That Bring You Customers
            </h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              No technical jargon. We just build simple, fast websites that make people want to contact your business today.
            </p>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-14 h-14 shrink-0 rounded-2xl bg-indigo-100 flex items-center justify-center text-indigo-600">
                  <Zap size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Lightning Fast</h3>
                  <p className="text-slate-600">Your website will load instantly so customers don't get bored and leave.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-14 h-14 shrink-0 rounded-2xl bg-purple-100 flex items-center justify-center text-purple-600">
                  <Smartphone size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Perfect for Phones</h3>
                  <p className="text-slate-600">Most of your customers use mobile phones. We make sure your website looks perfect on them.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-14 h-14 shrink-0 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-600">
                  <Target size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Built for Leads</h3>
                  <p className="text-slate-600">We put WhatsApp and Call buttons everywhere to make sure customers contact you immediately.</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Solution;
