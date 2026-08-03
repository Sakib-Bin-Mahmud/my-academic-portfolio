/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        base: '#0F1626',
        panel: '#161F33',
        panel2: '#1C2740',
        line: '#2A3654',
        ink: '#F1EDE4',
        muted: '#8B93A7',
        detect: '#5EEAD4',
        detectDim: '#2F6E68',
        warm: '#C4443A',
        warmDim: '#5A2420',
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body: ['var(--font-body)', 'serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      backgroundImage: {
        grid: 'linear-gradient(rgba(94,234,212,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(94,234,212,0.06) 1px, transparent 1px)',
      },
      backgroundSize: {
        gridpattern: '40px 40px',
      },
    },
  },
  plugins: [],
};
