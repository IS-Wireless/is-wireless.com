<template>
  <div
  ref="baner_container"
    class="w-full min-h-[500px] tablet-wide:min-h-[700px] bg-cover bg-center pt-20 pb-10 tablet:pt-[200px] tablet:pb-[100px]"
    :style="{ backgroundImage: 'url(' + backgroundUrl + ')' }"
  >
    <div class="h-full w-4/5 container mx-auto flex flex-col items-center">
      <h1
        v-if="title"
        class="text-[40px] tablet:text-[80px] text-white mb-5 tablet:mb-12 text-center max-w-5xl leading-tight"
        v-html="title"
      ></h1>
      <div class="w-[124px] h-[5px] bg-blue-main mb-10 tablet:mb-20"></div>
      <p v-if="description" class="max-w-3xl mb-10 tablet:mb-20 text-xl tablet:text-2xl text-center text-white" v-html="description"></p>
      <a v-if="button && button.title && button.url"
        class="flex items-center w-fit text-sm tablet:text-base !text-white hover:text-white font-medium uppercase mt-5 tablet:mt-11 px-6 tablet:px-8 py-4 rounded-full duration-300 after:content-[''] after:block after:w-[25px] after:h-0.5 after:bg-white after:ml-5 after:transition after:duration-300 hover:after:translate-x-1 hover:bg-white/25 border border-solid border-white"
        :href="button.url"
      >{{ button.title }}</a>
    </div>
  </div>
</template>

<script>
import CustomLink from './custom-link.vue';
export default {
  name: 'StaticBannerDescription',
  components:{
    CustomLink
  },
  props: {
    title: {
      type: String,
      required: true,
      default: '',
    },
    description: {
      type: String,
      required: true,
      default: '',
    },
    backgroundUrl: {
      type: String,
      required: true,
      default: '',
    },
    button: {
      type: Object,
    },
  },
}
</script>

<style></style>
