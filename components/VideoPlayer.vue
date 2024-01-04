<template>
  <div class="relative z-0 w-full h-full">
    <video
      autoplay
      playsinline
      loop
      muted
      loading="eager"
      preload
      ref="videoPlayer" 
      :poster="placeholderImgFormatted"
      class="block align-top bg-black object-cover w-full [&>*]:w-full [&>*]:h-full [&>*]:object-none desktop:[&>*]:object-cover h-full"
      >
      <source v-for="source,index in options.sources" :key="index" :src="source.src" :type="source.type" >
    </video>

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
// import videojs from 'video.js/core.es.js'

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
  setup(props){
    const img = useImage() 
    const placeholderImgFormatted = img(props.placeholderImg,{ width:400, height:400, format:'webp', quality: 5})
    
    return { placeholderImgFormatted }
  },
  mounted() {
    this.$nextTick(()=>{
      // this.player = videojs(
      //   this.$refs.videoPlayer,
      //   this.options
      //   ).play()
      this.$refs.videoPlayer.addEventListener('timeupdate',()=>{
        this.playerReady()
      },{
        once: true
      })
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
