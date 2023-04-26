<template>
  <div class="relative w-full h-full">
    <noscript>
        <video 
        :src="options.sources[0].src"
        :type="options.sources[0].type"
        autoplay
        playsinline
        loop
        muted
        loading="lazy"
        preload="none"
        class="block align-top bg-black object-cover w-full [&>*]:w-full [&>*]:h-full [&>*]:object-none desktop:[&>*]:object-cover h-full"
      ></video>      
    </noscript>

    <video v-if="isMounted"
      playsinline
      loop
      muted
      loading="lazy"
      preload="none"
      ref="videoPlayer"
      class="block align-top bg-black object-cover w-full [&>*]:w-full [&>*]:h-full [&>*]:object-none desktop:[&>*]:object-cover h-full"
    ></video>
    
    <nuxt-picture
      src="video_ poster.jpg"
      alt="Poster"
      width="1920px"
      height="768px"
      class="h-full absolute inset-0"
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
    options: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  data() {
    return {
      isMounted: false,
      player: null,
    }
  },
  mounted() {
    this.isMounted = true
    this.$nextTick(()=>{
      this.player = videojs(
        this.$refs.videoPlayer,
        this.options,
        this.playerReady
      ).play()
    })
  },
  methods: {
    playerReady() {
      this.$refs['videoPlayerPoster'].$el.classList.add('invisible')
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
.vjs-hidden {
  @apply hidden;
}
</style>
