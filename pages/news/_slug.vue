<template>
  <div>
    <Breadcrumb />
    <div class="w-full px-[10%]">
      <div class="tablet:w-2/3" v-if="pageData">
        <BlogPostContent
          v-if="pageData.content"
          :data="pageData.content.rendered"
        />
        <BlogShare :data="testBlogShare" />
        <BlogRelated v-if="postsRelated" :data="postsRelated" />
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

const getRelatedPosts = function (pagesData, thisRoute) {
  const postRelatedData = []
  Object.values(pagesData.slice(0, 10)).forEach((post) => {
    let postFullPath = post.link.replace('https://www.is-wireless.com', '')
    if (!isSamePath(postFullPath, thisRoute)) {
      console.log(postFullPath, thisRoute)
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

  async asyncData({ route, payload, store }) {
    const pagesData = store.getters['general/getPostsData']
    if (payload && Object.keys(payload).length) {
      return {
        pageData: payload,
        postsRelated: getRelatedPosts(pagesData, route.fullPath),
      }
    } else {
      const pagesArray = Object.values(pagesData)
      for (let i = 0; i < pagesArray.length; i++) {
        let pageFullPath = pagesArray[i].link.replace(
          'https://www.is-wireless.com',
          ''
        )
        if (isSamePath(pageFullPath, route.fullPath)) {
          return {
            pageData: pagesArray[i],
            postsRelated: getRelatedPosts(pagesData, route.fullPath),
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
}
</script>
