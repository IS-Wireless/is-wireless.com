<template>
  <div>
    <template v-if="pageData.acf">
      <StaticBanner
        v-if="pageData.acf.sections[0].acf_fc_layout === 'section_header'"
        :title="pageData.acf.sections[0].title"
        :background-url="pageData.acf.sections[0].background.url"
      />
    </template>
    <Breadcrumb />
    <div class="tablet:w-4/5 mx-auto py-10">
      <div
        v-if="pageData.acf"
        class="flex flex-col-reverse tablet:flex-row-reverse"
      >
        <div
          class="w-4/5 tablet:w-full mx-auto mb-10"
          :class="pageData.acf.sidebar ? 'tablet:w-2/3 has-sidebar' : 'w-full'"
        >
          <div v-for="(component, index) in pageData.acf.sections" :key="index">
            <component
              v-if="component.acf_fc_layout !== 'section_header'"
              :is="component.acf_fc_layout"
              :data="component"
            ></component>
          </div>
        </div>
        <div v-if="pageData.acf.sidebar" class="tablet:w-1/3">
          <component
            v-for="(component, index) in pageData.acf.sidebar"
            :key="index"
            :is="component.acf_fc_layout"
            :data="component"
          ></component>
        </div>
      </div>
      <div
        v-else-if="pageData.content"
        v-html="pageData.content.rendered"
        class="text-page mb-10"
      ></div>
    </div>
  </div>
</template>

<script>
import SectionHeader from '~/components/section-header.vue'
import Breadcrumb from '~/components/breadcrumb.vue'
import section_content from '~/components/content-static.vue'
import section_list_links_alternative from '~/components/more-solutions.vue'
import section_tabs from '~/components/tabs.vue'
import section_links_list from '~/components/filters.vue'
import section_grid_links from '~/components/offer-tiles.vue'
import section_list_links from '~/components/offer-menu.vue'
import section_cta_background_color from '~/components/cta-funds.vue'
import sidebar_blocks_links from '~/components/menu-left.vue'
import section_person from '~/components/person.vue'

export default {
  components: {
    SectionHeader,
    Breadcrumb,
    section_content,
    section_list_links_alternative,
    section_tabs,
    section_links_list,
    section_grid_links,
    section_list_links,
    section_cta_background_color,
    sidebar_blocks_links,
    section_person,
  },
  data() {
    return {
      content:
        '<p><strong>1.Collection of Your Personal Information</strong></p><p>We will inform you of the purpose for collecting personal information when we collect it from you and keep it to fulfill the purposes for which it was collected, as required by applicable laws or for legitimate purposes.</p><p><strong>2.Uses of Your Personal Information</strong></p><p>We will only use your personal information in the way we specified when it was collected. We will not subsequently change the way your personal information is used without first asking for your permission. Some of the ways we may use personal information include: delivering or supporting products, services or information you have requested, contacting you for customer satisfaction surveys, personalizing websites and newsletters to your preferences, communicating for marketing purposes.</p><p><strong>3.Access to and Accuracy of Your Personal Information</strong></p><p>We need your help in keeping your personal information accurate and up to date, so please notify us of any changes to your personal information. To update your personal information and communication preferences, please contact us on <a href="mailto:info@is-wireless.com">info@is-wireless.com</a></p><p><strong>4.Sharing Your Personal Information</strong></p><p>We do not sell or share your personal information to third parties for marketing purposes unless you have granted us permission to do so. We may share personal information with business partners, service vendors, authorized third-party agents, or contractors to provide a requested service or transaction. This includes processing orders, hosting seminar registration, and providing customer support. We only provide these third parties with the minimum amount of personal information necessary to complete or provide the requested service or transaction. We do not allow third parties to use your personal information for a different purpose.</p><p><strong>5.Security of Your Personal Information</strong></p><p>We are committed to protecting the personal information you share with us. We will only retain your personal information to fulfill the purposes for which it was collected or as required for legitimate purposes or permitted by law.</p><p><strong>6.Updates to this Privacy Statement</strong></p><p>We may update this Privacy Statement at any time, so please review it frequently. If we change our Privacy Statement, we will post the revised version here, with an updated revision date. If we make significant changes to our Privacy Statement, we may also notify you by other means prior to the changes taking effect, such as sending an email or posting a notice on our website.</p>',
    }
  },
  computed: {
    currentRouteName() {
      return this.$route.fullPath.slice(1, -1).split('/').slice(-1)[0]
    },
    pageData() {
      let storeData = this.$store.getters['general/getData']
      let pageData = false
      for (let i = 0; i < storeData.pages.length; i++) {
        if (storeData.pages[i].slug == this.currentRouteName) {
          pageData = storeData.pages[i]
        }
      }
      return pageData
    },
  },
}
</script>

<style lang="postcss" scoped>
.text-page >>> h1,
h2,
h3,
h4,
h5,
h6,
li,
b,
u,
div,
code {
  @apply text-gray-dark font-lato;
}

.text-page >>> h1 {
  @apply text-4xl tablet:text-[50px] mb-5;
}

.text-page >>> h2 {
  @apply text-3xl tablet:text-4xl mb-5;
}
.text-page >>> h3 {
  @apply text-2xl tablet:text-3xl mb-5;
}
.text-page >>> h4 {
  @apply text-xl tablet:text-2xl mb-5;
}
.text-page >>> h5 {
  @apply text-lg tablet:text-xl mb-5;
}
.text-page >>> h6 {
  @apply text-base tablet:text-lg mb-5;
}
.text-page >>> p {
  @apply text-base inline-block mb-5 w-full;
}

.text-page >>> li {
  @apply text-gray-dark;
}

.text-page >>> ol li {
  @apply list-disc ml-5;
}

.text-page >>> ul {
  @apply mb-5;
}

.text-page >>> hr {
  @apply block mx-[10%] mt-5 mb-10;
}

.text-page >>> code {
  @apply block whitespace-pre-wrap max-w-2xl bg-gray-light p-2.5 tablet:p-5 rounded-md mb-10;
}

.text-page >>> img {
  @apply w-full h-auto;
}
</style>
