module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-50': '#f0f7ff',
        'blue-100': '#e6f0ff',
        'blue-200': '#cce0ff',
        'blue-500': '#0056b3',
        'blue-600': '#004499',
        'blue-700': '#004499',
        'green-500': '#22c55e',
        'purple-500': '#a855f7',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
