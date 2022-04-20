<template>
  <div>
    <div class="w-full flex flex-col tablet-wide:flex-row my-10">
      <div class="tablet-wide:basis-1/3">
        <nuxt-picture :src="data.imgUrl" />
      </div>
      <div class="tablet-wide:basis-2/3 text-base block ml-6 mb-6">
        <h3 class="text-2xl">
          {{ data.name }}
        </h3>
        <div v-html="data.description" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Person',
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style></style>
