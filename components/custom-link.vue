<template>
  <nuxt-link v-if="!isExternal && !title" :to="urlFormatted">
    <slot></slot>
  </nuxt-link>
  <nuxt-link v-else-if="!isExternal && title" v-html="title" :to="urlFormatted">
  </nuxt-link>

  <a v-else-if="isExternal && !title" :href="url" target="_blank">
    <slot></slot>
  </a>
  <a v-else :href="url" v-html="title" target="_blank"> </a>
</template>

<script>
export default {
  name: 'CustomLink',
  props: {
    url: {
      type: String,
      required: true,
      default: '/',
    },
    title: {
      type: String,
      required: false,
    },
    isExternal: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    urlFormatted() {
      let formattedUrl = this.url
        .replace(this.$config.API_URL, '')
        .replace('https://www.is-wireless.com', '')
      return formattedUrl
    },
  },
}
</script>

<style></style>
