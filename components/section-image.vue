<template>
  <div class="flex justify-center group">
    <div :class="{ 'rounded-md overflow-hidden': imageDecoration }">
      <nuxt-picture
        width="640"
        height="640"
        class="block transform max-w-full w-auto transition duration-[1000ms]"
        :class="{
          'group-hover:scale-110 group-hover:opacity-80': imageDecoration,
          'opacity-100': imgLoaded,
          'opacity-0': !imgLoaded,
        }"
        :src="url"
        :alt="alt"
        :title="title"
        sizes="sm:320px md:640px lg:720px"
        @load="changeLoadState()"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SectionImage',
  props: {
    url: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: false,
      default: 'IS-Wireless Image',
    },
    title: {
      type: String,
      required: false,
      default: 'IS-Wireless Image',
    },
    imageDecoration: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      imgLoaded: false,
    }
  },
  methods: {
    changeLoadState() {
      this.imgLoaded = true
    },
  },
}
</script>

<style></style>
