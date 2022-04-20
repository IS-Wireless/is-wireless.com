<template>
  <div class="px-[10%]">
    <Breadcrumb />
    <BlogTimeline :data="postsGrouped" />
  </div>
</template>

<script>
import BlogTimeline from '~/components/blog-timeline.vue'
import Breadcrumb from '~/components/breadcrumb.vue'

import { groupBy as _groupBy } from 'lodash'

export default {
  name: 'BlogPage',
  components: {
    Breadcrumb,
    BlogTimeline,
  },
  computed: {
    postsGrouped() {
      // For testing purpose data is stored via 'general'
      let data = this.$store.getters['general/getData']
      var months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ]

      var groupedPosts = _groupBy(data.posts, (post) => {
        return new Date(post.date).getFullYear()
      })

      groupedPosts = Object.keys(groupedPosts)
        .map((year) => ({ year: year, posts: groupedPosts[year] }))
        .reverse()

      Object.keys(groupedPosts).forEach((item) => {
        groupedPosts[item].posts = _groupBy(
          groupedPosts[item].posts,
          (post) => {
            return new Date(post.date).getMonth()
          }
        )
        groupedPosts[item].posts = Object.keys(groupedPosts[item].posts)
          .map((month) => ({
            number: month,
            name: months[month],
            posts: groupedPosts[item].posts[month],
          }))
          .reverse()
      })

      return groupedPosts
    },
  },
}
</script>

<style></style>
