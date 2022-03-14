<template>
    <div class="mb-10">
        <h2 class="mb-5">{{title}}</h2>
        <hr class=" w-[100px] h-1 bg-blue-main">
    </div>

</template>

<script>
export default {
    name:'SectionHeader',
    props:{
        title:{
            type:String,
            default:'Section Title',
            required: true
        }
    }

}
</script>

<style>

</style>