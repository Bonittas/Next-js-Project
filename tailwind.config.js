/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'xs': {'max':'480px'},
        'sm': {'min': '640px'},
        'md': {'min': '1024px'},
        'lg': {'min': '1204px'},
        
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        custom: ['Custom Font', 'sans-serif'],
      },
      colors: {
        grayish: '#696969',
        darkGreen: '#03343b',
      },
      width: {
        '128': '32rem', // Custom value for width: 128
      },
      fontSize:{
        '14':'14px'
      }
    },
  },
  plugins: [],
}
