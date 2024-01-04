<template>
  <div class="relative z-0 w-full h-full">
    <component v-if="$isServer" :is="'noscript'">
      <video
      autoplay
      loop
      muted
      loading="lazy"
      preload="none"
      class="relative z-10 block align-top bg-transparent object-cover w-full [&>*]:w-full [&>*]:h-full [&>*]:object-none desktop:[&>*]:object-cover h-full"
    >
        <source v-for="source,index in options.sources" :key="index" :src="source.src" :type="source.type" >
      </video>
    </component>
    <video
      v-else
      loop
      muted
      loading="lazy"
      preload="none"
      ref="videoPlayer" 
      :poster="placeholderImgFormatted"
      class="block align-top bg-black object-cover w-full [&>*]:w-full [&>*]:h-full [&>*]:object-none desktop:[&>*]:object-cover h-full"
    ></video>

    <nuxt-picture v-if="placeholderImg"
      :src="placeholderImg"
      alt="Poster"
      width="1920px"
      height="768px"
      class="h-full absolute inset-0 pointer-events-none transition duration-300"
      :imgAttrs="{ class: 'h-full object-cover' }"
      loading="eager"
      preload
      critical="true"
      ref="videoPlayerPoster"
    />
  </div>
</template>

<script>
import videojs from 'video.js/core.es.js'

export default {
  name: 'VideoPlayer',
  props: {
    placeholderImg: {
      type: String
    },
    options: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  data() {
    return {
      player: null,
    }
  },
  computed: {
    placeholderImgFormatted(){
      if (this.placeholderImg) {
        const img = useImage() 
        return img(this.placeholderImg,{ width: 500, height: 500, format:'webp', quality: 20})
      }
    }
  },
  mounted() {
      new PerformanceObserver((entryList) => {
    for (const entry of entryList.getEntries()) {
      console.log('LCP candidate:', entry.startTime, entry);
    }
  }).observe({type: 'largest-contentful-paint', buffered: true});


      this.player = videojs(
        this.$refs.videoPlayer,
        this.options
        ).play()
      this.$refs.videoPlayer.addEventListener('timeupdate',()=>{
        this.playerReady()
      },{
        once: true
      })

  },
  methods: {
    playerReady() {
      if (this.placeholderImg) {
        this.$refs['videoPlayerPoster']?.$el.classList.add('opacity-0')
      }
    },
  },
  beforeDestroy() {
    if (this.$refs.videoPlayer) {
      videojs(this.$refs.videoPlayer).dispose()
    }
  },
}
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
