/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx", "./pages/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        red: "#FC4747",
        "dark-blue": {
          semi: "#161D2F",
          DEFAULT: "#10141E",
          grey: "#5A698F",
        }
      },
      container: {
        center: true
      },
      gridTemplateColumns: {
        main: "96px auto"
      },
      borderRadius: {
        navbar: "20px",
        thumbnail: "8px"
      },
      fontSize: {
        sm: "0.8125rem",
        md: "1rem",
        "h-xs": "1.125rem",
        "h-sm": "1.5rem",
        "h-md": "1.5rem",
        "h-lg": "2rem"
      },
      backgroundImage: {
        "search-icon": "url('/assets/icons/icon-search.svg')"
      },
      maxWidth: {
        recommended: "calc(100vw - 200px)"
      }
    },
  },
  plugins: [],
}
