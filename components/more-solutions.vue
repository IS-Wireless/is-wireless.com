<template>
  <div>
    <h2 class="block text-blue-main text-2xl tablet:text-3xl mb-10">
      More solutions
    </h2>
    <ul class="flex flex-col tablet-wide:flex-row tablet-wide:justify-between">
      <li
        v-for="item in data.block"
        :key="item.title"
        class="
          mb-2.5
          tablet-wide:basis-1/3 tablet-wide:pr-8 tablet-wide:last:pr-0
        "
      >
        <nuxt-link
          class="
            p-7
            flex
            rounded-md
            border border-solid border-gray-200
            hover:border-blue-main
            transition
          "
          :to="item.link.url"
        >
          <p class="text-gray-dark transition text-xl">
            {{ item.title }}
          </p>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'section_list_links_alternative',
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style></style>
