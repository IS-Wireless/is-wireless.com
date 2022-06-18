<template>
  <div class="mx-[calc(-12.5%+10px)] tablet:mx-0 tablet:w-full mt-15">
    <div class="w-full mb-32 flex flex-wrap transition-all">
      <div
        v-for="(item, index) in tiles"
        :key="index"
        class="basis-full tablet-small:basis-1/2 tablet-wide:basis-1/3 flex-shrink flex-grow tablet-small:flex-grow-0 min-w-[220px]"
        :class="{ hidden: item.type != filterBy && filterBy != 'All' }"
      >
        <div v-if="index < visibleTilesCount" class="h-full p-[6px]">
          <CustomLink
            class="group rounded-md border border-solid border-gray-light flex h-full overflow-hidden hover:border-blue-main transition"
            :url="item.link"
            :isExternal="isExternal(item.link)"
          >
            <div class="m-[30px] flex flex-col">
              <svgIcon
                v-if="item.type"
                :class="'w-[50px] h-[50px] mb-2.5 p-1'"
                :name="item.type"
              />

              <h2
                v-if="item.title"
                class="text-lg tablet:text-2xl transform transition block my-[30px]"
                v-html="item.title"
              ></h2>
              <h2
                v-if="item.name"
                class="text-lg tablet:text-2xl transform transition block my-[30px]"
                v-html="item.name"
              ></h2>
              <span
                class="inline-block mb-2.5 w-10 tablet:w-[75px] h-0.5 tablet:h-1 align-middle rounded-full bg-blue-main"
              />
              <p
                v-if="item.description"
                class="mt-[30px] text-sm tablet:text-base"
                v-html="item.description"
              ></p>
            </div>
          </CustomLink>
        </div>
      </div>
    </div>
    <div v-if="visibleTilesCount < tiles.length" class="text-center my-10">
      <button
        href="https://www.is-wireless.com/networks/"
        class="text-lg text-white uppercase px-10 py-2 rounded-full bg-blue-main mx-auto hover:bg-blue-main-hover duration-300 tablet:mb-0 mb-6"
        @click="increaseVisibleTilesCount()"
      >
        Load More
      </button>
    </div>
  </div>
</template>

<script>
import svgIcon from './svg-icon.vue'
import CustomLink from './custom-link.vue'

export default {
  name: 'FilterableTiles',
  components: {
    svgIcon,
    CustomLink,
  },
  data() {
    return {
      visibleTilesCount: 21,
    }
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
  methods: {
    isExternal(link) {
      if (!link) {
        return false
      }
      if (
        link.includes('https://www.is-wireless.com/') &&
        !link.includes('https://www.is-wireless.com/wp-content/')
      ) {
        return false
      }
      return true
    },

    increaseVisibleTilesCount() {
      this.visibleTilesCount += 9
    },
  },
}
</script>

<style lang="postcss"></style>
