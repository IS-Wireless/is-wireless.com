import { defineNuxtConfig } from "nuxt/config";
import path from "path";

require("dotenv").config();
const pkg = require("./package.json");
var WPAPI = require("wpapi");

let appVersionCacheBuster =
  process.env.CONTEXT === "production"
    ? process.env.CF_PAGES_COMMIT_SHA
    : pkg.version + "_" + Date.now();

const HOSTNAME = process.env.CF_PAGES_URL
  ? process.env.CF_PAGES_URL
  : "http://localhost:3000/";

export default defineNuxtConfig({
  env: {
    HOST: HOSTNAME,
    COMMIT: process.env.CF_PAGES_COMMIT_SHA,
    CONTEXT: process.env.CONTEXT,
    API_URL: process.env.API_URL,
    API_AFFIX: process.env.API_AFFIX,
  },
  runtimeConfig: {
    public: {
      baseURL: HOSTNAME,
      DOMAIN_URL: process.env.DOMAIN,
      API_URL: process.env.API_URL,
      API_AFFIX: process.env.API_AFFIX,
      GMAP_KEY: process.env.API_GMAPS,
      version: appVersionCacheBuster,
    },
    ipx: {
      domains: [
        "is-wireless.com",
        "www.is-wireless.com",
        "api.is-wireless.com",
        "img.youtube.com",
        "i.ytimg.com",
        process.env.API_URL,
      ],
    },
  },
  app: {
    // layoutTransition: {
    //   name: "page",
    //   mode: "out-in",
    // },
    // pageTransition: {
    //   name: "page",
    //   mode: "out-in",
    // },
    head: {
      title: "IS-Wireless #5GMadeTogether",
      description: "4G and 5G Mobile Networks of the Future",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "theme-color", content: "#00A2DF" },
        {
          hid: "description",
          name: "description",
          content: "4G and 5G Mobile Networks of the Future",
        },
      ],
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon.ico?v=" + appVersionCacheBuster,
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: true,
        },
        {
          rel: "preconnect",
          href: "https://is-wireless.com",
          crossorigin: true,
        },
        {
          rel: "preconnect",
          href: "https://cdn.jsdelivr.net",
          crossorigin: true,
        },
      ],
    },
  },

  components: {
    global: true,
    dirs: ["~/components"],
  },

  css: ["@/assets/main.css", "@/assets/animation.css"],

  modules: [
    "@pinia/nuxt",
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "@nuxtjs/algolia",
    "nuxt-simple-sitemap",
    "@vueuse/nuxt",
    '@nuxt/devtools',
    // '@vite-pwa/nuxt',
    [
      "nuxt-simple-robots",
      {
        UserAgent: "*",
        disallow: "",
        sitemap: "https://is-wireless.com/sitemap.xml",
      },
    ],
  ],
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
      "4k": 1921,
    },
    domains: [
      "is-wireless.com",
      "www.is-wireless.com",
      "api.is-wireless.com",
      "img.youtube.com",
      "i.ytimg.com",
      process.env.API_URL,
    ],
    alias: {
      app: "api.is-wireless.com",
      youtube: "https://img.youtube.com",
      vimeo: "https://i.vimeocdn.com",
    },
    format:['webp'],
    quality: 70
  },
  // pwa: {
  //   registerType: 'autoUpdate',
  //   manifest: {
  //     lang: "en",
  //     theme_color: "#00A2DF",
  //     id: "/?standalone=true",
  //     start_url: '/',
  //     title: "IS-Wireless",
  //     name: "IS-Wireless",
  //     shortName: "IS-Wireless",
  //     orientation: "any",
  //     description: "IS-Wireless is an advanced wireless communications company. We are developing protocols, simulators and IP algorithms. We also deliver 4G and 5G courses.",
  //     icons: [{
  //       src: "symbol.png",
  //       sizes: '512x512',
  //       type: 'image/png',
  //       purpose: "any maskable"
  //     }]
  //   },
  // },
  wp: {
    discover: true,
    endpoint: `${process.env.API_URL}${process.env.API_AFFIX}`,
    extensions: true,
    customRoutes: [
      {
        extension: "wp-api-menus/v2",
        route: "/menus/(?P<id>\\d+)",
        name: "menuIdSelect",
      },
    ],
    sitemap: false,
  },
  // payloadExtraction: false,
  experimental: {
    payloadExtraction: false,
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

    targetFormats: ["webp", "avif", "jpg|jpeg|png|gif"],

    componentAutoImport: false,
    componentPrefix: undefined,

    lazyOffset: {
      component: "0%",
      asset: "0%",
    },

    loader: {
      dataUri: null,
      size: "100px",
      backgroundColor: "grey",
    },
  },

  sitemap: {
    siteUrl: "https://www.is-wireless.com",
    exclude: ["/news/p/*"],
  },
  build: {
    standalone: true,
    postcss: {
      plugins: {
        "postcss-import": {},
        "tailwindcss/nesting": "postcss-nesting",
        tailwindcss: {},
        autoprefixer: {},
      },
    },
    transpile: [/^swiper($|\/)/, "vue-share-it", "lodash"],
    extend(config) {
      config.externals = [
        {
          encoding: "encoding",
        },
      ];

      config.module.rules.push({
        test: /\.mjs$/,
        include: /node_modules/,
        type: "javascript/auto",
      });
    },
  },
  render: {
    asyncScripts: false,
    resourceHints: false,
  },
  generate: {
    dir: "public",
    crawler: true,
    fallback: "404.html",
    interval: 1000,
  },
});
