<template>
  <div>
    <LazyHydrate when-idle>
      <Navbar
        :main-menu="topMenuData"
        :side-menu="sideMenuData"
        :socials="socialMenuData"
      />
    </LazyHydrate>
    <Nuxt />
    <LazyHydrate when-idle>
      <Footer
        :image-url="footerData.image"
        :copyright="footerData.copyright"
        :menu="footerMenuData"
        :socials="socialMenuData"
        :languages="footerData.language"
      />
    </LazyHydrate>
  </div>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration'
import Navbar from '@/components/navbar.vue'
import Footer from '@/components/footer.vue'

export default {
  components: {
    Navbar,
    Footer,
    LazyHydrate,
  },
  computed: {
    topMenuData() {
      let topMenu = []
      let data = this.$store.getters['general/getData']
      let topMenuID = data['menu_locations']['main_navigation']['ID']

      if (data['menu'][topMenuID]['items']) {
        topMenu = data['menu'][topMenuID]['items']
      }
      return topMenu
    },

    sideMenuData() {
      let data = this.$store.getters['general/getData']
      let sideMenuID = data['menu_locations']['sidebar']['ID']

      return data['menu'][sideMenuID]['items']
    },

    socialMenuData() {
      let data = this.$store.getters['general/getData']
      let socialMenuID = data['menu_locations']['social-media']['ID']

      return data['menu'][socialMenuID]['items']
    },

    footerMenuData() {
      let data = this.$store.getters['general/getData']
      let footerMenuLeftID = data['menu_locations']['footer-menu-left']['ID']
      let footerMenuRightID = data['menu_locations']['footer-menu-right']['ID']

      return {
        menu_left: data['menu'][footerMenuLeftID]['items'],
        menu_right: data['menu'][footerMenuRightID]['items'],
      }
    },

    footerRightMenuData() {
      let data = this.$store.getters['general/getData']
      let footerMenuID = data['menu_locations']['footer-menu-right']['ID']

      return data['menu'][footerMenuID]['items']
    },

    footerData() {
      return {
        image:
          'https://www.is-wireless.com/wp-content/uploads/2016/04/logo-500px.png',
        copyright: '©2022 IS-Wireless and/or its affiliated companies.',
        menu: {
          menu_left: {
            0: {
              title: 'About us',
              url: '/',
            },
            1: {
              title: 'Careers',
              url: '/',
            },
            2: {
              title: 'Contact',
              url: '/',
            },
          },
          menu_right: {
            0: {
              title: 'Privacy Policy',
              url: '/',
            },
          },
        },
        socials: {
          twitter: {
            url: 'https://twitter.com/is_wireless',
          },
          linkedin: {
            url: 'https://linkedin.com/company/is-wireless',
          },
          youtube: {
            url: null,
          },
        },
        language: ['English'],
      }
    },
  },
}
</script>

<style>
html {
  font-family: 'Lato', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  scroll-behavior: smooth;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.gcsc-find-more-on-google-text:last-child {
  display: none;
}
</style>
