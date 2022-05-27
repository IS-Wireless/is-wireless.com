<template>
  <section
    class="w-full px-[10%] bg-white mx-auto flex flex-col-reverse tablet-small:flex-row select-none"
  >
    <div
      v-swiper="swiperOptionsObject"
      class="swiper swiper-container overflow-hidden tablet-small:w-4/6 basis-full tablet-small:basis-4/6 w-full flex-grow-0 flex-shrink-0 h-[120px]"
    >
      <div class="swiper-wrapper flex w-full h-full items-center">
        <div
          v-for="(item, index) in logos.swiper"
          :key="index"
          class="swiper-slide h-full flex justify-center shrink-0 basis-1/2 phablet:basis-1/3 tablet-small:basis-1/2 tablet:basis-1/3 desktop:basis-1/4 full-hd:basis-1/5"
        >
          <a
            class="py-3 px-5 flex items-center tablet-small:pr-10"
            :href="item.link"
          >
            <nuxt-picture
              width="200"
              height="200"
              fit="outside"
              :src="item.image.url"
              :alt="item.image.alt"
              :title="item.image.title"
              :imgAttrs="{
                loading: index < 2 ? 'eager' : index > 3 ? 'lazy' : 'auto',
                class: 'w-full object-contain custom-filter duration-300',
              }"
            />
          </a>
        </div>
      </div>
    </div>
    <div
      class="tablet-small:w-2/6 w-full basis-full tablet-small:basis-2/6 flex-grow-0 flex-shrink-0 flex items-center bg-gray-light h-[120px]"
    >
      <div
        v-for="(item, index) in logos.pinned"
        :key="index"
        class="py-3 px-4 desktop:px-10 h-full flex items-center"
      >
        <a class="block h-full" :href="item.link">
          <nuxt-picture
            loading="eager"
            class="h-full img-h-full"
            width="200"
            height="200"
            :src="item.image.url"
            :alt="item.image.alt"
            :title="item.image.title"
          />
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Organisations',
  props: {
    data: {
      type: Object,
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
  computed: {
    logos() {
      let logosSwiper = []
      let logosPinned = []

      this.data.logo.forEach((item) => {
        if (item.pin) {
          logosPinned.push(item)
        } else {
          logosSwiper.push(item)
        }
      })

      return { swiper: logosSwiper, pinned: logosPinned }
    },
  },
}
</script>

<style lang="postcss" scoped>
>>> .custom-filter {
  filter: saturate(0);
}
>>> .custom-filter:hover {
  filter: saturate(1);
}
</style>
