import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Dumbbell, CalendarRange, Users, Search, Plus, Minus } from 'lucide-react';
import { motion } from 'motion/react';

const GymWebDesign = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Why does my Indian gym need a website when I have an Instagram page?",
      a: "Instagram is great for engaging current members, but it fails terribly at converting local searches. When a customer in your city searches 'best gym near me' on Google, they are ready to buy today. A premium, fast website captures that high-intent traffic instantly, whereas Instagram relies mostly on luck and algorithm feeds."
    },
    {
      q: "Can members book trials directly on the website?",
      a: "Yes! The core of our gym website strategy revolves around the 'Free Trial' funnel. We place high-converting booking buttons across the site that drop directly into your WhatsApp, making it effortless for someone to commit to visiting your gym without navigating confusing forms."
    },
    {
      q: "How long does it take for a gym web design project to be completed?",
      a: "We work fast because empty treadmills cost you money. From start to finish, your custom, mobile-optimized gym website will be live in 7 to 10 days. We provide you with a dedicated timeline and stick to it strictly."
    },
    {
      q: "Will this website rank my fitness center on Google Maps?",
      a: "Absolutely. We embed LocalBusiness schema markup deeply into your code. This tells Google exactly where your gym is located, what your hours are, and what facilities you offer. This local SEO foundational setup pushes your gym higher in local map rankings."
    },
    {
      q: "Do you integrate with gym management software?",
      a: "Yes. Whether you use popular Indian gym management CRMs or simple lead-tracking sheets, we can seamlessly link your 'Join Now' buttons directly to your management portal or WhatsApp funnel, bringing you closer to automatic signups."
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
              <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 px-4 py-2 rounded-full text-sm font-bold mb-8 text-emerald-700">
                ⚡ Generate 50+ New Gym Walk-ins This Month
              </div>
              
              <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-8">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500">Gym Website Design</span> in India
              </h1>
              
              <h2 className="text-xl text-slate-600 mb-10 leading-relaxed font-normal">
                Stop relying purely on flyers and foot traffic. We build high-converting, lightning-fast gym websites that rank on Google Maps and turn local website visitors into paying fitness members via direct WhatsApp bookings.
              </h2>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://wa.me/918309358319?text=I%20want%20a%20website%20for%20my%20gym" className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-xl hover:-translate-y-0.5 w-max">
                  Scale Your Gym Now <ArrowRight size={20} />
                </a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/50 relative z-10 bg-slate-900">
                <img src="/gym-mockup.png" alt="Gym Fitness App UI" className="w-full h-full object-cover" />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-emerald-500/20 to-teal-500/20 blur-3xl -z-10 rounded-full" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. PROBLEM & SOLUTION */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl font-extrabold text-slate-900 mb-6 tracking-tight">Why Most Gyms Struggle to <span className="text-red-500">Find New Members Онлайн</span></h3>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                The fitness industry in India places massive emphasis on floor equipment, trainers, and local advertising. But when locals decide it is finally time to get in shape, they don't look at billboards—they pull out their mobile phones and search "best affordable gym near me."
              </p>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                If your gym has an outdated website that loads slowly, displays broken images of your treadmills, and hides membership pricing, potential members will leave instantly. They won't call you; they will literally navigate to your competitor's site because it looks more legitimate. You are bleeding monthly subscription revenue without even knowing it because your digital storefront looks abandoned.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xl relative">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Our Gym Lead-Gen Framework</h3>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 text-emerald-600">
                    <CalendarRange size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">Instant Trial Bookings</h4>
                    <p className="text-slate-600">We replace complex forms with simple, high-converting "Book Free Trial" buttons linked straight to WhatsApp.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0 text-blue-600">
                    <Search size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">Local Search Dominance</h4>
                    <p className="text-slate-600">We inject hyper-local Indian SEO tactics so your fitness center displays prominently on Google Maps.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center shrink-0 text-indigo-600">
                    <Users size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">Trust Showcase</h4>
                    <p className="text-slate-600">Gorgeous, fast-loading galleries showing your clean equipment, busy floor, and expert trainers.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE BENEFITS */}
      <section className="py-20 px-6 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">Built Exclusively For Fitness Centers</h2>
            <p className="text-xl text-slate-400">Generic templates kill conversions. We build custom gym websites structured precisely to sell annual packages and generate walk-ins.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
              <Dumbbell className="text-emerald-400 mb-6" size={32} />
              <h3 className="text-xl font-bold mb-4">Pricing Tables</h3>
              <p className="text-slate-400 leading-relaxed">Hidden pricing drives users away. We integrate stunning, responsive pricing columns highlighting your most profitable membership plans (e.g., Annual vs Monthly), pushing visitors toward long-term commitments before they even step foot in your door.</p>
            </div>
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
              <CheckCircle2 className="text-blue-400 mb-6" size={32} />
              <h3 className="text-xl font-bold mb-4">Mobile-First Delivery</h3>
              <p className="text-slate-400 leading-relaxed">Virtually all local searches for gyms happen on mobile phones in transit. Our React-based framework ensures your gym portal loads in under two seconds on 4G, completely eliminating the bounce rate caused by bloated WordPress sites.</p>
            </div>
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
              <Users className="text-indigo-400 mb-6" size={32} />
              <h3 className="text-xl font-bold mb-4">Trainer Portfolios</h3>
              <p className="text-slate-400 leading-relaxed">People buy from people. We create dedicated sections highlighting your head trainers, their certifications, and their client transformations. Building strong parasocial trust before the visit drastically increases your membership closing rate.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PRICING SECTIONS */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">Transparent Agency Pricing</h2>
            <p className="text-xl text-slate-600">Stop bleeding money on retainers. Get a high-converting asset you own 100%.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-3xl border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Gym Landing Page</h3>
              <p className="text-slate-500 mb-6">Perfect for gyms running Facebook/Insta Lead Ads.</p>
              <div className="text-4xl font-extrabold text-slate-900 mb-8">₹4,999</div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-emerald-500"/> Single Deep Scroll Layout</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-emerald-500"/> Facility Gallery Section</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-emerald-500"/> WhatsApp Trial Booking Setup</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-emerald-500"/> Mobile First Design</li>
              </ul>
              <a href="https://wa.me/918309358319" className="block text-center w-full bg-slate-100 hover:bg-slate-200 text-slate-900 py-3 rounded-xl font-bold transition-colors">Start Generating Leads</a>
            </div>

            <div className="bg-slate-900 p-8 rounded-3xl border border-emerald-500 relative transform md:-translate-y-4 shadow-2xl">
              <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-emerald-500 text-white px-4 py-1 rounded-full text-sm font-bold">Most Popular</div>
              <h3 className="text-2xl font-bold text-white mb-2">Complete Fitness Portal</h3>
              <p className="text-slate-400 mb-6">The ultimate package for dominating local Google maps.</p>
              <div className="text-4xl font-extrabold text-white mb-8">₹14,999</div>
              <ul className="space-y-4 mb-8 text-slate-300">
                <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-emerald-400"/> Up to 6 Premium Pages (Trainers, Classes, etc.)</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-emerald-400"/> Google Maps Local SEO Sync</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-emerald-400"/> Transformation/Before-After Gallery</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-emerald-400"/> Interactive Pricing Tables</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-emerald-400"/> Lightning Fast Framework</li>
              </ul>
              <a href="https://wa.me/918309358319" className="block text-center w-full bg-emerald-600 hover:bg-emerald-500 text-white py-3 rounded-xl font-bold transition-colors">Claim Top Spot Today</a>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQs FOR FITNESS BUSINESSES */}
      <section className="py-20 px-6 bg-white border-t border-slate-100">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-600">Everything you need to know about our Gym web design services.</p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-slate-200 rounded-2xl overflow-hidden bg-slate-50 transition-all hover:border-emerald-200">
                <button
                  className="w-full px-6 py-5 text-left flex justify-between items-center bg-white"
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                >
                  <span className="font-bold text-slate-900 text-lg pr-8">{faq.q}</span>
                  <span className="shrink-0 text-emerald-600">
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

export default GymWebDesign;
