<template>
  <div class="mx-auto w-4/5 tablet:w-full">
    <div class="flex flex-col items-start p-4 bg-gray-light rounded-md">
      <h3
        v-if="data.title"
        class="text-2xl text-blue-main pb-4"
        v-html="data.title"
      ></h3>
      <ul>
        <li v-for="(item, index) in data.list" :key="index" class="mb-2">
          <span class="flex">
            <div class="pl-2 pr-4 pt-2">
              <svg
                class="fill-current text-gray-dark"
                width="10px"
                height="10px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 3 6"
              >
                <path d="M 0 0 L 0 6 L 3 3 Z" />
              </svg>
            </div>
            <p v-if="item.point" class="text-sm" v-html="item.point"></p>
          </span>
        </li>
      </ul>
      <CustomLink
        v-if="data.link"
        :class="'text-sm text-white uppercase ml-5 tablet:ml-0 tablet-wide:ml-5 px-10 py-3 rounded-full bg-blue-main hover:bg-white hover:text-black duration-300 mt-3 mb-4 tablet:mb-3'"
        :url="data.link.url"
        :title="data.link.title"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'sidebar_blocks_list',
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style></style>
