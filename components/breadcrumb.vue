<template>
    <div class="w-full">
        <div class="w-4/5 mx-auto">
            <ul class="flex flex-row my-4">
                <li v-for="crumb in crumbs" :key="crumb.name">
                    <nuxt-link class="breadcrumb-item" :to="crumb.url">{{crumb.name}}</nuxt-link>
                </li>
                <li class="text-base text-gray-main capitalize">
                    {{currentRouteName}}
                </li>
            </ul>
        </div>
    </div>
  
</template>

<script>
export default {
    name:"Breadcrumb",
    props:{
        crumbs:{
            type: Object,
            required: true
        }
    },
    computed:{
        currentRouteName() {
            return this.$route.name;
        }
    }
}
</script>

<style lang="postcss">
    .breadcrumb-item{
        @apply text-base capitalize flex items-center text-blue-main hover:text-blue-dark transition
    }
    .breadcrumb-item::after{
        content: '';
        display: block;
        height: 15px;
        width: 1px;
        @apply bg-gray-main mx-2
    }
</style>