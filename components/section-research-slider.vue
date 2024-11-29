<template>
    <div class="w-full mb-16 tablet:mb-[100px]">
        <div class="flex flex-col tablet:flex-row gap-5 mb-10 tablet-wide:mb-24">
            <SectionHeader v-if="data.title" :title="data.title" class="text-gray-darkest [&_h2]:!mt-0 max-w-[420px] shrink-0"/>
            <div v-if="data.content" v-html="data.content" class="text-gray-dark [&_p]:text-xl tablet:[&_p]:text-2xl mb-5 max-w-2xl tablet:mx-auto">
            </div>
        </div>
      <Swiper class="swiper swiper-container overflow-hidden h-14 tablet:h-[70px] [&_.swiper-wrapper]:select-none [&_.swiper-wrapper]:flex [&_.swiper-wrapper]:w-full [&_.swiper-wrapper]:h-full [&_.swiper-wrapper]:items-center"
        :modules="[SwiperNavigation, SwiperAutoplay]"
        :slidesPerView="'auto'"
        :spaceBetween="0"
        :direction="'horizontal'"
        :speed="600"
        :loop="true"
        :loopedSlides="5"
        :autoplay="{
          delay: 3000,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        }"
        :breakpoints="{
          1248:{
            loopedSlides: 3,
          }
        }"
      >
        <SwiperSlide v-for="(item, index) in selectedPages" :key="index"
        class="swiper-duplicate-load-fix h-full pr-10 basis-full phone:basis-1/2 tablet-small:basis-1/3 desktop:basis-1/5 flex-grow-0 flex-shrink-0">
          <CustomLink :url="item.link">
            <nuxt-picture
              fit="outside"
              :src="item.acf.page_icon.replace(
                      'www.is-wireless.com',
                      'api.is-wireless.com'
                    ).replace($config.public.API_URL,'/app')
              "
              class="h-full flex justify-center"
              :title="item.acf.page_title ? item.acf.page_title : ''"
              sizes="sm:180px lg:360px"
              :img-attrs="{
                loading: 'lazy',
                class:
                  'w-auto h-full object-contain custom-filter duration-300 max-w-[200px] m-0 transition w-full',
              }"
            />
          </CustomLink>
        </SwiperSlide>
      </Swiper>
    </div>
  </template>

  
  <script setup>

    const props = defineProps({
      data: Object
    })

    const nuxtApp = useNuxtApp()

    const dataKey = computed(()=>{
      if (props.data?.selected) {
        return props.data.selected.map(item => item.ID).join(',')
      }
    })
    
    const { data: subPagesData } = await useAsyncData(dataKey.value,() => {
      return Promise.all(props.data?.selected?.map(async (item) => {
        return nuxtApp.$wp.pages().id(item.ID)
      })) 
    },{
      getCachedData(key){
        return nuxtApp.payload.data[key] || nuxtApp.static.data[key]
      }
    });

    const selectedPages = computed(()=>{
      if (subPagesData.value) {
        return subPagesData.value.filter(item => item.acf && item.acf.page_icon)
      }
      return []
    })

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
  