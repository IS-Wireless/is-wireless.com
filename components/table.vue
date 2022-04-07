<template>
  <div class="w-full">

    <div class="flex justify-between items-center mt-5 mb-10 phablet:hidden">
        <span>Sort By:</span>
        <div
        class="
            h-[70px]
            w-[160px]
            tablet-wide:w-[100px]
            flex
            items-center
            bg-gray-light
            rounded-md
            cursor-pointer
            transition
            phablet:hidden
        "
        
        @click="expand"
        >
        <span v-if="currentSort!='None'"
            class="flex-grow h-full flex items-center justify-center text-gray-dark pl-2"
            >{{data.head[currentSort]}}</span
        >
        <span v-else
            class="flex-grow h-full flex items-center justify-center text-gray-dark pl-2"
            >{{currentSort}}</span
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
    </div>
    
    <table class="block phablet:table relative">
      <thead
        class="
            z-20
          absolute
          -top-9
          w-[200px]
          right-0
          phablet:relative phablet:rounded-none
          block
          phablet:table-header-group
          
        "
        
      >
        <tr class="block phablet:table-row custom-scrollbar 
        overflow-y-scroll
        bg-gray-light
        rounded-md
        transition duration-300
        "
        :class="[mobileExpanded==true ? 'max-h-56' : 'max-h-0']">
          <th
            v-for="(item, index) in data.head"
            :key="index"
            class="
            w-full
            phablet:w-auto

              flex flex-col
              phablet:table-cell
              p-5
              font-bold
              cursor-pointer
              bg-gray-light
              hover:bg-gray-default
              phablet:bg-transparent
              hover:phablet:bg-transparent
              border-b
              last:border-b-0
              border-solid border-gray-default
              phablet:border-b-0
              transition
            "
            
            @click="setSort(index)"
          >
            <div class="flex items-center">
              <span class="w-full text-center phablet:text-gray-dark"
              :class="[index==currentSort ? 'text-blue-main' : 'text-gray-dark']"
              >{{ item }}
              </span>
              <div class="hidden phablet:block">
                <svg
                  width="10px"
                  height="10px"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 3 6"
                  class="fill-current transform -rotate-90 transition"
                  :class="[
                    index == currentSort && currentSortDir == 'asc'
                      ? 'text-blue-main'
                      : 'text-gray-default',
                  ]"
                >
                  <path d="M 0 0 L 0 6 L 3 3 Z"></path>
                </svg>
                <svg
                  width="10px"
                  height="10px"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 3 6"
                  class="fill-current transform rotate-90 transition"
                  :class="[
                    index == currentSort && currentSortDir == 'desc'
                      ? 'text-blue-main'
                      : 'text-gray-default',
                  ]"
                >
                  <path d="M 0 0 L 0 6 L 3 3 Z"></path>
                </svg>
              </div>
            </div>
          </th>
        </tr>
      </thead>
      <tbody
        class="
          block
          phablet:table-row-group phablet:border-y-4
          border-solid border-gray-light
          transition
          duration-300
        "
        :class="{'opacity-50':mobileExpanded}"
      >
        <tr
          v-for="(item, index) in sortedData"
          :key="index"
          class="
            flex flex-col
            w-full
            mb-2.5
            phablet:mb-0 phablet:table-row phablet:border-b
            border-solid border-gray-light
            last:border-b-0
            rounded-md
            phablet:rounded-none
            bg-gray-light
            phablet:bg-transparent
          "
        >
          <td
            v-for="(text, index) in item"
            :key="index"
            :data-id="data.head[index]"
            class="
              flex
              justify-between
              phablet:table-cell
              px-2.5
              phablet:px-5
              py-2.5
              phablet:before:hidden
              before:content-[attr(data-id)]
              before:relative
              before:text
              before:text-sm
              before:text-gray-dark
              before:font-lato
              before:block
              before:font-bold
              before:basis-[70px]
              before:shrink-0
              border-b
              last:border-b-0
              border-solid border-gray-default
              phablet:border-b-0
            "
          >
            <span class="pl-4 phablet:pl-0">
              {{ text }}
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Table',
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      mobileExpanded: false,
      currentSort: 'None',
      currentSortDir: '',
    }
  },
  computed: {
    sortedData() {
      if (this.currentSort === 'None') {
        return this.data.content
      } else {
        let modifier = this.currentSortDir === 'asc' ? 1 : -1
        return this.data.content.sort((a, b) => {
          if (a[this.currentSort] < b[this.currentSort]) return -1 * modifier
          if (a[this.currentSort] > b[this.currentSort]) return 1 * modifier
        })
      }
    },
  },
  methods: {
    setSort(sort) {
      if (sort === this.currentSort) {
        this.currentSortDir = this.currentSortDir === 'asc' ? 'desc' : 'asc'
      } else if (this.currentSort === 'None') {
        this.currentSortDir = 'asc'
      }
      this.currentSort = sort
    },
    expand(){
        this.mobileExpanded = !this.mobileExpanded;
    }
  },
}
</script>

<style></style>
