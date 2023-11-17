<template>
  <div class="flex justify-center group">
    <div :class="{ 'rounded-md overflow-hidden w-full': imageDecoration }">
      <nuxt-picture
        width="736"
        height="552"
        class="block transform max-w-full w-auto transition duration-[1000ms] max-h-[552]"
        :class="{
          'group-hover:scale-110 group-hover:opacity-80': imageDecoration,
        }"
        :src="url.replace('www.is-wireless.com', 'api.is-wireless.com').replace('https://api.is-wireless.com/','/app/')"
        :alt="alt"
        :title="title"
        sizes="sm:320px md:552px lg:552px"
        loading="lazy"
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
}
</script>

<style></style>
