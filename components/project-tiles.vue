<template>
  <div class="w-full mb-32 flex flex-wrap ">
      <div class="p-[6px] basis-full tablet-small:basis-full tablet-wide:basis-1/3 flex-shrink flex-grow tablet-small:flex-grow-0 "  v-for="item in data" :key="item.title" >
        <nuxt-link class="rounded-md bg-gray-light flex flex-col h-full p-2" :to="item.url">
                <h2 class="text-blue-main text-3xl pt-0.5">{{item.title}}</h2>
                <nuxt-picture class="w-1/2 py-5" :src="item.imgUrl"></nuxt-picture>
                <p>
                    {{item.text}}
                </p>
                <div class="text-blue-main pt-2.5 mt-auto">
                    <span class="inline-block w-[15px] h-1 align-middle rounded-full bg-blue-main transition"></span>
                    <span class="text-blue-main">More details</span>
                </div>
        </nuxt-link>
      </div>
  </div>
</template>

<script>
export default {
    name:'ProjectTiles',
    props:{
        data:{
            type: Array, 
            required: true
        }
    }
}
</script>

<style>

</style>