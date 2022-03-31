<template>
  <div>
    <StaticBanner
      :title="resourcesPageData.acf.banner.title"
      :backgroundUrl="resourcesPageData.acf.banner.bgUrl"
    />
    <Breadcrumb />

    <div class="w-4/5 mx-auto">
        <ContentStatic
        :title="'Reports, papers, books, video'"
        :text="[
            'Since its inception in 2006, IS-Wireless is very active on various fora, both in Poland and internationally. Here you can find a set of items we authored, co-authored or in any other way contributed to',
        ]"
        />
    </div>
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
    resourcesPageData() {
      return this.$store.getters['resources/getData']
    },
  },
})
</script>

<style></style>
