<template>
  <div>
    <Navbar :mainMenu="mainMenuData.menu" :sideMenu="sideMenuData.menu" />
    <Nuxt />
  </div>
</template>

<script>

import Navbar from '@/components/navbar.vue'

export default {
  components:{
    Navbar
  },
  computed: {
      mainMenuData() {
        return this.$store.getters['general/getData']
      },

      sideMenuData(){
        return{
          menu:{
            0:{
              title: '5G Made Together',
              desktop: false
            },
            1:{
              title: 'Academy',
              desktop: false
            },
            2:{
              title: 'Networks',
              desktop: false
            },
            3:{
              title: 'Solutions',
              desktop: false
            },
            4:{
              title: 'Research',
              desktop: true
            },
            5:{
              title: 'Resources',
              desktop: true
            },
            6:{
              title: 'About Us',
              desktop: true
            },
            7:{
              title: 'Careers',
              desktop: true
            },
            8:{
              title: 'News',
              desktop: true
            },
            9:{
              title: 'Contact',
              desktop: true
            }
          }
        }
      }
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
