<template>
    <section class="w-full bg-cover tablet-wide:bg-fixed bg-[center_top] bg-gray-light py-[100px]" :style="{backgroundImage: 'url(' + backgroundUrl + ')'}">
        <div class="flex flex-col justify-center items-center w-4/5 mx-auto">
            <h2 class="text-white mb-5">{{title}}</h2>
            <hr class=" w-[100px] h-0 border-0 border-t-4 border-white mb-5">
            <slot></slot>
        </div>
    </section>
  
</template>

<script>
export default {
    name: 'CtaJob',
    props:{
        title:{
            type: String,
            required: true,
            default: 'CTA Title'
        },
        backgroundUrl:{
            type:String,
            required: true
      }
    }

}
</script>

<style>

</style>