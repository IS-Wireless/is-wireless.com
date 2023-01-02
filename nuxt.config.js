require('dotenv').config()
const pkg = require('./package.json')

let appVersionCacheBuster =
  process.env.CONTEXT === 'production'
    ? process.env.CF_PAGES_COMMIT_SHA
    : pkg.version + '_' + Date.now()

const HOSTNAME = process.env.CF_PAGES_URL
  ? process.env.CF_PAGES_URL
  : 'http://localhost:3000/'

export default {
  env: {
    HOST: HOSTNAME,
    COMMIT: process.env.CF_PAGES_COMMIT_SHA,
    CONTEXT: process.env.CONTEXT,
    API_URL: process.env.API_URL,
    API_AFFIX: process.env.API_AFFIX,
  },
  publicRuntimeConfig: {
    baseURL: HOSTNAME,
    API_URL: process.env.API_URL,
    GMAP_KEY: process.env.API_GMAPS,
    version: appVersionCacheBuster,
    algolia: {
      applicationId: 'VR74LN6Q10',
      apiKey: 'a80619850095c92c2fc1696244c05f41',
    },
  },
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'IS-Wireless #5GMadeTogether',
    description: '4G and 5G Mobile Networks of the Future',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: '4G and 5G Mobile Networks of the Future',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico?v=' + appVersionCacheBuster,
      },
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
        mergeCachingHeaders: true,
        headers: {
          '/*': [
            'Access-Control-Allow-Origin: *',
            `X-Build: ${pkg.version}`,
            `X-Robots-Tag: ${
              process.env.CONTEXT !== 'production' ? 'noindex' : 'index'
            }`,
          ],
          '/favicon.ico': ['Cache-Control: public, max-age=86400'],
        },
        // redirects: [
        //   {
        //     from: 'https://is-wireless.com',
        //     to: 'https://www.is-wireless.com',
        //   },
        // ],
      },
    ],
    // {
    //   src: 'nuxt-magpie',
    //   options: {
    //     concurrency: 20,
    //     baseUrl: `${process.env.API_URL}/wp-content`,
    //     path: '/files',
    //     extensions: ['jpg', 'jpeg', 'gif', 'png', 'webp', 'svg', 'xml'],
    //   },
    // },
  ],

  plugins: ['~/plugins/filterData.js'],
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'nuxt-algolia',
    {
      src: '@nuxtjs/robots',
      options: {
        robots: {
          UserAgent: '*',
        },
      },
    },
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    {
      src: '@nuxtjs/dotenv',
      options: {
        only: ['API_URL', 'API_AFFIX', 'CONTEXT'],
      },
    },
    {
      src: 'wp-nuxt',
    },
    // 'nuxt-speedkit',
  ],
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    standalone: true,
    postcss: {
      plugins: {
        'postcss-import': {},
        'tailwindcss/nesting': 'postcss-nesting',
        tailwindcss: {},
        autoprefixer: {},
      },
    },
    transpile: ['vue-share-it', /^vue2-google-maps($|\/)/],
    extend(config) {
      config.externals = [
        {
          encoding: 'encoding',
        },
      ]

      config.module.rules.push({
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto',
      })
    },
  },
  render: {
    asyncScripts: false,
    resourceHints: false,
    //   // injectScripts: false, #need optimisation
    //   crossorigin: 'anonymous',
    //   http2: {
    //     push: true,
    //     pushAssets: (req, res, publicPath, preloadFiles) =>
    //       preloadFiles
    //         .filter((f) => f.asType === 'script')
    //         .map(
    //           (f) =>
    //             `<${publicPath}${f.file}>; rel=preload; as=${f.asType}; crossorigin`
    //         ),
    //   },
    //   compressor: { threshold: 9, level: 9 },
  },
  generate: {
    dir: 'public',
    crawler: true,
    fallback: '404.html',
  },

  image: {
    screens: {
      default: 320,
      // xxs: 480,
      // xs: 576,
      // sm: 768,
      md: 996,
      lg: 1200,
      // xl: 1367,
      // xxl: 1600,
      '4k': 1921,
    },
    domains: [
      'is-wireless.com',
      'www.is-wireless.com',
      'api.is-wireless.com',
      'img.youtube.com',
      process.env.API_URL,
    ],
    alias: {
      app: 'api.is-wireless.com',
      youtube: 'https://img.youtube.com',
      vimeo: 'https://i.vimeocdn.com',
    },
  },
  pwa: {
    meta: {
      name: 'IS-Wireless',
      theme_color: '#00A2DF',
      ogTitle: false,
      ogDescription: false,
      ogType: false,
      ogSiteName: 'IS-Wireless',
      ogHost: process.env.CF_PAGES_URL,
      ogUrl: false,
      twitterCard: 'summary',
      twitterSite: '@is_wireless',
      twitterCreator: 'Sławomir Pietrzyk',
    },
    manifest: {
      lang: 'en',
      theme_color: '#00A2DF',
      id: '/?standalone=true',
      title: 'IS-Wireless',
      name: 'IS-Wireless',
      shortName: 'IS-Wireless',
      orientation: 'any',
      description:
        'IS-Wireless is an advanced wireless communications company. We are developing protocols, simulators and IP algorithms. We also deliver 4G and 5G courses.',
    },
    workbox: {
      cleanupOutdatedCaches: true,
      //offlineStrategy: 'StaleWhileRevalidate',
      cacheOptions: {
        cacheId: appVersionCacheBuster,
        revision: appVersionCacheBuster,
      },
      offlineStrategy: 'NetworkOnly',
      cacheAssets: false,
    },
    icon: {
      fileName: 'symbol.png',
    },
  },
  wp: {
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
  layoutTransition: {
    name: 'page',
    mode: 'out-in',
  },

  speedkit: {
    detection: {
      performance: true,
      browserSupport: true,
    },

    performanceMetrics: {
      device: {
        hardwareConcurrency: { min: 2, max: 48 },
        deviceMemory: { min: 2 },
      },
      timing: {
        fcp: 800,
        dcl: 1200,
      },
    },

    fonts: [],
    // fonts: [
    //   {//@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');
    //     family: 'Lato',
    //     locals: ['Lato'],
    //     fallback: ['Arial', 'sans-serif'],
    //     variances: [
    //       {
    //         style: 'normal',
    //         weight: 400,
    //         sources: [
    //           { src: '@/assets/fonts/font-a-regular.woff', type: 'woff' },
    //           { src: '@/assets/fonts/font-a-regular.woff2', type: 'woff2' },
    //         ],
    //       },
    //       {
    //         style: 'italic',
    //         weight: 400,
    //         sources: [
    //           { src: '@/assets/fonts/font-a-regularItalic.woff', type: 'woff' },
    //           {
    //             src: '@/assets/fonts/font-a-regularItalic.woff2',
    //             type: 'woff2',
    //           },
    //         ],
    //       },
    //       {
    //         style: 'normal',
    //         weight: 700,
    //         sources: [
    //           { src: '@/assets/fonts/font-a-700.woff', type: 'woff' },
    //           { src: '@/assets/fonts/font-a-700.woff2', type: 'woff2' },
    //         ],
    //       },
    //     ],
    //   },
    // ],

    targetFormats: ['webp', 'avif', 'jpg|jpeg|png|gif'],

    componentAutoImport: false,
    componentPrefix: undefined,

    /**
     * IntersectionObserver rootMargin for Compoennts and Assets
     */
    lazyOffset: {
      component: '0%',
      asset: '0%',
    },

    loader: {
      dataUri: null,
      size: '100px',
      backgroundColor: 'grey',
    },
  },
}
