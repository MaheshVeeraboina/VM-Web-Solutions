import React from 'react';

interface LogoProps {
  className?: string;
  width?: number | string;
  height?: number | string;
}

export const Logo: React.FC<LogoProps> = ({ className = '', width = 48, height = 48 }) => {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Pristine Light App-Icon Background */}
      <rect width="100" height="100" rx="22" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="2" />
      
      {/* Texture Overlay (Very Subtle Light Grid) */}
      <rect width="100" height="100" rx="22" fill="url(#noise_dots)"/>

      {/* Left Pillar (M Leg) */}
      <rect x="18" y="22" width="14" height="56" fill="#0F172A"/>
      
      {/* Right Pillar (M Leg) */}
      <rect x="68" y="22" width="14" height="56" fill="#0F172A"/>
      
      {/* The Central V-Drop (Electric Accent) */}
      {/* Mathematically parallel slope alignment: dY/dX = 1.75 */}
      <path 
        d="M 18 22 L 50 78 L 82 22 L 68 22 L 50 53.5 L 32 22 Z" 
        fill="url(#vm_accent)"
      />

      <defs>
        <pattern id="noise_dots" width="6" height="6" patternUnits="userSpaceOnUse">
          <circle cx="3" cy="3" r="0.8" fill="#0F172A" fillOpacity="0.05"/>
        </pattern>
        <linearGradient id="vm_accent" x1="0" y1="0" x2="100" y2="100">
          <stop stopColor="#3B82F6" /> {/* Vivid Electric Blue */}
          <stop offset="1" stopColor="#9333EA" /> {/* Deep Royal Purple */}
        </linearGradient>
      </defs>
    </svg>
  );
};
