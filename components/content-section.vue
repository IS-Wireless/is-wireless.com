<template>
  <section
    class="bg-white relative w-full pb-8 tablet-wide:pb-14 pt-10 tablet-wide:pt-16"
    :class="{
      ' bg-black/50 tablet-wide:bg-black/5 overflow-hidden': backgroundUrl,
    }"
  >
    <!-- <nuxt-picture class="absolute target-img h-full min-w-full top-0 left-0 -z-10 transform" v-if="backgroundUrl" ref="target" :src="backgroundUrl"></nuxt-picture> -->
    <div
      v-if="backgroundUrl"
      class="absolute -z-10 bottom-0 bg-[25%_center] mx-auto desktop:bg-cover transform w-full min-h-screen h-[120%]"
      :style="{ 'background-image': 'url(' + backgroundUrl + ')' }"
    ></div>
    <div class="flex flex-col tablet-wide:flex-row w-4/5 mx-auto">
      <div class="tablet-wide:flex-[1_1_50%] tablet-wide:mr-5">
        <slot name="left" />
      </div>
      <div
        ref="target"
        :style="container"
        class="tablet-wide:flex-[1_1_50%] tablet-wide:ml-5"
      >
        <slot name="right" />
      </div>
    </div>
  </section>
</template>

<script>
import { useParallax } from '@vueuse/core'
import { ref, reactive, computed } from '@vue/composition-api'

export default {
  name: 'ContentSection',
  props: {
    backgroundUrl: {
      type: String,
      required: false,
      default: '',
    },
  },
  data() {
    return {
      container: null,
    }
  },
  setup() {
    const target = ref(null)
    const parallax = reactive(useParallax(target))

    const layerBase = {
      position: 'absolute',
      height: '100%',
      width: '100%',
      transition: '.3s ease-out all',
    }

    computed(() => {
      this.data.container = {
        ...layerBase,
        transform: `translateX(${parallax.tilt * 10}px) translateY(${
          parallax.roll * 10
        }px) scale(1.33)`,
      }
    })
  },
  // mounted() {
  //   if (this.backgroundUrl !== undefined) {
  //     window.addEventListener('scroll', this.handletarget)
  //   }
  // },

  // beforeDestroy() {
  //   if (this.backgroundUrl !== undefined) {
  //     window.removeEventListener('scroll', this.handletarget)
  //   }
  // },
  // methods: {
  //   handletarget() {
  //     var element = this.$refs.target
  //     if (element) {
  //       element.style.transform =
  //         'translateY(' +
  //         (window.top.scrollY - (this.$el.clientTop + this.$el.clientHeight)) /
  //           100 +
  //         '%)'
  //     }
  //   },
  // },
}
</script>

<style></style>
