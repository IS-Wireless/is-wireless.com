<template>
    <div class="w-4/5 my-52 mx-auto">
        <OfferMenu :data="
                [{
                title:'Software',    
                url:'networks/software'
            },{
                title:'Hardware',    
                url:'networks/hardware'
            },{
                title:'Services',    
                url:'networks/services'
            }]"
            />
    </div>
</template>

<script>
import OfferMenu from "~/components/offer-menu.vue"
export default {
    name: 'Demo',
    components:{
        OfferMenu
    }
}
</script>

<style>

</style>