<template>
  <div v-if="pageData">
    <div>
      <div v-if="pageData.acf">
        <StaticBanner
          v-if="pageData.acf.sections[0].acf_fc_layout === 'section_header'"
          :title="pageData.acf.sections[0].title"
          :background-url="pageData.acf.sections[0].background.url"
        />
      </div>
    </div>
    <Breadcrumb />
    <div class="tablet:w-4/5 mx-auto py-10">
      <div
        v-if="pageData.acf"
        class="flex"
        :class="
          pageData.acf.sidebar_right && pageData.acf.sidebar
            ? 'flex-col tablet:flex-row'
            : 'flex-col-reverse tablet:flex-row-reverse'
        "
      >
        <div
          class="w-4/5 tablet:w-full mx-auto mb-10"
          :class="pageData.acf.sidebar ? 'tablet:w-2/3 has-sidebar' : 'w-full'"
        >
          <div v-for="(component, index) in pageData.acf.sections" :key="index">
            <div v-if="component.acf_fc_layout">
              <component
                v-if="component.acf_fc_layout !== 'section_header'"
                :is="component.acf_fc_layout"
                :data="component"
              ></component>
            </div>
          </div>
        </div>
        <div
          v-if="pageData.acf.sidebar"
          class="tablet:w-1/3 sticky top-0 tablet:static"
          :class="pageData.acf.sidebar_right ? 'tablet:ml-5' : 'tablet:mr-5'"
        >
          <div class="sticky tablet:top-8">
            <div
              v-for="(component, index) in pageData.acf.sidebar"
              :key="index"
            >
              <div v-if="component.acf_fc_layout">
                <component
                  :key="index"
                  :is="component.acf_fc_layout"
                  :data="component"
                ></component>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        v-else-if="pageData.content"
        v-html="pageData.content.rendered"
        class="text-page mb-10 px-[10%] tablet:px-0"
      ></div>
    </div>
  </div>
</template>

<script>
import SectionHeader from '~/components/section-header.vue'
import Breadcrumb from '~/components/breadcrumb.vue'
import section_content from '~/components/content-static.vue'
import section_two_column from '~/components/content-section.vue'
import section_two_column_bg from '~/components/content-section-bg.vue'
import section_list_links_alternative from '~/components/more-solutions.vue'
import section_tabs from '~/components/tabs.vue'
import section_links_list from '~/components/filters.vue'
import section_grid_links from '~/components/offer-tiles.vue'
import section_list_links from '~/components/offer-menu.vue'
import section_cta_background_color from '~/components/cta-funds.vue'
import sidebar_blocks_links from '~/components/menu-left.vue'
import sidebar_blocks_list from '~/components/menu-right.vue'
import section_person from '~/components/person.vue'
import section_cta_basic from '~/components/cta-basic.vue'
import section_map from '~/components/map.vue'
import section_block_subpages from '~/components/project-tiles.vue'
import section_table from '~/components/table.vue'
import section_content_columns_center_image from '~/components/content-section-center.vue'

export default {
  components: {
    SectionHeader,
    Breadcrumb,
    section_content,
    section_two_column,
    section_two_column_bg,
    section_list_links_alternative,
    section_tabs,
    section_links_list,
    section_grid_links,
    section_list_links,
    section_cta_background_color,
    sidebar_blocks_links,
    sidebar_blocks_list,
    section_person,
    section_cta_basic,
    section_map,
    section_block_subpages,
    section_table,
    section_content_columns_center_image,
  },
  computed: {
    currentRouteName() {
      return this.$route.fullPath
    },
    pageData() {
      const pagesData = this.$store.getters['general/getPagesData']
      const pagesArray = Object.values(pagesData)
      let pageData = false
      for (let i = 0; i < pagesArray.length; i++) {
        let pageFullPath = pagesArray[i].link.replace(
          'https://www.is-wireless.com',
          ''
        )
        if (pageFullPath === this.currentRouteName) {
          pageData = pagesArray[i]
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
