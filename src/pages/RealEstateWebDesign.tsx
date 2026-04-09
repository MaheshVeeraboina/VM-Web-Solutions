import heroImage from '@/assets/images/real-estate-mockup.webp';
import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Building, Map, Key, Search, Plus, Minus } from 'lucide-react';
import { motion } from 'motion/react';import { Breadcrumb } from '../components/Breadcrumb';
import { RelatedPages } from '../components/RelatedPages';
const RealEstateWebDesign = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Do I really need a website if I already post properties on MagicBricks and 99acres?",
      a: "Yes. Third-party portals are crowded with your direct competitors. When a buyer searches those platforms, they are presented with hundreds of other agents. Having your own premium website establishes you as a trusted local authority, allowing you to capture exclusive leads who contact you directly via WhatsApp without being distracted by other properties."
    },
    {
      q: "Can you list my properties beautifully on mobile?",
      a: "Absolutely. Real estate is highly visual. We build stunning, fast-loading property galleries that look incredible on mobile phones. Each property listing includes high-resolution image support, amenity lists, and direct 'Schedule a Visit' buttons linked straight to your WhatsApp."
    },
    {
      q: "How long does it take for a real estate website to go live?",
      a: "Because the real estate market moves rapidly, we deliver fast. A fully functional, mobile-optimized real estate landing page or agency site will usually go live within 7 to 14 days, depending on the complexity of your property listings."
    },
    {
      q: "Will this website rank my agency on Google Maps?",
      a: "Yes. High-value property investments require extreme local trust. We embed LocalBusiness schema markup into your code. This tells Google exactly where your real estate agency operates, pushing your brand higher in local map rankings when people search 'best real estate agent near me'."
    },
    {
      q: "Is it easy for me to add new properties later?",
      a: "Yes, we can build custom, easy-to-use CMS (Content Management System) integrations allowing you to add, edit, or remove property listings directly from your phone without needing any coding knowledge."
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
              <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 px-4 py-2 rounded-full text-sm font-bold mb-8 text-amber-700">
                🔑 Stop Sharing Leads with Third-Party Portals
              </div>
              
              <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-8">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">Real Estate Web Design</span> in India
              </h1>
              
              <h2 className="text-xl text-slate-600 mb-10 leading-relaxed font-normal">
                Dominate your local property market. We build premium, high-converting websites for realtors, builders, and agencies designed to generate exclusive high-ticket buyer inquiries directly via WhatsApp.
              </h2>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://wa.me/918309358319?text=I%20want%20a%20real%20estate%20website" className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-xl hover:-translate-y-0.5 w-max">
                  Get More Exclusive Leads <ArrowRight size={20} />
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
                <img src={heroImage} alt="Real Estate Web Design Mockup" width="1200" height="800" fetchPriority="high" loading="eager" decoding="sync" className="w-full h-full object-cover" />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-amber-500/20 to-orange-500/20 blur-3xl -z-10 rounded-full" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. PROBLEM & SOLUTION */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl font-extrabold text-slate-900 mb-6 tracking-tight">Why Relying on Property Portals is <span className="text-red-500">Killing Your Brand</span></h3>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                When you list your premium properties exclusively on crowded Indian property portals, you are instantly grouped with hundreds of competitors. A potential buyer clicks your listing, gets distracted by a cheaper property below yours, and you lose a heavy commission entirely by accident.
              </p>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                To capture high-net-worth individuals and serious NRI investors, you must project ultimate authority. An exclusive, premium website builds immense trust. When a buyer visits your personal agency site, they only see your properties, your success stories, and your direct contact buttons. You control the narrative, and you own the lead 100%.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xl relative">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Our Real Estate Conversion Framework</h3>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center shrink-0 text-amber-600">
                    <Building size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">Premium Property Showcases</h4>
                    <p className="text-slate-600">We engineer visually stunning property detail pages that highlight floor plans, amenities, and HD galleries flawlessly on mobile.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0 text-blue-600">
                    <Search size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">Local Maps Authority</h4>
                    <p className="text-slate-600">Deep SEO optimization ensures your agency outranks competitors when buyers search "top realtors in my city."</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center shrink-0 text-green-600">
                    <Key size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">Direct WhatsApp Scheduling</h4>
                    <p className="text-slate-600">Cut out middleman delays. Buyers can schedule site visits directly via WhatsApp from the property listing page.</p>
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
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">Built For High-Ticket Sales</h2>
            <p className="text-xl text-slate-400">Buying a home is the biggest financial decision a person makes. Your website must communicate absolute trust, security, and professionalism.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
              <Building className="text-amber-400 mb-6" size={32} />
              <h3 className="text-xl font-bold mb-4">Project Landing Pages</h3>
              <p className="text-slate-400 leading-relaxed">Launching a new apartment complex or villa project? We build dedicated, high-converting single landing pages exactly tuned for Facebook and Google Lead Ads to maximize your marketing budget ROI.</p>
            </div>
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
              <Map className="text-orange-400 mb-6" size={32} />
              <h3 className="text-xl font-bold mb-4">Neighborhood Guides</h3>
              <p className="text-slate-400 leading-relaxed">Establish massive local SEO authority by letting us build targeted neighborhood guides (e.g. "Living in Jubilee Hills"). This captures top-of-funnel organic search traffic before they even talk to another agent.</p>
            </div>
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
              <CheckCircle2 className="text-emerald-400 mb-6" size={32} />
              <h3 className="text-xl font-bold mb-4">Fast Mobile Galleries</h3>
              <p className="text-slate-400 leading-relaxed">Real estate imagery is heavy and often breaks cheap websites. Our React infrastructure ensures that 4K property images load lazily and instantly on mobile data, keeping buyers engaged with the listing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PRICING SECTIONS */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">Website Pricing For Realtors</h2>
            <p className="text-xl text-slate-600">Invest in your brand. A single property sale covers this cost 100x over.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-3xl border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Project Lead Page</h3>
              <p className="text-slate-500 mb-6">Perfect for builders running Ads for a specific new project.</p>
              <div className="text-4xl font-extrabold text-slate-900 mb-8">₹6,999</div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-amber-500"/> Conversion Optimized Layout</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-amber-500"/> Floor Plan & Amenities Viewer</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-amber-500"/> Brochure Download Funnel</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-amber-500"/> Sticky Mobile Action Buttons</li>
              </ul>
              <a href="https://wa.me/918309358319" className="block text-center w-full bg-slate-100 hover:bg-slate-200 text-slate-900 py-3 rounded-xl font-bold transition-colors">Start Generating Leads</a>
            </div>

            <div className="bg-slate-900 p-8 rounded-3xl border border-amber-500 relative transform md:-translate-y-4 shadow-2xl">
              <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-amber-500 text-white px-4 py-1 rounded-full text-sm font-bold">Recommended</div>
              <h3 className="text-2xl font-bold text-white mb-2">Complete Agency Portal</h3>
              <p className="text-slate-400 mb-6">The ultimate package for real estate agencies and brokers.</p>
              <div className="text-4xl font-extrabold text-white mb-8">₹19,999</div>
              <ul className="space-y-4 mb-8 text-slate-300">
                <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-amber-400"/> Multiple Dynamic Property Listings</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-amber-400"/> Google Maps Agent SEO Sync</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-amber-400"/> Advanced Filtering & Search Prep</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-amber-400"/> Trust Building Testimonial Videos</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-amber-400"/> Direct WhatsApp Site Visits</li>
              </ul>
              <a href="https://wa.me/918309358319" className="block text-center w-full bg-amber-600 hover:bg-amber-500 text-white py-3 rounded-xl font-bold transition-colors">Establish Authority Today</a>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQs FOR REAL ESTATE */}
      <section className="py-20 px-6 bg-white border-t border-slate-100">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-600">Everything you need to know about our real estate web design services.</p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-slate-200 rounded-2xl overflow-hidden bg-slate-50 transition-all hover:border-amber-200">
                <button
                  className="w-full px-6 py-5 text-left flex justify-between items-center bg-white"
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                >
                  <span className="font-bold text-slate-900 text-lg pr-8">{faq.q}</span>
                  <span className="shrink-0 text-amber-600">
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

      <RelatedPages currentPath="/real-estate-website-design-india" title="Explore Our Other Service Specializations" />
    </main>
  );
};

export default RealEstateWebDesign;
