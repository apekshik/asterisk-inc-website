import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      'dark-purple': '#401f29ff',
      'chocolate-cosmos': '#4d222cff',
      'rose-ebony': '#704a4aff',
      'dun': '#d9c1a2ff',
      'tan': '#d9b282ff',
      'lion': '#bd9879ff',
      'beaver': '#9d7665ff',
    },
  },
  plugins: [],
}
export default config
