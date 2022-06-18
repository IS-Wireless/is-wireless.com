<template>
  <div class="w-full">
    <div class="w-4/5 mx-auto">
      <ul class="flex flex-row flex-wrap my-4">
        <li class="breadcrumb-item">
          <nuxt-link to="/"> Home </nuxt-link>
        </li>
        <li
          v-for="(route, index) in routesNames"
          :key="index"
          class="breadcrumb-item"
        >
          <nuxt-link
            :to="routesComputed[index] + '/'"
            v-html="getTitleBySlug(route)"
          >
          </nuxt-link>
        </li>
        <li class="text-base text-gray-dark">
          <p v-html="getTitleBySlug(currentRouteName)"></p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Breadcrumb',
  computed: {
    routesComputed() {
      let routes = []
      let routesSplitted = this.$route.fullPath.split('/')
      routes[0] = '/' + routesSplitted[1]
      for (let i = 1; i < routesSplitted.length - 2; i++) {
        routes[i] = routes[i - 1] + '/' + routesSplitted[i + 1]
      }
      return routes
    },

    routesNames() {
      let routesNames = this.$route.fullPath.slice(1, -1).split('/')
      routesNames.pop()
      return routesNames
    },

    currentRouteName() {
      return this.$route.fullPath.slice(1, -1).split('/').slice(-1)[0]
    },

    pagesData() {
      return this.$store.getters['general/getData'].pages
    },

    postsData() {
      return this.$store.getters['general/getData'].posts
    },
  },
  methods: {
    getTitleBySlug(slug) {
      if (this.routesNames[0] !== 'news') {
        const pagesArray = Object.values(this.pagesData)
        for (let i = 0; i < pagesArray.length; i++) {
          if (pagesArray[i].slug === slug) {
            return pagesArray[i].title.rendered
          }
        }
      } else {
        const postsArray = Object.values(this.postsData)
        for (let i = 0; i < postsArray.length; i++) {
          if (postsArray[i].slug === slug) {
            return postsArray[i].title.rendered
          }
        }
      }
      return slug
    },
  },
}
</script>

<style lang="postcss">
.breadcrumb-item {
  @apply mr-2;
}

.breadcrumb-item a {
  @apply text-base capitalize flex items-center text-blue-main hover:text-blue-main-hover transition;
}
.breadcrumb-item a::after {
  content: '';
  display: block;
  height: 15px;
  width: 1px;
  @apply bg-gray-dark ml-2;
}
</style>
