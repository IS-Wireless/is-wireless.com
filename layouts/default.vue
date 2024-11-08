<template>
  <div class="h-full flex flex-col">
    <NuxtPwaManifest />
    <Navbar :critical="true" :main-menu="topMenuData" :side-menu="sideMenuData" :socials="socialMenuData" />
    <main>
      <slot></slot>
    </main>
    <ScrollToTop />
    <Footer :image-url="footerData.image" :copyright="footerData.copyright" :menu="footerMenuData"
      :socials="socialMenuData" :languages="footerData.language" />
  </div>
</template>

<script setup>
import { useGeneralStore } from '~/store/general';

const generalStore = useGeneralStore();

const {data: storeData} = await useAsyncData('general',()=>{
  return generalStore.fetchData()
})

const data = storeData.value

const topMenuData = computed(() => {
  let menu = [];
  if (data.menu_locations && data.menu_locations.main_navigation) {
    const topMenuID = data.menu_locations.main_navigation.ID;
    if (data.menu[topMenuID] && data.menu[topMenuID].items) {
      menu = data.menu[topMenuID].items;
    }
  }
  return menu;
});

const sideMenuData = computed(() => {
  let menu = [];
  if (data.menu_locations && data.menu_locations.sidebar) {
    const sideMenuID = data.menu_locations.sidebar.ID;
    if (data.menu[sideMenuID] && data.menu[sideMenuID].items) {
      menu = data.menu[sideMenuID].items;
    }
  }
  return menu;
});

const socialMenuData = computed(() => {
  let menu = [];
  if (data.menu_locations && data.menu_locations['social-media']) {
    const socialMenuID = data.menu_locations['social-media'].ID;
    if (data.menu[socialMenuID] && data.menu[socialMenuID].items) {
      menu = data.menu[socialMenuID].items;
    }
  }
  return menu;
});

const footerMenuData = computed(() => {
  const menu_left = [];
  const menu_right = [];

  if (data.menu_locations && data.menu_locations['footer-menu-left']) {
    const menuIDLeft = data.menu_locations['footer-menu-left'].ID;
    if (data.menu[menuIDLeft] && data.menu[menuIDLeft].items) {
      menu_left.push(...data.menu[menuIDLeft].items);
    }
  }

  if (data.menu_locations && data.menu_locations['footer-menu-right']) {
    const menuIDRight = data.menu_locations['footer-menu-right'].ID;
    if (data.menu[menuIDRight] && data.menu[menuIDRight].items) {
      menu_right.push(...data.menu[menuIDRight].items);
    }
  }

  return { menu_left, menu_right };
});

const footerData = ref({
  image: 'https://www.is-wireless.com/wp-content/uploads/2016/04/logo-500px.png',
  copyright: `©${new Date().getFullYear()} IS-Wireless and/or its affiliated companies.`,
  menu: {
    menu_left: [
      { title: 'About us', url: '/' },
      { title: 'Careers', url: '/' },
      { title: 'Contact', url: '/' }
    ],
    menu_right: [
      { title: 'Privacy Policy', url: '/' }
    ]
  },
  socials: {
    twitter: { url: 'https://twitter.com/is_wireless' },
    linkedin: { url: 'https://linkedin.com/company/is-wireless' },
    youtube: { url: null }
  },
  language: ['English']
});
</script>

<style>
html {
  font-family: "Lato", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
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
