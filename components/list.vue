<template>
  <ul
    class="flex flex-wrap w-full tablet-wide:w-[200%] desktop:flex-nowrap mb-14 desktop:w-[80vw] relative"
  >
    <li
      v-for="(item, index) in data"
      :key="index"
      class="shrink-0 desktop:shrink w-full tablet:w-1/2 desktop:w-full desktop:basis-[388px] py-2 tablet:px-2"
    >
      <EffectAppear :disabled="noEffect" class="h-full">
        <div
          class="group flex flex-col h-full p-5 tablet:p-[30px] pt-7 tablet:pt-10 rounded-[5px] transition-all duration-300"
          :class="
            isTransparent
              ? 'text-white backdrop-blur-lg backdrop-brightness-100 backdrop-contrast-100 backdrop-grayscale-0 backdrop-hue-rotate-0 backdrop-invert-0 backdrop-opacity-100 backdrop-saturate-100 backdrop-sepia-0 bg-white/5'
              : 'text-gray-dark border border-solid bg-white border-gray-light hover:border-blue-main'
          "
        >
          <div
            class="w-10 h-10 mb-5 tablet:mb-[30px]"
            v-if="item.icon"
            :class="isTransparent ? 'text-white' : 'text-gray-default'"
          >
            <ListIcon :name="item.icon" />
          </div>

          <div class="mb-[30px] tablet:mb-10">
            <h4 v-if="item.title" class="text-xl tablet:text-2xl text-inherit">
              {{ item.title }}
            </h4>
            <div
              v-if="item.text_highlight"
              class="flex flex-nowrap gap-x-3 desktop:gap-x-6 gap-y-1"
            >
              <div
                v-for="(entry, index) in item.text_highlight"
                :key="index"
                class="text-sm tablet:text-basis"
              >
                <p v-if="entry.entry" class="text-inherit">
                  <span
                    v-if="entry.entry.text"
                    class="text-2xl tablet:text-3xl"
                    >{{ entry.entry.text }}</span
                  ><span
                    v-if="entry.entry.symbol"
                    class="text-xl tablet:text-2xl"
                  >
                    {{ entry.entry.symbol }}</span
                  >
                  {{ entry.entry.signature ? entry.entry.signature : '' }}
                </p>
              </div>
            </div>
          </div>

          <p v-if="item.point" class="text-inherit" v-html="item.point"></p>
        </div>
      </EffectAppear>
    </li>
  </ul>
</template>

<script>
import EffectAppear from '~/components/effect-appear.vue'
import ListIcon from '~/components/list-icon.vue'
export default {
  name: 'List',
  components: {
    ListIcon,
    EffectAppear,
  },
  props: {
    noEffect: {
      type: Boolean,
      default: false,
    },
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
