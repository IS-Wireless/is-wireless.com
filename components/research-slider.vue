<template>
    <div class="w-full mb-16 tablet:mb-[100px]">
        <div class="flex flex-col items-center mb-10 tablet-wide:mb-24
        0">
            <SectionHeader v-if="data.title" :title="data.title" :center="true" class="text-gray-darkest [&_h2]:!mt-0 max-w-2xl shrink-0"/>
            <div v-if="data.content" v-html="data.content" class="text-gray-dark [&_p]:text-xl tablet:[&_p]:text-2xl max-w-3xl text-center tablet:mx-auto">
            </div>
        </div>
      <div id="researchSwiper" class="swiper swiper-container overflow-hidden h-14 tablet:h-[70px]">
          <div
            class="swiper-wrapper select-none flex w-full h-full items-center"
          >
            <div
              v-for="(item, index) in selectedPages"
              :key="index"
              class="swiper-slide swiper-duplicate-load-fix h-full pr-10 basis-full phone:basis-1/2 tablet-small:basis-1/3 desktop:basis-1/5 flex-grow-0 flex-shrink-0"
            >
            <CustomLink :url="item.link">
              <nuxt-picture
                v-if="item.acf && item.acf.page_icon"
                fit="outside"
                :src="item.acf.page_icon.replace(
                        'www.is-wireless.com',
                        'api.is-wireless.com'
                      )
                "
                class="h-full flex justify-center"
                :title="item.acf.page_title ? item.acf.page_title : ''"
                sizes="sm:180px lg:360px"
                :img-attrs="{
                  loading: 'lazy',
                  class:
                    'w-auto h-full object-contain custom-filter duration-300 max-w-[200px] m-0 opacity-0 transition w-full',
                }"
                @load="imageAnimateLoad($event)"
              />
            </CustomLink>
            </div>
          </div>
        </div>
    </div>
  </template>
  
  <script>
  import CustomLink from './custom-link.vue'
  import { Swiper, Navigation, Autoplay } from 'swiper'
  
  export default {
    name: 'section_research_slider',
    components: {
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
        subpagesData: this.$store.getters['general/getPagesData'],
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
    computed:{
      selectedPages(){
        let pages = []
        let selectedIds = this.data.selected
        if (selectedIds) {
          for (let i = 0; i < selectedIds.length; i++) {
            let page = this.subpagesData[selectedIds[i].ID]
            if (page?.acf?.page_icon) {
              pages.push(page)
            }
          }
        }

        return pages 
      }
    },
    mounted(){
      this.swiper = new Swiper('#researchSwiper',this.swiperOptionsObject)
    },
    methods: {
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
  