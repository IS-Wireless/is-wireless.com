<template>
  <div>
    <Navbar :main-menu="topMenuData" :side-menu="sideMenuData.menu" />
    <Nuxt />
    <Footer
      :image-url="footerData.image"
      :copyright="footerData.copyright"
      :menu="footerData.menu"
      :socials="footerData.socials"
      :languages="footerData.language"
    />
  </div>
</template>

<script>
import Navbar from '@/components/navbar.vue'
import Footer from '@/components/footer.vue'

export default {
  components: {
    Navbar,
    Footer,
  },
  computed: {
    topMenuData() {
      const topMenu = []
      let data = this.$store.getters['general/getData']
      let dataCopy = JSON.parse(JSON.stringify(data))
      dataCopy.menu_items.forEach((item) => {
        item['children'] = []
        if (
          item.menus === dataCopy.menu_locations.main_navigation.menu &&
          !item.parent
        ) {
          topMenu.push(item)
        } else if (item.parent) {
          dataCopy.menu_items.forEach((parentItem) => {
            if (parentItem['id'] === item.parent) {
              parentItem.children.push(item)
            }
          })
        }
      })
      return topMenu
    },

    sideMenuData() {
      return {
        menu: {
          0: {
            title: '5G Made Together',
            desktop: false,
          },
          1: {
            title: 'Academy',
            desktop: false,
          },
          2: {
            title: 'Networks',
            desktop: false,
          },
          3: {
            title: 'Solutions',
            desktop: false,
          },
          4: {
            title: 'Research',
            desktop: true,
          },
          5: {
            title: 'Resources',
            desktop: true,
          },
          6: {
            title: 'About Us',
            desktop: true,
          },
          7: {
            title: 'Careers',
            desktop: true,
          },
          8: {
            title: 'News',
            desktop: true,
          },
          9: {
            title: 'Contact',
            desktop: true,
          },
        },
      }
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
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
