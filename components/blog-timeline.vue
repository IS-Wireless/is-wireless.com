<template>
  <div v-if="posts.length > 0" class="w-full relative">
    <div
      class="absolute h-full w-full hidden tablet-wide:flex flex-col items-center z-0"
    >
      <span>
        <svg
          class="fill-current text-gray-light"
          width="46"
          height="46"
          viewBox="0 0 46 46"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M40.5 0.5H5.5C2.75 0.5 0.5 2.75 0.5 5.5V40.5C0.5 43.25 2.75 45.5 5.5 45.5H40.5C43.25 45.5 45.5 43.25 45.5 40.5V5.5C45.5 2.75 43.25 0.5 40.5 0.5ZM28 35.5H10.5V30.5H28V35.5ZM35.5 25.5H10.5V20.5H35.5V25.5ZM35.5 15.5H10.5V10.5H35.5V15.5Z"
          />
        </svg>
      </span>
      <div class="h-full w-1 bg-gray-light rounded-b-full mb-20" />
    </div>
    <div class="relative z-10 mb-32">
      <template v-for="(yearData, yearIndex) in posts">
        <div
          v-for="(monthData, monthIndex) in yearData.posts"
          :key="monthData.name + yearIndex"
          ref="monthGroup"
          class="flex flex-col max-w-[960px] mx-auto group transition-all duration-500 overflow-hidden"
          data-collapsed="false"
          data-month-group
          style="height: 0px"
        >
          <div
          >
            <div
              class="w-full text-center hidden tablet-wide:block"
              :class="{ 'pt-10': monthIndex === 0 && yearIndex === 0 }"
            >
              <span
                class="inline-block p-2 bg-gray-light rounded-md my-5 max-w-[131px] hover:bg-gray-default transition cursor-pointer"
                @click="Collapse($event)"
              >
                {{ monthData.name + ' ' + yearData.year }}
              </span>
            </div>
            <div
              class="timeline-posts transition duration-500 flex tablet-wide:group-even:flex-row-reverse justify-between flex-wrap items-start"
            >
              <div
                v-for="(post, index) in monthData.posts"
                :key="index"
                class="w-full tablet-wide:shrink-0 tablet-wide:max-w-[400px] tablet-wide:even:mt-20"
              >
                <BlogPost :data="post" :data-post-slug="post.slug"/>
              </div>
            </div>
          </div>
        </div>
      </template>
      <div
        class="w-full text-center"
      >
        <div
          role="button"
          class="flex flex-col items-center overflow-hidden w-[180px] h-11 rounded-full bg-blue-main mx-auto hover:bg-blue-main-hover duration-300 tablet:mb-0 mt-6"
          :class="{'opacity-80 pointer-events-none' :isFetching || posts.length < 0 }"
          @click="setNextPage()"
        >
          <span class="h-full py-2 shrink-0 text-lg text-white uppercase transition duration-300"
          :class="{'-translate-y-full' :isFetching || posts.length < 0 }"
          >
            Load more
          </span>
          <div class=" p-1 h-11 w-11 shrink-0 transition duration-300"
          :class="{'-translate-y-full' :isFetching || posts.length < 0 }"
          >
          <span class=" block w-full h-full rounded-full border-2 border-l-white border-transparent animate-spin"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import BlogPost from './blog-post.vue'
import { groupBy as _groupBy } from 'lodash'


export default {
  name: 'BlogTimeline',
  components: {
    BlogPost,
  },
  props: {
    isFetching:{
      type: Boolean,
      default: true
    },
    prevLink:{
      type: String,
      default: ''
    }
  },
  mounted() {
    this.setFullHeight()
    window.addEventListener('resize', this.setFullHeight)
    Vue.nextTick(()=>{
      this.setFullHeight()
      setTimeout(()=>{
        this.scrollToPost(this.prevLink)
      }, 501)
    })
  },

  unmounted() {
    window.removeEventListener('resize', this.setFullHeight)
  },

  data() {
    return {
      postPageNr: this.$route.query.p ? parseInt(this.$route.query.p) : 1
    }
  },

  computed:{
    posts(){
      return this.groupPosts({posts: this.$store.getters['general/getPostsData']}) 
    }
  },

  watch:{
    posts: {
      handler(){
        Vue.nextTick(()=>{
          this.setFullHeight()
        })
      },
      deep: true,
    },
  },

  methods: {
    groupPosts(data) {
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

    Collapse(event) {
      let group = event.target.closest('[data-month-group]')
      let collapseState = group.getAttribute('data-collapsed') === 'true'
      let collapsedHeight = group.firstChild.firstChild.clientHeight
      let expandedHeight =
        group.firstChild.firstChild.clientHeight +
        group.firstChild.lastChild.clientHeight

      group.style.height = expandedHeight + 'px'

      if (!collapseState) {
        group.style.height = collapsedHeight + 'px'
      } else {
        group.style.height = expandedHeight + 'px'
      }
      group.setAttribute('data-collapsed', !collapseState)
    },

    setFullHeight() {
      if (!this.$refs.monthGroup) {
        return
      }
      this.$refs.monthGroup.forEach((element) => {
        element.setAttribute('data-collapsed', false)
        element.style.height =
          element.firstChild.firstChild.clientHeight +
          element.firstChild.lastChild.clientHeight +
          'px'
      })
    },

    scrollToPost(slug){
    if(slug.length > 0){
        let prevPost = document.querySelector(`[data-post-slug="${slug}"]`)
        const offset = 100
        if (prevPost) {
          window.scrollTo({
            behavior: 'smooth',
            top:
            prevPost.getBoundingClientRect().top - offset,
          })
        }
      }
    },

    setNextPage() {
      this.postPageNr +=1
      this.$router.push('/news?p=' + this.postPageNr)
    },
  },
}
</script>

<style lang="postcss" scoped>
[data-collapsed='true'] .timeline-posts {
  @apply opacity-0;
}
</style>
