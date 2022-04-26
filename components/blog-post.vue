<template>
  <div
    class="w-full flex flex-col bg-gray-light mb-5 overflow-hidden rounded-md"
  >
    <div class="w-full">
      <nuxt-link
        class="group flex flex-col"
        :to="$route.fullPath + data.slug + '/'"
      >
        <nuxt-picture
          class="img-full"
          width="300"
          height="157"
          src="https://www.is-wireless.com/wp-content/uploads/2021/12/LinkedIn_1200x627_3-300x157.jpg"
        />
        <div class="p-5 pb-1">
          <h2
            class="text-xl text-blue-main group-hover:text-blue-main-hover transition"
          >
            {{ data.title.rendered }}
          </h2>
        </div>
      </nuxt-link>
      <div class="flex flex-col p-5 pt-0">
        <div class="pb-5 mb-5 border-b border-solid border-gray-default">
          <span class="text-sm">
            {{ getFormattedDate() }}
          </span>
        </div>
        <p>{{ data.slug }}</p>
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
