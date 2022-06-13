<template>
  <ul class="mb-14">
    <li
      v-for="item in data"
      :key="item.text"
      class="group flex items-center my-5"
    >
      <div class="relative w-10 h-10 flex-shrink-0 flex-grow-0 flex">
        <nuxt-picture
          width="40px"
          height="40px"
          class="p-2 rounded-full bg-blue-main-hover group-hover:bg-blue-main transition duration-300 transform group-hover:scale-90 z-10"
          :src="item.iconUrl"
          :alt="'List item icon'"
        />
        <div
          class="absolute w-8 h-8 m-1 top-0 left-0 border-[5px] border-solid border-blue-main rounded-full transform group-hover:animate-[ping_1s_cubic-bezier(0,0,0.2,1)_forwards_100ms] transition duration-700"
        />
      </div>
      <p class="mx-5 text-inherit group-hover:text-blue-main transition">
        {{ item.text }}
      </p>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'List',
  props: {
    data: {
      type: Array,
      default: null,
      required: true,
    },
  },
}
</script>
