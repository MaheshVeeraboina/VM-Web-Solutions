import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, MapPin, Search, Smartphone, ChartBar, Plus, Minus } from 'lucide-react';
import { motion } from 'motion/react';

const HyderabadWebDesign = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "How much does website development cost in Hyderabad?",
      a: "Our website design packages in Hyderabad are extremely affordable for local businesses. Starting as low as ₹4,999 for a highly optimized, mobile-ready landing page, our pricing scales depending on your needs. Whether you need a simple 5-page business site or a deep multi-service portal, we offer transparent billing with zero hidden agency costs."
    },
    {
      q: "Do you help with Google My Business and Local SEO?",
      a: "Yes! Every website we build includes Local SEO foundations. We optimize your headers, meta tags, and schema markup specifically for Hyderabad local searches (like 'best gym in Banjara Hills' or 'top coaching center in Ameerpet'). We also provide guidance on perfectly setting up your Google Business Profile to rank in the Maps section."
    },
    {
      q: "How long does it take to build a website?",
      a: "Because we focus on exactly what gets results instead of bloated corporate features, most of our websites go live within 7 to 14 days. We work quickly so you can start generating WhatsApp leads and phone calls immediately without waiting months."
    },
    {
      q: "Will my website look good on mobile phones?",
      a: "Absolutely. Over 85% of traffic in India comes from mobile devices. We design 'mobile-first', ensuring your website loads in under 2 seconds on 4G networks and features large, sticky \"WhatsApp Us\" and \"Call Now\" buttons so customers can contact you instantly."
    },
    {
      q: "Do I have to pay monthly maintenance fees?",
      a: "No! Unlike other web design agencies in Hyderabad that trap you into expensive retainers, we build websites that you completely own. We offer optional, low-cost yearly hosting and maintenance plans, but you are never forced into a contract. You have ultimate control."
    }
  ];

  return (
    <main className="bg-slate-50 min-h-screen">
      {/* 1. SEO HERO SECTION */}
      <section className="pt-32 pb-24 px-6 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200 px-4 py-2 rounded-full text-sm font-bold mb-8 text-red-700">
                🔥 Only 2 Development Slots Available This Month in Hyderabad
              </div>
              
              <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-8">
                The Best <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Web Design Company</span> in Hyderabad
              </h1>
              
              <h2 className="text-xl text-slate-600 mb-10 leading-relaxed font-normal">
                Dominate your local market. We build fast, high-converting websites for businesses in Madhapur, Ameerpet, Jubilee Hills, and across Hyderabad. Turn your website traffic directly into absolute WhatsApp leads and daily phone calls.
              </h2>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://wa.me/918309358319?text=I%20want%20a%20website%20for%20my%20Hyderabad%20business" className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-xl hover:-translate-y-0.5 w-max">
                  Get a Free Quote Now <ArrowRight size={20} />
                </a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/50 relative z-10 bg-slate-100">
                <img src="/desktop-mockup.png" alt="Hyderabad Web Design Mockup" className="w-full h-full object-cover" />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-indigo-500/20 to-purple-500/20 blur-3xl -z-10 rounded-full" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. PROBLEM & SOLUTION (The "Why") */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl font-extrabold text-slate-900 mb-6 tracking-tight">Why Most Hyderabad Websites <span className="text-red-500">Fail Completely</span></h3>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                As a small business owner in Hyderabad, the competition is brutal. Whether you are running a real estate agency in Gachibowli, a gym in Banjara Hills, or a coaching institute in Kukatpally, your customers are searching for your services online right now. 
              </p>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                But here's the absolute truth: most local businesses have websites that are essentially just digital brochures. They are extremely slow to load on mobile phones, they lack clear Google Maps SEO optimization, and they simply do not tell the customer what to do. When a potential lead lands on your page, if they can't find a massive "Call Us Now" button instantly, they hit the back button and call your competitor. You are actively losing money every single day your online presence is weak.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xl relative">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Our High-Converting Framework</h3>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 text-emerald-600">
                    <Smartphone size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">Mobile-First Lead Generation</h4>
                    <p className="text-slate-600">80%+ of Hyderabad traffic is mobile. We optimize for thumb-reach and instant WhatsApp clicks.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0 text-blue-600">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">Local SEO Dominance</h4>
                    <p className="text-slate-600">We structure your site architecture so Google ranks you higher when locals search for "services near me".</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center shrink-0 text-purple-600">
                    <Search size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">Hyper-Fast Loading</h4>
                    <p className="text-slate-600">Built on modern React technology ensuring sub-2-second load times even on spotty 4G connections.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE BENEFITS (Targeting Location Specifics) */}
      <section className="py-20 px-6 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">How We Grow Your Local Brand</h2>
            <p className="text-xl text-slate-400">We engineer websites specifically for the Indian market, stripping away the complex corporate jargon and focusing entirely on metrics that matter: Leads and Sales.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
              <ChartBar className="text-indigo-400 mb-6" size={32} />
              <h3 className="text-xl font-bold mb-4">Direct WhatsApp Funnels</h3>
              <p className="text-slate-400 leading-relaxed">Indian consumers trust WhatsApp more than email forms. Every website we build features perfectly integrated floating WhatsApp widgets with pre-filled messaging parameters. You get direct inquiries delivered straight to your phone, skipping the entire formal email process.</p>
            </div>
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
              <CheckCircle2 className="text-emerald-400 mb-6" size={32} />
              <h3 className="text-xl font-bold mb-4">Trust-Building Portfolios</h3>
              <p className="text-slate-400 leading-relaxed">Whether showing before-and-after photos for your clinic or student success results for your coaching institute, we build high-definition, fast-loading galleries that build immediate consumer trust and position you as the premium authority in Hyderabad.</p>
            </div>
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
              <MapPin className="text-blue-400 mb-6" size={32} />
              <h3 className="text-xl font-bold mb-4">Google Business Sync</h3>
              <p className="text-slate-400 leading-relaxed">Having a website isn't enough; it must sync flawlessly with Google Maps. We implement LocalBusiness schema markup deeply into your code so Google accurately reads your address, phone number, and operating hours, pushing you higher in local map packs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PRICING SECTIONS */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">Affordable Website Design Pricing</h2>
            <p className="text-xl text-slate-600">Premium quality design without the massive corporate agency price tags.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-3xl border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Lead Generation Landing Page</h3>
              <p className="text-slate-500 mb-6">Perfect for running Google or Facebook Ads.</p>
              <div className="text-4xl font-extrabold text-slate-900 mb-8">₹4,999</div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-emerald-500"/> Single Page Deep Layout</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-emerald-500"/> WhatsApp Integration</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-emerald-500"/> Lead Capture Form</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-emerald-500"/> Mobile First Design</li>
              </ul>
              <a href="https://wa.me/918309358319" className="block text-center w-full bg-slate-100 hover:bg-slate-200 text-slate-900 py-3 rounded-xl font-bold transition-colors">Start Now</a>
            </div>

            <div className="bg-slate-900 p-8 rounded-3xl border border-indigo-500 relative transform md:-translate-y-4 shadow-2xl">
              <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-indigo-500 text-white px-4 py-1 rounded-full text-sm font-bold">Most Popular</div>
              <h3 className="text-2xl font-bold text-white mb-2">Complete Business Website</h3>
              <p className="text-slate-400 mb-6">The ultimate package for dominating local Google search.</p>
              <div className="text-4xl font-extrabold text-white mb-8">₹12,999</div>
              <ul className="space-y-4 mb-8 text-slate-300">
                <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-indigo-400"/> Up to 5 Premium Pages (Home, About, Services, etc.)</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-indigo-400"/> Google Maps Local SEO Setup</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-indigo-400"/> Testimonials & Portfolio Engine</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-indigo-400"/> WhatsApp & Contact Forms</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-indigo-400"/> Lightning Fast React Framework</li>
              </ul>
              <a href="https://wa.me/918309358319" className="block text-center w-full bg-indigo-600 hover:bg-indigo-500 text-white py-3 rounded-xl font-bold transition-colors">Claim Top Spot Today</a>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQs FOR HYDERABAD BUSINESSES */}
      <section className="py-20 px-6 bg-white border-t border-slate-100">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-600">Everything you need to know about our Hyderabad web design services.</p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-slate-200 rounded-2xl overflow-hidden bg-slate-50 transition-all hover:border-indigo-200">
                <button
                  className="w-full px-6 py-5 text-left flex justify-between items-center bg-white"
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                >
                  <span className="font-bold text-slate-900 text-lg pr-8">{faq.q}</span>
                  <span className="shrink-0 text-indigo-600">
                    {openFaqIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                  </span>
                </button>
                <div className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openFaqIndex === index ? 'max-h-96 py-6 border-t border-slate-100' : 'max-h-0'}`}>
                  <p className="text-slate-600 leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default HyderabadWebDesign;
