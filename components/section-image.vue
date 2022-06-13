<template>
  <div class="overflow-hidden flex justify-center rounded-md group">
    <nuxt-picture
      width="640"
      height="640"
      class="transform img-full group-hover:scale-110 group-hover:opacity-80 transition duration-[1000ms]"
      :src="imageUrl"
      :alt="imageAlt"
      sizes="sm:320px md:640px lg:720px"
    />
  </div>
</template>

<script>
export default {
  name: 'SectionImage',
  props: {
    imageUrl: {
      type: String,
      required: true,
    },
    imageAlt: {
      type: String,
      required: false,
      default: 'IS-Wireless Image',
    },
  },
}
</script>

<style></style>
