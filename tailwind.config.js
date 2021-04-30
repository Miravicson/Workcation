module.exports = {
  purge: {
    content: ["./src/**/*.jsx", "./index.html"],
    // enabled: true,
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: { headline: ["Poppins", "sans-serif"] },
      colors: {
        // brand: "#0fa9e6",
        // "brand-light": "#3fbaeb",
        // "brand-dark": "#0c87b8"
        brand: {
          DEFAULT: "#0fa9e6",
          light: "#3fbaeb",
          dark: "#0c87b8",
        },
      },
      spacing: {
        100: '40rem'
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
      fontSize: ["hover"],
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
