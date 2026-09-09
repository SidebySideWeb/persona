/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      maxWidth: {
        site: '1320px',
      },
      colors: {
        // Brand narrative palette (UI source of truth)
        tangerine: '#E85C1F',
        campari: '#E8246C',
        ultraviolet: '#7928CA',
        espresso: '#1A1412',
        linen: '#FFFDF9',
        cardboard: '#F6F0E6',
        night: '#120E0D',
        'electric-violet': '#9333EA',

        // Semantic Material-style tokens (brand values override frontmatter where they differ)
        surface: '#FFFDF9',
        'surface-dim': '#e4d7d4',
        'surface-bright': '#FFFDF9',
        'surface-container-lowest': '#ffffff',
        'surface-container-low': '#F6F0E6',
        'surface-container': '#f9ebe7',
        'surface-container-high': '#f3e5e1',
        'surface-container-highest': '#ede0dc',
        'surface-variant': '#ede0dc',
        'on-surface': '#1A1412',
        'on-surface-variant': '#594139',
        'inverse-surface': '#120E0D',
        'inverse-on-surface': '#fbeeea',
        outline: '#8d7167',
        'outline-variant': '#e1bfb4',
        'surface-tint': '#E85C1F',
        background: '#FFFDF9',
        'on-background': '#1A1412',

        primary: '#E85C1F',
        'on-primary': '#ffffff',
        'primary-container': '#cc4907',
        'on-primary-container': '#fffbff',
        'inverse-primary': '#ffb59a',
        'primary-fixed': '#ffdbcf',
        'primary-fixed-dim': '#ffb59a',
        'on-primary-fixed': '#380d00',
        'on-primary-fixed-variant': '#812900',

        secondary: '#E8246C',
        'on-secondary': '#ffffff',
        'secondary-container': '#e01b66',
        'on-secondary-container': '#fffbff',
        'secondary-fixed': '#ffd9df',
        'secondary-fixed-dim': '#ffb1c0',
        'on-secondary-fixed': '#3f0017',
        'on-secondary-fixed-variant': '#90003d',

        tertiary: '#7928CA',
        'on-tertiary': '#ffffff',
        'tertiary-container': '#974ce9',
        'on-tertiary-container': '#fffbff',
        'tertiary-fixed': '#efdbff',
        'tertiary-fixed-dim': '#dbb8ff',
        'on-tertiary-fixed': '#2b0052',
        'on-tertiary-fixed-variant': '#6600b7',

        // Frontmatter semantic aliases (fallback names from Stitch export)
        'md-primary': '#a43700',
        'md-secondary': '#b70050',
        'md-tertiary': '#7d2dce',
        'md-surface': '#fff8f6',
        'md-on-surface': '#201a18',

        error: '#ba1a1a',
        'on-error': '#ffffff',
        'error-container': '#ffdad6',
        'on-error-container': '#93000a',
      },
      spacing: {
        'space-2xs': '0.25rem',
        'space-xs': '0.5rem',
        'space-sm': '0.75rem',
        'space-md': '1rem',
        'space-lg': '1.5rem',
        'space-xl': '2rem',
        'space-2xl': '3rem',
        'space-3xl': '4.5rem',
        'gutter-mobile': '1rem',
        'gutter-desktop': '2rem',
        'margin-mobile': '1.25rem',
        'margin-desktop': '3.5rem',
        'gutter-tablet': '1.5rem',
        'margin-tablet': '2rem',
      },
      borderRadius: {
        sm: '0.25rem',
        DEFAULT: '0.5rem',
        md: '0.75rem',
        lg: '1rem',
        xl: '1.5rem',
        '2xl': '1.5rem',
        '3xl': '1.5rem',
        full: '9999px',
      },
      fontFamily: {
        display: ['"Bodoni Moda"', 'Georgia', 'serif'],
        body: ['Outfit', 'system-ui', 'sans-serif'],
        'display-hero': ['"Bodoni Moda"', 'Georgia', 'serif'],
        'display-hero-mobile': ['"Bodoni Moda"', 'Georgia', 'serif'],
        'headline-lg': ['"Bodoni Moda"', 'Georgia', 'serif'],
        'headline-lg-mobile': ['"Bodoni Moda"', 'Georgia', 'serif'],
        'headline-md': ['"Bodoni Moda"', 'Georgia', 'serif'],
        'headline-sm': ['"Bodoni Moda"', 'Georgia', 'serif'],
        'title-lg': ['Outfit', 'system-ui', 'sans-serif'],
        'body-lg': ['Outfit', 'system-ui', 'sans-serif'],
        'body-md': ['Outfit', 'system-ui', 'sans-serif'],
        'body-sm': ['Outfit', 'system-ui', 'sans-serif'],
        'label-lg': ['Outfit', 'system-ui', 'sans-serif'],
        'label-sticker': ['"Bodoni Moda"', 'Georgia', 'serif'],
      },
      fontSize: {
        'display-hero': [
          '72px',
          {lineHeight: '76px', letterSpacing: '-0.03em', fontWeight: '700'},
        ],
        'display-hero-mobile': [
          '44px',
          {lineHeight: '48px', letterSpacing: '-0.02em', fontWeight: '700'},
        ],
        'headline-lg': [
          '48px',
          {lineHeight: '54px', letterSpacing: '-0.02em', fontWeight: '600'},
        ],
        'headline-lg-mobile': [
          '32px',
          {lineHeight: '38px', letterSpacing: '-0.01em', fontWeight: '600'},
        ],
        'headline-md': [
          '28px',
          {lineHeight: '34px', letterSpacing: '-0.01em', fontWeight: '600'},
        ],
        'headline-sm': ['22px', {lineHeight: '28px', fontWeight: '600'}],
        'title-lg': ['20px', {lineHeight: '26px', fontWeight: '600'}],
        'body-lg': ['18px', {lineHeight: '28px', fontWeight: '400'}],
        'body-md': ['15px', {lineHeight: '22px', fontWeight: '400'}],
        'body-sm': ['13px', {lineHeight: '18px', fontWeight: '400'}],
        'label-lg': [
          '14px',
          {lineHeight: '18px', letterSpacing: '0.06em', fontWeight: '600'},
        ],
        'label-sticker': [
          '12px',
          {lineHeight: '14px', letterSpacing: '0.12em', fontWeight: '700'},
        ],
      },
      boxShadow: {
        card: '0 8px 24px -6px rgba(232, 92, 31, 0.12)',
        floating: '0 16px 36px -8px rgba(26, 20, 18, 0.16)',
        electric:
          '0 0 40px -10px rgba(232, 36, 108, 0.45), 0 0 80px -20px rgba(121, 40, 202, 0.35)',
        'electric-badge': '0 0 16px rgba(232, 36, 108, 0.4)',
        'aperitivo-cta': '0 8px 24px -6px rgba(232, 92, 31, 0.25)',
        input: '0 0 0 3px rgba(232, 92, 31, 0.2)',
      },
      backgroundImage: {
        'gradient-aperitivo-dusk':
          'linear-gradient(135deg, #E85C1F 0%, #E8246C 100%)',
        'gradient-electric-mezzanotte':
          'linear-gradient(135deg, #E8246C 0%, #7928CA 60%, #9333EA 100%)',
      },
      keyframes: {
        'float-fox': {
          '0%, 100%': {transform: 'translateY(0) rotate(0deg)'},
          '33%': {transform: 'translateY(-7px) rotate(1.5deg)'},
          '66%': {transform: 'translateY(-12px) rotate(-1.5deg)'},
        },
        'float-bubble': {
          '0%': {transform: 'translateY(110%) translateX(0) scale(0.6)', opacity: '0'},
          '20%': {opacity: '0.65'},
          '80%': {opacity: '0.55'},
          '100%': {
            transform: 'translateY(-120px) translateX(25px) scale(1.15)',
            opacity: '0',
          },
        },
        'pulse-glow': {
          '0%, 100%': {transform: 'scale(1)', opacity: '0.45', filter: 'blur(24px)'},
          '50%': {transform: 'scale(1.14)', opacity: '0.8', filter: 'blur(34px)'},
        },
        'spin-vinyl': {
          from: {transform: 'rotate(0deg)'},
          to: {transform: 'rotate(360deg)'},
        },
        'eq-bar': {
          '0%, 100%': {height: '4px'},
          '50%': {height: '18px'},
        },
        'marquee-scroll': {
          '0%': {transform: 'translateX(0%)'},
          '100%': {transform: 'translateX(-50%)'},
        },
      },
      animation: {
        'float-fox': 'float-fox 5.5s ease-in-out infinite',
        'float-bubble': 'float-bubble 6s infinite linear',
        'pulse-glow': 'pulse-glow 3.8s ease-in-out infinite',
        'spin-vinyl': 'spin-vinyl 4s linear infinite',
        'marquee-scroll': 'marquee-scroll 24s linear infinite',
      },
    },
  },
  plugins: [
    function ({addUtilities}) {
      addUtilities({
        '.shadow-elevation-1': {
          boxShadow: '0 8px 24px -6px rgba(232, 92, 31, 0.12)',
          border: '1px solid rgba(26, 20, 18, 0.08)',
        },
        '.shadow-elevation-2': {
          boxShadow: '0 16px 36px -8px rgba(26, 20, 18, 0.16)',
        },
        '.shadow-electric-night': {
          backdropFilter: 'blur(16px)',
          backgroundColor: 'rgba(18, 14, 13, 0.85)',
          boxShadow:
            '0 0 40px -10px rgba(232, 36, 108, 0.45), 0 0 80px -20px rgba(121, 40, 202, 0.35)',
        },
        '.bg-gradient-aperitivo-dusk': {
          backgroundImage: 'linear-gradient(135deg, #E85C1F 0%, #E8246C 100%)',
        },
        '.bg-gradient-electric-mezzanotte': {
          backgroundImage:
            'linear-gradient(135deg, #E8246C 0%, #7928CA 60%, #9333EA 100%)',
        },
      })
    },
  ],
}
