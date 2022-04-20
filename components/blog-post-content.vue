<template>
  <div class="blog-post mt-20" v-html="data"></div>
</template>

<script>
export default {
  name: 'BlogPostContent',
  props: {
    data: {
      required: true,
    },
  },
}
</script>

<style lang="postcss" scoped>
.blog-post >>> h1,
.blog-post >>> h2,
.blog-post >>> h3 {
  @apply text-2xl tablet:text-3xl;
}
.blog-post >>> h4 {
  @apply text-xl;
}
.blog-post >>> p {
  @apply text-gray-dark mb-5;
}
</style>
