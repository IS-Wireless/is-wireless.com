<template>
  <div>
    <div class="w-full flex flex-col tablet-wide:flex-row my-10">
      <div class="tablet-wide:basis-1/3" v-if="data.person_image">
        <nuxt-picture :src="data.person_image.url" />
      </div>
      <div
        class="tablet-wide:basis-2/3 text-base block mt-5 tablet:mt-0 tablet:ml-6 mb-6"
      >
        <h3 class="text-2xl mb-5" v-if="data.person_name">
          {{ data.person_name }}
        </h3>
        <div
          v-html="data.person_description"
          v-if="data.person_description"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'section_person',
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style></style>
