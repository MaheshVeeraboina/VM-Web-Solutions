import React from 'react';
import { motion } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  const faqs = [
    {
      question: "Do I really need a website if I already use WhatsApp and Facebook?",
      answer: "Yes. While WhatsApp and Facebook are great for talking to people you already know, a high-converting website helps people who don't know you find your local business on Google. A website works 24/7 as your top salesperson, generating leads while you sleep."
    },
    {
      question: "How long does it take to develop a small business website in India?",
      answer: "We focus on ultra-fast delivery. Once we understand your business goals, your custom, SEO-optimized website will typically go live within 7 to 14 days. We don't believe in making you wait months to start getting customers."
    },
    {
      question: "Are your website design prices affordable for local businesses?",
      answer: "Absolutely. We designed our pricing specifically for Indian local businesses like coaching centers, real estate agents, and gyms. Our starter packages ensure you get a premium, lead-generating website without paying expensive corporate agency prices."
    },
    {
      question: "How will my website rank on Google Maps?",
      answer: "We implement Local SEO Basics directly into your website's code and content. This ensures that when people in your city search for 'best services near me', your Google Business Profile and website rank higher, bringing you more direct calls and walk-ins."
    },
    {
      question: "Will my website look good on mobile phones?",
      answer: "Yes! Over 80% of your Indian customers will look for you on their mobile phones. Every website we build is 100% mobile-first, ensuring it loads lightning fast and makes it insanely easy for customers to click the WhatsApp or Call button."
    }
  ];

  return (
    <section className="py-24 px-6 bg-white relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-600">
            Everything you need to know about getting your business online.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              key={index}
              className="border border-slate-200 rounded-2xl overflow-hidden bg-slate-50 transition-all hover:border-indigo-200"
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center bg-white"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-bold text-slate-900 text-lg pr-8">{faq.question}</span>
                <span className="shrink-0 text-indigo-600">
                  {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 py-6 border-t border-slate-100' : 'max-h-0'
                }`}
              >
                <p className="text-slate-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
