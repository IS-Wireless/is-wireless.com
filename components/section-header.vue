<template>
  <div class="mb-10" :class="{'text-center':center}">
    <h2 class="header mb-5 mt-10 text-inherit" v-html="title"></h2>
    <hr class="header w-[100px] h-0 border-0 border-t-4 border-blue-main" :class="{'mx-auto':center}" />
  </div>
</template>

<script>
export default {
  name: 'SectionHeader',
  props: {
    title: {
      type: String,
      required: true,
      default: 'Section Title',
    },
    center:{
      type: Boolean,
      default: false
    }
  },
}
</script>

<style></style>
