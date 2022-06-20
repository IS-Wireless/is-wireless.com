<template>
  <div
    class="w-full flex flex-col bg-gray-light mb-5 overflow-hidden rounded-md"
  >
    <div class="w-full">
      <nuxt-link
        class="group flex flex-col"
        :to="$route.fullPath + '/' + data.slug"
      >
        <nuxt-picture
          v-if="!data.featured_image_src.includes('images/media/default.png')"
          class="img-full"
          width="300"
          height="157"
          :src="data.featured_image_src"
        />
        <div v-if="data.title" class="p-5 pb-1">
          <h2
            class="text-xl text-blue-main group-hover:text-blue-main-hover transition"
            v-html="data.title.rendered ? data.title.rendered : ''"
          ></h2>
        </div>
      </nuxt-link>
      <div class="flex flex-col p-5 pt-0">
        <div class="pb-5">
          <span class="text-sm">
            {{ getFormattedDate() }}
          </span>
        </div>
        <p
          v-if="data.excerpt"
          class="pt-5 border-t border-solid border-gray-default"
          v-html="data.excerpt.rendered ? data.excerpt.rendered : ''"
        ></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogPost',
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  methods: {
    getFormattedDate() {
      let date = new Date(this.$props.data.date)
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
