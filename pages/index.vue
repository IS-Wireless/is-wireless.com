<template>
  <LazyHydrate never>
    <div class="flex flex-col">
      <Banner :data="homepageData.sections[0]" />
      <Organisations :data="homepageData.sections[1]" />
      <!-- <ContentSection>
        <template #left>
          <SectionHeader
            :class="'text-gray-dark'"
            :title="homepageData.sections[2].title"
          />
          <div
            class="mb-14 text-gray-dark"
            v-html="homepageData.sections[2].content"
          ></div>
          <List
            :class="'text-gray-dark'"
            :data="homepageData.sections[2].list"
          />
        </template>

        <template #right>
          <SectionImage
            :image-url="homepageData.sections[2].image"
            :image-alt="'test alt'"
          />
        </template>
      </ContentSection> -->

      <section_two_columb_bg
        :class="'text-white'"
        :data="homepageData.sections[3]"
      >
        <!-- <template #right>
          <SectionHeader :title="frontPageData.acf.granularized.title" />
          <p class="mb-14 text-inherit">
            {{ frontPageData.acf.granularized.text }}
          </p>
          <List :data="frontPageData.acf.granularized.list" />
        </template> -->
      </section_two_columb_bg>

      <!-- <ContentSection>
        <template #left>
          <SectionHeader
            :class="'text-gray-dark'"
            :title="homepageData.sections[4].title"
          />
          <div
            class="mb-14 text-gray-dark"
            v-html="homepageData.sections[4].content"
          ></div>
          <List
            :class="'text-gray-dark'"
            :data="homepageData.sections[4].list"
          />
        </template>

        <template #right>
          <SectionImage
            :image-url="homepageData.sections[4].image"
            :image-alt="'test alt'"
          />
        </template>
      </ContentSection> -->
      <CtaJob :data="homepageData.sections[5]" />
    </div>
  </LazyHydrate>
</template>

<script>
import Vue from 'vue'

import Banner from '~/components/Banner.vue'
import Organisations from '~/components/Organisations.vue'
import section_two_columb_bg from '~/components/content-section-bg.vue'
import SectionHeader from '~/components/section-header.vue'
import SectionImage from '~/components/section-image.vue'
import CtaJob from '~/components/cta-job.vue'

export default Vue.extend({
  components: {
    Organisations,
    Banner,
    SectionHeader,
    SectionImage,
    CtaJob,
    section_two_columb_bg,
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
