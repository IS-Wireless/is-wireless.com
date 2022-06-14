<template>
  <div class="flex flex-col">
    <Banner :data="frontPageData.homepageData.sections[0]" />
    <Organisations :data="frontPageData.homepageData.sections[1]" />
    <LazyHydrate never>
      <section_two_column :data="frontPageData.homepageData.sections[2]" />
    </LazyHydrate>
    <LazyHydrate never>
      <section_two_column_bg
        :textClr="'text-white'"
        :data="frontPageData.homepageData.sections[3]"
      />
    </LazyHydrate>
    <LazyHydrate never>
      <section_two_column :data="frontPageData.homepageData.sections[4]" />
    </LazyHydrate>
    <LazyHydrate never>
      <CtaJob :data="frontPageData.homepageData.sections[5]" />
    </LazyHydrate>
  </div>
</template>

<script>
import Vue from 'vue'
import LazyHydrate from 'vue-lazy-hydration'
import Banner from '~/components/Banner.vue'
import Organisations from '~/components/Organisations.vue'

export default Vue.extend({
  components: {
    LazyHydrate,
    Banner,
    Organisations,
    CtaJob: () => import('~/components/cta-job.vue'),
    section_two_column: () => import('~/components/content-section.vue'),
    section_two_column_bg: () => import('~/components/content-section-bg.vue'),
  },
  computed: {
    frontPageData() {
      return this.$store.getters['homepage/getData']
    },
  },
})
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
