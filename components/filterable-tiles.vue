<template>
  <div class="w-full mb-32 flex flex-wrap transition-all">
    <div
      v-for="(item, index) in tiles"
      :key="index"
      class="
        p-[6px]
        basis-full
        tablet-small:basis-1/2
        tablet-wide:basis-1/3
        flex-shrink flex-grow
        tablet-small:flex-grow-0
        min-w-[220px]
      "
      :class="{ hidden: item.type != filterBy && filterBy != 'All' }"
    >
      <a 
        class="
          group
          rounded-md
          border border-solid border-gray-light
          flex
          h-full
          overflow-hidden
          hover:border-blue-main
          transition
        "
        :href="item.link"
        target="_blank"
      >
        <div class="m-[30px] flex flex-col">
            <svgIcon :class="'w-[50px] h-[50px] mb-2.5 p-1'" :name="item.type"/>

          <h2
            class="text-lg tablet:text-2xl transform transition block my-[30px]"
          >
            {{ item.title }}
          </h2>
          <span
            class="
              inline-block
              mb-2.5
              w-10
              tablet:w-[75px]
              h-0.5
              tablet:h-1
              align-middle
              rounded-full
              bg-blue-main
            "
          />
          <p class="mt-[30px] text-sm tablet:text-base">
            {{ item.description }}
          </p>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import svgIcon from './svg-icon.vue'

export default {
  name: 'FilterableTiles',
  components:{
    svgIcon
  },
  props: {
    tiles: {
      type: Array,
      required: true,
    },
    filterBy: {
      type: String,
      required: false,
      default: '',
    },
  },
}
</script>

<style lang="postcss"></style>
