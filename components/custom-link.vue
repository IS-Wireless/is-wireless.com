<template>
  <div v-if="!url && !title">
    <slot> </slot>
  </div>
  <div v-else-if="!url && title" v-html="title"></div>
  <nuxt-link v-else-if="!title && !isExternalCheck" :to="urlFormatted">
    <slot></slot>
  </nuxt-link>
  <nuxt-link
    v-else-if="title && !isExternalCheck"
    v-html="title"
    :to="urlFormatted"
  >
  </nuxt-link>

  <a
    v-else-if="
      (isExternalCheck && !title) || (isExternalCheck && hasDefaultSlot)
    "
    :href="url"
    target="_blank"
  >
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
      default: '',
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
    hasDefaultSlot() {
      return !!this.$slots.default
    },
    urlFormatted() {
      let formattedUrl = this.url
        .replace(this.$config.API_URL, '')
        .replace('https://www.is-wireless.com', '')
      return formattedUrl
    },
    isExternalCheck() {
      var r = new RegExp('^(?:[a-z+]+:)?//|\\/wp-content\\/', 'i')
      if (r.test(this.urlFormatted)) {
        return true
      }
      return this.isExternal
    },
  },
}
</script>

<style></style>
