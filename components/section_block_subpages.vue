<template>
  <div class="tiles-container w-full tablet:max-w-[75%] mb-32 flex flex-wrap">
    <ProjectTile
      v-for="item,index in sectionData"
      :key="index"
      :data="item"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  data: Object,
})

const { data: sectionData } = await useAsyncData((app) => {
  return Promise.all(props.data?.selected?.map(async (item) => {
    return app.$wp.pages().id(item.ID)
  })) 
});


</script>

<style lang="postcss" scoped>
.has-sidebar .tiles-container {
  @apply max-w-full;
}
</style>
