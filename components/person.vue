<template>
  <div>
      <h3 class="text-2xl tablet:text-3xl block mt-12">{{data.title}}</h3>
      <div class="w-full flex flex-col tablet-wide:flex-row">
          <div class="tablet-wide:basis-1/3">
            <nuxt-picture :src="data.imgUrl"></nuxt-picture>
          </div>
          <div class="tablet-wide:basis-2/3 text-base">
            {{data.text}}
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name:'Person',
    props:{
        type:Object,
        required:true
    }
}
</script>

<style>

</style>