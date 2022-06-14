<template>
  <div class="flex justify-center overflow-hidden rounded-md group">
    <nuxt-picture
      width="640"
      height="640"
      class="transform w-full img-full group-hover:scale-110 group-hover:opacity-80 transition duration-[1000ms]"
      :src="url"
      :alt="alt"
      :title="title"
      sizes="sm:320px md:640px lg:720px"
    />
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
  },
}
</script>

<style></style>
