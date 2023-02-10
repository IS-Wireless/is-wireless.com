<template>
  <section class="relative z-10 w-full bg-gray-light">
    <div
      class="relative tablet:w-4/5 tablet:container mx-auto z-10 w-full bg-gray-light py-10 tablet:py-28 flex flex-col flex-wrap tablet:flex-row tablet:flex-nowrap items-center tablet:rounded-[5px] overflow-hidden"
    >
      <div
        v-if="data.title"
        class="flex w-full tablet:w-auto pt-5 tablet-small:py-5 pl-5 pr-1 h-full items-center tablet-small:pr-10 flex-shrink-0"
      >
        <p class="text-2xl tablet:text-3xl text-gray-dark">
          {{ data.title }}
        </p>
      </div>

      <CustomLink
        :url="data.link"
        class="block mt-5 tablet:mt-0 w-full flex-grow-0 h-[50px] tablet:h-[60px] overflow-hidden"
      >
        <div id="pressSwiper" class="swiper swiper-container overflow-hidden">
          <div
            class="swiper-wrapper select-none flex w-full h-full items-center"
          >
            <div
              v-for="(image, index) in logos"
              :key="index"
              class="swiper-slide swiper-duplicate-load-fix !w-auto h-full px-7 tablet:px-[50px]"
            >
              <nuxt-picture
                v-if="image.url"
                fit="outside"
                :src="
                  image.url
                    ? image.url.replace(
                        'www.is-wireless.com',
                        'api.is-wireless.com'
                      )
                    : ''
                "
                class="h-full"
                :alt="image.alt ? image.alt : ''"
                :title="image.title ? image.title : ''"
                sizes="sm:180px lg:360px"
                :img-attrs="{
                  loading: 'lazy',
                  class:
                    'w-auto h-full object-contain custom-filter duration-300 max-w-[200px] mx-auto opacity-0 transition',
                }"
                @load="imageAnimateLoad($event)"
              />
            </div>
          </div>
          <div
            class="absolute h-full w-10 right-0 top-0 bg-gradient-to-l from-gray-light z-20"
          ></div>
          <div
            class="absolute h-full w-10 left-0 top-0 bg-gradient-to-r from-gray-light z-20"
          ></div>
        </div>
      </CustomLink>
    </div>
  </section>
</template>

<script>
import { Swiper, Navigation, Autoplay } from 'swiper'

export default {
  name: 'section_press_slider',
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      url: '/about-us/in-the-media',
      swiperOptionsObject: {
        modules: [Navigation, Autoplay],
        slidesPerView: 'auto',
        spaceBetween: 0,
        direction: 'horizontal',
        speed: 600,
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        slidesPerView: 'auto',
      },
    }
  },
  computed: {
    logos() {
      let logosSwiper = []
      let downloadedData = this.getPressData()
      if (downloadedData) {
        downloadedData.forEach((item) => {
          if (
            item.image?.url &&
            !logosSwiper.some((e) => e.url == item.image.url)
          ) {
            logosSwiper.push(item.image)
          }
        })
      }
      return logosSwiper
    },
  },
  mounted() {
    let logos = this.logos
    if (logos.length > 0) {
      this.$data.swiper = new Swiper(
        '#pressSwiper',
        this.$data.swiperOptionsObject
      )
    }
  },
  methods: {
    getPressData() {
      return this.$store.getters['general/getOptionsData'].press_collection
    },

    imageAnimateLoad(e) {
      e.currentTarget.classList.remove('opacity-0')
    },
  },
}
</script>

<style lang="postcss" scoped>
>>> .custom-filter {
  filter: saturate(0) opacity(0.5);
}
>>> .custom-filter:hover {
  filter: saturate(1) opacity(1);
}

.swiper-duplicate-load-fix /deep/ .opacity-0[loading='eager'],
.swiper-duplicate-load-fix.swiper-slide-duplicate /deep/ .opacity-0 {
  opacity: 1;
}
</style>
