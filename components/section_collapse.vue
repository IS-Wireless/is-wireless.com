<template>
  <div class="w-full flex flex-col">
    <div
      class="flex group items-center mb-5 cursor-pointer"
      @click="toggleExpandedHeight()"
    >
      <span class="shrink-0 grow-0 h-5 w-5 relative">
        <svg
          width="20px"
          height="20px"
          viewBox="-7 -20 48 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="absolute bottom-0 left-0 inline-block stroke-gray-dark group-hover:stroke-blue-main transform transition duration-300"
          :class="{ 'rotate-180': !collapsed }"
        >
          <path
            d="M 0 0 L 34 0"
            stroke-width="6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <svg
          width="20px"
          height="20px"
          viewBox="-7 -20 48 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="absolute bottom-0 left-0 inline-block stroke-gray-dark group-hover:stroke-blue-main transform transition duration-300"
          :class="{ 'rotate-90': !collapsed }"
        >
          <path
            d="M 17 -17 L 17 17"
            stroke-width="6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </span>
      <span
        v-if="data.title"
        class="text-2xl tablet:text-3xl ml-4 text-blue-main"
        v-html="data.title"
      >
      </span>
    </div>
    <div
      v-if="data.content"
      ref="contentContainer"
      class="content-html overflow-hidden transition-all duration-300"
      :style="{ height: contentHeight + 'px' }"
      v-html="data.content"
    ></div>
  </div>
</template>

<script>
export default {
  name: 'section_collapse',
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      collapsed: true,
      contentHeight: 0,
    }
  },
  mounted() {
    window.addEventListener('resize', this.setExpandedHeight)
  },
  unmounted() {
    window.removeEventListener('resize', this.setExpandedHeight)
  },
  methods: {
    toggleExpandedHeight() {
      let container = this.$refs.contentContainer
      this.collapsed = !this.collapsed
      if (this.collapsed && container) {
        this.$emit('collapse_change')

        this.contentHeight = 0
      } else if (container) {
        this.contentHeight = container.scrollHeight
        this.$emit('collapse_change')
      }
    },
    setExpandedHeight() {
      let container = this.$refs.contentContainer
      if (!this.collapsed && container) {
        this.contentHeight = container.scrollHeight
      }
    },
  },
}
</script>

<style lang="postcss" scoped>
.content-html :deep( h1 ),
h2,
h3,
h4,
h5,
h6,
li,
b,
u,
div,
code {
  @apply text-gray-dark font-lato;
}
.content-html :deep( h1 ){
  @apply text-4xl tablet:text-[50px] mb-5;
}
.content-html :deep( h2 ){
  @apply text-3xl tablet:text-4xl mb-5;
}
.content-html :deep( h3 ){
  @apply text-2xl tablet:text-3xl mb-5;
}
.content-html :deep( h4 ){
  @apply text-xl tablet:text-2xl mb-5;
}
.content-html :deep( h5 ){
  @apply text-lg tablet:text-xl mb-5;
}
.content-html :deep( h6 ){
  @apply text-base tablet:text-lg mb-5;
}
.content-html :deep( p ){
  @apply text-base inline-block mb-5 w-full text-justify;
}

.content-html :deep( li ){
  @apply text-gray-dark;
}

.content-html :deep( ol li ){
  @apply list-disc ml-5;
}

.content-html :deep( ul ){
  @apply mb-5;
}

.content-html :deep( hr ){
  @apply block mt-5 mb-10;
}

.content-html :deep( code ){
  @apply block whitespace-pre-wrap max-w-2xl bg-gray-light p-2.5 tablet:p-5 rounded-md mb-10;
}

.content-html :deep( img ){
  @apply max-w-full w-auto h-auto;
}

.content-html :deep( iframe ){
  @apply max-w-full h-auto;
}

.content-html :deep( iframe[src*='www.youtu'] ){
  @apply w-full aspect-video;
}
.content-html :deep( *:not(p):not(iframe) ){
  width: auto !important;
  max-width: 100% !important;
}

.content-html :deep( .wp-caption-text ){
  width: 100% !important;
}
.content-html :deep( div ){
  @apply max-w-full;
}
</style>
