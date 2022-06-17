<template>
  <div class="flex flex-col">
    <Banner :data="frontPageData.homepageData.sections[0]" />
    <Organisations :data="frontPageData.homepageData.sections[1]" />

    <section_two_column
      :class="'px-[10%]'"
      :data="frontPageData.homepageData.sections[2]"
    />

    <section_two_column_bg
      :textClr="'text-white'"
      :data="frontPageData.homepageData.sections[3]"
    />

    <section_two_column
      :class="'px-[10%]'"
      :data="frontPageData.homepageData.sections[4]"
    />

    <CtaJob :data="frontPageData.homepageData.sections[5]" />
  </div>
</template>

<script>
import Vue from 'vue'
import Banner from '~/components/Banner.vue'
import Organisations from '~/components/Organisations.vue'
import section_two_column from '~/components/content-section.vue'
import section_two_column_bg from '~/components/content-section-bg.vue'
import CtaJob from '~/components/cta-job.vue'

export default Vue.extend({
  components: {
    Banner,
    Organisations,
    section_two_column,
    section_two_column_bg,
    CtaJob,
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
