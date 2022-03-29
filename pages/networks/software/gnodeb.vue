<template>
    <div>
        <Breadcrumb />
        gNodeB page
    </div>
</template>

<script>
import Vue from 'vue'

import Breadcrumb from '~/components/breadcrumb.vue'

export default Vue.extend({
    components:{
        Breadcrumb
    },
    computed:{
        networkPageData() {
            return this.$store.getters['networks/getData']
        },
    },


})
</script>

<style>

</style>