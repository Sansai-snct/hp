module.exports = {
  content: ['./src/pages/*.{tsx,js}', './src/components/*.{tsx,js}'],
  darkmode: false,
  theme: {
    extend: {
      fontFamily: {
        shippori: ['Shippori Antique B1'],
      },
      backgroundImage: (theme) => ({
        'w-img': "url('../src/images/bg-w.jpg')",
        'h-img': "url('../src/images/bg-h.jpg')",
      }),
    },
  },
  plugins: [],
};
