<template>
  <section
    class="relative py-10 tablet-wide:pb-[270px] tablet-wide:pt-[60px] bg-white w-full text-gray-dark"
  >
    <div
      class="relative z-10 flex flex-col items-center mx-auto max-w-lg mb-10 tablet:mb-20"
    >
      <SectionHeader
        v-if="data.title"
        :title="data.title"
        :center="true"
        class="text-gray-darkest"
      />
      <div
        v-if="data.description"
        class="content-html text-inherit text-center text-gray-dark"
        v-html="data.description"
      ></div>
    </div>
    <div class="w-auto desktop:w-full mr-[-12.5%] desktop:mr-0">
      <div v-if="data.list" id="teamSwiper" class="swiper relative z-10 overflow-hidden">
        <div class="swiper-wrapper flex">
          <PersonTile
            v-for="(item, index) in data.list"
            :key="index"
            :data="item"
            class="swiper-slide mr-[30px] tablet:mr-10 desktop:mr-0"
          />
        </div>
        <div
        data-slide-prev
          class=" cursor-pointer absolute left-2 top-[28%] z-10 group transition duration-200"
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="rotate-180"
          >
            <circle
              cx="20"
              cy="20"
              r="19.5"
              class="stroke-blue-main fill-white/30 group-hover:fill-blue-main transition duration-200"
            ></circle>
            <path
            class="fill-blue-main group-hover:fill-white transition duration-200"
              d="M20.75 14L19.8562 14.8706L24.5938 19.625H12V20.875H24.5938L19.8562 25.6081L20.75 26.5L27 20.25L20.75 14Z"
            ></path>
          </svg>
        </div>
        <div
          data-slide-next
          class=" cursor-pointer absolute right-5 top-[28%] z-10 group transition duration-200"
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="20"
              cy="20"
              r="19.5"
              class="stroke-blue-main fill-white/30 group-hover:fill-blue-main transition duration-200"
            ></circle>
            <path
            class="fill-blue-main group-hover:fill-white transition duration-200"
              d="M20.75 14L19.8562 14.8706L24.5938 19.625H12V20.875H24.5938L19.8562 25.6081L20.75 26.5L27 20.25L20.75 14Z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
    <div class="absolute z-0 inset-y-0 inset-x-[-12.5%] bg-gray-light"></div>
  </section>
</template>

<script>
import { Swiper, Navigation } from 'swiper'
import PersonTile from './person-tile.vue'
import SectionHeader from './section-header.vue'

export default {
  name: 'section_team',
  components: {
    SectionHeader,
    PersonTile,
  },
  props: {
    data: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {
      swiper: null,
      swiperOptionsObject: {
        slidesPerView: 'auto',
        modules: [Navigation],
        spaceBetween: 0,
        direction: 'horizontal',
        speed: 600,
        enabled: true,
        navigation: {
          nextEl: '[data-slide-next]',
          prevEl: '[data-slide-prev]',
        },
        breakpoints: {
          1248: {
            slidesPerView: 4,
            spaceBetween: 50,
            enabled: false,
          },
        },
      },
    }
  },
  mounted() {
    this.swiper = new Swiper('#teamSwiper', this.swiperOptionsObject)
  },
}
</script>

<style scoped>
.content-html >>> p {
  @apply text-xl tablet:text-2xl;
}

[data-slide-next].swiper-button-disabled,
[data-slide-prev].swiper-button-disabled{
  @apply opacity-0
}
</style>
