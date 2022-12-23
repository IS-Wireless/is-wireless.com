<template>
  <div class="flex flex-col">
    <LazyHydrate when-visible>
      <BannerVideo
        v-if="
          frontPageData.homepageData.sections[0] &&
          frontPageData.homepageData.sections[0].banner
        "
        :data="frontPageData.homepageData.sections[0]"
      />
    </LazyHydrate>

    <LazyHydrate when-visible>
      <Organisations
        v-if="
          frontPageData.homepageData.sections[1] &&
          frontPageData.homepageData.sections[1].logo
        "
        :data="frontPageData.homepageData.sections[1]"
      />
    </LazyHydrate>

    <LazyHydrate when-visible>
      <section_two_column_home
        :data="frontPageData.homepageData.sections[2]"
        :globeImg="true"
      />
    </LazyHydrate>

    <LazyHydrate when-visible>
      <section_two_column_bg
        :staticClass="'container mx-auto w-4/5'"
        :textClr="'text-white'"
        :parallaxActive="false"
        :data="frontPageData.homepageData.sections[3]"
      />
    </LazyHydrate>

    <LazyHydrate when-visible>
      <section_two_column_home
        :data="frontPageData.homepageData.sections[4]"
        :fullImg="true"
      />
    </LazyHydrate>

    <LazyHydrate when-visible>
      <CtaJob :data="frontPageData.homepageData.sections[5]" />
    </LazyHydrate>
  </div>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration'

export default {
  components: {
    LazyHydrate,
    BannerVideo: () => import('@/components/BannerVideo.vue'),
    Organisations: () => import('~/components/Organisations.vue'),
    section_two_column: () => import('~/components/content-section.vue'),
    section_two_column_bg: () => import('~/components/content-section-bg.vue'),
    section_two_column_home: () =>
      import('~/components/content-section-home.vue'),
    CtaJob: () => import('~/components/cta-job.vue'),
  },
  async asyncData({ app }) {
    app.$wp
      .namespace('wp/v2')
      .pages()
      .id(2)
      .then(function (data) {
        let tmp = ''
        if (data && data.yoast_head_json && data.yoast_head_json.schema) {
          tmp = JSON.stringify(data.yoast_head_json.schema)
        }
        filterData(data)
        data.schema = tmp
        if (data.acf && data.acf.section) {
          data.content = ''
        }
        return { homepageData: data.acf }
      })
  },
  head() {
    let tags = {
      script: [],
      meta: [],
      link: [],
      __dangerouslyDisableSanitizers: ['script'],
    }
    this.pageData = this.frontPageData.homepageData
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
    frontPageData() {
      return this.$store.getters['homepage/getData']
    },
  },
}
</script>
