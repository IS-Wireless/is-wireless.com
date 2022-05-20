<template>
  <div class="gcse-searchresults-only"></div>
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
