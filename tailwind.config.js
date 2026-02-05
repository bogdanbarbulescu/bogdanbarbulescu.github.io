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
        accent: '#c9a227',
        'accent-hover': '#d4af37',
        surface: {
          light: '#fafafa',
          dark: '#0a0a0a',
          card: {
            light: '#ffffff',
            dark: '#141414',
          },
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['DM Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        'display-lg': ['2.5rem', { lineHeight: '1.15' }],
        'display-md': ['2rem', { lineHeight: '1.2' }],
        'display-sm': ['1.5rem', { lineHeight: '1.3' }],
        'section': ['1.875rem', { lineHeight: '1.25' }],
        'card-title': ['1.125rem', { lineHeight: '1.35' }],
        'body': ['1rem', { lineHeight: '1.625' }],
        'small': ['0.875rem', { lineHeight: '1.5' }],
        'eyebrow': ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.1em' }],
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.4s ease-out forwards',
        'fade-in': 'fade-in 0.35s ease-out forwards',
      },
    },
  },
  plugins: [],
}
