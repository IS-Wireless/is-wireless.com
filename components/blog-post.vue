<template>

    <div class="w-full flex flex-col bg-gray-light mb-5 overflow-hidden rounded-md">
        <div class="w-full">
            <nuxt-link class="group flex flex-col" :to="data.link">
                <nuxt-picture class="img-full" :src="data.imgUrl"></nuxt-picture>
                <div class="p-5 pb-1">
                    <h2 class="text-xl text-blue-main group-hover:text-blue-main-hover transition">{{data.title}}</h2>
                </div>
            </nuxt-link>
            <div class="flex flex-col p-5 pt-0">
                <div class="pb-5 mb-5 border-b border-solid border-gray-default">
                    <span class="text-sm">
                        {{data.date}} 
                    </span>
                </div>
                <p >{{data.description}}</p>
            </div>

        </div>

    </div>
  
</template>

<script>
export default {
    name:'BlogPost',
    props:{
        data:{
            type:Object,
            required:true,
        }
    }
}
</script>

<style>

</style>