<template>
  <div class="mt-10 w-full">
    <p class="mb-5 text-gray-dark text-xl tablet:text-3xl">
      {{ data.title }}
    </p>
    <div v-if="data.link" class="mb-5">
      <CustomLink
        v-if="data.link.url"
        class="tablet-wide:mx-2.5 text-sm text-white uppercase px-7 py-3 rounded-full bg-blue-main hover:bg-white hover:text-black duration-300 tablet:mb-0 mb-6"
        :url="data.link.url"
        :title="data.link.title"
        :isExternal="
          data.link.url.includes('mailto:') || data.link.url.includes('tel:')
        "
      ></CustomLink>
      <span
        v-else
        class="tablet-wide:mx-2.5 text-sm text-white uppercase px-7 py-3 rounded-full bg-blue-main hover:bg-white hover:text-black duration-300 tablet:mb-0 mb-6"
        v-html="data.link.title"
      >
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'section_cta_basic',
  props: {
    data: {
      type: Object,
      required: true,
      default() {
        return {
          title: 'Title here',
          content: '<p>HTML content from WYSIWYG here</p>',
        }
      },
    },
  },
}
</script>

<style></style>
