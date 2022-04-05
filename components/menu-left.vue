<template>
  <div>
    <p>Table of Contents</p>
    <ul class="flex flex-col">
      <li class="py-3 border-0 border-b border-solid block border-l-gray-light w-4/5" v-for="item in elements" :key="item.title">
          <a :href="'#' + item.anchor"
            class="text-blue-main hover:text-blue-main-hover transition  w-full"
          >
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
                ></path></svg
            >
            {{item.title}}
          </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MenuLeft',
  props: {
    elements: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style></style>
