import heroImage from '@/assets/images/coaching-mockup.webp';
import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, GraduationCap, Trophy, BookOpen, Search, Plus, Minus } from 'lucide-react';
import { motion } from 'motion/react';

const CoachingWebDesign = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Why do Indian coaching institutes need specialized websites?",
      a: "Parents and students perform extreme research before paying tuition fees. They want to see your faculty credentials, past student success stories, and course syllables. A specialized website acts as a 24/7 digital prospectus, building trust faster than simple pamphlets or word-of-mouth."
    },
    {
      q: "Can students submit admission inquiries directly?",
      a: "Yes. Every website we build for educational institutes features robust lead generation forms and highly visible 'WhatsApp Us' buttons. Instead of filling out a massive, confusing print form, a parent can simply tap a button on their phone and speak directly with your admission counselor."
    },
    {
      q: "How long does it take to launch an institute website?",
      a: "We understand that coaching centers operate strictly on academic enrollment seasons. If you need to launch before the next batch starts, we deliver lightning-fast. A complete, high-converting coaching website usually goes live within 10 to 14 days."
    },
    {
      q: "Will our website load fast on mobile networks?",
      a: "This is critical for students viewing your pages on standard mobile data. We build our sites exclusively on modern React/Vite technologies, guaranteeing sub-2-second load times. Fast websites prevent student bounce rates and drastically improve your Google SEO rankings."
    },
    {
      q: "Can we display our top-ranking students?",
      a: "Absolutely! The 'Hall of Fame' or 'Results' section is the most important conversion metric for coaching websites in India. We design beautiful, optimized galleries that proudly showcase your top performers to immediately establish authority."
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
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 px-4 py-2 rounded-full text-sm font-bold mb-8 text-blue-700">
                🎓 Double Your Student Admissions This Academic Year
              </div>
              
              <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-8">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Website Development</span> for Coaching Institutes in India
              </h1>
              
              <h2 className="text-xl text-slate-600 mb-10 leading-relaxed font-normal">
                Stop losing students to larger institutes. We build extremely fast, premium websites designed specifically for Indian coaching centers to showcase past results and maximize new student inquiries via direct WhatsApp integration.
              </h2>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://wa.me/918309358319?text=I%20want%20a%20website%20for%20my%20coaching%20institute" className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-xl hover:-translate-y-0.5 w-max">
                  Boost Your Admissions <ArrowRight size={20} />
                </a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/50 relative z-10 bg-slate-50">
                <img src={heroImage} alt="Coaching Web Design Mockup" width="1200" height="800" fetchPriority="high" loading="eager" decoding="sync" className="w-full h-full object-cover" />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-blue-500/20 to-indigo-500/20 blur-3xl -z-10 rounded-full" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. PROBLEM & SOLUTION */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl font-extrabold text-slate-900 mb-6 tracking-tight">Why Parents Choose <span className="text-red-500">Other Institutes</span> Over Yours</h3>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                In India, education is a massive investment. When a parent decides to enroll their child in a coaching center for JEE, NEET, UPSC, or basic tuitions, they conduct thorough research. If your institute relies solely on physical pamphlets while your competitor has a brilliant, fast-loading digital prospectus, you lose the admission instantly.
              </p>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                An outdated, slow, or non-mobile-friendly website creates immediate doubt. If your site looks unprofessional, parents unconsciously assume your teaching methods are also outdated. You are losing high-paying student enrollments every single semester because your digital first impression fails to build academic trust.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xl relative">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Our Academic Lead-Gen Framework</h3>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0 text-blue-600">
                    <Trophy size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">Results Showcases</h4>
                    <p className="text-slate-600">Beautifully engineered "Hall of Fame" sections highlighting your past student ranks and test scores to build instant authority.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center shrink-0 text-indigo-600">
                    <Search size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">Local Maps Dominance</h4>
                    <p className="text-slate-600">Hyper-optimized LocalBusiness schema so your institute appears first when students search "best coaching center near me."</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 text-emerald-600">
                    <BookOpen size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">Direct WhatsApp Admissions</h4>
                    <p className="text-slate-600">We replace broken email forms with direct WhatsApp inquiry buttons, ensuring your counselor can reply to parents immediately.</p>
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
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">Engineered For Educational Growth</h2>
            <p className="text-xl text-slate-400">We don't build generic corporate sites. We build sales machines designed perfectly for Indian coaching centers wanting to maximize yearly batch enrollments.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
              <GraduationCap className="text-blue-400 mb-6" size={32} />
              <h3 className="text-xl font-bold mb-4">Faculty Profiles</h3>
              <p className="text-slate-400 leading-relaxed">Parents want to know who is teaching their children. We build dedicated instructor portfolios highlighting academic credentials, teaching experience, and methodology, which massively increases trust and perceived value.</p>
            </div>
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
              <BookOpen className="text-indigo-400 mb-6" size={32} />
              <h3 className="text-xl font-bold mb-4">Syllabus & Course Breakdown</h3>
              <p className="text-slate-400 leading-relaxed">We structure your course offerings perfectly. Instead of a messy PDF download, students can natively browse schedules, batch timings, and curriculum details on their mobile phones flawlessly, keeping them engaged on your site.</p>
            </div>
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
              <Trophy className="text-emerald-400 mb-6" size={32} />
              <h3 className="text-xl font-bold mb-4">Testimonial Video SEO</h3>
              <p className="text-slate-400 leading-relaxed">We natively embed fast-loading video testimonials of successful students. When an anxious parent sees another parent praising your institute, objection barriers are completely destroyed. This is the ultimate conversion tool.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PRICING SECTIONS */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">Transparent Agency Pricing</h2>
            <p className="text-xl text-slate-600">Get a premium digital prospectus without paying excessive corporate agency fees.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-3xl border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Admission Landing Page</h3>
              <p className="text-slate-500 mb-6">Perfect for running Google Ads before a new batch starts.</p>
              <div className="text-4xl font-extrabold text-slate-900 mb-8">₹5,999</div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-blue-500"/> Single Deep Scroll Layout</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-blue-500"/> Results/Hall of Fame Section</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-blue-500"/> WhatsApp Inquiry Integration</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-blue-500"/> Mobile First Design</li>
              </ul>
              <a href="https://wa.me/918309358319" className="block text-center w-full bg-slate-100 hover:bg-slate-200 text-slate-900 py-3 rounded-xl font-bold transition-colors">Start Generating Leads</a>
            </div>

            <div className="bg-slate-900 p-8 rounded-3xl border border-blue-500 relative transform md:-translate-y-4 shadow-2xl">
              <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-bold">Most Popular</div>
              <h3 className="text-2xl font-bold text-white mb-2">Complete Academic Portal</h3>
              <p className="text-slate-400 mb-6">The ultimate package for dominating local Google maps.</p>
              <div className="text-4xl font-extrabold text-white mb-8">₹15,999</div>
              <ul className="space-y-4 mb-8 text-slate-300">
                <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-blue-400"/> Up to 6 Premium Pages (Courses, Faculty, etc.)</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-blue-400"/> Google Maps Local SEO Sync</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-blue-400"/> Advanced Testimonials Gallery</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-blue-400"/> Interactive Course Offerings</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-blue-400"/> Lightning Fast Framework</li>
              </ul>
              <a href="https://wa.me/918309358319" className="block text-center w-full bg-blue-600 hover:bg-blue-500 text-white py-3 rounded-xl font-bold transition-colors">Maximize Admissions Today</a>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQs FOR COACHING INSTITUTES */}
      <section className="py-20 px-6 bg-white border-t border-slate-100">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-600">Everything you need to know about our Coaching Institute web design services.</p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-slate-200 rounded-2xl overflow-hidden bg-slate-50 transition-all hover:border-blue-200">
                <button
                  className="w-full px-6 py-5 text-left flex justify-between items-center bg-white"
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                >
                  <span className="font-bold text-slate-900 text-lg pr-8">{faq.q}</span>
                  <span className="shrink-0 text-blue-600">
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

export default CoachingWebDesign;
