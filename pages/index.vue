<template>
  <div class="flex flex-col">
    <Banner :data="frontPageData.homepageData.sections[0]" />

    <Organisations :data="frontPageData.homepageData.sections[1]" />

    <section_two_column
      :class="'px-[10%]'"
      :data="frontPageData.homepageData.sections[2]"
    />

    <section_two_column_bg
      :textClr="'text-white'"
      :data="frontPageData.homepageData.sections[3]"
    />

    <section_two_column
      :class="'px-[10%]'"
      :data="frontPageData.homepageData.sections[4]"
    />

    <CtaJob :data="frontPageData.homepageData.sections[5]" />
  </div>
</template>

<script>
import Vue from 'vue'
import CBanner from '~/components/Banner.vue'
import COrganisations from '~/components/Organisations.vue'
import Csection_two_column from '~/components/content-section.vue'
import Csection_two_column_bg from '~/components/content-section-bg.vue'
import CCtaJob from '~/components/cta-job.vue'

export default Vue.extend({
  components: {
    Banner: CBanner,
    Organisations: COrganisations,
    section_two_column: Csection_two_column,
    section_two_column_bg: Csection_two_column_bg,
    CtaJob: CCtaJob,
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
})
</script>
