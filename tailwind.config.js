/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'cyber-green': '#00ff41',
        'cyber-blue': '#0099ff',
        'dark-bg': '#0a0a0a',
        'dark-surface': '#1a1a1a',
        'dark-border': '#333333',
      },
      fontFamily: {
        'mono': ['Fira Code', 'Monaco', 'Cascadia Code', 'Ubuntu Mono', 'monospace'],
      },
      animation: {
        'matrix-rain': 'matrix-rain 20s linear infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'type': 'type 3.5s steps(40, end)',
        'blink': 'blink 1s infinite',
      },
      keyframes: {
        'matrix-rain': {
          '0%': { transform: 'translateY(-100vh)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        'glow': {
          'from': { boxShadow: '0 0 5px #00ff41, 0 0 10px #00ff41, 0 0 15px #00ff41' },
          'to': { boxShadow: '0 0 10px #00ff41, 0 0 20px #00ff41, 0 0 30px #00ff41' },
        },
        'type': {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        'blink': {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};