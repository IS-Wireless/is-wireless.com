<template>
  <div>
    <StaticBanner
      :title="resourcesPageData.acf.banner.title"
      :background-url="resourcesPageData.acf.banner.bgUrl"
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

    <Filters
      :data="resourcesPageData.acf.tiles"
    />
  </div>
</template>

<script>
import Vue from 'vue'

import StaticBanner from '~/components/static-banner.vue'
import Breadcrumb from '~/components/breadcrumb.vue'
import Filters from '~/components/filters.vue'

export default Vue.extend({
  components: {
    StaticBanner,
    Breadcrumb,
    Filters,
  },
  computed: {
    resourcesPageData() {
      if (data.use_courses) {
        return this.$store.getters['resources/getData'].courses
      }
      if (data.use_materials) {
        return this.$store.getters['resources/getData'].materials
      }
    },
  },
})
</script>

<style></style>
