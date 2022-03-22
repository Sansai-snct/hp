module.exports = {
  content: ['./src/pages/*.{tsx,js}', './src/components/*.{tsx,js}'],
  darkmode: false,
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto'],
        noto: ['Noto Sans JP'],
      },
      backgroundImage: (theme) => ({
        'w-img': "url('../src/images/bg-w.webp')",
        'h-img': "url('../src/images/bg-h.webp')",
      }),
    },
  },
  plugins: [],
};
