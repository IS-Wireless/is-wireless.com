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

const nuxtApp = useNuxtApp()

const dataKey = computed(()=>{
  if (props.data?.selected) {
    return props.data.selected.map(item => item.ID).join(',')
  }
})

const { data: sectionData } = await useAsyncData(dataKey.value, () => {
  return Promise.all(props.data?.selected?.map(async (item) => {
    return nuxtApp.$wp.pages().id(item.ID)
  })) 
},{
  getCachedData(key){
    return nuxtApp.payload.data[key] || nuxtApp.static.data[key]
  }
});


</script>

<style lang="postcss" scoped>
.has-sidebar .tiles-container {
  @apply max-w-full;
}
</style>
