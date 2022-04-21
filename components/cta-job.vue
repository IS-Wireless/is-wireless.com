<template>
  <section class="w-full relative overflow-hidden bg-[center_top] py-[100px]">
    <nuxt-picture
      class="block fixed w-full h-full inset-0 -z-10"
      :src="backgroundUrl"
      :imgAttrs="{ alt: 'test alt', class: 'w-full h-full object-cover' }"
    />
    <div class="flex flex-col justify-center items-center w-4/5 mx-auto">
      <h2 class="text-white mb-5">
        {{ title }}
      </h2>
      <hr class="w-[100px] h-0 border-0 border-t-4 border-white mb-5" />
      <slot />
    </div>
  </section>
</template>

<script>
export default {
  name: 'CtaJob',
  props: {
    title: {
      type: String,
      required: true,
      default: 'CTA Title',
    },
    backgroundUrl: {
      type: String,
      required: true,
    },
  },
}
</script>

<style></style>
