/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./features/**/*.{js,ts,jsx,tsx}",

    "./widgets/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'logo-mobile': "url('@/public/img/logo-mobile.png')"
      },
      colors: {
        "bg-radial-center":"rgba(255, 48, 77, 1)",
        "bg-radial-out":"rgba(255, 48, 77, 0)"
      },
      blur: {
        "extra":"90px"
      }
    },
  },
  plugins: [],
}