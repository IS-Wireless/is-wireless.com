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
      <button class="block w-fit p-1 group cursor-pointer" @click="scrollDown()">
        <svg width="34" height="54" viewBox="0 0 34 54" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path class="group-hover:translate-y-1 transition duration-300" d="M17 40L11 34M17 40L23 34M17 40V29.5M17 24V26.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <rect class="stroke-white group-hover:stroke-blue-main transition duration-300" x="1" y="1" width="32" height="52" rx="16" stroke-width="2"/>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StaticBannerDescription',
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
  },
  methods:{
    scrollDown(){
      const offset = this.$refs['baner_container'].clientHeight
      window.scrollTo(0,offset)
    }
  }
}
</script>

<style></style>
