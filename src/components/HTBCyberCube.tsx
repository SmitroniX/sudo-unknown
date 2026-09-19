import React, { useState } from 'react';

export const HTBCyberCube: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`relative inline-block select-none cursor-pointer group ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Ground Neon Glow Aura */}
      <div 
        className={`absolute -bottom-6 -left-6 -right-6 h-12 bg-[#00ff88]/20 rounded-full blur-xl transition-all duration-500 ${
          isHovered ? 'opacity-100 scale-125 bg-[#00ff88]/35' : 'opacity-60'
        }`} 
      />

      {/* Floating 3D Isometric Holographic Cube */}
      <div className={`relative animate-float transition-transform duration-500 ${isHovered ? 'scale-110' : ''}`}>
        <svg
          viewBox="0 0 160 180"
          className="w-32 h-36 sm:w-40 sm:h-44 drop-shadow-[0_0_20px_rgba(0,255,136,0.6)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Top Face Gradient */}
            <linearGradient id="topFace" x1="80" y1="20" x2="80" y2="70" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#162a20" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#0b1712" stopOpacity="0.8" />
            </linearGradient>

            {/* Left Face Gradient */}
            <linearGradient id="leftFace" x1="20" y1="70" x2="80" y2="150" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#0e1f18" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#060c09" stopOpacity="0.95" />
            </linearGradient>

            {/* Right Face Gradient */}
            <linearGradient id="rightFace" x1="80" y1="70" x2="140" y2="150" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#0a1510" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#040806" stopOpacity="0.95" />
            </linearGradient>

            {/* Neon Wireframe Stroke Glow */}
            <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Isometric Outer Cube Body */}
          {/* Top Face */}
          <polygon
            points="80,18 138,50 80,82 22,50"
            fill="url(#topFace)"
            stroke="#00ff88"
            strokeWidth="1.5"
            strokeLinejoin="round"
            className="transition-all duration-300"
          />

          {/* Left Face */}
          <polygon
            points="22,50 80,82 80,146 22,114"
            fill="url(#leftFace)"
            stroke="#00ff88"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />

          {/* Right Face */}
          <polygon
            points="80,82 138,50 138,114 80,146"
            fill="url(#rightFace)"
            stroke="#00ff88"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />

          {/* Inner Glowing Hack The Box Hexagon / Cube Symbol on Left Face */}
          <g transform="translate(38, 70)" filter="url(#neonGlow)">
            {/* HTB Hexagon Icon Silhouette */}
            <path
              d="M20 4 L34 12 L34 28 L20 36 L6 28 L6 12 Z"
              fill="rgba(0, 255, 136, 0.15)"
              stroke="#00ff88"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            {/* Inner Y lines */}
            <path d="M20 20 L20 36" stroke="#00ff88" strokeWidth="2" />
            <path d="M20 20 L6 12" stroke="#00ff88" strokeWidth="2" />
            <path d="M20 20 L34 12" stroke="#00ff88" strokeWidth="2" />
          </g>

          {/* Floating Laser Edge Highlights */}
          <line x1="80" y1="18" x2="80" y2="82" stroke="#55ffbb" strokeWidth="2" strokeLinecap="round" />
          <circle cx="80" cy="82" r="2.5" fill="#00ff88" />
          <circle cx="80" cy="18" r="2" fill="#00ff88" />
          <circle cx="22" cy="50" r="2" fill="#00ff88" />
          <circle cx="138" cy="50" r="2" fill="#00ff88" />
          <circle cx="80" cy="146" r="2" fill="#00ff88" />

          {/* Grid lines on Top Face */}
          <line x1="51" y1="34" x2="109" y2="66" stroke="rgba(0,255,136,0.3)" strokeWidth="0.8" strokeDasharray="3,3" />
          <line x1="109" y1="34" x2="51" y2="66" stroke="rgba(0,255,136,0.3)" strokeWidth="0.8" strokeDasharray="3,3" />
        </svg>

        {/* Small Floating Data Tag */}
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded bg-black/80 border border-[#00ff88]/40 text-[9px] font-mono text-[#00ff88] tracking-widest uppercase whitespace-nowrap shadow-[0_0_10px_rgba(0,255,136,0.3)]">
          HTB // CUBE
        </div>
      </div>
    </div>
  );
};
