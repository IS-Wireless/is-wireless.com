<template>
  <div class="h-full flex flex-col">
    <Navbar
      :critical="true"
      :main-menu="topMenuData"
      :side-menu="sideMenuData"
      :socials="socialMenuData"
    />

    <Nuxt />

    <ScrollToTopBtn />
    <!-- <PopupCookies /> -->
    <Footer
      :image-url="footerData.image"
      :copyright="footerData.copyright"
      :menu="{
        ...footerMenuData,
        // menu_right_bottom: [
        //   { title: 'test', url: '/privacy-policy' },
        //   { title: 'test2', url: '/privacy-policy' },
        // ],
      }"
      :socials="socialMenuData"
      :languages="footerData.language"
    />
  </div>
</template>

<script>
import NavbarComponent from '@/components/navbar.vue'
import CScrollToTopBtn from '@/components/scroll-to-top.vue'
// import PopupCookies from '@/components/popup-cookies.vue'
import CFooter from '@/components/footer.vue'

export default {
  name: 'Default',
  components: {
    Navbar: NavbarComponent,
    ScrollToTopBtn: CScrollToTopBtn,
    Footer: CFooter,
    // PopupCookies,
  },
  computed: {
    topMenuData() {
      let menu = []
      let data = this.$store.getters['general/getData']
      if (data['menu_locations'] && data['menu_locations']['main_navigation']) {
        let topMenuID = data['menu_locations']['main_navigation']['ID']

        if (data['menu'][topMenuID]['items']) {
          menu = data['menu'][topMenuID]['items']
        }
      }
      return menu
    },

    sideMenuData() {
      let menu = []
      let data = this.$store.getters['general/getData']

      if (data['menu_locations'] && data['menu_locations']['sidebar']) {
        let sideMenuID = data['menu_locations']['sidebar']['ID']
        menu = data['menu'][sideMenuID]['items']
      }

      return menu
    },

    socialMenuData() {
      let menu = []
      let data = this.$store.getters['general/getData']

      if (data['menu_locations'] && data['menu_locations']['social-media']) {
        let socialMenuID = data['menu_locations']['social-media']['ID']
        menu = data['menu'][socialMenuID]['items']
      }

      return menu
    },

    footerMenuData() {
      let data = this.$store.getters['general/getData']
      let menu_left = []
      let menu_right = []

      if (
        data['menu_locations'] &&
        data['menu_locations']['footer-menu-left']
      ) {
        let menuIDLeft = data['menu_locations']['footer-menu-left']['ID']
        menu_left = data['menu'][menuIDLeft]['items']
      }

      if (
        data['menu_locations'] &&
        data['menu_locations']['footer-menu-right']
      ) {
        let menuIDRight = data['menu_locations']['footer-menu-right']['ID']
        menu_right = data['menu'][menuIDRight]['items']
      }

      return {
        menu_left: menu_left,
        menu_right: menu_right,
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
        copyright: `©${new Date().getFullYear()} IS-Wireless and/or its affiliated companies.`,
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
