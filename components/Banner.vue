<template>
  <section class="w-full h-[480px] phone-wide:h-[640px] tablet-wide:h-[768px]">
    <div
      v-swiper="swiperOptionsObject"
      class="swiper swiper-container relative w-full h-full bg-black/5 overflow-hidden"
    >
      <div v-if="data.banner" class="swiper-wrapper h-full">
        <div
          v-for="(item, index) in data.banner"
          :key="index"
          class="swiper-slide h-full"
        >
          <speedkit-picture
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
          />
        </div>
      </div>

      <div
        v-if="data.default"
        class="absolute h-full w-full flex justify-center items-center flex-col text-5xl bg-black bg-opacity-40 z-10 top-0 select-none"
      >
        <img
          v-if="data.default.image"
          ref="content1"
          width="550"
          height="160"
          class="duration-300 mb-12 w-4/5 phone-wide:mb-20 phone-wide:w-3/5 tablet:mb-24 tablet-wide:w-3/5 tablet-wide:mb-48 desktop:w-1/2 desktop:mb-24"
          :src="data.default.image.url ? data.default.image.url : ''"
          :alt="data.default.image.alt ? data.default.image.alt : ''"
          :title="data.default.image.title ? data.default.image.title : ''"
          loading="eager"
          preload
        />
        <p
          v-if="data.default && data.default.content"
          ref="content2"
          class="duration-300 text-2xl tablet:text-3xl text-center text-white mb-10 tablet-wide:mb-20 tablet-wide:font-semibold px-10"
        >
          {{ data.default.content }}
        </p>
        <div
          v-if="data.default.links"
          ref="content3"
          class="duration-300 flex justify-evenly flex-col tablet:flex-row tablet:w-4/5 max-w-screen-phablet"
        >
          <CustomLink
            class="text-lg text-white uppercase px-10 py-2 rounded-full bg-blue-main mx-auto hover:bg-white hover:text-black duration-300 tablet:mb-0 mb-6"
            v-for="(item, index) in data.default.links"
            :key="index"
            :isExternal="false"
            :url="item.url_link ? item.url_link : ''"
            :title="item.title_link ? item.title_link : ''"
          >
          </CustomLink>
        </div>
      </div>

      <div
        tabindex="0"
        class="absolute top-1/2 left-0 px-6 py-4 text-white bg-black bg-opacity-30 hover:bg-opacity-40 transition z-20"
        data-slide-prev
        role="button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="28"
          viewBox="0 0 16 28"
          fill="none"
        >
          <path
            class="text-white fill-current"
            d="M3.05891 14.0065L15.2265 1.83892C15.6471 1.41821 15.6471 0.736143 15.2265 0.315436C14.8057 -0.105145 14.1237 -0.105145 13.703 0.315436L0.773687 13.2447C0.353107 13.6654 0.353107 14.3475 0.773687 14.7682L13.703 27.6975C14.131 28.1109 14.8131 28.099 15.2265 27.671C15.6297 27.2534 15.6297 26.5915 15.2265 26.174L3.05891 14.0065Z"
            fill="#9F9FA1"
          />
        </svg>
      </div>
      <div
        tabindex="0"
        class="absolute top-1/2 right-0 px-6 py-4 text-white bg-black bg-opacity-30 hover:bg-opacity-40 transition z-20"
        data-slide-next
        role="button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="28"
          viewBox="0 0 16 28"
          fill="none"
        >
          <path
            class="text-white fill-current"
            d="M12.9411 14.0065L0.77354 1.83892C0.352896 1.41821 0.352896 0.736143 0.77354 0.315436C1.19431 -0.105145 1.87632 -0.105145 2.29703 0.315436L15.2263 13.2447C15.6469 13.6654 15.6469 14.3475 15.2263 14.7682L2.29703 27.6975C1.86899 28.1109 1.18692 28.099 0.77354 27.671C0.37032 27.2534 0.37032 26.5915 0.77354 26.174L12.9411 14.0065Z"
            fill="#9F9FA1"
          />
        </svg>
      </div>
    </div>
  </section>
</template>

<script>
import SpeedkitPicture from 'nuxt-speedkit/components/SpeedkitPicture'
import CustomLink from './custom-link.vue'
export default {
  name: 'Banner',
  components: {
    SpeedkitPicture,
    CustomLink,
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      swiperIndex: 0,
      swiperCount: 0,
      iframeYoutubeSrc: '',
      liveURL: '',
      swiperOptionsObject: {
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
        speed: 300,
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
      },
    }
  },
  mounted() {
    if (this.data.banner && this.data.banner.length > 1) {
      this.swiperOptionsObject.loop = true
    }
    const content = [
      this.$refs.content1,
      this.$refs.content2,
      this.$refs.content3,
    ]
    Show(0)
    function Show(i) {
      if (content[i]) {
        content[i].classList.remove('opacity-0')
      }
      setTimeout(() => {
        if (i < content.length - 1) {
          i++
          Show(i)
        }
      }, 600)
    }
  },
  methods: {
    picCompute: function (image) {
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
            sizes: { default: '100vw', xxs: '100vw', xs: '100vw' },
            media: '(orientation: portrait)',
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
</style>
