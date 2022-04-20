<template>
  <div>
    <StaticBanner
      :title="academyPageData.acf.banner.title"
      :background-url="academyPageData.acf.banner.bgUrl"
    />
    <Breadcrumb />
  </div>
</template>

<script>
import Vue from 'vue'

import StaticBanner from '~/components/static-banner.vue'
import Breadcrumb from '~/components/breadcrumb.vue'

export default Vue.extend({
  components: {
    StaticBanner,
    Breadcrumb,
  },
  computed: {
    academyPageData() {
      return this.$store.getters['academy/getData']
    },
  },
})
</script>

<style></style>
