<template>
    <ul>
        <li v-for="item in items" :key="item.text" class="group flex items-center my-5">
            <div class="icon relative">
                <nuxt-picture :src="item.iconUrl"></nuxt-picture>
                <div class="absolute w-8 h-8 m-1 top-0 left-0 border-[5px] border-solid border-blue-main rounded-full transform group-hover:animate-[ping_1s_cubic-bezier(0,0,0.2,1)_forwards] transition duration-700"></div>
            </div>
            <p class="mx-5 text-gray-main group-hover:text-blue-main transition">{{item.text}}</p>
        </li>
    </ul>

</template>

<script>
export default {
    name:'List',
    props:{
        items:{
            type:Array,
            default: null,
            required: true
        }
    }

}
</script>

<style>

.icon picture img{
    @apply relative w-10 h-10 p-2 rounded-full bg-blue-dark group-hover:bg-blue-main transition duration-500 transform group-hover:scale-90 z-10 ;
}

</style>