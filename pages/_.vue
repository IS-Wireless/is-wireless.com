<template>
  <div v-if="pageData">
    <div>
      <div v-if="pageData.acf">
        <LazyHydrate never>
          <StaticBanner
            v-if="pageData.acf.sections[0].acf_fc_layout === 'section_header'"
            :title="pageData.acf.sections[0].title"
            :background-url="pageData.acf.sections[0].background.url"
          />
        </LazyHydrate>
      </div>
    </div>
    <LazyHydrate when-visible>
      <Breadcrumb />
    </LazyHydrate>
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
              <LazyHydrate when-visible>
                <component
                  v-if="
                    component.acf_fc_layout === 'section_tabs' &&
                    pageData.acf.section_table
                  "
                  :is="component.acf_fc_layout"
                  :data="
                    Object.assign(component, {
                      table: pageData.acf.section_table,
                    })
                  "
                ></component>
                <component
                  v-else-if="component.acf_fc_layout !== 'section_header'"
                  :is="component.acf_fc_layout"
                  :data="component"
                ></component>
              </LazyHydrate>
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
        v-html="contentFiltered"
        class="text-page mb-10 px-[10%] tablet:px-0"
      ></div>
    </div>
  </div>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration'
import { isSamePath } from 'ufo'

export default {
  components: {
    LazyHydrate,
    SectionHeader: () => import('~/components/section-header.vue'),
    Breadcrumb: () => import('~/components/breadcrumb.vue'),
    section_content: () => import('~/components/content-static.vue'),
    section_two_column: () => import('~/components/content-section.vue'),
    section_two_column_bg: () => import('~/components/content-section-bg.vue'),
    section_list_links_alternative: () =>
      import('~/components/more-solutions.vue'),
    section_tabs: () => import('~/components/tabs.vue'),
    section_links_list: () => import('~/components/filters.vue'),
    section_grid_links: () => import('~/components/offer-tiles.vue'),
    section_list_links: () => import('~/components/offer-menu.vue'),
    section_cta_background_color: () => import('~/components/cta-funds.vue'),
    sidebar_blocks_links: () => import('~/components/menu-left.vue'),
    sidebar_blocks_list: () => import('~/components/menu-right.vue'),
    section_person: () => import('~/components/person.vue'),
    section_cta_basic: () => import('~/components/cta-basic.vue'),
    section_map: () => import('~/components/map.vue'),
    section_block_subpages: () => import('~/components/project-tiles.vue'),
    section_table: () => import('~/components/table.vue'),
    section_content_columns_center_image: () =>
      import('~/components/content-section-center.vue'),
    section_person_list: () => import('~/components/rnd-team.vue'),
  },
  async asyncData({ route, payload, store }) {
    if (typeof payload !== 'undefined' && Object.keys(payload).length) {
      return { pageData: payload }
    } else {
      const pagesData = store.getters['general/getPagesData']
      const pagesArray = Object.values(pagesData)
      for (let i = 0; i < pagesArray.length; i++) {
        let pageFullPath = pagesArray[i].link.replace(
          'https://www.is-wireless.com',
          ''
        )
        if (isSamePath(pageFullPath, route.path)) {
          return { pageData: pagesArray[i] }
        }
      }
    }
    return { pageData: {} }
  },
  head() {
    let tags = {
      script: [],
      meta: [],
      link: [],
      __dangerouslyDisableSanitizers: ['script'],
    }
    if (this.pageData) {
      if (this.pageData.schema) {
        tags.script.push({
          vmid: 'ldjson-schema',
          type: 'application/ld+json',
          innerHTML: this.pageData.schema,
        })
      }

      if (this.pageData.schema_basic) {
        tags.title = this.pageData.schema_basic.title

        tags.meta.push({
          hid: 'description',
          property: 'description',
          content: this.pageData.schema_basic.description,
        })

        tags.meta.push({
          hid: 'robots',
          name: 'robots',
          content: new Array(
            this.pageData.schema_basic.robots.index,
            this.pageData.schema_basic.robots.follow,
            this.pageData.schema_basic.robots['max-snippet'],
            this.pageData.schema_basic.robots['max-image-preview'],
            this.pageData.schema_basic.robots['max-video-preview']
          ).join(', '),
        })

        tags.link.push({
          hid: 'canonical',
          rel: 'canonical',
          href: this.pageData.schema_basic.canonical,
        })

        tags.meta.push({
          hid: 'og_locale',
          property: 'og_locale',
          content: this.pageData.schema_basic.og_locale,
        })

        tags.meta.push({
          hid: 'og_type',
          property: 'og_type',
          content: this.pageData.schema_basic.og_type,
        })

        tags.meta.push({
          hid: 'og_title',
          property: 'og_title',
          content: this.pageData.schema_basic.og_title,
        })

        tags.meta.push({
          hid: 'og_description',
          property: 'og_description',
          content: this.pageData.schema_basic.og_description,
        })

        tags.meta.push({
          hid: 'og_url',
          property: 'og_url',
          content: this.pageData.schema_basic.og_url,
        })

        tags.meta.push({
          hid: 'og_site_name',
          property: 'og_site_name',
          content: this.pageData.schema_basic.og_site_name,
        })

        tags.meta.push({
          hid: 'article_modified_time',
          property: 'article_modified_time',
          content: this.pageData.schema_basic.article_modified_time,
        })

        tags.meta.push({
          hid: 'twitter_card',
          name: 'twitter_card',
          content: this.pageData.schema_basic.twitter_card,
        })

        if (this.pageData.schema_basic.twitter_misc) {
          let $i = 1
          for (const [key, value] of Object.entries(
            this.pageData.schema_basic.twitter_misc
          )) {
            tags.meta.push({
              hid: 'twitter:label' + $i,
              name: 'twitter:label' + $i,
              content: key,
            })
            tags.meta.push({
              hid: 'twitter:data' + $i,
              name: 'twitter:data' + $i,
              content: value,
            })
            $i++
          }
        }

        tags.meta.push({
          hid: 'og:url',
          property: 'og:url',
          content: this.pageData.link,
        })

        if (this.pageData.acf.sections[0].acf_fc_layout === 'section_header') {
          tags.meta.push({
            hid: 'og:image',
            property: 'og:image',
            content: this.pageData.acf.sections[0].background.url,
          })
        }
      }
    }

    return tags
  },
  computed: {
    currentRouteName() {
      return this.$route.path
    },
    contentFiltered() {
      const HtmlFilter = require('html-filter')
      const htmlFilter = new HtmlFilter()
      htmlFilter.allowedTags = {
        img: {
          src: 1,
          alt: 1,
          width: 1,
          height: 1,
          'data-orig-src': 1,
        }, // not support attr
        h1: { id: 1 }, // support id and style attr
        h2: { id: 1 }, // support id and style attr
        h3: { id: 1 }, // support id and style attr
        h4: { id: 1 }, // support id and style attr
        h5: { id: 1 }, // support id and style attr
        h6: { id: 1 }, // support id and style attr
        h7: { id: 1 }, // support id and style attr
        p: { id: 1 }, // support id and style attr
        iframe: { id: 1 }, // support id and style attr
        br: null,
        i: null,
        span: null,
        strong: null,
        a: { href: 1, rel: 1, 'data-rel': 1, 'aria-label': 1 },
        div: null,
      }
      let filteredContent = htmlFilter.filter(this.pageData.content.rendered)
      if (filteredContent.includes('data-orig-src')) {
        filteredContent = filteredContent.replace(/ src=/g, ' data-test=')
        filteredContent = filteredContent.replace(
          / data-orig-/g,
          ' ref="imageFix" '
        )
      }
      return filteredContent
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
