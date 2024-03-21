import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    fontFamily: {
      inter: ['var(--font-inter)'],
      nevermind: ['var(--font-nevermind)']
    },
    container: {
      center: true,
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1240px',
        '2xl': '1440px'
      }
    },
    extend: {
      colors: {
        border: 'rgb(var(--border))',
        background: {
          DEFAULT: 'rgb(var(--background))',
          contrast: 'rgb(var(--background-contrast))'
        },
        primary: {
          DEFAULT: 'rgb(var(--primary))'
        },
        neutral: {
          DEFAULT: 'rgb(var(--neutral))'
        },
        typography: {
          DEFAULT: 'rgb(var(--typography))'
        },
        danger: {
          DEFAULT: 'rgb(var(--danger))'
        }
      }
    }
  },
  plugins: []
}
export default config
