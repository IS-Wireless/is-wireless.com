<template>
  <ul
    class="flex flex-wrap w-full tablet-wide:w-[200%] desktop:w-full desktop:flex-nowrap relative z-10 mb-14"
  >
    <li
      v-for="(item, index) in data"
      :key="index"
      class="shrink-0 w-full tablet:w-1/2 py-2 tablet:px-2"
    >
      <div
        class="group flex flex-col h-full p-5 tablet:p-[30px] pt-7 tablet:pt-10 rounded-[5px] transition-all duration-300"
        :class="
          isTransparent
            ? 'text-white backdrop-blur-lg bg-white/5'
            : 'text-gray-dark border border-solid bg-white border-gray-default hover:border-blue-main'
        "
      >
        <div
          class="w-10 h-10 mb-5 tablet:mb-[30px] group-hover:text-blue-main"
          v-if="item.icon"
          :class="isTransparent ? 'text-white' : 'text-gray-default'"
        >
          <ListIcon :name="'protocol'" />
        </div>

        <!--         TODO: Add values in ACF
          
  <div class="mb-[30px] tablet:mb-10">
    <h4
    v-if="item.header"
      class="text-xl tablet:text-2xl text-inherit"
    >
    {{item.header}}
  </h4>   
  <div
          v-if="item.capex || item.opex"
          class="text-sm tablet:text-basis flex flex-wrap gap-6"
        >
          <div v-if="item.capex">
            <p class="text-inherit">
              <span class="text-2xl tablet:text-3xl">~30</span
              ><span class="text-xl tablet:text-2xl"> %</span>
              CAPEX
            </p>
          </div>
          <div v-if="item.opex">
            <p class="text-inherit">
              <span class="text-2xl tablet:text-3xl">~40</span
              ><span class="text-xl tablet:text-2xl"> %</span>
              OPEX
            </p>
          </div>
        </div>
</div>

-->

        <h4 class="text-xl tablet:text-2xl text-inherit mb-[30px] tablet:mb-10">
          Header Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </h4>
        <p v-if="item.point" class="text-inherit" v-html="item.point"></p>
      </div>
    </li>
  </ul>
</template>

<script>
import ListIcon from '~/components/list-icon.vue'
export default {
  name: 'List',
  components: {
    ListIcon,
  },
  props: {
    data: {
      type: Array,
      default: null,
      required: true,
    },
    isTransparent: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="postcss" scoped>
>>> .custom-filter {
  filter: saturate(0);
}
>>> .group:hover .custom-filter {
  filter: saturate(1);
}
</style>
