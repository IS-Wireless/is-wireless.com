<template>
  <div class="flex flex-col">
    <nuxt-picture
      v-if="data.image && data.image.url"
      width="300"
      height="345"
      :alt="
        data.image.alt
          ? data.image.alt
          : data.image.title
          ? data.image.title
          : ''
      "
      :title="data.image.title ? data.image.title : ''"
      :src="data.image.url"
      class="rounded-[5px] overflow-hidden mb-4"
    />
    <h3 v-if="data.name" class="text-gray-dark text-xl tablet:text-2xl">
      {{ data.name }}
    </h3>
    <p v-if="data.position" class="text-base tablet:text-lg text-blue-main mb-5">
      {{ data.position }}
    </p>
    <div v-if="data.description">
      <div
        class="overflow-hidden transition-all duration-500"
        :style="{ height: `${contentHeight}px` }"
      >
        <div ref="contentContainer" v-html="data.description" class="pb-5"></div>
      </div>
      <span class="group cursor-pointer block h-10 tablet:h-[52px] aspect-square bg-white rounded-full border border-gray-default relative hover:bg-blue-main hover:border-blue-main transition duration-300" @click="toggleExpandedHeight()"
      :class="{'!bg-blue-main !border-blue-main':!collapsed}">
        <svg
          width="20px"
          height="20px"
          viewBox="0 -20 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="absolute bottom-[calc(50%_-_10px)] left-[calc(50%_-_10px)] inline-block stroke-blue-main group-hover:stroke-white transform transition duration-300"
          :class="{'rotate-180 !stroke-white':!collapsed}"
        >
          <path
            d="M 0 0 L 40 0"
            stroke-width="4"
          />
        </svg>

        <svg
          width="20px"
          height="20px"
          viewBox="0 -20 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="absolute bottom-[calc(50%_-_10px)] left-[calc(50%_-_10px)] inline-block stroke-blue-main group-hover:stroke-white transform transition duration-300"
          :class="{'rotate-90 !stroke-white':!collapsed}"
        >
          <path
            d="M 20 -20 L 20 20"
            stroke-width="4"
          />
        </svg>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      collapsed: true,
      contentHeight: 0,
    }
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
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
