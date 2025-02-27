import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        lg: 'rem',
        xl: '1rem',
        '2xl': '1.5rem',
      },
      screens: {
        sm: "100%",
        md: "100%",
        lg: "1024px",
        xl: "1232px",
      },
    },
    fontFamily: {
      'univers': ['"Univers LT Std"', 'system-ui', 'sans-serif'],
      'laila': ['"Laila"', 'system-ui', 'sans-serif']
    },
    fontSize: {
      'xs': '0.725rem', //10px
      'sm': '0.8rem', //12px
      'base': '1rem', //16px
      'l': '1.125rem', // 18px
      'xl': '1.25rem', //20px
      'xxl': '1.5rem', //24px
      'xxxl': '1.75rem', // 28px
      '2xl': '1.875rem', // 30px
      '3xl': '2rem', // 32px
      '4xl': '2.25rem', // 36px
      '5xl': '2.5rem', // 40px
      '6xl': '3.125rem', // 50px
    },
    extend: {
      colors: {
        'primary': '#f7265d',
        'color-secondary': '#FEEBF1',
        'color-tertiary': '#ffbe21',
        'red': '#cd0000',
        'red-100': '#a70000',
        'red-wine': '#31020E',
        'gray': '#ccc',
        'shadow-gray': '#f8f8f8',
        'shadow-dark-gray': '#e7e7e7'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
}

export default config
