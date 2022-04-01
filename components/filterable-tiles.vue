<template>
  <div class="w-full mb-32 flex flex-wrap transition-all">
      <div class="p-[6px] basis-full tablet-small:basis-1/2 tablet-wide:basis-1/3 flex-shrink flex-grow tablet-small:flex-grow-0 min-w-[220px]"  v-for="(item,index) in tiles" :key="index"  :class="{'hidden' :item.category != filterBy && filterBy != 'All'}" >
        <nuxt-link class="group rounded-md border border-solid border-[#EDEDED] flex h-full overflow-hidden hover:border-blue-main transition" to="/" >
            <div class="m-[30px] flex flex-col">
                <nuxt-picture class="mb-2.5 w-10" :src="item.catIconUrl" :title="item.category"></nuxt-picture>
                <h2 class=" text-2xl transform transition block my-[30px]">{{item.title}}</h2>
                <span class="inline-block mb-2.5 w-[75px] h-1 align-middle rounded-full bg-blue-main "></span>
                <p class="mt-[30px]">{{item.description}}</p>
            </div>
        </nuxt-link>
      </div>
  </div>
</template>

<script>
export default {
    name: 'FilterableTiles',
    props:{
        tiles:{
            type: Object,
            required: true
        },
        filterBy:{
            type:String,
            required:false
        }
    },
    
}
</script>

<style lang="postcss">
</style>