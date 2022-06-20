<template>
  <div v-if="data.tab" class="w-full tablet-wide:max-w-[75%]">
    <ul class="hidden tablet-wide:flex gap-1 w-full">
      <li
        class="grow py-3 mb-8 tablet-wide:mb-14 text-center bg-gray-light transition cursor-pointer border border-solid"
        :class="
          selected == index
            ? 'border-blue-main hover:border-blue-main'
            : 'border-transparent hover:border-blue-main-hover/30'
        "
        v-for="(item, index) in data.tab"
        :key="index"
        @click="setSelectedTab(index)"
      >
        <h4 v-if="item.title" class="text-xl" v-html="item.title"></h4>
      </li>
    </ul>
    <div class="w-full">
      <div
        class="w-full relative"
        v-for="(item, index) in data.tab"
        :key="index"
      >
        <transition name="fade" mode="out-in">
          <div
            v-if="index == selected || !rctvTabletWide.value"
            class="overflow-hidden transition-all duration-300"
            data-mobile-collapsed="false"
            :style="rctvTabletWide.value ? 'height: auto;' : ''"
          >
            <h4
              v-if="item.title"
              class="tablet-wide:hidden text-xl w-full py-2 mb-5 text-center bg-gray-light transition cursor-pointer border border-solid border-transparent"
              @click="collapseTab($event)"
              v-html="item.title"
            ></h4>
            <div class="w-full">
              <div
                v-if="item.content"
                class="content-html mb-10 w-full"
                v-html="item.content"
              ></div>
              <div v-if="data.table && index === 0">
                <section_table
                  :data="data.table"
                  @collapse_change="setTabHeightAuto(index)"
                />
              </div>
              <div v-if="item.collapse_title && item.collapse_content">
                <section_collapse
                  :data="{
                    title: item.collapse_title,
                    content: item.collapse_content,
                  }"
                  @collapse_change="setTabHeightAuto(index)"
                />
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import section_collapse from '@/components/collapse.vue'
import section_table from '@/components/table.vue'

import { useMediaQuery } from '@vueuse/core'
import { computed, reactive } from '@vue/composition-api'
export default {
  name: 'section_tabs',
  components: {
    section_collapse,
    section_table,
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const isTabletWide = useMediaQuery('(min-width: 1024px)')
    const rctvTabletWide = computed(() => reactive(isTabletWide))

    return { rctvTabletWide }
  },
  data() {
    return {
      selected: 0,
    }
  },
  mounted() {
    window.addEventListener('resize', this.setExpandedHeight)
  },
  unmounted() {
    window.removeEventListener('resize', this.setExpandedHeight)
  },
  methods: {
    setSelectedTab(index) {
      this.selected = index
    },

    collapseTab(event) {
      const container = event.currentTarget.parentNode
      const titleBar = event.currentTarget
      const content = container.lastElementChild
      let collapseState =
        container.getAttribute('data-mobile-collapsed') === 'true'

      if (collapseState) {
        container.style.height = titleBar.scrollHeight + 10 + 'px'
        container.style.height =
          titleBar.scrollHeight + content.scrollHeight + 50 + 'px'
        container.setAttribute('data-mobile-collapsed', false)
      } else {
        // container.style.height = container.scrollHeight + 'px'
        container.style.height =
          titleBar.scrollHeight + content.scrollHeight + 50 + 'px'
        container.style.height = titleBar.scrollHeight + 10 + 'px'
        container.setAttribute('data-mobile-collapsed', true)
      }
    },
    setTabHeightAuto(index) {
      const container = document.querySelectorAll('[data-mobile-collapsed]')[
        index
      ]
      if (container.getAttribute('data-mobile-collapsed') === 'false') {
        container.style.height = 'auto'
      }
    },
    setExpandedHeight() {
      const expandedTabs = document.querySelectorAll(
        '[data-mobile-collapsed = false]'
      )
      expandedTabs.forEach((tab) => {
        tab.style.height = 'auto'
      })
    },
  },
}
</script>

<style lang="postcss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
}

[data-mobile-collapsed='false'] h4 {
  @apply border-blue-main;
}

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
