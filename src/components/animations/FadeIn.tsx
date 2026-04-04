import React from 'react';
import { motion, useReducedMotion } from 'motion/react';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
}

export const FadeIn: React.FC<FadeInProps> = ({ 
  children, 
  delay = 0, 
  className = "",
  direction = 'up'
}) => {
  const shouldReduceMotion = useReducedMotion();

  const getInitialOffset = () => {
    switch (direction) {
      case 'up': return { y: 20 };
      case 'down': return { y: -20 };
      case 'left': return { x: -20 };
      case 'right': return { x: 20 };
      default: return {};
    }
  };

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        ...(shouldReduceMotion ? {} : getInitialOffset()) 
      }}
      whileInView={{ 
        opacity: 1, 
        x: 0, 
        y: 0 
      }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ 
        duration: 0.5, 
        ease: "easeInOut",
        delay: shouldReduceMotion ? 0 : delay 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
