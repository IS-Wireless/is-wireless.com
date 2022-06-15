<template>
  <div class="tiles-container w-full tablet:max-w-[75%] mb-32 flex flex-wrap">
    <div
      v-for="(item, index) in data.selected"
      :key="index"
      class="p-[6px] basis-full tablet-small:basis-full tablet-wide:basis-1/3 flex-shrink flex-grow tablet-small:flex-grow-0 overflow-hidden"
    >
      <ProjectTile :data="subpagesData[item.ID]" />
    </div>
  </div>
</template>

<script>
import CustomLink from './custom-link.vue'
import ProjectTile from './project-tile.vue'

export default {
  name: 'section_block_subpages',
  components: {
    CustomLink,
    ProjectTile,
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      subpagesData: this.$store.getters['general/getPagesData'],
    }
  },
}
</script>

<style lang="postcss" scoped>
.has-sidebar .tiles-container {
  @apply max-w-full;
}
</style>
