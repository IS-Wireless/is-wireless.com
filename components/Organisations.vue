<template>
  <section
    class="w-4/5 mx-auto flex flex-col-reverse tablet-small:flex-row select-none"
  >
    <div
      v-swiper="swiperOptionsObject"
      class="swiper swiper-container tablet-small:w-4/6 w-full"
    >
      <div class="swiper-wrapper">

        <div class="swiper-slide flex justify-center ">
          <a class="py-3 px-5 tablet-small:pr-10" :href="url">
          <img
            class="swiper-lazy h-full object-contain filter saturate-0 hover:saturate-100 duration-300"
            data-src="https://www.is-wireless.com/wp-content/uploads/2015/07/O-ran-1024x439.png"
          />
          </a>
        </div>
        <div class="swiper-slide flex justify-center ">
          <a class="py-3 px-5 tablet-small:pr-10" :href="url">
          <img
            class="swiper-lazy h-full object-contain filter saturate-0 hover:saturate-100 duration-300"
            data-src="https://www.is-wireless.com/wp-content/uploads/2021/02/tip_logo-200x132.png"
          />
          </a>
        </div>
        <div class="swiper-slide flex justify-center ">
          <a class="py-3 px-5 tablet-small:pr-10" :href="url">
          <img
            class="swiper-lazy h-full object-contain filter saturate-0 hover:saturate-100 duration-300"
            data-src="https://www.is-wireless.com/wp-content/uploads/2021/10/website-logo-header-withoutclaim-200x114.png"
          />
          </a>
        </div>
        <div class="swiper-slide flex justify-center ">
          <a class="py-3 px-5 tablet-small:pr-10" :href="url">
          <img
            class="swiper-lazy h-full object-contain filter saturate-0 hover:saturate-100 duration-300"
            data-src="https://www.is-wireless.com/wp-content/uploads/2020/04/AIOTI-e1610551262965.jpg"
          />
          </a>
        </div>
        <div class="swiper-slide flex justify-center ">
          <a class="py-3 px-5 tablet-small:pr-10" :href="url">
          <img
            class="swiper-lazy h-full object-contain filter saturate-0 hover:saturate-100 duration-300"
            data-src="https://www.is-wireless.com/wp-content/uploads/2021/02/CyberMadeinPoland.png"
          />
          </a>
        </div>
        <div class="swiper-slide flex justify-center ">
          <a class="py-3 px-5 tablet-small:pr-10" :href="url">
          <img
            class="swiper-lazy h-full object-contain filter saturate-0 hover:saturate-100 duration-300"
            data-src="https://www.is-wireless.com/wp-content/uploads/2021/02/ZIPSEE-Cyfrowa-Polska-200x74.png"
          />
          </a>
        </div>
      </div>


    </div>
    <div class="tablet-small:w-2/6 w-full flex items-center bg-gray-light">
      <div class="w-1/2 py-3 px-4 desktop:px-10">
      <a href="https://www.is-wireless.com/about-us/#membership-and-associations">
        <img src="https://www.is-wireless.com/wp-content/uploads/2021/02/NCBR.svg" alt="">
      </a>

      </div>
      <div class="w-1/2 py-3 px-4 desktop:px-10">
      <a href="https://www.is-wireless.com/about-us/#membership-and-associations">
        <img src="https://www.is-wireless.com/wp-content/uploads/2021/02/European-Union.svg" alt="">
      </a>
      </div>
    </div>
  </section>
</template>

<script>


export default {
  data() {
    return {
      url: 'https://www.is-wireless.com/about-us/#membership-and-associations',

      swiperIndex: 1,
      swiperCount: 0,
      iframeYoutubeSrc: '',
      liveURL: '',
      swiperOptionsObject: {
        slidesPerView: 2,
        spaceBetween: 0,
        direction: 'horizontal',
        speed: 600,
        loop: true,
        
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        preloadImages: false,
        lazy: {
          loadPrevNext: true,
        },
        breakpoints: {
          1664: {
            slidesPerView: 5,
          },
          1224: {
            slidesPerView: 4,
          },
          784: {
            slidesPerView: 3,
          },
          640: {
            slidesPerView: 2,
          },          
          512: {
            slidesPerView: 3,
          },
        }
      },
    }
  },

  
}
</script>

<style>

</style>
