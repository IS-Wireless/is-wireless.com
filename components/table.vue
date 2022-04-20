<template>
  <div class="w-full">
    <table class="block phablet:table relative">
      <thead>
        <tr>
          <th
            v-for="(item, index) in data.head"
            :key="index"
            class="p-5 font-bold hidden first:table-cell phablet:table-cell"
          >
            {{ item }}
          </th>
        </tr>
      </thead>
      <tbody class="border-y-4 border-solid border-gray-light">
        <tr
          v-for="(item, indexRow) in data.content"
          :key="indexRow"
          ref="row"
          class="
            flex flex-col
            phablet:table-row
            w-full
            border-b border-solid border-gray-light
            last:border-b-0
            overflow-hidden
            transition-all
            duration-300
          "
          data-mobile-expanded="false"
        >
          <td
            v-for="(text, indexCol) in item"
            :key="indexCol"
            :data-id="data.head[indexCol]"
            class="
              phablet:px-5
              py-2.5
              ml-[40px]
              first-of-type:ml-0
              flex
              phablet:table-cell
              first-of-type:before:hidden
              phablet:before:hidden
              before:content-[attr(data-id)]
              before:relative
              before:text-gray-dark
              before:font-lato
              before:block
              before:font-bold
              before:basis-[100px]
              before:shrink-0
              border-b
              last:border-b-0
              border-gray-light
              phablet:border-b-0
            "
          >
            <div
              v-if="indexCol == 0"
              class="
                phablet:hidden
                p-2.5
                w-[40px]
                flex
                justify-center
                items-center
                cursor-pointer
              "
              @click="toggleRowExpand($event, indexRow)"
            >
              <svg
                class="fill-current text-gray-default transition duration-300"
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
            <span class="block">
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
  mounted() {
    this.collapseAll()
  },
  methods: {
    toggleRowExpand(e, indexRow) {
      let row = this.$refs.row[indexRow]
      let icon = e.currentTarget.firstChild
      let expandedHeight = row.scrollHeight

      if (row.getAttribute('data-mobile-expanded') === 'true') {
        row.style.height = row.firstChild.clientHeight + 'px'
        icon.classList.toggle('rotate-180')
        row.setAttribute('data-mobile-expanded', 'false')
      } else {
        row.style.height = expandedHeight + 'px'
        icon.classList.toggle('rotate-180')
        row.setAttribute('data-mobile-expanded', 'true')
      }
    },

    collapseAll() {
      this.$refs.row.forEach((item) => {
        item.style.height = item.firstChild.clientHeight + 'px'
      })
    },
  },
}
</script>

<style></style>
