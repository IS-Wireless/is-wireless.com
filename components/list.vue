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
        class="group flex flex-col h-full p-5 tablet:p-[30px] pt-7 tablet:pt-10 bg-white border border-solid border-gray-default hover:border-blue-main rounded-[5px] transition-all duration-300"
      >
        <div class="w-10 h-10 mb-5 tablet:mb-[30px]" v-if="item.icon">
          <nuxt-picture
            width="40px"
            height="40px"
            class="custom-filter transition duration-300"
            :src="'./icon-blue.png'"
            :alt="item.alt"
          />
          <!-- <nuxt-picture
          width="40px"
          height="40px"
          class="transition duration-300 transform"
          :src="item.icon.replace('www.is-wireless.com', 'api.is-wireless.com')"
          :alt="item.alt"
        /> -->
        </div>

        <!--         TODO: Add values in ACF
          
  <div class="mb-[30px] tablet:mb-10">
    <h4
    v-if="item.header"
      class="text-xl tablet:text-2xl text-gray-dark"
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

        <h4
          class="text-xl tablet:text-2xl text-gray-dark mb-[30px] tablet:mb-10"
        >
          Header Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </h4>
        <p v-if="item.point" class="text-inherit" v-html="item.point"></p>
      </div>
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

<style lang="postcss" scoped>
>>> .custom-filter {
  filter: saturate(0);
}
>>> .group:hover .custom-filter {
  filter: saturate(1);
}
</style>
