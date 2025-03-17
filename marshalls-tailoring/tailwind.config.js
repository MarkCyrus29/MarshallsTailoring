export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/App.css",
    "./src/**/loadingscreen.css",
    "./src/**/navbar.css",
    "./src/**/pages.css",
    "./src/**/home.css",
    "./src/**/suits.css",
    "./src/**/contacts.css",
    "./src/**/alert.css", // Include your existing CSS
  ],
  theme: {
    extend: {
      colors: {
        "marshalls-blue": "#004aad",
        "marshalls-white": "rgb(220, 220, 220)",
        "marshalls-black": "#151515",
        "custom-blue": "#235BB0",
      },
      screens: {
        xs: "360px",
      },
    },
  },
  plugins: [],
};
