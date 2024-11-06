<template>
  <div class="relative z-0 w-full h-full">
    <video
      autoplay
      playsinline
      loop
      muted
      ref="videoPlayer" 
      :poster="placeholderImgFormatted"
      class="block align-top bg-black object-cover w-full [&>*]:w-full [&>*]:h-full [&>*]:object-none desktop:[&>*]:object-cover h-full"
      loading="lazy"
      >
      <source v-for="source,index in options.sources" :key="index" :src="source.src" :type="source.type" >
    </video>

    <div v-if="placeholderImg" 
      class="h-full absolute inset-0 pointer-events-none transition duration-300"
      ref="videoPlayerPoster"
    >
      <nuxt-picture
        :src="placeholderImg"
        alt="Poster"
        width="1920"
        height="768"
        class="h-full w-full "
        :imgAttrs="{ fetchpriority: 'high',class: 'h-full object-cover' }"
        loading="eager"
        critical="true"
      />
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  placeholderImg: {
    type: String
  },
  options: {
    type: Object,
    default: () => ({})
  }
})

const img = useImage()
const placeholderImgFormatted = computed(() => 
  img(props.placeholderImg, { width: 400, height: 400, format: 'webp', quality: 5 })
)

const videoPlayer = ref(null)
const videoPlayerPoster = ref(null)

function playerReady() {
  if (props.placeholderImg) {
    videoPlayerPoster.value.classList.add('opacity-0')
  }
}

onMounted(() => {
  videoPlayer.value.addEventListener('timeupdate', () => {
    playerReady()
  }, { once: true })
})
</script>

<style>
.vjs-poster,
.vjs-hidden,
.vjs-text-track-display,
.vjs-control-bar,
.vjs-big-play-button,
.vjs-loading-spinner
 {
  @apply hidden;
}
</style>
