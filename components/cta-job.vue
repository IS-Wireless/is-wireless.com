<template>
  <section class="w-full relative overflow-hidden bg-[center_top] py-[120px]">
    <nuxt-picture
      v-if="data.image"
      class="block absolute tablet-wide:fixed w-full h-full inset-0 -z-20"
      :src="
        data.image.url
          ? data.image.url.replace('www.is-wireless.com', 'api.is-wireless.com')
          : ''
      "
      :title="data.image.title ? data.image.title : ''"
      :alt="data.image.alt ? data.image.alt : ''"
      :imgAttrs="{
        class: 'w-full h-full object-cover',
        loading: 'lazy',
      }"
    />
    <div
      v-else
      class="block absolute tablet-wide:fixed w-full h-full inset-0 -z-30"
      :style="
        data.background_color ? 'background: ' + data.background_color : ''
      "
    ></div>
    <div class="flex flex-col justify-center items-center w-4/5 mx-auto">
      <h2 v-if="data.title" class="text-white mb-5" v-html="data.title"></h2>
      <hr class="w-[100px] h-0 border-0 border-t-4 border-white mb-5" />
      <p
        v-if="data.subtitle"
        class="text-white text-center mb-5"
        v-html="data.subtitle"
      ></p>
      <CustomLink
        v-if="data.link"
        :class="'block object-cover object- text-sm text-white uppercase px-7 py-3 rounded-full bg-blue-main hover:bg-white hover:text-black duration-300 tablet:mb-0 mb-6'"
        :url="data.link.url"
        :title="data.link.title"
        :isExternal="true"
      />
    </div>
  </section>
</template>

<script>
import CustomLink from './custom-link.vue'

export default {
  name: 'section_cta_background',
  components: {
    CustomLink,
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style></style>
