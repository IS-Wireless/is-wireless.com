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
      collapsing: false,
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
      if (!this.collapsing) {
        this.collapsed = !this.collapsed
        this.collapsing = true
        if (this.collapsed && container) {
          this.$emit('collapse', -this.contentHeight)
          this.contentHeight = 0
          this.collapsingReset()
        } else if (container) {
          this.contentHeight = container.scrollHeight
          this.$emit('collapse', this.contentHeight)
          this.collapsingReset()
        }
      }
    },
    setExpandedHeight() {
      let container = this.$refs.contentContainer
      if (!this.collapsed && container) {
        this.contentHeight = container.scrollHeight
      }
    },
    collapsingReset() {
      setTimeout(
        function () {
          this.collapsing = false
        }.bind(this),
        300
      )
    },
  },
}
</script>

<style lang="postcss" scoped>
.content-html >>> h1,
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
  @apply text-base inline-block mb-5 w-full text-justify;
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
.content-html >>> div {
  @apply max-w-full;
}
</style>
