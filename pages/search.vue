<template>
  <div>
    <Breadcrumb />
    <div
      class="search_wrapper px-[10%] tablet-wide:pr-0 tablet-wide:w-2/3 relative mt-[70px]"
    >
      <div class="absolute flex items-start z-10">
        <div
          class="top-0 left-0 w-[50px] h-[50px] tablet-wide:w-[76px] tablet-wide:h-[76px] shrink-0 flex items-center justify-center rounded-md bg-gray-light"
        >
          <svg
            width="26"
            height="26"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="fill-gray-default tablet-wide:w-10 tablet-wide:h-10"
          >
            <path
              d="M24.8564 24.8563C25.0479 24.6647 25.0479 24.3545 24.8563 24.163L17.6572 16.9639L17.6867 16.9311C19.3076 15.1315 20.3038 12.7588 20.3038 10.1518C20.3037 4.55414 15.7496 0 10.1519 0C4.55414 0 0 4.55414 0 10.1519C0 15.7496 4.55414 20.3038 10.1519 20.3038C12.7588 20.3038 15.1315 19.3076 16.9312 17.6867L16.9639 17.6573L24.163 24.8563C24.2587 24.9521 24.3843 25 24.5097 25C24.6351 25 24.7606 24.9521 24.8564 24.8563ZM10.1519 19.323C5.09531 19.323 0.980748 15.209 0.980748 10.1519C0.980748 5.09482 5.09531 0.980687 10.1519 0.980687C15.2085 0.980687 19.323 5.09476 19.323 10.1519C19.323 15.209 15.2085 19.323 10.1519 19.323Z"
            ></path>
          </svg>
        </div>
        <span
          class="text-2xl text-gray-dark ml-5 font-normal font-lato whitespace-nowrap"
        >
          Search results</span
        >
      </div>
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

.search_wrapper >>> .gsc-control-cse {
  @apply pt-[66px] relative;
}

.search_wrapper >>> .gsc-above-wrapper-area {
  @apply border-0 absolute top-7 left-[70px] z-10;
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

.search_wrapper >>> .gs-webResult .gsc-table-result .gs-snippet,
.search_wrapper >>> .gs-webResult .gsc-table-result .gs-snippet b,
.search_wrapper >>> .gsc-above-wrapper-area .gsc-result-info {
  @apply text-base font-lato font-normal text-gray-dark;
}

.search_wrapper >>> .gs-webResult.gs-result {
  @apply py-[50px] border-0 border-b-2 border-solid border-gray-light;
}

.search_wrapper >>> .gsc-cursor {
  @apply flex gap-[15px] flex-wrap justify-center tablet-wide:justify-start py-14;
}

.search_wrapper >>> .gsc-cursor .gsc-cursor-page {
  @apply hidden justify-center items-center w-11 h-11 border border-solid rounded-full hover:no-underline  text-base font-lato;
}

.search_wrapper >>> .gsc-cursor .gsc-cursor-page.gsc-cursor-current-page {
  @apply flex border-blue-main bg-blue-main text-white;
}

.search_wrapper >>> .gsc-cursor-page:not(.gsc-cursor-current-page + div ~ div) {
  @apply flex border-gray-default transition duration-200 hover:border-blue-main text-gray-default;
}

.search_wrapper >>> .gsc-cursor .gsc-cursor-page:last-child {
  @apply flex border-gray-default transition duration-200 hover:border-blue-main text-gray-default;
}

.search_wrapper
  >>> .gsc-cursor
  .gsc-cursor-page.gsc-cursor-current-page
  + div
  + div:not(:last-child) {
  @apply text-[0px] pointer-events-none flex border-0 after:content-['...'] after:block after:text-2xl after:text-gray-default after:relative;
}
</style>
