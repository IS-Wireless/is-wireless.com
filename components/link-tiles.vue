<template>
  <div class="w-full mb-32 flex flex-wrap ">
      <div class="p-[6px] basis-1/3 flex-shrink flex-grow h-full min-w-[220px] aspect-[4/3] max-h-80"  v-for="(item,index) in link" :key="index" >
        <nuxt-link class="group rounded-md bg-[#F1F2F3] flex items-end h-full overflow-hidden " :to="item.url">
            <div class="relative mx-6 h-1/2 mb-4">
                <h2 class="text-blue-main text-3xl transform transition duration-300 translate-y-full group-hover:translate-y-0">{{item.title}}</h2>
                <span class="absolute h-full top-8 left-0 text-blue-main transform transition duration-300 translate-y-full group-hover:translate-y-0"> Read more </span>
            </div>
        </nuxt-link>
      </div>
  </div>
</template>

<script>
export default {
    name:'LinkTiles',
    props:{
        link:{
            type: Array,
            required: true
        }
    }
}
</script>

<style>

</style>