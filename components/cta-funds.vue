<template>
  <div class="w-full">
    <div
      class="
        flex flex-col
        tablet-wide:flex-row
        justify-between
        p-7
        rounded-md
        bg-gray-light
      "
    >
      <div>
        <h3 class="text-2xl tablet:text-3xl block mb-5">{{ data.title }}</h3>
        <p class="text-base block mb-5">
          {{ data.text }}
        </p>
      </div>
      <div class="flex shrink-0">
        <nuxt-link
          class="
            block
            mt-auto
            tablet-wide:mx-2.5
            object-cover object-
            text-sm text-white
            uppercase
            px-7
            py-3
            rounded-full
            bg-blue-main
            hover:bg-white hover:text-black
            duration-300
            tablet:mb-0
            mb-6
          "
          :to="'/'"
          >Read More
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CtaFunds',
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style></style>
