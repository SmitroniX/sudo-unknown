import React from 'react';

export const CyberBackground: React.FC = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#050505]">
      {/* Subtle radial gradients - professional dark studio lighting */}
      <div className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[1100px] h-[650px] bg-gradient-to-b from-[#00ff88]/[0.06] via-[#00ff88]/[0.015] to-transparent rounded-full blur-[140px]" />
      <div className="absolute top-[40%] -right-[15%] w-[600px] h-[600px] bg-[#00ff88]/[0.025] rounded-full blur-[160px]" />
      <div className="absolute bottom-0 left-[10%] w-[500px] h-[400px] bg-[#00ff88]/[0.02] rounded-full blur-[150px]" />

      {/* Modern precision grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px'
        }}
      />

      {/* Subtle dot matrix overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(#00ff88 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />

      {/* Faint CRT scanline texture */}
      <div className="scanlines absolute inset-0 opacity-15 pointer-events-none" />
    </div>
  );
};
