import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    theme: {
        fontFamily: {
            inter: 'var(--inter-font)'
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
                }
            }
        }
    },
    plugins: []
}
export default config
