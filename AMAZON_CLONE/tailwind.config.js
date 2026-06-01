export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        amazon: {
          darkNav: '#131921',      // Dark navbar
          secNav: '#232f3e',       // Secondary navbar
          orange: '#febd69',       // Search button
          lightGray: '#f5f5f5',    // Page background
          darkGray: '#37475a',     // Hover states
          text: '#0f1419',         // Dark text
        },
      },
    },
  },
  plugins: [],
}
