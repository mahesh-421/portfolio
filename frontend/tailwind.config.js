/** @type {import('tailwindcss').Config} */

import defaultTheme from 'tailwindcss/defaultTheme'
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
      screens: {
        'xxs': '360px',
        'xs': '475px',
        ...defaultTheme.screens,
      },
    extend: {},
  },
  plugins: [],
};
