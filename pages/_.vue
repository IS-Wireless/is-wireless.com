<template>
  <div v-if="pageData">
    <div>
      <div
        v-if="
          pageData.acf && pageData.acf.sections && pageData.acf.sections.length
        "
      >
        <StaticBanner
          v-if="pageData.acf.sections[0].acf_fc_layout === 'section_header'"
          :title="pageData.acf.sections[0].title"
          :background-url="pageData.acf.sections[0].background.url"
        />
        <StaticBannerDescription
          v-else-if="
            pageData.acf.sections[0].acf_fc_layout ===
            'section_header_description'
          "
          :title="pageData.acf.sections[0].title"
          :background-url="pageData.acf.sections[0].background.url"
          :description="pageData.acf.sections[0].description"
        />
      </div>
    </div>

    <LazyHydrate when-visible>
      <Breadcrumb v-if="pageData.breadcrumb" :data="pageData.breadcrumb" />
    </LazyHydrate>

    <div class="tablet:w-4/5 mx-auto tablet:container">
      <div
        v-if="Object.values(pageData.acf || {}).length"
        class="flex"
        :class="[
          pageData.acf.sidebar_right && pageData.acf.sidebar
            ? 'flex-col tablet:flex-row'
            : 'flex-col-reverse tablet:flex-row-reverse',
          pageData.breadcrumb ? 'py-10' : 'pb-10',
        ]"
      >
        <div
          class="w-4/5 tablet:w-full mx-auto mb-10"
          :class="pageData.acf.sidebar ? 'tablet:w-2/3 has-sidebar' : 'w-full'"
        >
          <div v-for="(component, index) in pageData.acf.sections" :key="index">
            <div v-if="component.acf_fc_layout">
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
                v-else-if="
                  component.acf_fc_layout !== 'section_header' &&
                  component.acf_fc_layout !== 'section_header_description'
                "
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
          <div
            class="tablet:top-8"
            :class="pageData.acf.sidebar_right ? 'desktop:sticky' : 'sticky'"
          >
            <div
              v-for="(component, index) in pageData.acf.sidebar"
              :key="index"
              class="mb-2"
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
        class="img-no-click text-page mb-10 w-4/5 mx-auto tablet:container tablet:px-0"
      ></div>
      <div v-else class="flex flex-col items-center">
        <span class="text-9xl">404</span><span>Strona nie znaleziona</span>
      </div>
    </div>
  </div>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration'
import { isSamePath, withoutTrailingSlash } from 'ufo'

export default {
  components: {
    LazyHydrate,
    SectionHeader: () => import('~/components/section-header.vue'),
    StaticBannerDescription: () =>
      import('~/components/static-banner-description.vue'),
    Breadcrumb: () => import('~/components/breadcrumb.vue'),
    section_content: () => import('~/components/content-static.vue'),
    section_two_column: () => import('~/components/content-section.vue'),
    section_two_column_bg: () => import('~/components/content-section-bg.vue'),
    section_list_links_alternative: () =>
      import('~/components/more-solutions.vue'),
    section_tabs: () => import('~/components/tabs.vue'),
    section_links_list: () => import('~/components/filters.vue'),
    section_tiles: () => import('~/components/filterable-tiles.vue'),
    section_grid_links: () => import('~/components/offer-tiles.vue'),
    section_list_links: () => import('~/components/offer-menu.vue'),
    section_cta_background_color: () => import('~/components/cta-funds.vue'),
    sidebar_blocks_links: () => import('~/components/menu-left.vue'),
    sidebar_blocks_list: () => import('~/components/menu-right.vue'),
    sidebar_cta: () => import('~/components/cta-block.vue'),
    section_person: () => import('~/components/person.vue'),
    section_cta_basic: () => import('~/components/cta-basic.vue'),
    section_map: () => import('~/components/map.vue'),
    section_block_subpages: () => import('~/components/project-tiles.vue'),
    section_table: () => import('~/components/table.vue'),
    section_content_columns_center_image: () =>
      import('~/components/content-section-center.vue'),
    section_person_list: () => import('~/components/rnd-team.vue'),
    section_two_column_contact: () => import('~/components/block-form.vue'),
    section_video_yt: () => import('~/components/section-video-yt.vue'),
    section_public_found: () => import('~/components/section-public-fund.vue'),
    section_circle: () => import('~/components/section-circle.vue'),
    section_cta_person: () => import('~/components/cta-person.vue'),
    section_research_slider: () => import('~/components/research-slider.vue'),
    section_details: () => import('~/components/section-details.vue'),
    section_team: () => import('~/components/section-team.vue'),
  },
  // async asyncData({ route, payload, store, $config }) {
  //   await store.getters['index/getPages']

  //   if (
  //     typeof payload !== 'undefined' &&
  //     typeof payload === 'object' &&
  //     Object.keys(payload).length
  //   ) {
  //     return { pageData: payload }
  //   } else {
  //     await store.getters['general/getPages']
  //     const pagesData = store.getters['general/getPagesData']
  //     const pagesArray = Object.values(pagesData)
  //     for (let i = 0; i < pagesArray.length; i++) {
  //       let pageFullPath = pagesArray[i].link
  //         .replace($config.API_URL, '')
  //         .replace('https://www.is-wireless.com', '')
  //       if (isSamePath(pageFullPath, route.path)) {
  //         return { pageData: pagesArray[i] }
  //       }
  //     }
  //   }
  //   return { pageData: {} }
  // },
  asyncData({ app, store, route, $filterData, $config }) {
    let slugs = withoutTrailingSlash(route.fullPath).split('/')

    return app.$wp
      .namespace('wp/v2')
      .pages()
      .slug(slugs[slugs.length - 1])
      .then(async function (data) {
        data.forEach(function (item, index) {
          let pageFullPath = item.link
            .replace($config.API_URL, '')
            .replace('https://www.is-wireless.com', '')
          if (isSamePath(pageFullPath, route.path)) {
            data = item
          }
        })

        if (data.yoast_head_json && Object.keys(data.yoast_head_json).length) {
          data['schema'] = JSON.stringify(data.yoast_head_json.schema)
          for (
            var i = 0;
            i < data.yoast_head_json.schema['@graph'].length;
            i++
          ) {
            if (
              data.yoast_head_json.schema['@graph'][i]['@type'] ==
              'BreadcrumbList'
            ) {
              data['breadcrumb'] = data.yoast_head_json.schema['@graph'][i]
            }
          }
          data['schema_basic'] = {
            title: data.yoast_head_json.title,
            robots: {
              index: data.yoast_head_json.robots.index,
              follow: data.yoast_head_json.robots.follow,
              'max-snippet': data.yoast_head_json.robots['max-snippet'],
              'max-image-preview':
                data.yoast_head_json.robots['max-image-preview'],
              'max-video-preview':
                data.yoast_head_json.robots['max-video-preview'],
            },
            og_locale: data.yoast_head_json.og_locale,
            og_type: data.yoast_head_json.og_type,
            og_title: data.yoast_head_json.og_title,
            og_description: data.yoast_head_json.og_description,
            og_url: data.yoast_head_json.og_url.replace(
              $config.API_URL,
              'https://www.is-wireless.com'
            ),
            og_site_name: data.yoast_head_json.og_site_name,
            twitter_card: data.yoast_head_json.twitter_card,
          }
          if (data.yoast_head_json.description) {
            data['schema_basic']['description'] =
              data.yoast_head_json.description
          }
          if (data.yoast_head_json.twitter_misc) {
            data['schema_basic']['twitter_misc'] =
              data.yoast_head_json.twitter_misc
          }
          if (data.yoast_head_json.article_modified_time) {
            data['schema_basic']['article_modified_time'] =
              data.yoast_head_json.article_modified_time
          }
        }
        if (
          data.acf &&
          data.acf.sections &&
          Object.keys(data.acf.sections).length
        ) {
          if (
            data.acf.sections.some(
              (section) =>
                section.acf_fc_layout == 'section_block_subpages' ||
                section.acf_fc_layout == 'section_research_slider'
            )
          ) {
            await store.dispatch('getPages')
          }

          if (
            data.acf.sections.some(
              (section) => section.acf_fc_layout == 'section_header_description'
            )
          ) {
            data.breadcrumb = false
          }

          data.content = ''
        }

        $filterData(data)
        if (Array.isArray(data) && data.length) {
          data = data[0]
        }
        return { pageData: data }
      })
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
        if (this.pageData.schema_basic.title) {
          tags.title = this.pageData.schema_basic.title
        }
        if (this.pageData.schema_basic.description) {
          tags.meta.push({
            hid: 'description',
            property: 'description',
            content: this.pageData.schema_basic.description,
          })
        }
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
        if (this.pageData.schema_basic.article_modified_time) {
          tags.meta.push({
            hid: 'article_modified_time',
            property: 'article_modified_time',
            content: this.pageData.schema_basic.article_modified_time,
          })
        }
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
          content: this.pageData.schema_basic.og_url,
        })
        if (
          this.pageData.acf &&
          this.pageData.acf.sections &&
          this.pageData.acf.sections[0].acf_fc_layout === 'section_header'
        ) {
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
        em: null,
        a: { href: 1, rel: 1, 'data-rel': 1, 'aria-label': 1 },
        div: null,
      }
      if (this.pageData) {
        let filteredContent = htmlFilter.filter(this.pageData.content.rendered)
        if (filteredContent.includes('data-orig-src')) {
          filteredContent = filteredContent.replace(/ src=/g, ' data-test=')
          filteredContent = filteredContent.replace(
            / data-orig-/g,
            ' ref="imageFix" '
          )
        }
        return filteredContent
      }
      return ''
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

.text-page >>> em,
.text-page >>> .wp-caption-text {
  font-weight: 400;
  text-align: center;
  font-style: italic;
  color: #768894;
  font-size: 16px;
}
</style>
