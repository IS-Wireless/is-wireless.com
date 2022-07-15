<template>
  <div>
    <h2
      v-if="data.title"
      class="block text-blue-main text-2xl tablet:text-3xl mb-10"
    >
      {{ data.title }}
    </h2>
    <ul
      v-if="data.block"
      class="flex flex-col tablet-wide:flex-row tablet-wide:justify-between"
    >
      <li
        v-for="(item, index) in data.block"
        :key="index"
        class="mb-2.5 tablet-wide:pr-8 tablet-wide:last:pr-0"
        :class="(data.block.length == 1 ? 'tablet-wide:basis-full' : (data.block.length == 2 ? 'tablet-wide:basis-1/2' : 'tablet-wide:basis-1/3'))"
      >
        <CustomLink
          v-if="item.link.url"
          class="p-7 flex rounded-md border border-solid border-gray-200 hover:border-blue-main transition"
          :url="item.link.url"
        >
          <p
            v-if="item.title"
            class="text-gray-dark transition text-xl"
            v-html="item.title"
          ></p>
        </CustomLink>
      </li>
    </ul>
  </div>
</template>

<script>
import CustomLink from './custom-link.vue'

export default {
  name: 'section_list_links_alternative',
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
