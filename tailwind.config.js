/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#7377DF",

          "secondary": "#B5AFEE",

          "accent": "#ccd9ff",

          "neutral": "#181821",

          "base-100": "#FDFCFD",

          "info": "#AFCAE4",

          "success": "#31D3AB",

          "warning": "#FCE15A",

          "error": "#FB4661",
        },
      },
      "night"
    ],
  },
  plugins: [require("daisyui")],
}

