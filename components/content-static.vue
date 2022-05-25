<template>
  <div class="w-full tablet:max-w-[75%]">
    <span v-if="data.title" class="inline-block text-gray-dark mt-10 ">
      <SectionHeader :title="data.title" />
    </span>

    <div v-if="data.content" v-html="data.content"></div>
    <p
      v-for="item in data.text"
      :key="item"
      class="mb-5 tablet-wide:w-3/4 text-justify"
    >
      {{ item }}
    </p>
    <div
      v-for="(item, index) in data.image"
      :key="index"
      class="
        flex flex-col
        justify-center
        items-center
        tablet-wide:w-3/4 tablet-wide:mr-10
      "
    >
      <nuxt-picture
        fit="contain"
        class="mb-5"
        :src="item.url"
        :title="item.title"
      />
      <p
        v-if="item.title"
        class="grow-0 italic text-center mb-5"
      >
        {{ item.title }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'section_content',
  props: {
    data:{
      type: Object,
      required: false
    }
  },
}
</script>

<style></style>
