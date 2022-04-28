<template>
  <section
    class="bg-white relative w-full pb-8 tablet-wide:pb-14 pt-10 tablet-wide:pt-16"
    :class="{
      'overflow-hidden': backgroundUrl,
    }"
    :style="[backgroundUrl ? { perspective: '5000px' } : '']"
  >
    <nuxt-picture
      class="absolute -inset-6 tablet-wide:-inset-14 -z-10 transform after:content-[''] after:block after:absolute after:inset-0 after:bg-black/50 tablet-wide:after:bg-black/5"
      :imgAttrs="{
        class:
          'h-full max-w-[200%] w-[200%] tablet-wide:w-full tablet:max-w-full object-cover',
      }"
      v-if="backgroundUrl"
      ref="parallaxTarget"
      :style="parallaxStyle"
      :src="backgroundUrl"
    ></nuxt-picture>
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
  setup() {
    const parallaxTarget = ref(null)
    const parallax = reactive(useParallax(parallaxTarget))
    const layerBase = {
      transition: '.3s ease-out all',
    }

    const parallaxStyle = computed(() => ({
      ...layerBase,
      transform: `rotateX(${parallax.roll * 20}deg) rotateY(${
        parallax.tilt * 20
      }deg)
      `,
    }))

    return { parallaxStyle, parallaxTarget }
  },
}
</script>

<style></style>
