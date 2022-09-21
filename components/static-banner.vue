<template>
  <div
    class="w-full h-[250px] tablet-wide:h-[350px] bg-cover bg-center"
    :style="{ backgroundImage: 'url(' + backgroundUrl + ')' }"
  >
    <div class="w-4/5 h-full container mx-auto flex items-end">
      <h1
        v-if="title"
        class="text-[40px] tablet:text-[60px] text-white mb-5 tablet:mb-12"
        v-html="title"
      ></h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StaticBanner',
  props: {
    title: {
      type: String,
      required: true,
      default: '',
    },
    backgroundUrl: {
      type: String,
      required: true,
      default: '',
    },
  },
}
</script>

<style></style>
