<template>
  <div class="w-full mb-32 flex flex-wrap">
    <div
      v-for="(item, index) in data.block"
      :key="index"
      class="p-[6px] basis-full tablet-small:basis-1/2 tablet-wide:basis-1/3 flex-shrink flex-grow tablet-small:flex-grow-0 h-full min-w-[220px] aspect-[4/3] max-h-80"
    >
      <CustomLink
        class="group rounded-md bg-gray-light flex items-end h-full overflow-hidden"
        :url="item.link.url"
      >
        <div class="relative mx-6 h-1/2 mb-4">
          <h2
            class="text-blue-main text-3xl transform transition duration-300 translate-y-full group-hover:translate-y-0"
          >
            {{ item.title }}
          </h2>
          <div
            class="absolute h-full top-8 left-0 text-blue-main transform transition duration-300 translate-y-full group-hover:translate-y-0"
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
export default {
  name: 'section_grid_links',
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style></style>
