<template>
    <div class="overflow-hidden flex justify-center rounded-xl group">
        <nuxt-picture class="transform group-hover:scale-110 group-hover:opacity-80 transition duration-700" :src="imageUrl"></nuxt-picture>
    </div>

</template>

<script>
export default {
    name:'SectionImage',
    props:{
        imageUrl:String
    }

}
</script>

<style>

</style>