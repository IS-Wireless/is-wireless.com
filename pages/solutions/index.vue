<template>
    <div>
        <StaticBanner :title="solutionsPageData.acf.banner.title" :backgroundUrl="solutionsPageData.acf.banner.bgUrl"/>
        <Breadcrumb />
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
    computed:{
        solutionsPageData() {
            return this.$store.getters['solutions/getData']
        },
    },


})
</script>

<style>

</style>