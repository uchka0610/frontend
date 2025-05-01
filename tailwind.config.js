/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      
      keyframes: {

        moveDown: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(20px)' }, // you can adjust this
        },
      },
      animation: {
        moveDown: 'moveDown 5s ease-in-out infinite alternate',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      scale: {
        175: '1.75',
        200: '2',
        250: '2.5',
        300: '3',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'], // 👈 Add this line
      },
    },
  },
  plugins: [],
};
