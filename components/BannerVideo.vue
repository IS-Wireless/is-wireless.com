<template>
  <section class="relative w-full h-[480px] phone-wide:h-[640px] tablet-wide:h-[768px]">
    <PopupVideo
      v-if="data.default.video.link"
      ref="popupVideoRef"
      :videoSrc="data.default.video.link"
    />

    <VideoPlayer :options="videoOptions" :placeholderImg="'/video_poster.jpg'" />

    <div
      v-if="data.default"
      class="absolute inset-0 flex justify-between items-start flex-col text-5xl bg-black/50 z-10 tablet:pb-20"
    >
      <div class="tablet:h-10 desktop:h-16"></div>
      <div class="flex justify-between items-center w-4/5 container mx-auto relative">
        <div class="tablet-wide:basis-1/2">
          <h1
            v-if="data.default && data.default.content"
            ref="content1"
            class="duration-300 text-3xl tablet:text-4xl desktop:text-5xl text-white mb-9 tablet:mb-10 pr-10 tablet:pr-0 after:block after:content-[''] after:w-[100px] after:h-1 after:bg-blue-main after:mt-5"
          >
            {{ data.default.content }}
          </h1>

          <div
            v-if="data.default.links"
            ref="content2"
            class="duration-300 flex flex-col tablet:flex-row pr-5 tablet:pr-0"
          >
            <CustomLink
              v-for="(item, index) in data.default.links"
              :key="index"
              :isExternal="false"
              :url="item.url_link ? item.url_link : ''"
              :title="item.title_link ? item.title_link : ''"
              class="flex w-fit items-center text-sm tablet:text-base text-white hover:text-white font-medium uppercase px-6 tablet:px-8 py-[18px] tablet:py-4 rounded-full tablet:mr-[50px] duration-300 tablet:mb-0 mb-6 after:content-[''] after:block after:w-[25px] after:h-0.5 after:bg-white after:ml-5 after:transition after:duration-300 hover:after:translate-x-1"
              :class="index > 0 ? 'border border-solid border-white hover:bg-white/25' : 'bg-blue-main hover:bg-blue-main-hover'"
            />
          </div>
        </div>
        <div v-if="data.default.video.link" class="hidden tablet-wide:block" :delay="300">
          <div class="group cursor-pointer flex justify-center items-center mr-5" @click="togglePopup">
            <div
              class="flex justify-center items-center p-2 w-10 tablet:w-20 aspect-square shrink-0 mr-3 border-2 border-white group-hover:border-blue-main bg-white/20 group-hover:bg-blue-main/20 rounded-full transition duration-300"
            >
              <svg
                class="fill-white group-hover:fill-blue-main transition duration-300"
                width="28"
                height="26"
                viewBox="-2 0 21 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M21 13L7.65417e-07 25.1244L1.82536e-06 0.875644L21 13Z" />
              </svg>
            </div>
            <span
              v-if="data.default.video.title"
              class="text-white text-xl tablet:text-2xl group-hover:text-blue-main transition duration-300"
            >
              {{ data.default.video.title }}
            </span>
          </div>
        </div>
      </div>
      <div class="w-4/5 container mx-auto">
        <nuxt-img
          v-if="data.default.image"
          width="550"
          height="160"
          class="duration-300 block mb-5 w-1/2 tablet:w-1/3 max-w-[280px] ml-auto"
          :src="data.default.image.url ? data.default.image.url : ''"
          :alt="data.default.image.alt ? data.default.image.alt : ''"
          :title="data.default.image.title ? data.default.image.title : ''"
        />
      </div>
    </div>
  </section>
</template>

<script setup>

const props = defineProps({
  data: {
    type: Object,
    required: true,
    default: () => ({}),
  },
})

const runtimeConfig = useRuntimeConfig()
const popupVideoRef = ref(null)
const videoOptions = {
  autoplay: true,
  controls: false,
  muted: true,
  loop: true,
  fill: true,
  sources: [
    {
      src: `${runtimeConfig.public.API_URL}/wp-content/uploads/2024/11/IS-Wireless-video-background_cropped.webm`,
      type: 'video/webm',
    },
    {
      src: `${runtimeConfig.public.API_URL}/wp-content/uploads/2024/11/IS-Wireless-video-background_cropped.mp4`,
      type: 'video/mp4',
    },
    {
      src: `${runtimeConfig.public.API_URL}/wp-content/uploads/2022/10/IS-Wireless-video-background-poprawione.webm`,
      type: 'video/webm',
    },
  ],
}

const togglePopup = () => {
  if (popupVideoRef.value) popupVideoRef.value.togglePopup()
}
</script>

<style lang="postcss" scoped>
.swiper .swiper-slide picture :deep(img) {
  @apply min-w-full h-full object-cover;
}

.swiper :deep(.swiper-pagination.swiper-pagination) {
  @apply hidden w-auto z-20 static pointer-events-none tablet:flex flex-col justify-center items-center;
}

.swiper :deep(.swiper-pagination .swiper-pagination-bullet) {
  @apply w-3 h-3 mx-0 my-[5px] bg-transparent border border-white border-solid transition duration-200 opacity-100 hover:bg-white/25;
}

.swiper :deep(.swiper-pagination .swiper-pagination-bullet.swiper-pagination-bullet-active) {
  @apply bg-blue-main border-blue-main;
}
</style>
