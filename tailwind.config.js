module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    screens: {
      phone: '320px',
      'phone-wide': '480px',
      phablet: '560px',
      'tablet-small': '640px',
      tablet: '768px',
      'tablet-wide': '1024px',
      desktop: '1248px',
      'desktop-wide': '1440px',
      'full-hd': '1680px',
    },
    extend: {
      colors: {
        blue: {
          main: '#00A2E0',
          'main-hover': '#027FAE',
          dark: '#2173BA',
        },
        gray: {
          light: '#F4F6F7',
          default: '#D4D9DF',
          dark: '#616A7D',
          darkest: '#111111',
        },
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
