<template>
  <div>
    <Breadcrumb />
    University Labs page
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
    academyPageData() {
      return this.$store.getters['academy/getData']
    },
  },
})
</script>

<style></style>
