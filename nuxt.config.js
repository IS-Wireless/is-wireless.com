require('dotenv').config()
const pkg = require('./package.json')
export default {
  env: {
    CONTEXT: process.env.CONTEXT,
    API_URL: process.env.API_URL,
    API_AFFIX: process.env.API_AFFIX,
  },

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'IS-Wireless',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Mobile Networks of the Future',
      },
      {
        src: 'https://cse.google.com/cse.js?cx=4a61290bc618cbfe1',
        async: true,
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: true,
      },
      {
        rel: 'preconnect',
        href: 'https://is-wireless.com',
        crossorigin: true,
      },
      {
        rel: 'preconnect',
        href: 'https://cdn.jsdelivr.net',
        crossorigin: true,
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/main.css', '@/assets/animation.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue-awesome-swiper.js', mode: 'client' },
    { src: '~/plugins/vue-google-maps', mode: 'client' },
    { src: '~/plugins/vue-composition-api', mode: 'server' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxt/image',
    '@nuxtjs/pwa',
    [
      '@aceforth/nuxt-netlify',
      {
        mergeSecurityHeaders: true,
        headers: {
          '/*': [
            'Access-Control-Allow-Origin: *',
            `X-Build: ${pkg.version}`,
            `X-Robots-Tag: ${
              (process.env.CF_PAGES_URL &&
                process.env.CF_PAGES_URL.includes('pages.dev')) ||
              process.env.CONTEXT !== 'production'
                ? 'noindex'
                : 'index'
            }`,
          ],
          '/favicon.ico': ['Cache-Control: public, max-age=86400'],
        },
      },
    ],
    [
      'nuxt-netlify-http2-server-push',
      {
        // Specify relative path to the dist directory and its content type
        resources: [
          { path: '**/*.js', as: 'script' },
          { path: '**/*.css', as: 'style' },
        ],
      },
    ],
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    {
      src: '@nuxtjs/robots',
      options: {
        robots: {
          UserAgent: '*',
        },
      },
    },
    // https://go.nuxtjs.dev/pwa
    {
      src: '@nuxtjs/pwa',
      options: {},
    },
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
        customRoutes: [
          {
            extension: 'wp-api-menus/v2',
            route: '/menus/(?P<id>\\d+)',
            name: 'menuIdSelect',
          },
        ],
      },
    },
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
    transpile: [/^vue2-google-maps($|\/)/],
    extend(config) {
      config.module.rules.push({
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto',
      })
    },
  },
  render: {
    asyncScripts: true,
    resourceHints: true,
    http2: {
      push: true,
      pushAssets: (req, res, publicPath, preloadFiles) =>
        preloadFiles
          .filter((f) => f.asType === 'script' && f.file === 'runtime.js')
          .map((f) => `<${publicPath}${f.file}>; rel=preload; as=${f.asType}`),
    },
    compressor: { threshold: 9, level: 9 },
  },
  generate: {
    dir: 'public',
  },
  wp: {
    endpoint: `${process.env.API_URL}${process.env.API_AFFIX}`,
    sitemap: false,
  },
  image: {
    domains: ['https://www.is-wireless.com/'],
  },
  pwa: {
    meta: {
      theme_color: '#00A2DF',
    },
    manifest: {
      lang: 'en',
      theme_color: '#00A2DF',
    },
  },
  router: {
    trailingSlash: true,
  },
}
