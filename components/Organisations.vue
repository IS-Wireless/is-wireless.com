<template>
  <section
    class="
      w-4/5
      mx-auto
      flex flex-col-reverse
      tablet-small:flex-row
      select-none
    "
  >
    <div
      v-swiper="swiperOptionsObject"
      class="
        swiper swiper-container
        overflow-hidden
        tablet-small:w-4/6
        basis-full
        tablet-small:basis-4/6
        w-full
        flex-grow-0 flex-shrink-0
        h-[120px]
      "
    >
      <div class="swiper-wrapper flex w-full h-full">
        <div
          v-for="item in swiper_logos"
          :key="item.imgUrl"
          class="
            swiper-slide
            flex
            justify-center
            shrink-0
            basis-1/2
            phablet:basis-1/3
            tablet-small:basis-1/2
            tablet:basis-1/3
            desktop:basis-1/4
            full-hd:basis-1/5
          "
        >
          <nuxt-link
            class="py-3 px-5 block tablet-small:pr-10"
            :to="item.url"
          >
            <nuxt-picture
              width="200"
              height="200"
              class="swiper-lazy organisations-logo h-full"
              :src="item.imgUrl"
              :alt="item.alt"
            />
          </nuxt-link>
        </div>
      </div>
    </div>
    <div
      class="
        tablet-small:w-2/6
        w-full
        basis-full
        tablet-small:basis-2/6
        flex-grow-0 flex-shrink-0 flex
        items-center
        bg-gray-light
        h-[120px]
      "
    >
      <div
        v-for="item in static_logos"
        :key="item.imgUrl"
        class="w-1/2 py-3 px-4 desktop:px-10 h-full flex items-center"
      >
        <nuxt-link
          class="block h-full"
          :to="item.url"
        >
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
    swiper_logos: {
      type: Array,
      required: true,
    },
    static_logos: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      url: 'https://www.is-wireless.com/about-us/#membership-and-associations',

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
        // breakpoints: {
        //   1664: {
        //     slidesPerView: 5,
        //   },
        //   1224: {
        //     slidesPerView: 4,
        //   },
        //   784: {
        //     slidesPerView: 3,
        //   },
        //   640: {
        //     slidesPerView: 2,
        //   },
        //   512: {
        //     slidesPerView: 3,
        //   },
        // },
      },
    }
  },
}
</script>

<style scoped lang="postcss">
.swiper .swiper-slide .organisations-logo img {
  @apply h-full object-contain filter saturate-0  hover:saturate-100 duration-300;
}
</style>
