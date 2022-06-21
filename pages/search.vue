<template>
  <div class="relative z-10 flex flex-col tablet-wide:w-4/5 mx-auto">
    <Breadcrumb />
    <div class="search_wrapper w-4/5 mx-auto">
      <div class="gcse-searchresults-only"></div>
    </div>
  </div>
</template>
<script>
import Breadcrumb from '@/components/breadcrumb.vue'

export default {
  components: {
    Breadcrumb,
  },
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
<style scoped lang="postcss">
.search_wrapper >>> * {
  @apply p-0;
}

.search_wrapper >>> .gsc-adBlock,
.search_wrapper >>> .gsc-positioningWrapper,
.search_wrapper >>> .gsc-orderby-container,
.search_wrapper >>> .gs-image-box,
.search_wrapper >>> .gsc-url-top,
.search_wrapper >>> .gcsc-more-maybe-branding-root {
  @apply hidden;
}
.search_wrapper >>> .gsc-webResult.gsc-result .gsc-thumbnail-inside a {
  @apply inline-block text-blue-main hover:text-blue-main-hover visited:text-blue-main-hover font-lato font-normal text-lg mb-7 transition duration-200;
}

.search_wrapper >>> .gsc-webResult.gsc-result .gsc-thumbnail-inside a * {
  @apply text-inherit font-normal font-lato text-lg;
}

.search_wrapper
  >>> .gsc-webResult.gsc-result
  .gsc-thumbnail-inside
  a:visited
  * {
  @apply text-blue-main-hover;
}

.search_wrapper >>> .gsc-table-result .gs-snippet {
  @apply text-base font-lato font-normal text-gray-dark;
}

.search_wrapper >>> .gsc-table-result .gs-snippet b {
  @apply text-base font-lato font-normal text-gray-dark;
}

.search_wrapper >>> .gs-webResult.gs-result {
  @apply py-[50px] border-0 border-b-2 border-solid border-gray-light;
}
</style>
