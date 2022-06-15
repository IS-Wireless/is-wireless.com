<template>
  <div class="logos-container w-full max-w-[75%] mb-10">
    <div class="flex flex-wrap">
      <div
        v-for="(item, index) in data.galeria"
        :key="index"
        class="basis-1/2 tablet-wide:basis-1/3 flex justify-center items-center p-[5%] tablet-wide:p-[2.5%]"
      >
        <CustomLink
          v-if="item.url"
          :url="item.url"
          :isExternal="true"
          class="block w-full p-1"
        >
          <nuxt-picture :src="item.img_url" class="w-full img-full" />
        </CustomLink>
        <nuxt-picture v-else :src="item.img_url" class="w-full img-full p-1" />
      </div>
    </div>
  </div>
</template>

<script>
import CustomLink from '@/components/custom-link.vue'
export default {
  name: 'logo_static',
  components: {
    CustomLink,
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="postcss" scoped>
.has-sidebar .logos-container {
  @apply max-w-full;
}
</style>
