<template>
  <div class="w-full">
    <div
      class="flex flex-col tablet-wide:flex-row justify-between p-7 rounded-md bg-gray-light"
    >
      <div>
        <h3
          v-if="data.title"
          class="text-2xl tablet:text-3xl block mb-5"
          v-html="data.title"
          :id="convertToId(data.title)"
        ></h3>
        <p
          v-if="data.subtitle"
          class="text-base block mb-5"
          v-html="data.subtitle"
        ></p>
      </div>
      <div v-if="data.link" class="flex shrink-0">
        <CustomLink
          v-if="data.link.url"
          class="block mt-auto tablet-wide:mx-2.5 text-sm text-white uppercase px-7 py-3 rounded-full bg-blue-main hover:bg-white hover:text-black duration-300 tablet:mb-0 mb-6"
          :url="data.link.url"
          :title="data.link.title ? data.link.title : ''"
        ></CustomLink>
        <span
          v-else-if="data.link.title"
          class="block mt-auto tablet-wide:mx-2.5 object-cover object- text-sm text-white uppercase px-7 py-3 rounded-full bg-blue-main hover:bg-white hover:text-black duration-300 tablet:mb-0 mb-6"
          v-html="data.link.title"
        >
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'section_cta_background_color',
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  methods: {
    convertToId: function (text) {
      return text.replace(' ', '-').toLowerCase()
    },
  },
}
</script>

<style></style>
