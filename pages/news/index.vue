<template>
  <div>
    <div class="w-4/5 mx-auto container pt-8">
      <KeepAlive>
        <BlogTimeline :postPageCount="pagesCount" :isFetching="false" />
      </KeepAlive>
    </div>

    <!-- FOR CRAWLER -->
    <nuxt-link v-for="page in pagesCount" :to="`/news?p=${page}`" class="hidden"></nuxt-link>
    <!-- /FOR CRAWLER -->

    <ScrollToTopBtn :mobileVisible="true" />
  </div>
</template>

<script setup>
import { useGeneralStore } from '~/store/general'
import ScrollToTopBtn from '@/components/scroll-to-top.vue'


const route = useRoute()
const routePaging = computed(()=>{
  return route.query.p
})
const currentPage = useState('currentPage',() => routePaging.value ? parseInt(routePaging.value) : 1 )

const pagesCount = computed(()=>{
  let postsCount = useGeneralStore().posts.length
  return Math.ceil(postsCount/10)
})

watch(routePaging, (newPage)=>{
  currentPage.value = parseInt(newPage)
})

definePageMeta({
    keepalive: true
})

</script>

<style></style>
