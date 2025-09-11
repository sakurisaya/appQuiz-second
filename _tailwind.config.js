/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        'fuwafuwa': {
          "0%": { transform: "translate(0, 0) rotate(-7deg)" },
          "50%": { transform: "translate(0, -7px) rotate(0deg)" },
          "100%": { transform: "translate(0, 0) rotate(7deg)" }
        }
      },
      animation: {
        'fuwafuwa': 'fuwafuwa 3s ease-in-out infinite',
      }


    }
  },
  plugins: [],
};
