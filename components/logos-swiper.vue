<template>
    <div class="w-full my-10 tablet:my-20">
        <SectionHeader v-if="data.title" :title="data.title" class="text-gray-darkest mb-10 [&_h2]:!mt-0"/>
        <div id="logosSwiper" class="swiper swiper-container overflow-hidden h-14 tablet:h-[70px]">
            <div
            class="swiper-wrapper select-none flex w-full h-full items-center"
            >
                <div
                    v-for="(image, index) in data.galeria"
                    :key="index"
                    class="swiper-slide swiper-duplicate-load-fix h-full pr-10 basis-full phone:basis-1/2 tablet-small:basis-1/3 desktop:basis-1/5 flex-grow-0 flex-shrink-0"
                >
                    <nuxt-picture
                        class="w-full img-full"
                        :imgAttrs="{
                        class: '!h-full object-contain',
                        }"
                        :src="
                        image.img_url.url.replace(
                            'www.is-wireless.com',
                            'api.is-wireless.com'
                        )
                        "
                        :title="image.img_url.title ? image.img_url.title : ''"
                        :alt="image.img_url.alt ? image.img_url.alt : ''"
                    />
                </div>
            </div>
        </div>
    </div>
</template>
  
  <script>
  import { Swiper, Navigation, Autoplay } from 'swiper'
  
  export default {
    name: 'logos_swiper',
    props: {
      data: {
        type: Object,
        required: true,
      },
    },
    data() {
      return {
        swiper: null,
        swiperOptionsObject: {
        modules: [Navigation, Autoplay],
        slidesPerView: 'auto',
        spaceBetween: 0,
        direction: 'horizontal',
        speed: 600,
        loop: true,
        autoplay: {
          delay: 3000,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        },
      },
      }
    },

    mounted(){
      this.swiper = new Swiper('#logosSwiper',this.swiperOptionsObject)
    },
  }
  </script>
  