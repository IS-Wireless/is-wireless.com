<template>
  <div class="relative z-10 flex flex-col tablet-wide:w-4/5 mx-auto">
    <div class="gcse-searchresults-only"></div>
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: this.title,
      script: [
        {
          src: 'https://cse.google.com/cse.js?cx=4a61290bc618cbfe1',
          async: true,
        },
      ],
    }
  },
}
</script>
<style scoped></style>
