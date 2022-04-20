<template>
  <div class="w-full my-16">
    <div v-swiper="swiperOptionsObject" class="swiper">
      <div class="swiper-wrapper">
        <div
          v-for="post in data"
          :key="post.id"
          class="swiper-slide flex flex-col"
        >
          <nuxt-link
            class="group flex flex-col"
            :to="post.slug"
            v-if="post.slug"
          >
            <nuxt-picture
              class="mb-3"
              width="300"
              height="157"
              src="https://www.is-wireless.com/wp-content/uploads/2021/12/LinkedIn_1200x627_3-300x157.jpg"
            />
            <h4
              class="mb-2 text-blue-main group-hover:text-blue-main-hover transition text-xs tablet:text-sm whitespace-nowrap overflow-hidden overflow-ellipsis"
              v-if="post.title"
            >
              {{ post.title.rendered }}
            </h4>
            <span class="mb-2 text-sm">{{ getFormattedDate(post.date) }}</span>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogRelatedPosts',
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      swiperOptionsObject: {
        slidesPerView: 2,
        spaceBetween: 20,
        breakpoints: {
          640: {
            slidesPerView: 3,
          },
        },
      },
    }
  },
  methods: {
    getFormattedDate(postDate) {
      let date = new Date(postDate)
      let dateComputed = date.toLocaleDateString('en', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
      return dateComputed
    },
  },
}
</script>

<style></style>
