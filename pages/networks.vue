<template>
    <div>
        <StaticBanner :title="networkPageData.acf.banner.title" :backgroundUrl="networkPageData.acf.banner.bgUrl"/>
        <Breadcrumb :crumbs="crumbs" />
    </div>
</template>

<script>
import Vue from 'vue'

import StaticBanner from '~/components/static-banner.vue'
import Breadcrumb from '~/components/breadcrumb.vue'

export default Vue.extend({
    components:{
        StaticBanner,
        Breadcrumb
    },
    data(){
        return{
            crumbs:{
                0:{
                    name:'Home',
                    url:'/'
                },
            }
        }
    },
    computed:{
        networkPageData() {
            return this.$store.getters['networks/getData']
        }
    }


})
</script>

<style>

</style>