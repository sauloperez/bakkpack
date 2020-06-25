module.exports = {
  purge: {
    content: ['./src/**/*.html'],
    options: {
      whitelist: ['line-through'],
    }
  },
  theme: {
    fontFamily: {
      sans: ['sans-serif'],
    },
    extend: {
      colors: {
        black: {
          default: '#121212',
        },
      },
    },
  },
  variants: {},
  plugins: [],
}
