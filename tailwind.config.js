/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: '#050505',
          card: '#0a0d0f',
          surface: '#0d1117',
          surface2: '#161b22',
          border: '#1f2937',
          borderGreen: '#00ff6633',
          neon: '#00ff66',
          neonHover: '#22ff77',
          neonDim: '#00cc52',
          neonDark: '#052e16',
          textMuted: '#94a3b8',
          textDark: '#64748b',
          accentCyan: '#00f0ff',
          accentPurple: '#a855f7',
          accentAmber: '#f59e0b',
          accentRed: '#ef4444'
        }
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'Consolas', '"Courier New"', 'monospace'],
        sans: ['"Inter"', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif']
      },
      keyframes: {
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.03)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' }
        },
        radarSweep: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        }
      },
      animation: {
        glitch: 'glitch 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite',
        pulseGlow: 'pulseGlow 4s ease-in-out infinite',
        scanline: 'scanline 8s linear infinite',
        radar: 'radarSweep 6s linear infinite'
      },
      backgroundImage: {
        'grid-pattern': 'radial-gradient(circle, rgba(0, 255, 102, 0.08) 1px, transparent 1px)',
        'matrix-dots': 'radial-gradient(rgba(0, 255, 102, 0.15) 1px, transparent 0)',
      }
    },
  },
  plugins: [],
}
