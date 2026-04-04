import React from 'react';
import { motion } from 'motion/react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

const FloatingWhatsApp = () => {
  return (
    <motion.a
      href="https://wa.me/918309358319?text=Hi%20VM%20Web%20Solutions,%20I%20want%20to%20get%20more%20customers.%20Can%20we%20schedule%20a%20demo?"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_8px_30px_rgba(37,211,102,0.4)] flex items-center justify-center group border-2 border-white cursor-pointer"
    >
      <WhatsAppIcon size={28} className="drop-shadow-sm" fill="#ffffff" />
      <span className="absolute right-full mr-4 bg-slate-900 text-white px-4 py-2 rounded-xl text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none before:content-[''] before:absolute before:top-1/2 before:-right-2 before:-translate-y-1/2 before:border-[6px] before:border-transparent before:border-l-slate-900">
        Chat with us!
      </span>
    </motion.a>
  );
};

export default FloatingWhatsApp;
