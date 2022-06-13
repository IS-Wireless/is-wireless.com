<template>
  <div class="w-full mb-32 flex flex-wrap">
    <div
      v-for="(item, index) in data.block"
      :key="index"
      class="p-[6px] basis-full tablet-small:basis-1/2 tablet-wide:basis-1/3 flex-shrink flex-grow tablet-small:flex-grow-0 min-w-[220px] aspect-[4/3] min-h-[200px] max-h-80"
    >
      <CustomLink
        class="group rounded-md bg-gray-light flex items-end h-full overflow-hidden"
        :url="item.link.url"
      >
        <div class="relative mx-6 w-full h-1/2 mb-4">
          <div class="relative">
            <h2
              class="text-blue-main text-2xl tablet:text-3xl absolute left-0 -bottom-10 transform transition duration-300 translate-y-1/2 tablet:translate-y-full group-hover:translate-y-0"
            >
              {{ item.title }}
            </h2>
          </div>
          <div
            class="absolute bottom-1 left-0 text-blue-main transform transition duration-300 translate-y-16 group-hover:translate-y-0"
          >
            <span
              class="inline-block w-[15px] h-1 align-middle rounded-full bg-blue-main-hover group-hover:bg-blue-main transition"
            />
            <span>{{ item.link.link_title }}</span>
          </div>
        </div>
      </CustomLink>
    </div>
  </div>
</template>

<script>
import CustomLink from './custom-link.vue'

export default {
  name: 'section_grid_links',
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

<style></style>
