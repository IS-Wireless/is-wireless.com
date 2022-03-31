<template>
    <div class="w-full">
        <h1 class="mb-5 pt-14 tablet-wide:w-4/5 text-2xl tablet:text-3xl" v-if="title" >{{title}}</h1>
        <p class="mb-5 tablet-wide:w-3/4 text-justify" v-for="(item,index) in text" :key="index">{{item}}</p>
        <div class="flex flex-col justify-center items-center tablet-wide:w-3/4 tablet-wide:mr-10" v-for="(item,index) in image" :key="index">
            <nuxt-picture fit="contain" class="mb-5" :src="item.url" :title="item.title" ></nuxt-picture>
            <p class="grow-0 italic text-center mb-5" v-if="item.title">{{item.title}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ContentStatic',
    props:{
        title:{
            type: String,
            required: false
        },
        text:{
            type: Array,
            required: false
        },
        image:{
            type:Array,
            required: false
        }
    
    }

}
</script>

<style>

</style>