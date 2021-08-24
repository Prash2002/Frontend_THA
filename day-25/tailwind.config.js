module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "hero-img":
          "url('https://images.unsplash.com/photo-1531995811006-35cb42e1a022?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
