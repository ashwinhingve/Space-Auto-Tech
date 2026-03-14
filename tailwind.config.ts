import type { Config } from "tailwindcss";

export default {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Space Auto Tech Brand Palette — uses CSS vars for opacity modifier support
        forest:   'rgb(var(--color-forest) / <alpha-value>)',
        cerulean: 'rgb(var(--color-cerulean) / <alpha-value>)',
        steel:    'rgb(var(--color-steel) / <alpha-value>)',
        sky:      'rgb(var(--color-sky) / <alpha-value>)',
        cloud:    'rgb(var(--color-cloud) / <alpha-value>)',
        ink:      'rgb(var(--color-ink) / <alpha-value>)',
        // Derived shades (plain hex, no opacity modifier needed) — industrial neutral palette
        'cerulean-dark':  '#0f4f68',
        'cerulean-light': '#1d6f8b',
        'steel-light':    '#d8e1ea',
        'forest-light':   '#2f7d5c',
        'sky-light':      '#e8eff6',
        'ink-soft':       '#1f2937',
        // Semantic tokens (mapped to HSL vars)
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input:  'hsl(var(--input))',
        ring:   'hsl(var(--ring))',
      },
      fontFamily: {
        display: ['Sora', 'Manrope', 'system-ui', 'sans-serif'],
        sans:    ['Manrope', 'system-ui', 'sans-serif'],
        mono:    ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      opacity: {
        '0':   '0',
        '5':   '0.05',
        '8':   '0.08',
        '10':  '0.1',
        '12':  '0.12',
        '15':  '0.15',
        '20':  '0.2',
        '25':  '0.25',
        '30':  '0.3',
        '35':  '0.35',
        '40':  '0.4',
        '45':  '0.45',
        '50':  '0.5',
        '55':  '0.55',
        '60':  '0.6',
        '65':  '0.65',
        '70':  '0.7',
        '75':  '0.75',
        '80':  '0.8',
        '85':  '0.85',
        '90':  '0.9',
        '95':  '0.95',
        '100': '1',
      },
      borderRadius: {
        lg:  'var(--radius)',
        md:  'calc(var(--radius) - 2px)',
        sm:  'calc(var(--radius) - 4px)',
      },
      boxShadow: {
        'card':       '0 1px 2px 0 rgba(15,23,42,0.08), 0 10px 24px -14px rgba(15,23,42,0.25)',
        'card-hover': '0 2px 8px rgba(15,23,42,0.12), 0 18px 34px -16px rgba(15,23,42,0.35)',
        'nav':        '0 1px 0 0 rgba(148,163,184,0.35)',
        'button':     '0 8px 20px -10px rgba(14,116,144,0.55)',
        'glass':      '0 14px 36px -20px rgba(15,23,42,0.35), inset 0 1px 0 0 rgba(255,255,255,0.75)',
      },
      keyframes: {
        'fade-up': {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-right': {
          '0%':   { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'count-up': {
          '0%':   { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'draw-line': {
          '0%':   { width: '0%' },
          '100%': { width: '100%' },
        },
        'pulse-ring': {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.6' },
          '50%':      { transform: 'scale(1.08)', opacity: '1' },
        },
        'shimmer': {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-8px)' },
        },
        'marquee-x': {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-up':    'fade-up 0.6s ease-out forwards',
        'fade-in':    'fade-in 0.5s ease-out forwards',
        'slide-right':'slide-right 0.6s ease-out forwards',
        'count-up':   'count-up 0.8s ease-out forwards',
        'pulse-ring': 'pulse-ring 3s ease-in-out infinite',
        'shimmer':    'shimmer 2.5s linear infinite',
        'float':      'float 4s ease-in-out infinite',
        'marquee-x':  'marquee-x 28s linear infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
