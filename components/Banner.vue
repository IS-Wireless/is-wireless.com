<template>
  <section class="w-full h-[480px] phone-wide:h-[640px] tablet-wide:h-[768px]">
    <PopupVideo
      v-if="data.default.video.link"
      ref="popupVideo"
      :videoSrc="data.default.video.link"
    />
    <div
      id="banner"
      class="swiper swiper-container relative w-full h-full bg-white overflow-hidden"
    >
      <div class="swiper-wrapper h-full">
        <div
          v-for="(item, index) in data.banner"
          :key="index"
          class="swiper-slide h-full"
        >
          <nuxt-picture
            v-if="item.image"
            v-bind="picCompute(item.image)"
            :src="item.image.url ? item.image.url : ''"
            :alt="item.image.alt ? item.image.alt : ''"
            :title="item.image.title ? item.image.title : ''"
            width="1920px"
            height="768px"
            class="h-full"
            :loading="index ? 'lazy' : 'eager'"
            :preload="index ? false : true"
            :critical="index ? false : true"
          />
        </div>
      </div>

      <div
        v-if="data.default"
        class="absolute inset-0 flex justify-center items-start flex-col text-5xl bg-black/50 z-10 pb-10 tablet:pb-20"
      >
        <div
          class="flex justify-between items-center w-4/5 container mx-auto relative"
        >
          <div class="tablet-wide:basis-1/2">
            <EffectAppear>
              <img
                v-if="data.default.image"
                ref="content1"
                width="550"
                height="160"
                class="duration-300 mb-10 w-4/5 phone-wide:w-3/5 tablet-wide:w-3/5 desktop:w-1/2 pr-5 tablet:pr-0"
                :src="data.default.image.url ? data.default.image.url : ''"
                :alt="data.default.image.alt ? data.default.image.alt : ''"
                :title="
                  data.default.image.title ? data.default.image.title : ''
                "
                loading="eager"
                :critical="true"
                preload
              />
            </EffectAppear>
            <EffectAppear :delay="100">
              <p
                v-if="data.default && data.default.content"
                ref="content2"
                class="duration-300 text-xl tablet:text-2xl text-white mb-10 tablet-wide:mb-[70px] pr-10 tablet:pr-0"
              >
                {{ data.default.content }}
              </p>
            </EffectAppear>
            <EffectAppear :delay="200">
              <div
                v-if="data.default.links"
                ref="content3"
                class="duration-300 flex flex-col tablet:flex-row pr-5 tablet:pr-0"
              >
                <CustomLink
                  class="flex w-fit items-center text-sm tablet:text-base text-white hover:text-white font-medium uppercase px-6 tablet:px-8 py-[18px] tablet:py-4 rounded-full tablet:mr-[50px] duration-300 tablet:mb-0 mb-6 after:content-[''] after:block after:w-[25px] after:h-0.5 after:bg-white after:ml-5 after:transition after:duration-300 hover:after:translate-x-1"
                  :class="
                    index > 0
                      ? 'border border-solid border-white hover:bg-white/25'
                      : 'bg-blue-main hover:bg-blue-main-hover'
                  "
                  v-for="(item, index) in data.default.links"
                  :key="index"
                  :isExternal="false"
                  :url="item.url_link ? item.url_link : ''"
                  :title="item.title_link ? item.title_link : ''"
                >
                </CustomLink>
              </div>
            </EffectAppear>
          </div>
          <EffectAppear
            v-if="data.default.video.link"
            class="hidden tablet-wide:block"
            :delay="300"
          >
            <div class="flex justify-center items-center mr-5">
              <div
                class="group cursor-pointer flex justify-center items-center p-2 w-10 tablet:w-20 aspect-square shrink-0 mr-3 border-2 border-white hover:border-blue-main bg-white/20 rounded-full transition duration-300"
                @click="togglePopup()"
              >
                <svg
                  class="fill-white group-hover:fill-blue-main transition duration-300"
                  width="28"
                  height="26"
                  viewBox="-2 0 21 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 13L7.65417e-07 25.1244L1.82536e-06 0.875644L21 13Z"
                  />
                </svg>
              </div>
              <span
                v-if="data.default.video.title"
                class="text-white text-xl tablet:text-2xl"
              >
                {{ data.default.video.title }}
              </span>
            </div>
          </EffectAppear>
          <div class="swiper-pagination"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import EffectAppear from './effect-appear.vue'
import { Swiper, Pagination, Autoplay } from 'swiper'

import 'swiper/swiper-bundle.min.css'
import CustomLink from './custom-link.vue'
export default {
  name: 'Banner',
  components: {
    CustomLink,
    EffectAppear,
  },
  props: {
    data: {
      type: Object,
      required: true,
      default: () => {},
    },
  },
  data() {
    return {
      isPopupOpen: false,
      swiper: null,
      swiperIndex: 0,
      swiperCount: 0,
      swiperOptionsObject: {
        modules: [Pagination, Autoplay],
        virtual: false,
        preventClicksPropagation: false,
        slidesperview: 1,
        spaceBetween: 0,
        direction: 'horizontal',
        effect: 'fade',
        fadeEffect: {
          crossFade: false,
        },
        watchOverflow: true,
        navigation: {
          nextEl: '[data-slide-next]',
          prevEl: '[data-slide-prev]',
        },
        speed: 500,
        loopedSlides: 1,
        loop: this.data.banner
          ? this.data.banner.length > 1
            ? true
            : false
          : false,
        keyboard: {
          enabled: true,
          onlyInViewport: true,
        },
        autoplay: {
          delay: 6000,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true,
        },
      },
    }
  },
  mounted() {
    this.$data.swiper = new Swiper('#banner', this.$data.swiperOptionsObject)
  },
  methods: {
    togglePopup() {
      this.$refs.popupVideo.togglePopup()
    },
    picCompute(image) {
      return {
        sources: [
          {
            src: image.url,
            sizes: {
              sm: '100vw',
              md: '100vw',
              lg: '100vw',
              xl: '100vw',
              xxl: '100vw',
            },
            media: '(orientation: landscape)',
          },
          {
            src: image.url,
            width: '1920px',
            height: '768px',
            sizes: { default: '100vw', xxs: '100vw', xs: '100vw' },
          },
        ],
        title: image.title,
        alt: image.alt,
      }
    },
  },
}
</script>

<style lang="postcss" scoped>
.swiper .swiper-slide picture >>> img {
  @apply min-w-full h-full object-cover;
}

.swiper >>> .swiper-pagination.swiper-pagination {
  @apply w-auto z-20 static flex flex-col justify-center items-center;
}

.swiper >>> .swiper-pagination .swiper-pagination-bullet {
  @apply w-3 h-3 mx-0 my-[5px]  bg-transparent border border-white border-solid transition duration-200 opacity-100 hover:bg-white/25;
}

.swiper
  >>> .swiper-pagination
  .swiper-pagination-bullet.swiper-pagination-bullet-active {
  @apply bg-blue-main border-blue-main;
}
</style>
