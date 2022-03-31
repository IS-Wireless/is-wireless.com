<template>
  <div class="w-full mb-32 flex flex-wrap ">
      <div class="p-[6px] basis-full tablet-small:basis-1/2 tablet-wide:basis-1/3 flex-shrink flex-grow tablet-small:flex-grow-0 h-full min-w-[220px] aspect-[4/3] max-h-80"  v-for="(item,index) in links" :key="index" >
        <nuxt-link class="group rounded-md bg-[#F1F2F3] flex items-end h-full overflow-hidden " :to="item.url">
            <div class="relative mx-6 h-1/2 mb-4">
                <h2 class="text-blue-main text-3xl transform transition duration-300 translate-y-full group-hover:translate-y-0">{{item.title}}</h2>
                <div class="absolute h-full top-8 left-0 text-blue-main transform transition duration-300 translate-y-full group-hover:translate-y-0">
                    <span class="inline-block w-[15px] h-1 align-middle rounded-full bg-blue-dark group-hover:bg-blue-main transition"></span>
                    <span>Read more</span>
                </div>
            </div>
        </nuxt-link>
      </div>
  </div>
</template>

<script>
export default {
    name:'OfferTiles',
    props:{
        links:{
            type: Array,
            required: true
        }
    }
}
</script>

<style>

</style>