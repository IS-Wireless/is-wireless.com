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
        class="block mt-5 tablet:mt-0 w-full flex-grow-0 overflow-hidden"
      >
          <Swiper class="overflow-hidden [&_.swiper-wrapper]:select-none [&_.swiper-wrapper]:flex [&_.swiper-wrapper]:w-full [&_.swiper-wrapper]:h-full [&_.swiper-wrapper]:items-center"
            :modules="[SwiperNavigation, SwiperAutoplay]"
            :slides-per-view="'auto'"
            :space-between="0"
            :speed="600"
            :loop="true"
            :autoplay="{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }"
            :breakpoints="{
             1248:{
                loopedSlides: 3,
              }
            }"
          >
            <SwiperSlide v-for="(image, index) in logos" :key="index" class="swiper-duplicate-load-fix h-full px-7 basis-full phone:basis-1/2 tablet-small:basis-1/2 desktop:basis-1/4 flex-grow-0 flex-shrink-0">
              <nuxt-picture
                v-if="image.url"
                fit="outside"
                :src="
                  image.url
                    ? image.url.replace(
                        'www.is-wireless.com',
                        'api.is-wireless.com'
                      ).replace('https://api.is-wireless.com/','/app/')
                    : ''
                "
                class="h-full flex justify-center"
                :alt="image.alt ? image.alt : ''"
                :title="image.title ? image.title : ''"
                sizes="sm:180px lg:360px"
                :img-attrs="{
                  loading: 'lazy',
                  class:
                    'w-auto h-full object-contain custom-filter duration-300 max-w-[200px] max-h-[80px] m-0 opacity-0 transition w-full',
                }"
                @load="imageAnimateLoad($event)"
              />
            </SwiperSlide>
          </Swiper>
      </CustomLink>
    </div>
  </section>
</template>

<script>
import { useGeneralStore } from '~/store/general'

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
  methods: {
    getPressData() {
      return useGeneralStore().getOptionsData.press_collection
    },

    imageAnimateLoad(e) {
      e.currentTarget?.classList.remove('opacity-0')
    },
  },
}
</script>

<style lang="postcss" scoped>
:deep( .custom-filter ){
  filter: saturate(0) opacity(0.5);
}
:deep( .custom-filter:hover ){
  filter: saturate(1) opacity(1);
}

.swiper-duplicate-load-fix :deep( .opacity-0[loading='eager'] ),
.swiper-duplicate-load-fix.swiper-slide-duplicate :deep( .opacity-0 ){
  opacity: 1;
}
</style>
