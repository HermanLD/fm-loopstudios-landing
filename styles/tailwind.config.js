module.exports = {
  content: ["_site/**/*.html"],
  safelist: [],
  theme: {
    extend: {
      colors: {
        grey: "hsl(0, 0%, 55%)",
        "dark-grey": "hsl(0, 0%, 41%)",
      },
      fontFamily: {
        sans: ["Josefin Sans", "sans-serif"],
        alata: ["Alata", "sans-serif"],
      },
      backgroundImage: {
        "hero-mobile": "url('/assets/images/mobile/image-hero.jpg')",
        "hero-desktop": "url('/assets/images/desktop/image-hero.jpg')",
      },
      gridTemplateColumns: {
        projects: "repeat(auto-fit, minmax(156px, 1fr))",
      },
      gridTemplateRows: {
        projects: "auto 1fr auto",
      },
    },
  },
  plugins: [],
};
