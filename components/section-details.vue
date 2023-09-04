<template>
  <section
    class="relative py-10 tablet-wide:pb-[100px] tablet-wide:pt-[60px] bg-white w-full text-gray-dark"
  >
    <div
      class="absolute z-0 top-0 inset-x-[-12.5%] border-0 border-t border-solid border-gray-light"
    ></div>
    <div
      class="relative z-10 flex flex-col items-center mx-auto max-w-xl mb-8 tablet:mb-12"
    >
      <SectionHeader
        v-if="data.title"
        :title="data.title"
        :center="true"
        class="text-gray-darkest"
      />
      <div
        v-if="data.description"
        class="content-html text-inherit text-center text-gray-dark"
        v-html="data.description"
      ></div>
    </div>
    <div
      v-if="data.list"
      class="w-full grid gap-[30px] grid-cols-1 tablet:grid-cols-2"
    >
      <DetailsTile
        v-for="(item, index) in data.list"
        :key="index"
        :data="item"
      />
    </div>
  </section>
</template>

<script>
import DetailsTile from './details-tile.vue'
import SectionHeader from './section-header.vue'

export default {
  name: 'section_details',
  components: {
    SectionHeader,
    DetailsTile,
  },
  props: {
    data: {
      type: Object,
      required: false,
    },
  },
}
</script>

<style scoped>
.content-html >>> p {
  @apply text-xl tablet:text-2xl;
}
</style>
