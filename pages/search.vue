<template>
  <div>
    <Breadcrumb v-if="breadcrumb" :data="breadcrumb" />
    <div
      class="h-full w-4/5 container mx-auto tablet-wide:pr-0 relative my-[70px]"
    >
      <div
        v-if="$fetchState.pending"
        class="w-full h-full flex justify-center items-center"
      >
        <div class="lds-ripple">
          <div></div>
          <div></div>
        </div>
      </div>
      <div v-else-if="results" class="search_wrapper">
        <div class="flex items-start z-10">
          <div
            class="top-0 left-0 w-[50px] h-[50px] tablet-wide:w-[76px] tablet-wide:h-[76px] shrink-0 flex items-center justify-center rounded-md bg-gray-light"
          >
            <svg
              width="26"
              height="26"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="fill-gray-default tablet-wide:w-10 tablet-wide:h-10"
            >
              <path
                d="M24.8564 24.8563C25.0479 24.6647 25.0479 24.3545 24.8563 24.163L17.6572 16.9639L17.6867 16.9311C19.3076 15.1315 20.3038 12.7588 20.3038 10.1518C20.3037 4.55414 15.7496 0 10.1519 0C4.55414 0 0 4.55414 0 10.1519C0 15.7496 4.55414 20.3038 10.1519 20.3038C12.7588 20.3038 15.1315 19.3076 16.9312 17.6867L16.9639 17.6573L24.163 24.8563C24.2587 24.9521 24.3843 25 24.5097 25C24.6351 25 24.7606 24.9521 24.8564 24.8563ZM10.1519 19.323C5.09531 19.323 0.980748 15.209 0.980748 10.1519C0.980748 5.09482 5.09531 0.980687 10.1519 0.980687C15.2085 0.980687 19.323 5.09476 19.323 10.1519C19.323 15.209 15.2085 19.323 10.1519 19.323Z"
              ></path>
            </svg>
          </div>
          <div class="flex flex-wrap flex-col ml-5">
            <span
              class="text-2xl tablet:text-[40px] text-gray-dark font-normal font-lato whitespace-nowrap mb-[10px]"
            >
              Search results</span
            >
            <span
              class="text-base tablet:text-lg font-lato font-normal text-gray-dark"
            >
              {{ results.hits.length }} from {{ results.nbHits }}</span
            >
          </div>
        </div>
        <div class="min-h-[100px] desktop:w-2/3 mb-10 tablet:mb-20">
          <ul class="relative">
            <li
              class="py-[50px] border-0 border-b-2 border-solid border-gray-light"
              v-for="(result, index) in results.hits"
              :key="index"
            >
              <a :href="getPermaLink(result.permalink)">
                {{ result.post_title }}
              </a>
              <div v-html="result.post_excerpt"></div>
            </li>
          </ul>
        </div>
        <ul class="w-fit mx-auto flex items-center gap-[15px] flex-wrap">
          <li v-if="results.page != 0"
          class="hidden tablet:block">
            <nuxt-link
              :to="{
                path: $route.fullPath,
                query: {
                  q: $route.query.q,
                  p: results.page - 1,
                },
              }"
              class="text-gray-default text-xl hover:text-blue-main transition flex items-center group"
              active-class=""
              exact-active-class=""
            >
              <span class="mr-2.5 mt-1">
                <svg
                  class="group-hover:fill-blue-main fill-gray-default transition rotate-180"
                  width="9"
                  height="16"
                  viewBox="0 0 9 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.311086 15.6517C0.111898 15.428 -3.8304e-08 15.1247 -5.21299e-08 14.8084C-6.59558e-08 14.4921 0.111898 14.1887 0.311086 13.965L5.57046 8.06044L0.311085 2.15584C0.117542 1.93087 0.0104477 1.62955 0.0128685 1.31679C0.0152893 1.00403 0.127032 0.704849 0.324028 0.483685C0.521024 0.262522 0.787512 0.137073 1.0661 0.134355C1.34468 0.131638 1.61307 0.251869 1.81346 0.469156L7.82402 7.2171C8.02321 7.44079 8.13511 7.74414 8.13511 8.06044C8.13511 8.37674 8.02321 8.68009 7.82402 8.90378L1.81346 15.6517C1.61421 15.8754 1.34401 16.001 1.06227 16.001C0.780536 16.001 0.510334 15.8754 0.311086 15.6517Z"
                  />
                </svg>
              </span>
              Prev
            </nuxt-link>
          </li>
          <li
            v-for="(page, index) in pagination"
            :key="index"
            :class="[{ dots: page - pagination[index - 1] > 1 }]"
          >
            <nuxt-link
              :to="{
                path: $route.fullPath,
                query: {
                  q: $route.query.q,
                  p: page,
                },
              }"
              active-class=""
              exact-active-class=""
              class="flex justify-center items-center w-11 h-11 tablet:w-[55px] tablet:h-[55px] border border-solid rounded-full hover:no-underline text-base tablet:text-lg font-lato transition duration-200"
              :class="[
                page == results.page
                  ? 'border-blue-main bg-blue-main text-white'
                  : 'border-gray-default hover:border-blue-main text-gray-default',
              ]"
            >
              {{ page + 1 }}
            </nuxt-link>
          </li>
          <li v-if="results.page != results.nbPages - 1"
          class="hidden tablet:block">
            <nuxt-link
              :to="{
                path: $route.fullPath,
                query: {
                  q: $route.query.q,
                  p: results.page + 1,
                },
              }"
              class="text-gray-default text-xl hover:text-blue-main transition flex items-center group"
              active-class=""
              exact-active-class=""
            >
              Next
              <span class="ml-2.5 mt-1">
                <svg
                  class="group-hover:fill-blue-main fill-gray-default transition"
                  width="9"
                  height="16"
                  viewBox="0 0 9 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.311086 15.6517C0.111898 15.428 -3.8304e-08 15.1247 -5.21299e-08 14.8084C-6.59558e-08 14.4921 0.111898 14.1887 0.311086 13.965L5.57046 8.06044L0.311085 2.15584C0.117542 1.93087 0.0104477 1.62955 0.0128685 1.31679C0.0152893 1.00403 0.127032 0.704849 0.324028 0.483685C0.521024 0.262522 0.787512 0.137073 1.0661 0.134355C1.34468 0.131638 1.61307 0.251869 1.81346 0.469156L7.82402 7.2171C8.02321 7.44079 8.13511 7.74414 8.13511 8.06044C8.13511 8.37674 8.02321 8.68009 7.82402 8.90378L1.81346 15.6517C1.61421 15.8754 1.34401 16.001 1.06227 16.001C0.780536 16.001 0.510334 15.8754 0.311086 15.6517Z"
                  />
                </svg>
              </span>
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumb from '~/components/breadcrumb.vue'

export default {
  components: {
    Breadcrumb,
  },
  data() {
    return {
      results: {
        nbHits: 0,
        hits: [],
      },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        '@id': 'https://www.is-wireless.com/networks/services/#breadcrumb',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://www.is-wireless.com/',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Search',
          },
        ],
      },
    }
  },
  async fetch() {
    const index = this.$algolia.initIndex('web_searchable_posts')
    const pageNr = this.$route.query.p ? this.$route.query.p : 0
    this.results = await index.search(this.$route.query.q, {
      page: pageNr,
    })
  },
  fetchOnServer: false,

  watch: {
    '$route.query': '$fetch',
  },

  computed: {
    pagination() {
      if (!this.results || this.results.hits.length == 0) {
        return
      }

      let resultsCopy = this.results
      let pagination = new Set()
      let currentPage = resultsCopy.page
      let pagesCount = resultsCopy.nbPages

      pagination.add(0)

      if (currentPage != pagesCount - 1) {
        pagination.add(currentPage + 1)
      } else {
        if (pagesCount > 2 && currentPage > 2) {
          pagination.add(currentPage - 2)
        }
      }

      pagination.add(currentPage)

      if (currentPage != 0) {
        pagination.add(currentPage - 1)
      } else {
        if (pagesCount > 2) {
          pagination.add(currentPage + 2)
        }
      }

      pagination.add(pagesCount - 1)

      pagination = Array.from(pagination)
      pagination = pagination.sort(function (a, b) {
        return a - b
      })

      return pagination
    },
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

  methods: {
    getPermaLink: function (permalink) {
      return permalink.replace('api.is-wireless.com', 'www.is-wireless.com')
    },
  },
}
</script>
<style scoped lang="postcss">
.search_wrapper >>> .gsc-control-cse {
  @apply pt-[66px] tablet:pt-[96px] relative;
}

.search_wrapper >>> .gsc-above-wrapper-area {
  @apply border-0 absolute top-7 left-[70px] tablet:top-11 tablet:left-[96px] z-10;
}

.search_wrapper >>> .gsc-webResult.gsc-result .gsc-thumbnail-inside a {
  @apply inline-block text-blue-main hover:text-blue-main-hover visited:text-blue-main-hover font-lato font-normal text-lg tablet:text-2xl mb-7 transition duration-200;
}

.search_wrapper >>> .gsc-webResult.gsc-result .gsc-thumbnail-inside a * {
  @apply text-inherit font-normal font-lato text-lg tablet:text-2xl;
}

.search_wrapper
  >>> .gsc-webResult.gsc-result
  .gsc-thumbnail-inside
  a:visited
  * {
  @apply text-blue-main-hover;
}

.search_wrapper >>> .gs-webResult .gsc-table-result .gs-snippet,
.search_wrapper >>> .gs-webResult .gsc-table-result .gs-snippet b,
.search_wrapper >>> .gsc-above-wrapper-area .gsc-result-info {
  @apply text-base tablet:text-lg font-lato font-normal text-gray-dark;
}

.search_wrapper >>> .gs-webResult.gs-result {
  @apply py-[50px] border-0 border-b-2 border-solid border-gray-light;
}

.search_wrapper >>> .gsc-cursor {
  @apply flex gap-[15px] flex-wrap justify-center tablet-wide:justify-end py-14;
}

.search_wrapper >>> .gsc-cursor .gsc-cursor-page {
  @apply hidden justify-center items-center w-11 h-11 tablet:w-[55px] tablet:h-[55px] border border-solid rounded-full hover:no-underline  text-base tablet:text-lg font-lato;
}

.search_wrapper >>> .gsc-cursor .gsc-cursor-page.gsc-cursor-current-page {
  @apply flex border-blue-main bg-blue-main text-white;
}

.search_wrapper >>> .gsc-cursor-page:not(.gsc-cursor-current-page + div ~ div) {
  @apply flex border-gray-default transition duration-200 hover:border-blue-main text-gray-default;
}

.search_wrapper >>> .gsc-cursor .gsc-cursor-page:last-child {
  @apply flex border-gray-default transition duration-200 hover:border-blue-main text-gray-default;
}

.search_wrapper
  >>> .gsc-cursor
  .gsc-cursor-page.gsc-cursor-current-page
  + div
  + div:not(:last-child) {
  @apply text-[0px] pointer-events-none flex border-0 after:content-['...'] after:block after:text-2xl after:text-gray-default after:relative;
}

.dots {
  @apply flex before:content-['...'] before:text-2xl before:text-gray-default before:mr-4 before:pt-3;
}
</style>
