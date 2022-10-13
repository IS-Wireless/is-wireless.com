<template>
  <section
    v-bind="$attrs"
    class="bg-white relative w-full pb-8 tablet-wide:pb-14 overflow-hidden max-w-[1920px] mx-auto"
    :class="textClr"
  >
    <div
      class="absolute w-full h-full top-0 left-0"
      style="perspective: 5000px"
      v-if="data.image"
    >
      <nuxt-picture
        class="absolute -inset-7 tablet-wide:-inset-16 -z-10 transform after:content-[''] after:block after:absolute after:inset-0 after:bg-black/50 tablet-wide:after:bg-black/5"
        :imgAttrs="{
          class:
            'h-full max-w-[200%] w-[200%] tablet-wide:w-full tablet:max-w-full object-cover',
        }"
        ref="parallaxTarget"
        loading="lazy"
        :style="parallaxActive ? parallaxStyle : ''"
        :src="'/test-bg.png'"
        :title="data.image.title ? data.image.title : ''"
        :alt="data.image.alt ? data.image.alt : ''"
      ></nuxt-picture>
      <!-- <nuxt-picture
        class="absolute -inset-7 tablet-wide:-inset-16 -z-10 transform after:content-[''] after:block after:absolute after:inset-0 after:bg-black/50 tablet-wide:after:bg-black/5"
        :imgAttrs="{
          class:
            'h-full max-w-[200%] w-[200%] tablet-wide:w-full tablet:max-w-full object-cover',
        }"
        ref="parallaxTarget"
        :style="parallaxStyle"
        :src="
          data.image.url
            ? data.image.url.replace(
                'www.is-wireless.com',
                'api.is-wireless.com'
              )
            : ''
        "
        :title="data.image.title ? data.image.title : ''"
        :alt="data.image.alt ? data.image.alt : ''"
      ></nuxt-picture> -->
    </div>
    <div
      class="text-inherit relative z-10 flex flex-col tablet-wide:flex-row w-4/5 mx-auto container"
    >
      <div
        class="tablet-wide:flex-[0_1_50%] tablet-wide:w-1/2 pt-10 tablet-wide:pt-16"
      >
        <SectionHeader
          class="tablet:pr-[50px] desktop:pr-[140px]"
          v-if="data.title"
          :title="data.title"
        />
        <div
          v-if="data.content"
          class="content-html text-inherit tablet:p-[50px] desktop:pr-[140px]"
          v-html="data.content"
        ></div>
        <List
          v-if="data.list"
          :data="data.list"
          :isTransparent="true"
          :noEffect="true"
        />
      </div>
      <div class="tablet-wide:flex-[0_1_50%] tablet-wide:w-1/2"></div>
    </div>
  </section>
</template>

<script>
import SectionHeader from './section-header.vue'
import List from './list.vue'

import { useParallax } from '@vueuse/core'
import { ref, reactive, computed } from '@vue/composition-api'
import EffectAppear from './effect-appear.vue'

export default {
  name: 'section_two_column_bg',
  components: {
    SectionHeader,
    List,
    EffectAppear,
  },
  props: {
    parallaxActive: {
      type: Boolean,
      default: true,
    },
    textClr: {
      type: String,
      required: false,
      default: 'text-gray-dark',
    },
    data: {
      type: Object,
      required: false,
      default: () => {},
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

<style lang="postcss" scoped>
.content-html >>> h1,
.content-html >>> h2,
.content-html >>> h3,
.content-html >>> h4,
.content-html >>> h5,
.content-html >>> h6,
.content-html >>> li,
.content-html >>> b,
.content-html >>> u,
.content-html >>> *:not(p):not(iframe) {
  width: auto !important;
  max-width: 100% !important;
}

.content-html >>> .wp-caption-text {
  width: 100% !important;
}
.content-html >>> div,
.content-html >>> code {
  @apply text-inherit font-lato;
}
.content-html >>> h1 {
  @apply text-4xl tablet:text-[50px] mb-5;
}
.content-html >>> h2 {
  @apply text-3xl tablet:text-4xl mb-5;
}
.content-html >>> h3 {
  @apply text-2xl tablet:text-3xl mb-5;
}
.content-html >>> h4 {
  @apply text-xl tablet:text-2xl mb-5;
}
.content-html >>> h5 {
  @apply text-lg tablet:text-xl mb-5;
}
.content-html >>> h6 {
  @apply text-base tablet:text-lg mb-5;
}
.content-html >>> p {
  @apply text-base inline-block mb-5 w-full text-justify text-inherit;
}

.content-html >>> li {
  @apply text-gray-dark;
}

.content-html >>> ol li {
  @apply list-disc ml-5;
}

.content-html >>> ul {
  @apply mb-5;
}

.content-html >>> hr {
  @apply block mx-[10%] mt-5 mb-10;
}

.content-html >>> code {
  @apply block whitespace-pre-wrap max-w-2xl bg-gray-light p-2.5 tablet:p-5 rounded-md mb-10;
}

.content-html >>> img {
  @apply max-w-full w-auto h-auto;
}

.content-html >>> iframe {
  @apply max-w-full h-auto;
}

.content-html >>> iframe[src*='www.youtu'] {
  @apply w-full aspect-video;
}
</style>
