import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

// Rotate X utilities
const rotateX = plugin(({ addUtilities }) => {
  addUtilities({
    '.rotate-x-25': {
      transform: 'rotateX(25deg)',
    },
    '.rotate-x-50': {
      transform: 'rotateX(50deg)',
    },
    '.rotate-x-75': {
      transform: 'rotateX(75deg)',
    },
    '.rotate-x-100': {
      transform: 'rotateX(100deg)',
    },
  })
})

const config: Config = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        // BLACK
        // white: 'hsl(var(--white))',
        // black: 'hsl(var(--black))',

        // RED
        red50: 'hsl(var(--red50))',
        red100: 'hsl(var(--red100))',
        red300: 'hsl(var(--red300))',
        red500: 'hsl(var(--red500))',
        red700: 'hsl(var(--red700))',
        red900: 'hsl(var(--red900))',

        // GREEN
        green50: 'hsl(var(--green50))',
        green100: 'hsl(var(--green100))',
        green200: 'hsl(var(--green200))',
        green300: 'hsl(var(--green300))',
        green400: 'hsl(var(--green400))',
        green500: 'hsl(var(--green500))',
        green600: 'hsl(var(--green600))',
        green700: 'hsl(var(--green700))',
        green800: 'hsl(var(--green800))',
        green900: 'hsl(var(--green900))',

        // YELLOW
        yellow50: 'hsl(var(--yellow50))',
        yellow100: 'hsl(var(--yellow100))',
        yellow200: 'hsl(var(--yellow200))',
        yellow300: 'hsl(var(--yellow300))',
        yellow400: 'hsl(var(--yellow400))',
        yellow500: 'hsl(var(--yellow500))',
        yellow600: 'hsl(var(--yellow600))',
        yellow700: 'hsl(var(--yellow700))',
        yellow800: 'hsl(var(--yellow800))',
        yellow900: 'hsl(var(--yellow900))',

        // BLUE
        blue50: 'hsl(var(--blue50))',
        blue100: 'hsl(var(--blue100))',
        blue200: 'hsl(var(--blue200))',
        blue300: 'hsl(var(--blue300))',
        blue400: 'hsl(var(--blue400))',
        blue500: 'hsl(var(--blue500))',
        blue600: 'hsl(var(--blue600))',
        blue700: 'hsl(var(--blue700))',
        blue800: 'hsl(var(--blue800))',
        blue900: 'hsl(var(--blue900))',

        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate'), rotateX],
} satisfies Config

export default config
