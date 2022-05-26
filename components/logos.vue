<template>
  <div class="w-full">
    <div class="flex flex-wrap">
      <div
        v-for="item in data"
        :key="item.imgUrl"
        class="basis-1/2 tablet-wide:basis-1/3 flex justify-center items-center p-[5%]"
      >
        <nuxt-link
          v-if="item.url != ''"
          :to="item.url"
          class="block w-full p-1"
        >
          <nuxt-picture :src="item.imgUrl" class="w-full img-full" />
        </nuxt-link>
        <nuxt-picture v-else :src="item.imgUrl" class="w-full img-full p-1" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'logo_static',
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style></style>
