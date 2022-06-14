<template>
  <LazyHydrate never>
    <div class="flex flex-col">
      <Banner :data="homepageData.sections[0]" />
      <Organisations :data="homepageData.sections[1]" />
      <ContentSection>
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
      </ContentSection>

      <ContentSection
        :class="'text-white'"
        :background-url="homepageData.sections[3].image"
      >
        <template #right>
          <SectionHeader :title="homepageData.sections[3].title" />
          <div
            class="mb-14 text-inherit"
            v-html="homepageData.sections[3].content"
          ></div>
          <List :data="homepageData.sections[3].list" />
        </template>
      </ContentSection>

      <ContentSection>
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
      </ContentSection>

      <CtaJob :data="homepageData.sections[5]" />
    </div>
  </LazyHydrate>
</template>

<script>
import Vue from 'vue'

import Banner from '~/components/Banner.vue'
import Organisations from '~/components/Organisations.vue'
import ContentSection from '~/components/content-section.vue'
import SectionHeader from '~/components/section-header.vue'
import SectionImage from '~/components/section-image.vue'
import CtaJob from '~/components/cta-job.vue'
import LazyHydrate from 'vue-lazy-hydration'

export default Vue.extend({
  components: {
    Organisations,
    Banner,
    ContentSection,
    SectionHeader,
    SectionImage,
    CtaJob,
    LazyHydrate,
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
