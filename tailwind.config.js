module.exports = {
  content: ['./src/pages/*.{tsx,js}', './src/components/*.{tsx,js}'],
  darkmode: false,
  theme: {
    extend: {
      fontFamily: {
        shippori: ['Shippori Antique B1'],
        roboto: ['Roboto'],
      },
      backgroundImage: (theme) => ({
        'w-img': "url('../src/images/bg-w.jpg')",
        'h-img': "url('../src/images/bg-h.jpg')",
        'twitter-img': "url('../src/images/twitter-99.png')",
      }),
    },
  },
  plugins: [],
};
