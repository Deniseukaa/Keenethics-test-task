/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        available: '#6FCF97',
        busy: '#F2994A',
        unavailable: '#EB5757',
        mainGrayBg: '#696969',
        inputsBg: '#E8E8E8',
        special: '#E8E8E8',
        inputsPlaceholder: '#717171',
        inputsOutline: '#696969',
        cardTextFont: '#333333',
        cardIdFont: '#717171',
      },
      fontFamily: {
        sairaStencilOne: ['Saira Stencil One', 'sans-serif'],
        saira: ['Saira', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
