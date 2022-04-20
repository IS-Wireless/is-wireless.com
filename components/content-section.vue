<template>
  <section
    class="relative w-full mb-8 tablet-wide:mb-14 pt-10 tablet-wide:pt-16"
    :class="{
      ' bg-black/50 tablet-wide:bg-black/5 overflow-hidden': backgroundUrl,
    }"
  >
    <!-- <nuxt-picture class="absolute parallax-img h-full min-w-full top-0 left-0 -z-10 transform" v-if="backgroundUrl" ref="parallax" :src="backgroundUrl"></nuxt-picture> -->
    <div
      v-if="backgroundUrl"
      ref="parallax"
      class="
        absolute
        -z-10
        bottom-0
        bg-[25%_center]
        mx-auto
        desktop:bg-cover
        transform
        w-full
        min-h-screen
        h-[120%]
      "
      :style="{ 'background-image': 'url(' + backgroundUrl + ')' }"
    />
    <div class="flex flex-col tablet-wide:flex-row w-4/5 mx-auto">
      <div class="tablet-wide:flex-[1_1_50%] tablet-wide:mr-5">
        <slot name="left" />
      </div>
      <div class="tablet-wide:flex-[1_1_50%] tablet-wide:ml-5">
        <slot name="right" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContentSection',
  props: {
    backgroundUrl: {
      type: String,
      required: false,
      default: '',
    },
  },
  mounted() {
    if (this.backgroundUrl !== undefined) {
      window.addEventListener('scroll', this.handleParallax)
    }
  },

  beforeDestroy() {
    if (this.backgroundUrl !== undefined) {
      window.removeEventListener('scroll', this.handleParallax)
    }
  },
  methods: {
    handleParallax() {
      var element = this.$refs.parallax
      element.style.transform =
        'translateY(' +
        (window.top.scrollY - (this.$el.clientTop + this.$el.clientHeight)) /
          100 +
        '%)'
    },
  },
}
</script>

<style></style>
