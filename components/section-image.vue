<template>
    <div class="overflow-hidden flex justify-center rounded-md group">
        <nuxt-picture class="transform group-hover:scale-110 group-hover:opacity-80 transition duration-[1500ms]" :src="imageUrl" :alt="imageAlt"></nuxt-picture>
    </div>

</template>

<script>
export default {
    name:'SectionImage',
    props:{
        imageUrl:{
            type:String,
            required:true
        },
        imageAlt:{
            type:String,
            required:false,
            default:'IS-Wireless Image'
        }
    }

}
</script>

<style>

</style>