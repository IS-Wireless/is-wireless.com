<template>
  <div class="flex flex-col">
    <Banner
      :images="[homepageData.baner_slide[0]]"
      :logo-url="homepageData.baner_slide[0].baner_content[0].logo"
      :text="frontPageData.acf.baner_slide[0].baner_content[0].text"
      :buttons="[
        {
          text: homepageData.baner_slide[0].baner_content[0].button_second_text,
          url: homepageData.baner_slide[0].baner_content[0].button_second_url,
        },
        {
          text: homepageData.baner_slide[0].baner_content[0].button_second_text,
          url: homepageData.baner_slide[0].baner_content[0].button_second_url,
        },
      ]"
    />
    <Organisations :data="homepageData.sections[0]" />
    <ContentSection>
      <template #left>
        <SectionHeader
          :class="'text-gray-dark'"
          :title="frontPageData.acf.E2e.title"
        />
        <p class="mb-14 text-gray-dark">
          {{ frontPageData.acf.E2e.text }}
        </p>
        <List :class="'text-gray-dark'" :data="frontPageData.acf.E2e.list" />
      </template>

      <template #right>
        <SectionImage
          :image-url="frontPageData.acf.baner_slide[0].baner_images[0].imgUrl"
          :image-alt="'test alt'"
        />
      </template>
    </ContentSection>

    <ContentSection
      :class="'text-white'"
      :background-url="frontPageData.acf.granularized.bgUrl"
    >
      <template #right>
        <SectionHeader :title="frontPageData.acf.granularized.title" />
        <p class="mb-14 text-inherit">
          {{ frontPageData.acf.granularized.text }}
        </p>
        <List :data="frontPageData.acf.granularized.list" />
      </template>
    </ContentSection>

    <ContentSection>
      <template #left>
        <SectionHeader
          :class="'text-gray-dark'"
          :title="frontPageData.acf.radio.title"
        />
        <p class="mb-14 text-gray-dark">
          {{ frontPageData.acf.radio.text }}
        </p>
        <List :class="'text-gray-dark'" :data="frontPageData.acf.radio.list" />
      </template>

      <template #right>
        <SectionImage
          :image-url="'https://www.is-wireless.com/wp-content/uploads/2021/02/Radio-Resource-Management-800x800.jpg'"
          :image-alt="'test alt'"
        />
      </template>
    </ContentSection>
    <CtaJob
      :title="frontPageData.acf.cta_job.title"
      :background-url="frontPageData.acf.cta_job.bgUrl"
    >
      <template #default>
        <p class="text-white text-center mb-5">
          {{ frontPageData.acf.cta_job.text }}
        </p>
        <a
          class="block object-cover object- text-sm text-white uppercase px-7 py-3 rounded-full bg-blue-main hover:bg-white hover:text-black duration-300 tablet:mb-0 mb-6"
          href="https://www.is-wireless.com/networks/"
          >Explore careers</a
        >
      </template>
    </CtaJob>
  </div>
</template>

<script>
import Vue from 'vue'

import Banner from '~/components/Banner.vue'
import Organisations from '~/components/Organisations.vue'
import ContentSection from '~/components/content-section.vue'
import SectionHeader from '~/components/section-header.vue'
import SectionImage from '~/components/section-image.vue'
import CtaJob from '~/components/cta-job.vue'

export default Vue.extend({
  components: {
    Organisations,
    Banner,
    ContentSection,
    SectionHeader,
    SectionImage,
    CtaJob,
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
