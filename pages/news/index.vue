<template>
  <div>
    <div class="w-4/5 mx-auto container pt-8">
      <keep-alive>
        <BlogTimeline :postPageCount="pagesCount" :isFetching="$fetchState.pending || $fetchState.error" :prevLink="lastPageSlug" />
      </keep-alive>
    </div>
    <ScrollToTopBtn :mobileVisible="true" />
  </div>
</template>

<script>
import BlogTimeline from '~/components/blog-timeline.vue'
import Breadcrumb from '~/components/breadcrumb.vue'
import ScrollToTopBtn from '@/components/scroll-to-top.vue'
import { groupBy as _groupBy } from 'lodash'

export default {
  name: 'BlogPage',
  components: {
    Breadcrumb,
    BlogTimeline,
    ScrollToTopBtn,
  },

  data(){
    return {
      pagesCount: 1,
      lastPageSlug: ''
    }
  },

  beforeRouteEnter(to,from,next){
    next(vm=>{
      if(from.params.slug){
        vm.lastPageSlug = from.params.slug; 
      }
    })
  },

  async fetch() {
        const vm = this
        await this.$wp.namespace('wp/v2').posts().perPage(10).page(this.$route.query.p? parseInt(this.$route.query.p) : 1).then(function (data) {
          vm.pagesCount = data._paging.totalPages
          data.forEach(function (item, index) {
            if (
              item.yoast_head_json &&
              Object.keys(item.yoast_head_json).length
            ) {
              data[index]['schema'] = JSON.stringify(
                item.yoast_head_json.schema
              )

              for (
                var i = 0;
                i < item.yoast_head_json.schema['@graph'].length;
                i++
              ) {
                if (
                  item.yoast_head_json.schema['@graph'][i]['@type'] ==
                  'BreadcrumbList'
                ) {
                  data[index]['breadcrumb'] =
                    item.yoast_head_json.schema['@graph'][i]
                }
              }

              data[index]['schema_basic'] = {
                title: item.yoast_head_json.title,
                description: item.yoast_head_json.description,
                robots: {
                  index: item.yoast_head_json.robots.index,
                  follow: item.yoast_head_json.robots.follow,
                  'max-snippet': item.yoast_head_json.robots['max-snippet'],
                  'max-image-preview':
                    item.yoast_head_json.robots['max-image-preview'],
                  'max-video-preview':
                    item.yoast_head_json.robots['max-video-preview'],
                },
                canonical: item.yoast_head_json.canonical,
                og_locale: item.yoast_head_json.og_locale,
                og_type: item.yoast_head_json.og_type,
                og_title: item.yoast_head_json.og_title,
                og_description: item.yoast_head_json.og_description,
                og_url: item.yoast_head_json.og_url,
                og_site_name: item.yoast_head_json.og_site_name,
                article_modified_time:
                  item.yoast_head_json.article_modified_time,
                twitter_card: item.yoast_head_json.twitter_card,
                twitter_misc: item.yoast_head_json.twitter_misc,
              }
            }
            if (item.content.rendered) {
              let tmp = item.content.rendered
              item.content.rendered = tmp.replace(/srcset="[\s\S]*?"/, '')
            }
          })
          vm.$store.dispatch('general/postsInit', { posts: data, prepend: false })
        })
  },

  watch: {
    '$route.query': '$fetch',
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
}
</script>

<style></style>
