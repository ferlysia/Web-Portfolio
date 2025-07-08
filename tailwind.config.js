/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./main.js", // Add this if you use class toggling from JavaScript
  ],

  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        // Set 'Inter' as the default sans-serif font for body text
        sans: ['Inter', 'sans-serif'],
        
        // Keep your specific fonts for explicit use
        inter: ['Inter', 'sans-serif'],
        sora: ['Sora', 'sans-serif'], // Keep if you still want to use it
        space: ['Space Grotesk', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
      },
      colors: {
        'ferlysia-pink': '#f472b6',
        'ferlysia-dark': '#be185d',
      }
    },
    extend: {
      backgroundImage: {
        'light-gradient': 'linear-gradient(to bottom right, #fff, #fce4ec)',
        'dark-gradient': 'linear-gradient(to bottom right, #1a1a1a, #0f0f0f)',
      }
    }


  },
  plugins: [],
}