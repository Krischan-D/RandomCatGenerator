// tailwind.config.js
module.exports = {
    content: [
      "./src/**/*.{html,js,jsx,ts,tsx}", // Adjust this to match your project structure
      "./index.html"
    ],
    theme: {
      extend: {
        fontFamily: {
          poppins: ['Poppins', 'sans-serif'], // Add Poppins font
        },
        colors: {
          primary: '#1c2529', // Example custom color
        },
      },
    },
    plugins: ["@tailwindcss/postcss"],
  };