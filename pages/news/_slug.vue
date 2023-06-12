<template>
  <div>
    <Breadcrumb v-if="pageData" :data="pageData.breadcrumb" />
    <div class="w-4/5 container mx-auto">
      <div class="tablet:w-2/3" v-if="pageData">
        <BlogPostContent
          v-if="pageData.content"
          :data="contentFiltered"
          class="postContent img-no-click"
        />
        <BlogShare :data="testBlogShare" />
        <BlogRelated
          v-if="postsRelated && postsRelated.length"
          :data="postsRelated"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumb from '~/components/breadcrumb.vue'
import BlogShare from '~/components/blog-share.vue'
import BlogPostContent from '~/components/blog-post-content.vue'
import BlogRelated from '~/components/blog-related.vue'

import { isSamePath } from 'ufo'

const getRelatedPosts = function (pagesData, thisRoute, $config) {
  const postRelatedData = []
  Object.values(pagesData.slice(0, 10)).forEach((post) => {
    let postFullPath = post.link
      .replace($config.API_URL, '')
      .replace('https://www.is-wireless.com', '')
    if (!isSamePath(postFullPath, thisRoute)) {
      postRelatedData.push(post)
    }
  })
  return postRelatedData
}

export default {
  name: 'BlogPost',
  components: {
    Breadcrumb,
    BlogPostContent,
    BlogShare,
    BlogRelated,
  },
  async fetch() {
    let route = this.$route
    let config = this.$config
    let dataRaw = await this.$wp
      .namespace('wp/v2')
      .posts()
      .slug(route.params.slug)
      .then(function (data) {
        data.forEach(function (item, index) {
          if (
            item.yoast_head_json &&
            Object.keys(item.yoast_head_json).length
          ) {
            data[index]['schema'] = JSON.stringify(item.yoast_head_json.schema)

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
              article_modified_time: item.yoast_head_json.article_modified_time,
              twitter_card: item.yoast_head_json.twitter_card,
              twitter_misc: item.yoast_head_json.twitter_misc,
            }
          }
          if (item.content.rendered) {
            let tmp = item.content.rendered
            item.content.rendered = tmp.replace(/srcset="[\s\S]*?"/, '')
          }
        })

        return {
          pageData: data[0],
          postsRelated: getRelatedPosts(data, route.path, config),
        }
      })
    this.pageData = dataRaw.pageData
    this.postsRelated = dataRaw.postsRelated
  },
  data() {
    return {
      postsRelated: false,
      pageData: false,
      testBlogShare: {
        text: 'Share This Story, Choose Your Platform!',
        socials: [
          { type: 'facebook', link: '/' },
          { type: 'twitter', link: '/' },
          { type: 'linkedin', link: '/' },
          { type: 'mail', link: 'mailto:' },
        ],
      },
    }
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

        if (this.pageData.featured_image_src) {
          tags.meta.push({
            hid: 'og:image',
            property: 'og:image',
            content: this.pageData.featured_image_src,
          })
        }
      }
    }

    return tags
  },
  computed: {
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
        blockquote: null,
        ul: null,
        ol: null,
        li: null,
        a: { href: 1, rel: 1, 'data-rel': 1, 'aria-label': 1 },
        div: null,
        table: null,
        th: null,
        tr: null,
        td: null,
        sup: null,
        sub: null,
      }
      if (this.pageData.content.rendered) {
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
    },
  },
  methods: {
    refresh() {
      this.$fetch()
    },
  },
}
</script>

<style lang="postcss" scoped>
.postContent /deep/ [rel='gallery'] {
  @apply inline-block;
}

.postContent /deep/ a[data-rel|='lightbox-image'] {
  pointer-events: none;
}

.postContent /deep/ em {
  font-weight: 400;
  text-align: center;
  font-style: italic;
  color: #768894;
}

</style>
