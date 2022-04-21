require('dotenv').config()
import WPAPI from 'wpapi'

// http://wp-api.org/node-wpapi/collection-pagination/
function getAll(request) {
  return request.then((response) => {
    if (!response._paging || !response._paging.next) {
      return response
    }
    // Request the next page and return both responses as one collection
    return Promise.all([response, getAll(response._paging.next)]).then(
      (responses) => {
        return [].concat(...responses)
      }
    )
  })
}

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
    { src: '~/plugins/vue-google-maps', mode: 'server' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',

    '@nuxt/image',
    '@nuxtjs/pwa',
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
      options: {
        meta: {
          theme_color: '#00A2DF',
        },
        manifest: {
          lang: 'en',
        },
      },
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
        username: `${process.env.WP_USER}`,
        password: `${process.env.WP_PASSWORD}`,
        auth: true,
        sitemap: false,
      },
    },
    {
      src: '@nuxtjs/sitemap',
      options: {
        hostname: `${process.env.API_URL}`,
        defaults: {
          changefreq: 'daily',
          priority: 1,
          lastmodISO: new Date().toISOString(),
          lastmodrealtime: true,
          cacheTime: 0,
        },
        routes: async () => {
          const postsBasePath = '/'
          const wpapi = new WPAPI(this.options.wp)
          let posts = []
          posts = await getAll(wpapi.posts(100))
          console.log(posts)
          let pages = posts.map((item) => {
            return {
              url: `${postsBasePath}${item.slug}`,
              lastmod: new Date(item.modified).toISOString(),
            }
          })
          pages = pages.concat(
            this.options.router.routes.map((route) => route.path)
          )
          if (this.options.sitemap && this.options.sitemap.additionalPages) {
            pages = [...pages, this.options.sitemap.additionalPages]
          }
          return pages
        },
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
  },

  generate: {
    dir: 'public',
  },

  image: {
    domains: ['https://www.is-wireless.com/', 'https://e7.pngegg.com'],
  },
}
