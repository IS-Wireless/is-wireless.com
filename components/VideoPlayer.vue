<template>
  <div class="relative w-full h-full">
    <video
      playsinline
      autoplay
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
import videojs from 'video.js'

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
      player: null,
    }
  },
  mounted() {
    this.player = videojs(
      this.$refs.videoPlayer,
      this.options,
      this.playerReady
    )
  },
  methods: {
    playerReady() {
      this.$refs['videoPlayerPoster'].$el.classList.add('invisible')
    },
  },
  beforeDestroy() {
    if (this.player) {
      this.player.dispose()
    }
  },
}
</script>
