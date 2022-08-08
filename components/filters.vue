<template>
  <div class="w-full">
    <div
      class="w-full relative tablet:w-96 tablet-wide:w-full mt-10 flex flex-wrap items-center justify-between tablet-wide:flex-col tablet-wide:justify-start tablet-wide:items-start"
    >
      <span class="inline-block text-gray-dark mb-2">Filter by:</span>
      <div
        class="h-[70px] w-[160px] tablet-wide:w-[100px] flex items-center mr-2 bg-gray-light rounded-md cursor-pointer transition tablet-wide:hidden"
        @click="switchMobileExpand"
      >
        <span
          class="flex-grow h-full flex items-center justify-center text-gray-dark"
          >{{ selectedFilter.value }}</span
        >
        <div
          class="tablet-wide:hidden inset-y-0 right-0 flex items-center px-4 transform transition"
          :class="{ 'rotate-180': mobileExpanded }"
        >
          <svg
            class="fill-current text-gray-default"
            width="17"
            height="9"
            viewBox="0 0 17 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.776404 0.623799C1.0001 0.424611 1.30345 0.312714 1.61975 0.312714C1.93605 0.312714 2.2394 0.424611 2.46309 0.623799L8.36769 5.88317L14.2723 0.623799C14.4973 0.430256 14.7986 0.323162 15.1113 0.325583C15.4241 0.328004 15.7233 0.439746 15.9444 0.636742C16.1656 0.833738 16.2911 1.10023 16.2938 1.37881C16.2965 1.65739 16.1763 1.92578 15.959 2.12617L9.21103 8.13674C8.98734 8.33593 8.68399 8.44782 8.36769 8.44782C8.05139 8.44782 7.74804 8.33593 7.52435 8.13674L0.776404 2.12617C0.55278 1.92693 0.427155 1.65672 0.427155 1.37499C0.427155 1.09325 0.55278 0.823048 0.776404 0.623799Z"
            />
          </svg>
        </div>
      </div>
      <ul
        class="custom-scrollbar flex flex-col tablet-wide:flex-row items-center absolute top-full right-0 tablet:right-[-180px] tablet-wide:right-0 tablet-wide:relative w-full tablet:w-[350px] tablet-wide:w-full px-5 tablet-wide:px-0 tablet:rounded-md tablet-wide:rounded-none overflow-y-scroll tablet-wide:max-h-[none] bg-[#F6F6F6] tablet-wide:bg-transparent mt-0.5 tablet-wide:mt-0 duration-300 transition-all z-20"
        :class="{ 'max-h-80': mobileExpanded, 'max-h-0': !mobileExpanded }"
      >
        <li
          class="h-[70px] w-full tablet-wide:w-[100px] flex flex-shrink-0 tablet-wide:flex-shrink items-center tablet-wide:mr-2 tablet-wide:rounded-md border-0 cursor-pointer"
          @click="filterItems({ value: 'All' }), switchMobileExpand()"
          :class="{
            ' bg-blue-main': selectedFilter.value == 'All',
            ' bg-gray-light': selectedFilter.value != 'All',
          }"
        >
          <span
            class="flex-grow h-full flex items-center justify-center"
            :class="{
              'text-white ': selectedFilter.value == 'All',
              'text-gray-dark ': selectedFilter.value != 'All',
            }"
            >All</span
          >
        </li>

        <li
          v-for="(filter, index) in createdFilters"
          :key="index"
          class="h-[70px] w-full tablet-wide:w-[200px] flex flex-shrink-0 tablet-wide:flex-shrink items-center tablet-wide:mr-2 tablet-wide:rounded-md tablet-wide:border-0 border-0 border-t border-t-gray-200 cursor-pointer"
          @click="filterItems(filter), switchMobileExpand()"
          :class="{
            'bg-blue-main': selectedFilter.value == filter.value,
            'bg-gray-light': selectedFilter.value != filter.value,
          }"
        >
          <svgIcon
            class="'w-12 mx-2 p-1'"
            :name="filter.value"
            :class="{
              'path-active': selectedFilter.value == filter.value,
            }"
          />
          <span
            class="flex-grow h-full flex items-center justify-center transition"
            :class="{
              'text-white': selectedFilter.value == filter.value,
              'text-gray-dark': selectedFilter.value != filter.value,
            }"
            >{{ filter.label }}</span
          >
        </li>
      </ul>
    </div>
    <section_filterable_tiles :data="posts" :filter-by="selectedFilter" />
  </div>
</template>

<script>
import section_filterable_tiles from './filterable-tiles.vue'
import svgIcon from './svg-icon.vue'

export default {
  name: 'section_links_list',
  components: {
    section_filterable_tiles,
    svgIcon,
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      mobileExpanded: false,
      selectedFilter: { value: 'All' },
      posts: this.getData(),
    }
  },
  computed: {
    downloadedData() {
      return this.getData()
    },
    createdFilters() {
      let filters = []
      let filtersData = []
      this.downloadedData.forEach((item) => {
        if (filters.indexOf(item.type.value) === -1) {
          filters.push(item.type.value)
          filtersData.push(item.type)
        }
      })
      return filtersData
    },
  },
  methods: {
    getData() {
      if (this.$props.data.use_courses) {
        return this.$store.getters['general/getOptionsData'].collection
      }
      if (this.$props.data.use_materials) {
        return this.$store.getters['general/getOptionsData'].materials
      }
      return []
    },

    switchMobileExpand() {
      if (window.innerWidth < 1024) this.mobileExpanded = !this.mobileExpanded
    },

    filterItems(filter) {
      this.selectedFilter = filter
      if (filter.value !== 'All') {
        let filteredTiles = []
        this.downloadedData.filter((item) => {
          if (item.type.value.includes(filter.value)) {
            filteredTiles.push(item)
          }
        })
        this.posts = filteredTiles
      } else this.posts = this.getData()
    },
  },
}
</script>

<style scoped>
.path-active /deep/ path {
  fill: #fff;
}
</style>
