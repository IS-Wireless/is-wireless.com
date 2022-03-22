<template>
  <div>
    <Banner />
    <Organisations />
    <ContentSection>
      <template v-slot:left>
        <SectionHeader
          :class="'text-gray-main'"
          :title="'Complete E2E European Open RAN'"
        />
        <p class="mb-14 text-gray-light">
          Software-hardware decoupling and opening of interfaces is a phenomenon
          well known from other domains such as computers or mobile phones. It
          always brings more choice at a lower price. This is the long-awaited
          paradigm shift in RAN business models. On the contrary, single-RAN
          promoted by the “traditional” vendors is the main reason and cause for
          the telco industry standstill.
        </p>
        <List :class="'text-gray-main'" :items="testList" />
      </template>

      <template v-slot:right>
        <SectionImage
          :imageUrl="frontPageData.acf.baner_slide[0].baner_image"
        />
      </template>
    </ContentSection>
    <ContentSection :class="'text-white'" :backgroundUrl="bgUrlRadio">
      <template v-slot:right>
        <SectionHeader
          :title="'Highly granularized Network Function Virtualization'"
        />
        <p class="mb-14 text-inherit">
          Decoupling happens also inside the software. Instead of virtual
          software monoliths we are using libraries of highly granularized
          Virtual Network Functions. Moreover, they can be engineered in
          semi-automatic mode.
        </p>
        <List :items="granularizedList" />
      </template>
    </ContentSection>

    <ContentSection>
      <template v-slot:left>
        <SectionHeader
          :class="'text-gray-main'"
          :title="'Radio Resource Management'"
        />
        <p class="mb-14 text-gray-light">
          Future networks will need to be much denser to meet the 1000x capacity
          requirement. It may mean the deployment of low-power Radio Units at
          every corner of the street and in every room. RRM algorithms run by
          RIC can handle interference in such situations. Moreover, they can
          manage QoS both in ultra-dense and in macro networks.
        </p>
        <List :class="'text-gray-main'" :items="radioList" />
      </template>

      <template v-slot:right>
        <SectionImage
          :imageUrl="'https://www.is-wireless.com/wp-content/uploads/2021/02/Radio-Resource-Management-800x800.jpg'"
        />
      </template>
    </ContentSection>
    <CtaJob
      :title="'Check out job openings'"
      :backgroundUrl="'https://www.is-wireless.com/wp-content/uploads/2021/02/5G-job-IS-Wireless.jpg'"
    >
      <template>
        <p class="text-white text-center mb-5">
          IS-Wireless is always looking for talented people!
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

  async fetch({ app, store }) {
    await app.$wp
      .namespace('wuxt')
      .v1()
      .frontPage()
      .then(function (data) {
        store.commit('homepage/save', data)
      })
  },
  computed: {
    frontPageData() {
      return this.$store.getters['homepage/getData']
    },
  },
  data() {
    return {
      testList: [
        {
          text:
            'Savings of ~30% in Capex and ~40% in Opex when compared to “traditional” RAN deployment already demonstrated by Rakuten',
          iconUrl: '../static/test-icon.png',
        },
        {
          text:
            '	No vendor lock-in and rich supplier ecosystem significantly lowering business risks such as dependency on a single supplier',
          iconUrl: '../static/test-icon.png',
        },
        {
          text:
            '	Better security and scalability by use of independently managed network functions deployed when needed',
          iconUrl:
            'https://e7.pngegg.com/pngimages/527/437/png-clipart-wifi-logo-wi-fi-computer-icons-wireless-symbol-wifi-icon-angle-electronics.png',
        },
      ],

      granularizedList: [
        {
          text: 'Possibility to support any of the protocol splits',
          iconUrl: '../static/test-icon.png',
        },
        {
          text:
            'Ease of deployment on any computing resources including dedicated and shared ones',
          iconUrl: '../static/test-icon.png',
        },
        {
          text:
            'Significantly shorter time to market in new feature deployment',
          iconUrl:
            'https://e7.pngegg.com/pngimages/527/437/png-clipart-wifi-logo-wi-fi-computer-icons-wireless-symbol-wifi-icon-angle-electronics.png',
        },
      ],

      radioList: [
        {
          text:
            'Constructive use of interference, radiation lowering, energy efficiency',
          iconUrl: '../static/test-icon.png',
        },
        {
          text:
            'Practical realization of ultra-dense and high capacity networks',
          iconUrl: '../static/test-icon.png',
        },
        {
          text:
            'Ultra-reliable and low-latency communications enabled by the RRM algorithms',
          iconUrl:
            'https://e7.pngegg.com/pngimages/527/437/png-clipart-wifi-logo-wi-fi-computer-icons-wireless-symbol-wifi-icon-angle-electronics.png',
        },
      ],

      bgUrlRadio:
        'https://www.is-wireless.com/wp-content/uploads/2021/02/RRH-1.jpg',
      bgUrlJobs: '',
    }
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
