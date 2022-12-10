/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      'marine-blue': '#02295a',
      'purplish-blue': '#473dff',
      'pastel-blue': '#adbeff',
      'light-blue': '#bfe2fd',
      'strawberry-red': '#ed3548',
      'cool-gray': '#9699ab',
      'light-gray': '#d6d9e6',
      magnolia: '#f0f6ff',
      alabaster: '#fafbff',
      white: '#ffffff',
    },
    fontFamily: {
      ubuntu: ['Ubuntu'],
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      bold: 700,
    },
    extend: {
      backgroundImage: {
        'sidebar-mobile': "url('src/assets/images/bg-sidebar-mobile.svg')",
        'sidebar-desktop': "url('src/assets/images/bg-sidebar-desktop.svg')",
      },
    },
  },
  plugins: [],
}
