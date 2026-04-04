import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, User, CheckCircle2, X } from 'lucide-react';
import { motion } from 'motion/react';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', business: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus('loading');

    if (formState.phone.replace(/\\D/g, '').length < 10) {
      setStatus('error');
      return;
    }

    const SERVICE_ID = 'service_n20eayw';
    const TEMPLATE_ID = 'template_otynsid';
    const PUBLIC_KEY = 'xURJIlj4p-DZabNey';

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        setStatus('success');
        const whatsappMessage = encodeURIComponent(`Hi VM Web Solutions, I'm ${formState.name}. I just submitted a request on your website for my business. Let's discuss!`);
        window.open(`https://wa.me/918309358319?text=${whatsappMessage}`, "_blank");
      })
      .catch((err) => {
        console.error(err);
        setStatus('error');
      });
  };

  return (
    <section id="contact" className="py-24 px-6 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block bg-red-100 text-red-700 px-4 py-2 rounded-full font-bold text-sm mb-6">
              ⚠️ Limited Capacity: taking only 2 more clients this week.
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Ready for <span className="text-indigo-600">More Customers?</span>
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Fill out the form below. We will call you within 24 hours to discuss how we can grow your local business with a high-converting website.
            </p>
            
            <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hidden lg:block">
              <h3 className="font-bold text-slate-900 mb-4 text-xl">What happens next?</h3>
              <ul className="space-y-4">
                <li className="flex gap-3 text-slate-600">
                  <div className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-sm shrink-0">1</div>
                  We review your business.
                </li>
                <li className="flex gap-3 text-slate-600">
                  <div className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-sm shrink-0">2</div>
                  We do a free 15-minute call.
                </li>
                <li className="flex gap-3 text-slate-600">
                  <div className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-sm shrink-0">3</div>
                  We give you a clear plan to get more leads.
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-slate-100 relative">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-t-[2.5rem]"></div>
            
            {status === 'success' ? (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-16">
                <div className="w-20 h-20 bg-emerald-100 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Request Sent!</h3>
                <p className="text-slate-600 mb-8">We will contact you within 24 hours.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="text-indigo-600 font-bold hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                {status === 'error' && (
                  <div className="bg-red-50 text-red-600 p-4 rounded-xl flex gap-3 text-sm font-medium items-center border border-red-100">
                    <X size={20} />
                    Failed to send. Please check your details or WhatsApp us directly.
                  </div>
                )}
                
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                  <div className="relative">
                    <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input required name="user_name" type="text" placeholder="John Doe" className="w-full pl-12 pr-4 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all" value={formState.name} onChange={(e) => setFormState({...formState, name: e.target.value})} />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                  <div className="relative">
                    <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input required name="user_email" type="email" placeholder="john@example.com" className="w-full pl-12 pr-4 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all" value={formState.email} onChange={(e) => setFormState({...formState, email: e.target.value})} />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                  <div className="relative">
                    <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input required name="user_phone" type="tel" placeholder="+91 00000 00000" className="w-full pl-12 pr-4 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all" value={formState.phone} onChange={(e) => setFormState({...formState, phone: e.target.value})} />
                  </div>
                </div>

                <button 
                  type="submit" 
                  disabled={status === 'loading'}
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-indigo-500/20 disabled:opacity-70 flex justify-center items-center gap-2"
                >
                  {status === 'loading' ? 'Sending...' : 'Request Free Consultation'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
