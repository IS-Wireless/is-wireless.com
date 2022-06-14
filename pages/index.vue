<template>
  <LazyHydrate never>
    <div class="flex flex-col">
      <Banner :data="homepageData.sections[0]" />
      <Organisations :data="homepageData.sections[1]" />
      <section_two_column :data="homepageData.sections[2]" />
      <section_two_column_bg
        :textClr="'text-white'"
        :data="homepageData.sections[3]"
      />
      <section_two_column :data="homepageData.sections[4]" />
      <CtaJob :data="homepageData.sections[5]" />
    </div>
  </LazyHydrate>
</template>

<script>
import Vue from 'vue'

import Banner from '~/components/Banner.vue'
import Organisations from '~/components/Organisations.vue'
import section_two_column from '~/components/content-section.vue'
import section_two_column_bg from '~/components/content-section-bg.vue'
import SectionHeader from '~/components/section-header.vue'
import SectionImage from '~/components/section-image.vue'
import CtaJob from '~/components/cta-job.vue'
import LazyHydrate from 'vue-lazy-hydration'

export default Vue.extend({
  components: {
    Organisations,
    Banner,
    SectionHeader,
    SectionImage,
    CtaJob,
    LazyHydrate,
    section_two_column,
    section_two_column_bg,
  },
  computed: {
    frontPageData() {
      return this.$store.getters['homepage/getData']
    },
    homepageData() {
      return this.$store.getters['homepage/getData'].homepageData
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
