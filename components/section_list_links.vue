<template>
  <div v-if="!data.hide_section" class="w-full">
    <ul v-if="data?.block" class="flex flex-col">
      <li v-for="(item, index) in data.block" :key="index" class="mb-4 group">
        <CustomLink
          v-if="item.link.url"
          class="p-7 bg-gray-light flex justify-between items-center rounded-md"
          :url="item.link.url"
        >
          <p
            v-if="item.title"
            class="text-gray-dark group-hover:text-blue-main transition text-xl"
            v-html="item.title"
          ></p>
          <span
            v-if="item.link.link_title"
            class="hidden tablet-wide:inline-block text-blue-main text-base"
          >
            {{ item.link.link_title }}
            <svg
              width="12px"
              height="12px"
              viewBox="-2 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="stroke-blue-main transition inline-block transform -rotate-90"
            >
              <path
                d="M6 18L24 36L42 18"
                stroke-width="6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </CustomLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'section_list_links',
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style></style>
