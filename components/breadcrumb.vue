<template>
    <div class="w-full">
        <div class="w-4/5 mx-auto">
            <ul class="flex flex-row my-4">
                <li>
                    <nuxt-link class="breadcrumb-item" to='/'>Home</nuxt-link>
                </li>
                <li v-for="(route,index) in routesNames" :key="index">
                    <nuxt-link class="breadcrumb-item" :to="routesComputed[index]">{{route}}</nuxt-link>
                </li>
                <li class="text-base text-gray-main">
                    {{currentRouteName}}
                </li>
            </ul>
        </div>
    </div>
  
</template>

<script>
export default {
    name:"Breadcrumb",
    computed:{
        routesComputed(){
            let routes = [];
            let routesSplitted = this.$route.fullPath.split('/')
                    routes[0] = '/' + routesSplitted[1]
            for(let i = 1 ; i < routesSplitted.length - 2 ; i++){
                    routes[i] = routes[i-1] + '/' + routesSplitted[i+1] 
            }
            return routes
        },

        routesNames(){
            let routesNames = this.$route.fullPath.split('/');
            routesNames.shift();
            routesNames.pop();
            return routesNames
        },

        currentRouteName() {
            return this.$route.fullPath.split('/').slice(-1)[0];
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