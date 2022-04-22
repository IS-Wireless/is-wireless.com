<template>
  <section
    class="w-full px-[10%] bg-white mx-auto flex flex-col-reverse tablet-small:flex-row select-none"
  >
    <div
      v-swiper="swiperOptionsObject"
      class="swiper swiper-container overflow-hidden tablet-small:w-4/6 basis-full tablet-small:basis-4/6 w-full flex-grow-0 flex-shrink-0 h-[120px]"
    >
      <div class="swiper-wrapper flex w-full h-full">
        <div
          v-for="(item, index) in swiperLogos"
          :key="item.imgUrl"
          class="swiper-slide h-full flex justify-center shrink-0 basis-1/2 phablet:basis-1/3 tablet-small:basis-1/2 tablet:basis-1/3 desktop:basis-1/4 full-hd:basis-1/5"
        >
          <nuxt-link
            class="py-3 px-5 flex items-center tablet-small:pr-10"
            :to="item.url"
          >
            <nuxt-picture
              width="200"
              height="200"
              fit="outside"
              :src="item.imgUrl"
              :alt="item.alt"
              :imgAttrs="{
                loading: index < 2 ? 'eager' : index > 3 ? 'lazy' : 'auto',
                class:
                  'w-full object-contain filter saturate-0 hover:saturate-100 duration-300',
              }"
            />
          </nuxt-link>
        </div>
      </div>
    </div>
    <div
      class="tablet-small:w-2/6 w-full basis-full tablet-small:basis-2/6 flex-grow-0 flex-shrink-0 flex items-center bg-gray-light h-[120px]"
    >
      <div
        v-for="item in staticLogos"
        :key="item.imgUrl"
        class="py-3 px-4 desktop:px-10 h-full flex items-center"
      >
        <nuxt-link class="block h-full" :to="item.url">
          <nuxt-picture
            loading="eager"
            class="h-full img-h-full"
            width="200"
            height="200"
            :src="item.imgUrl"
            :alt="item.alt"
          />
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Organisations',
  props: {
    swiperLogos: {
      type: Array,
      required: true,
    },
    staticLogos: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      url: '/about-us/#membership-and-associations',

      swiperIndex: 1,
      swiperCount: 0,
      iframeYoutubeSrc: '',
      liveURL: '',
      swiperOptionsObject: {
        slidesPerView: 'auto',
        spaceBetween: 0,
        direction: 'horizontal',
        speed: 600,
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        },
        preloadImages: false,
        lazy: {
          loadPrevNext: true,
        },
      },
    }
  },
}
</script>
