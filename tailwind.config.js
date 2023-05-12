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
        
"primary": "#7d80c7",
        
"secondary": "#b6b0f2",
        
"accent": "#ccd9ff",
        
"neutral": "#181821",
        
"base-100": "#FDFCFD",
        
"info": "#AFCAE4",
        
"success": "#31D3AB",
        
"warning": "#FCE15A",
        
"error": "#FB4661",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

