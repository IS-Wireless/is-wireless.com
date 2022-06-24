<template>
  <div>
    <Navbar
      :main-menu="topMenuData"
      :side-menu="sideMenuData"
      :socials="socialMenuData"
    />
    <div class="container">
      <h1 v-if="error.statusCode === 404">Page not found</h1>
      <h1 v-else>An error occurred</h1>
      <nuxt-link to="/">Home page</nuxt-link>
    </div>
    <Footer
      :image-url="footerData.image"
      :copyright="footerData.copyright"
      :menu="footerMenuData"
      :socials="socialMenuData"
      :languages="footerData.language"
    />
  </div>
</template>
<script>
export default {
  props: ['error'],
  layout: 'blog', // you can set a custom layout for the error page
}
</script>
