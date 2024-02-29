import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    theme: {
        fontFamily: {
            inter: 'var(--inter-font)',
            nevermind: 'var(--nevermind-font)'
        },
        extend: {
            colors: {
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
                title: {
                    DEFAULT: 'rgb(var(--title))'
                },
                typography: {
                    DEFAULT: 'rgb(var(--typography))'
                },
                alert: {
                    DEFAULT: 'rgb(var(--alert))'
                },
                danger: {
                    DEFAULT: 'rgb(var(--danger))'
                },

                border: 'rgb(var(--border))'
            }
        }
    },
    plugins: []
}
export default config
