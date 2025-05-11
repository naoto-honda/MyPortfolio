/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // JSX/TSXを使っているのでこのように設定
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
