<template>
  <div class="w-full">
    <h1
      v-if="title"
      class="mb-5 pt-14 tablet-wide:w-4/5 text-2xl tablet:text-3xl"
    >
      {{ title }}
    </h1>
    <p
      v-for="item in text"
      :key="item"
      class="mb-5 tablet-wide:w-3/4 text-justify"
    >
      {{ item }}
    </p>
    <div
      v-for="(item, index) in image"
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
  name: 'ContentStatic',
  props: {
    title: {
      type: String,
      required: false,
    },
    text: {
      type: Array,
      required: false,
    },
    image: {
      type: Array,
      required: false,
    },
  },
}
</script>

<style></style>
