<template>
  <div class="mb-10">
    <h2 class="header mb-5 mt-10 text-inherit">
      {{ title }}
    </h2>
    <hr class="header w-[100px] h-0 border-0 border-t-4 border-blue-main">
  </div>
</template>

<script>
export default {
  name: 'SectionHeader',
  props: {
    title: {
      type: String,
      default: 'Section Title',
      required: true,
    },
  },
}
</script>

<style></style>
