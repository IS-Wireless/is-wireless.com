<template>
  <div class="w-full relative px-[10%] tablet:w-96 tablet:pr-0 tablet-wide:pr-[10%] tablet-wide:w-full mt-10 flex items-center justify-between tablet-wide:flex-col tablet-wide:justify-start tablet-wide:items-start">
    <span class="inline-block text-gray-main mb-2">Filter by:</span>
    <div class="
          h-[70px]
          w-[160px]
          tablet-wide:w-[100px]
          flex
          items-center
          mr-2
          bg-[#F4F6F7]
          rounded-md
          cursor-pointer
          transition
          tablet-wide:hidden
        "
        @click="switchMobileExpand" >
        
        <span
          class="
            flex-grow
            h-full
            flex
            items-center
            justify-center
            text-gray-main
          "
          >{{selectedFilter}}</span
        >
        <div
          class="
            tablet-wide:hidden
            inset-y-0
            right-0
            flex
            items-center
            px-4
            transform
            transition
          "
            :class="{'rotate-180':mobileExpanded}"

        >
          <svg
            width="15px"
            height="20px"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="stroke-gray-400"
          >
            <path
              d="M6 18L24 36L42 18"
              stroke-width="6"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </div>
    </div>
    <ul class="custom-scrollbar flex flex-col tablet-wide:flex-row items-center absolute top-full right-0 tablet:right-[-180px] tablet-wide:right-0 tablet-wide:relative w-full tablet:w-[350px] tablet-wide:w-full px-5 tablet-wide:px-0 tablet:rounded-md tablet-wide:rounded-none overflow-y-scroll tablet-wide:max-h-[none] bg-[#F6F6F6] tablet-wide:bg-transparent mt-0.5 tablet-wide:mt-0 duration-300 transition-all z-30 " :class="{'max-h-80':mobileExpanded,'max-h-0':!mobileExpanded}">
        <li
            class="
            h-[70px]
            w-full
            tablet-wide:w-[100px]
            flex
            flex-shrink-0
            tablet-wide:flex-shrink
            items-center
            tablet-wide:mr-2
            bg-[#F4F6F7]
            tablet-wide:rounded-md
            border-0
            
            cursor-pointer
            "
            @click="setFilter('All'),switchMobileExpand()"

        >
            <span
            class="
                flex-grow
                h-full
                flex
                items-center
                justify-center
                text-gray-main
            "
            :class="{'text-blue-main':selectedFilter=='All'}"
            >All</span
            >
        </li>

        <li
            class="
            h-[70px]
            w-full
            tablet-wide:w-[200px]
            flex
            flex-shrink-0
            tablet-wide:flex-shrink
            items-center
            tablet-wide:mr-2
            bg-[#F4F6F7]
            tablet-wide:rounded-md
            tablet-wide:border-0
            border-0
            border-t
            border-t-gray-200
            cursor-pointer
            "
            v-for="(item, index) in filters"
            :key="index"

            @click="setFilter(item.category),switchMobileExpand()"
        >
            <nuxt-picture
            class="w-12 mx-2"
            fit="contain"
            :src="item.iconUrl"
            ></nuxt-picture>
            <span
            class="
                flex-grow
                h-full
                flex
                items-center
                justify-center
                text-gray-main
                transition
            "
            :class="{'text-blue-main':selectedFilter==item.category}"
            >{{ item.category }}</span
            >
        </li>
    </ul>
    <div class="w-full mt-14">
      <FilterableTiles :tiles="posts" :filterBy="selectedFilter" />
    </div>
  </div>
</template>

<script>

import FilterableTiles from "./filterable-tiles.vue";

export default {
  name: 'Filters',
  components:{
    FilterableTiles
  },
  props: {
    filters: {
      type: Object,
      required: true,
    },
    posts: {
      type: Object,
      required: true
    }
  },
  data(){
      return{
        mobileExpanded: false,
        selectedFilter: 'All'
      }
  },
  methods:{
      switchMobileExpand(){
          if(window.innerWidth<1024)
            this.mobileExpanded = !this.mobileExpanded
      },

      setFilter(category){
          this.selectedFilter = category;
      }

  }
}
</script>

<style></style>
