<template>
    <section class="relative py-10 tablet-wide:pb-[270px] tablet-wide:pt-[60px] bg-white w-full text-gray-dark">
        <div class="relative z-10 flex flex-col items-center mx-auto max-w-lg mb-10 tablet:mb-20">
            <SectionHeader v-if="data.title" :title="data.title" :center="true" class="text-gray-darkest" />
            <div
            v-if="data.description"
            class="content-html text-inherit text-center text-gray-dark"
            v-html="data.description"
            ></div>
        </div>
        <div v-if="data.list" class=" relative z-10 w-full grid gap-[30px] grid-cols-2 tablet:gap-10 desktop:gap-[100px] tablet:grid-cols-4">
            <PersonTile v-for="item,index in data.list" :key="index" :data="item"/>
        </div>
        <div class="absolute z-0 inset-y-0 inset-x-[-12.5%] bg-gray-light">
        </div>
    </section>
  </template>
  
  <script>
  import PersonTile from './person-tile.vue';
import SectionHeader from './section-header.vue'
  
  export default {
    name: 'section_team',
    components: {
    SectionHeader,
    PersonTile
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
.content-html >>> p{
    @apply text-xl tablet:text-2xl
}
</style>