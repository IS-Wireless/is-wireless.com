<template>
    <div>
    <Breadcrumb/>
    <BlogTimeline :data="postsFromGeneral.posts" />
    </div>
</template>

<script>
import BlogTimeline from '~/components/blog-timeline.vue'
import Breadcrumb from '~/components/breadcrumb.vue'

export default {
    name:'BlogPage',
    components:{
        BlogTimeline
    },
    computed:{
    postsFromGeneral() {    // For testing purpose data is stored via 'general'
      return this.$store.getters['general/getData']
    },
  }
}
</script>

<style>

</style>