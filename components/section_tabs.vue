<template>
  <div v-if="data.tab" class="w-full tablet-wide:max-w-[75%]">
    <ul class="hidden tablet-wide:flex gap-1 w-full">
      <li
        v-for="(item, index) in data.tab"
        :key="index"
        class="grow py-3 mb-8 tablet-wide:mb-14 text-center bg-gray-light transition cursor-pointer border border-solid"
        :class="
          selected == index
            ? 'border-blue-main hover:border-blue-main'
            : 'border-transparent hover:border-blue-main-hover/30'
        "
        @click="setSelectedTab(index)"
      >
        <h4 v-if="item.title" class="text-xl" v-html="item.title"></h4>
      </li>
    </ul>
    <div class="w-full">
      <div
        v-for="(item, index) in data.tab"
        :key="index"
        class="w-full relative"
      >
        <Transition name="fade" mode="out-in">
          <div
            v-show="index === selected || !rctvTabletWide.value"
            class="overflow-hidden transition-all duration-300"
            :class="index === selected ? 'tablet:block' : 'tablet:hidden'"
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
        </Transition>
      </div>
    </div>
  </div>
</template>

<script>
import section_collapse from '~/components/section_collapse.vue'
import section_table from '@/components/table.vue'

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
      default: () => {},
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
  transition: opacity .3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

[data-mobile-collapsed='false'] h4 {
  @apply border-blue-main;
}

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
  @apply block mx-[10%] mt-5 mb-10;
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
