<template>
  <div>
    <Breadcrumb v-if="pageData" :data="pageData.breadcrumb" />
    <div class="w-full px-[10%]">
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

  async asyncData({ route, payload, store, $config }) {
    const pagesData = store.getters['general/getPostsData']
    if (typeof payload !== 'undefined' && Object.keys(payload).length) {
      return {
        pageData: payload,
        postsRelated: getRelatedPosts(pagesData, route.path, $config),
      }
    } else {
      const pagesArray = Object.values(pagesData)
      for (let i = 0; i < pagesArray.length; i++) {
        let pageFullPath = pagesArray[i].link
          .replace($config.API_URL, '')
          .replace('https://www.is-wireless.com', '')
        if (isSamePath(pageFullPath, route.path)) {
          return {
            pageData: pagesArray[i],
            postsRelated: getRelatedPosts(pagesData, route.path, $config),
          }
        }
      }
    }

    return { pageData: {}, postsRelated: [] }
  },
  data() {
    return {
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

        if (
          this.pageData.acf &&
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
  font-size: 16px;
}
</style>
