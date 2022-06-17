<template>
  <div class="flex flex-col">
    <Banner :data="frontPageData.sections[0]" />
    <Organisations :data="frontPageData.sections[1]" />

    <section_two_column :data="frontPageData.sections[2]" />

    <section_two_column_bg
      :textClr="'text-white'"
      :data="frontPageData.sections[3]"
    />

    <section_two_column :data="frontPageData.sections[4]" />

    <CtaJob :data="frontPageData.sections[5]" />
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
  head() {
    return this.headTag
  },
  computed: {
    headTag() {
      let data = {}

      this.$store.getters['homepage/getData'].head_tags.forEach((element) => {
        if (!Array.isArray(data[element.tag])) {
          data[element.tag] = []
        }
        data[element.tag].push(element.attributes)

        console.log(data)
      })

      return data
    },
    frontPageData() {
      return this.$store.getters['homepage/getData']
    },
  },
})
</script>
