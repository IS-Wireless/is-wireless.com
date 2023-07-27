<template>
    <div class="w-full">
        <div class="flex flex-col tablet:flex-row gap-5">
            <SectionHeader v-if="data.title" :title="data.title" class="text-gray-darkest [&_h2]:!mt-0"/>
            <div v-if="data.content" v-html="data.content" class="text-gray-dark text-xl tablet:text-2xl">
            </div>
        </div>
      <div
        v-for="(item, index) in data.selected"
        :key="index"
        :data="subpagesData[item.ID]"
      ></div>
    </div>
  </template>
  
  <script>
  import CustomLink from './custom-link.vue'
  
  export default {
    name: 'section_research_slider',
    components: {
      CustomLink,
    },
    props: {
      data: {
        type: Object,
        required: true,
      },
    },
    data() {
      return {
        subpagesData: this.$store.getters['general/getPagesData'],
      }
    },
  }
  </script>
  
  <style lang="postcss" scoped>
  </style>
  