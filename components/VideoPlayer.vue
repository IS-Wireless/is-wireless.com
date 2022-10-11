<template>
  <div class="relative w-full h-full">
    <video
      ref="videoPlayer"
      class="video-js object-cover w-full [&>*]:object-cover"
    ></video>
  </div>
</template>

<script>
import videojs from 'video.js'

import 'video.js/dist/video-js.css'
export default {
  name: 'VideoPlayer',
  props: {
    options: {
      type: Object,
      default() {
        return {}
      },
    },
    time: {
      type: Number,
      default() {
        return 0
      },
    },
  },
  watch: {
    time: function (start, end) {
      this.player.currentTime(end)
    },
  },
  data() {
    return {
      player: null,
    }
  },
  mounted() {
    this.player = videojs(this.$refs.videoPlayer, this.options, () => {
      this.player.log('onPlayerReady', this)
    })
  },
  beforeDestroy() {
    if (this.player) {
      this.player.dispose()
    }
  },
}
</script>
