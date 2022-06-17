<template>
  <div
    class="p-[6px] basis-full tablet-small:basis-full tablet-wide:basis-1/3 flex-shrink flex-grow tablet-small:flex-grow-0 overflow-hidden tablet-wide:min-h-[350px]"
  >
    <CustomLink
      class="group rounded-md bg-gray-light flex flex-col h-full p-2.5 overflow-hidden"
      :url="pagePath"
      ><h2 v-if="data.acf.page_title" class="text-blue-main text-3xl pt-0.5">
        {{ data.acf.page_title }}
      </h2>
      <nuxt-picture
        v-if="data.acf.page_icon"
        class="py-5"
        :imgAttrs="{
          class:
            'h-24 max-w-[75%] phablet:max-w-[60%] tablet:max-w-[75%] object-contain',
        }"
        :src="data.acf.page_icon"
      />
      <p v-if="data.acf.page_description">
        {{ data.acf.page_description }}
      </p>
      <div
        class="text-blue-main pt-2.5 mt-auto transform tablet:translate-y-full group-hover:translate-y-0 transition duration-300"
      >
        <span
          class="inline-block w-[15px] h-1 align-middle rounded-full bg-blue-main transition"
        />
        <span class="text-blue-main">More details</span>
      </div>
    </CustomLink>
  </div>
</template>

<script>
export default {
  name: 'ProjectTile',
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  computed: {
    pagePath() {
      return this.data.link.replace('https://www.is-wireless.com', '')
    },
  },
}
</script>

<style></style>
