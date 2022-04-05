<template>
  <div class="w-4/5">
      <div class="w-full flex flex-col tablet-wide:flex-row my-10">
          <div class="tablet-wide:basis-1/3">
            <nuxt-picture class="block mr-6 mb-6" :src="data.imgUrl"></nuxt-picture>
          </div>
          <div class="tablet-wide:basis-2/3 text-base">
            <h3 class="text-2xl">{{data.name}}</h3>
            <div v-html="data.description">
            </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name:'Person',
    props:{
        data:{
            type:Object,
            required:true
        }
    }
}
</script>

<style>

</style>