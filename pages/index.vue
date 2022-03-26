<template>
  <div>
    <Banner />
    <Organisations />
    <ContentSection>
      <template v-slot:left>
        <SectionHeader
          :class="'text-gray-main'"
          :title="frontPageData.acf.E2e.title"
        />
        <p class="mb-14 text-gray-light">
          {{ frontPageData.acf.E2e.text }}
        </p>
        <List :class="'text-gray-main'" :items="frontPageData.acf.E2e.list" />
      </template>

      <template v-slot:right>
        <SectionImage
          :imageUrl="frontPageData.acf.baner_slide[0].baner_image"
        />
      </template>
    </ContentSection>
    
    <ContentSection :class="'text-white'" :backgroundUrl="frontPageData.acf.granularized.bgUrl">
      <template v-slot:right>
        <SectionHeader
          :title="frontPageData.acf.granularized.title"
        />
        <p class="mb-14 text-inherit">
          {{ frontPageData.acf.granularized.text }}
        </p>
        <List :items="frontPageData.acf.granularized.list" />
      </template>
    </ContentSection>

    <ContentSection>
      <template v-slot:left>
        <SectionHeader
          :class="'text-gray-main'"
          :title="frontPageData.acf.radio.title"
        />
        <p class="mb-14 text-gray-light">
          {{frontPageData.acf.radio.text}}
        </p>
        <List :class="'text-gray-main'" :items="frontPageData.acf.radio.list" />
      </template>

      <template v-slot:right>
        <SectionImage
          :imageUrl="'https://www.is-wireless.com/wp-content/uploads/2021/02/Radio-Resource-Management-800x800.jpg'"
        />
      </template>
    </ContentSection>
    <CtaJob
      :title="frontPageData.acf.cta_job.title"
      :backgroundUrl="frontPageData.acf.cta_job.bgUrl"
    >
      <template>
        <p class="text-white text-center mb-5">
          {{frontPageData.acf.cta_job.text}}
        </p>
        <a
          class="
            block
            object-cover object-
            text-sm text-white
            uppercase
            px-7
            py-3
            rounded-full
            bg-blue-main
            hover:bg-white hover:text-black
            duration-300
            tablet:mb-0
            mb-6
          "
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
import ListItem from '~/components/list.vue'
import SectionImage from '~/components/section-image.vue'
import CtaJob from '~/components/cta-job.vue'

export default Vue.extend({
  components: {
    Organisations,
    Banner,
    ContentSection,
    SectionHeader,
    ListItem,
    SectionImage,
    CtaJob,
  },

  // async fetch({ app, store }) {
  //   await app.$wp
  //     .namespace('wuxt')
  //     .v1()
  //     .frontPage()
  //     .then(function (data) {
  //       store.commit('homepage/save', data)
  //     })
  // },
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
