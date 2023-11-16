<template>
  <div class="relative w-full my-16" v-if="data && data.list">
      <h4 v-if="data.text" class="text-2xl tablet:text-3xl text-gray-darkest mb-5">
        {{ data.text }}
      </h4>
      <Swiper class="swiper overflow-hidden [&_.swiper-wrapper]:flex [&_.swiper-wrapper]:w-full "
        :modules="[SwiperNavigation]"
        :slides-per-view="2"
        :space-between="20"
        :navigation="{
          nextEl: '[data-slide-next]',
          prevEl: '[data-slide-prev]'
        }"
        :breakpoints="{
          640:{
            slidesPerView: 3,
          }
        }"
      >
        <SwiperSlide
        v-for="post in data.list"
          :key="post.id"
          class="flex flex-col max-w-[calc(50%-10px)] tablet-small:max-w-[calc(33.3%-13px)] mr-5"
        >
        <nuxt-link
            v-if="post.slug"
            class="group flex flex-col"
            :to="'/news/' + post.slug + '/'"
          >
            <nuxt-picture
              v-if="post.featured_image_src"
              class="mb-3"
              :imgAttrs="{ class: 'w-full' }"
              width="300"
              height="157"
              :src="
                post.featured_image_src.replace(
                  'www.is-wireless.com',
                  'api.is-wireless.com'
                )
              "
            />
            <h5
              v-if="post.title"
              class="mb-2 text-blue-main group-hover:text-blue-main-hover transition text-xs tablet:text-sm whitespace-nowrap overflow-hidden overflow-ellipsis"
              v-html="post.title.rendered ? post.title.rendered : ''"
            ></h5>
            <span v-if="post.date" class="mb-2 text-sm">{{
              getFormattedDate(post.date)
            }}</span>
          </nuxt-link>
        </SwiperSlide>
      </Swiper>

      <div
        tabindex="0"
        class="absolute focus:outline-none group top-1/2 left-0 px-4 py-2 -mt-2 text-white bg-black bg-opacity-40 hover:bg-opacity-50 transition z-20"
        data-slide-prev
        role="button"
      >
        <svg
          class="group-hover:-translate-x-0.5 transition"
          xmlns="http://www.w3.org/2000/svg"
          width="8"
          height="14"
          viewBox="0 0 16 28"
          fill="none"
        >
          <path
            class="text-white fill-current"
            d="M3.05891 14.0065L15.2265 1.83892C15.6471 1.41821 15.6471 0.736143 15.2265 0.315436C14.8057 -0.105145 14.1237 -0.105145 13.703 0.315436L0.773687 13.2447C0.353107 13.6654 0.353107 14.3475 0.773687 14.7682L13.703 27.6975C14.131 28.1109 14.8131 28.099 15.2265 27.671C15.6297 27.2534 15.6297 26.5915 15.2265 26.174L3.05891 14.0065Z"
            fill="#9F9FA1"
          />
        </svg>
      </div>
      <div
        tabindex="0"
        class="absolute focus:outline-none group top-1/2 right-0 px-4 py-2 -mt-2 text-white bg-black bg-opacity-40 hover:bg-opacity-50 transition z-20"
        data-slide-next
        role="button"
      >
        <svg
          class="group-hover:translate-x-0.5 transition"
          xmlns="http://www.w3.org/2000/svg"
          width="8"
          height="14"
          viewBox="0 0 16 28"
          fill="none"
        >
          <path
            class="text-white fill-current"
            d="M12.9411 14.0065L0.77354 1.83892C0.352896 1.41821 0.352896 0.736143 0.77354 0.315436C1.19431 -0.105145 1.87632 -0.105145 2.29703 0.315436L15.2263 13.2447C15.6469 13.6654 15.6469 14.3475 15.2263 14.7682L2.29703 27.6975C1.86899 28.1109 1.18692 28.099 0.77354 27.671C0.37032 27.2534 0.37032 26.5915 0.77354 26.174L12.9411 14.0065Z"
            fill="#9F9FA1"
          />
        </svg>
      </div>
  </div>
</template>

<script>

export default {
  name: "BlogRelatedPosts",
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  methods: {
    getFormattedDate(postDate) {
      let date = new Date(postDate);
      let dateComputed = date.toLocaleDateString("en", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
      return dateComputed;
    },
  },
};
</script>

<style scoped>
.swiper-button-disabled{
  @apply opacity-20 pointer-events-none
}
</style>
