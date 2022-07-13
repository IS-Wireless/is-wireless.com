<template>
  <div class="relative p-[50px] rounded-md mx-auto w-4/5 tablet:w-full">
    <nuxt-picture
      v-if="data.image"
      class="block absolute w-full h-full inset-0 -z-20 after:block after:absolute after:inset-0 after:bg-[#434648] after:mix-blend-hard-light after:rounded-md before:block before:absolute before:inset-0 before:bg-[#000000] before:mix-blend-hue before:rounded-md before:opacity-[0.35]"
      :src="data.image.url ? data.image.url : ''"
      :title="data.image.title ? data.image.title : ''"
      :alt="data.image.alt ? data.image.alt : ''"
      :imgAttrs="{
        class: 'w-full h-full object-cover rounded-md',
        loading: 'lazy',
      }"
    />

    <div class="relative flex flex-col justify-center items-start">
      <h2
        v-if="data.title"
        class="text-white mb-[15px] text-[40px]"
        v-html="data.title"
      ></h2>
      <hr class="w-[100px] h-0 border-0 border-t-4 border-white mb-5" />
      <p
        v-if="data.description"
        class="text-white text-left mb-[30px] text-[16px] leading-[24px]"
        v-html="data.description"
      ></p>
      <CustomLink
        v-if="data.link"
        :class="'block object-cover object- text-sm text-white uppercase px-7 py-3 rounded-full bg-blue-main hover:bg-white hover:text-black duration-300 tablet:mb-0 mb-6'"
        :url="data.link.url"
        :title="data.link.title"
        :isExternal="true"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'sidebar_cta',
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style></style>
