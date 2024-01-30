/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // screens: {
    //   tablet: '960px',
    //   desktop: '1248px',
    // },
    // colors: {
    //   light: '#FFFFFF',
    //   dark: '#020617',
    //   head: '#1d4ed8',
    //   'head-dark': '#e2e8f0',
    //   body: '#64748b',
    //   primary: '#1d4ed8',
    //   secondary: '#1d4ed8',
    // },
    extend: {},
  },
  plugins: [require("daisyui")],

};

