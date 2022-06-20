<template>
  <div>
    <Breadcrumb />
    <div class="w-full px-[10%]">
      <div class="tablet:w-2/3" v-if="postContent">
        <BlogPostContent :data="postContent.content.rendered" />
        <BlogShare :data="testBlogShare" />
        <BlogRelated :data="postsRelated" />
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumb from '~/components/breadcrumb.vue'
import BlogShare from '~/components/blog-share.vue'
import BlogPostContent from '~/components/blog-post-content.vue'
import BlogRelated from '~/components/blog-related.vue'

export default {
  name: 'BlogPost',
  components: {
    Breadcrumb,
    BlogPostContent,
    BlogShare,
    BlogRelated,
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
  computed: {
    postContent() {
      let data = this.$store.getters['general/getData']
      let postData = null
      Object.values(data.posts).forEach((post) => {
        if (
          false ||
          post.slug == this.$route.fullPath.slice(1, -1).split('/').slice(-1)[0]
        ) {
          postData = post
        }
      })
      return postData
    },
    postsRelated() {
      let data = this.$store.getters['general/getData']
      let postRelatedData = []
      Object.values(data.posts.slice(0, 10)).forEach((post) => {
        if (
          false ||
          post.slug !==
            this.$route.fullPath.slice(1, -1).split('/').slice(-1)[0]
        ) {
          postRelatedData.push(post)
        }
      })
      return postRelatedData
    },
  },
}
</script>
