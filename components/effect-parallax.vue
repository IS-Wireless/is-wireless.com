<template>
  <div ref="container" class="absolute inset-0 overflow-hidden">
    <div
      class="absolute h-full w-full will-change-transform"
      :class="innerClass"
      :style="parallaxStyle"
    >
      <slot> </slot>
    </div>
  </div>
</template>

<script>
import { useElementBounding } from '@vueuse/core'
import { computed, ref, toRef } from '@vue/composition-api'
export default {
  name: 'EffectParallax',
  props: {
    innerClass: {
      type: String,
      default: '',
    },
    parallaxScale: {
      type: Number,
      default: 0.2,
    },
  },
  setup(props) {
    const container = ref(null)
    const { x, y, top, right, bottom, left, width, height } =
      useElementBounding(container)
    const parallaxScale = toRef(props, 'parallaxScale')
    const parallaxStyle = computed(() => ({
      transform: `translateY(${-y.value * parallaxScale.value}px)`,
    }))
    return { container, y, parallaxStyle }
  },
}
</script>

<style></style>
