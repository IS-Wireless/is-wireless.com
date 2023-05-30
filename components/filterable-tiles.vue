<template>
  <div
    v-if="activeTiles"
    class="mx-[calc(-12.5%+10px)] tablet:mx-0 tablet:w-full mt-15"
  >
    <div class="w-full mb-32 flex flex-wrap transition-all">
      <div
        v-for="(item, index) in activeTiles"
        :key="index"
        class="basis-full tablet-small:basis-1/2 tablet-wide:basis-1/3 flex-shrink flex-grow tablet-small:flex-grow-0 min-w-[220px]"
        :class="{
          hidden:
            item.type &&
            item.type.value != filterBy.value &&
            filterBy.value != 'All',
        }"
      >
        <div v-if="index < visibleTilesCount" class="h-full p-[6px]">
          <CustomLink
            class="group rounded-md border border-solid border-gray-light flex h-full overflow-hidden hover:border-blue-main transition"
            :url="item.link"
            :isExternal="isExternal(item.link)"
          >
            <div class="m-[30px] flex flex-col">
              <nuxt-picture
                v-if="item.image"
                class="block h-20 tablet:h-[50px] max-w-[200px] mb-5 tablet:mb-7"
                :src="
                  item.image.url
                    ? item.image.url.replace('www.is-wireless.com', 'api.is-wireless.com')
                    : ''
                "
                :title="item.image.title ? item.image.title : ''"
                :alt="item.image.alt ? item.image.alt : ''"
                :imgAttrs="{
                  class: 'w-full h-full object-contain object-left rounded-md',
                  loading: 'lazy',
                }"
              />
              <svgIcon
                v-else-if="item.type && item.type.value"
                :class="'w-[50px] h-[50px] mb-2.5 p-1'"
                :name="item.type.value"
              />

              <div
                v-if="item.title"
                class="text-lg tablet:text-2xl transform transition block my-[30px] text-gray-dark"
                v-html="item.title"
              ></div>
              <div
                v-if="item.name"
                class="text-lg tablet:text-2xl transform transition block my-[30px] text-gray-dark"
                v-html="item.name"
              ></div>
              <span
                class="inline-block mb-2.5 w-10 tablet:w-[75px] h-0.5 tablet:h-1 align-middle rounded-full bg-blue-main"
              ></span>
              <div
                v-if="item.description"
                class="mt-[30px] text-sm tablet:text-base text-gray-dark"
                v-html="item.description"
              ></div>
              <div
                v-if="item.date"
                class="mt-[30px] mb-10 tablet:mb-[60px] text-sm tablet:text-base text-gray-dark"
                v-html="item.date"
              ></div>
            </div>
          </CustomLink>
        </div>
      </div>
    </div>
    <div v-if="visibleTilesCount < activeTiles.length" class="text-center my-10">
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
  name: 'section_tiles',
  components: {
    svgIcon,
    CustomLink,
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
    filterBy: {
      type: Object,
      required: false,
      default: () => {
        return { value: 'All' }
      },
    },
  },
  data() {
    return {
      visibleTilesCount: 21,
    }
  },
  computed:{
    activeTiles(){
      if (this.data.tile?.length > 0) {
        return this.data.tile.filter(tile => !tile.hidden)
      }else{
        return []
      }
    }
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