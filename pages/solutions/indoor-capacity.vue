<template>
  <div>
    <Breadcrumb />
    Indoor Capacity page
  </div>
</template>

<script>
import Vue from 'vue'

import Breadcrumb from '~/components/breadcrumb.vue'

export default Vue.extend({
  components: {
    Breadcrumb,
  },
  computed: {
    networkPageData() {
      return this.$store.getters['solutions/getData']
    },
  },
})
</script>

<style></style>
