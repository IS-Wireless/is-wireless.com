require('dotenv').config()
export default {
  env: {
    CONTEXT: process.env.CONTEXT,
    API_URL: process.env.API_URL,
    API_AFFIX: process.env.API_AFFIX,
    WP_USER: process.env.WP_USER,
    WP_PASSWORD: process.env.WP_PASSWORD,
  },

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'is-wireless',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue-awesome-swiper.js', mode: 'client' },
    { src: '~/plugins/vue-google-maps', mode: 'ssr' },
    { src: '~/plugins/wpapi-extend.js' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',

    '@nuxt/image',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    {
      src: '@nuxtjs/dotenv',
      options: {
        only: ['API_URL', 'API_AFFIX', 'CONTEXT'],
      },
    },
    {
      src: '@nuxtjs/axios',
      // options: {}
    },
    {
      src: 'wp-nuxt',
      options: {
        discover: true,
        endpoint: `${process.env.API_URL}${process.env.API_AFFIX}`,
        extensions: true,
        username: `${process.env.WP_USER}`,
        password: `${process.env.WP_PASSWORD}`,
        auth: true,
      },
    },
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
    transpile: [/^vue2-google-maps($|\/)/],
  },

  generate: {
    dir: 'public',
  },

  image: {
    domains: ['https://www.is-wireless.com/', 'https://e7.pngegg.com'],
  },
}
