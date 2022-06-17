<template>
  <div class="tiles-container w-full tablet:max-w-[75%] mb-32 flex flex-wrap">
    <ProjectTile
      v-for="(item, index) in data.selected"
      :key="index"
      :data="subpagesData[item.ID]"
    />
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
