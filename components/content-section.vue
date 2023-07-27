<template>
  <section :class="mergeClass">
    <div
      class="text-inherit relative z-10 flex flex-col tablet-wide:flex-row w-full"
    >
      <div
        class="tablet-wide:flex-[1_1_50%] tablet-wide:w-1/2 tablet-wide:mr-8"
        :class="{'tablet:py-10 tablet-wide:py-[100px]':fullImg || data.fullImg}"
      >
        <SectionHeader v-if="data.title" :title="data.title" />
        <div :class="{'tablet:p-[50px]':fullImg || data.fullImg}">
          <div
            v-if="data.content"
            class="content-html text-inherit"
            v-html="data.content"
          ></div>
          <CustomLink
            v-if="data.button_url && data.button_text"
            class="flex items-center w-fit text-sm tablet:text-base text-white hover:text-white font-medium uppercase mt-5 tablet:mt-11 px-6 tablet:px-8 py-4 rounded-full duration-300 after:content-[''] after:block after:w-[25px] after:h-0.5 after:bg-white after:ml-5 after:transition after:duration-300 hover:after:translate-x-1 bg-blue-main hover:bg-blue-main-hover"
            :url="data.button_url"
            :title="data.button_text"
          />
          <List v-if="data.list" :data="data.list" />
        </div>
      </div>
      <div
        class="tablet-wide:flex-[1_1_50%] tablet-wide:w-1/2"
        :class="{'tablet-wide:ml-8' :!fullImg || data.fullImg}"
      >
        <Globe v-if="globeImg" />
        <CustomLink
          v-else-if="data.image && data.image_url"
          :url="data.image_url"
          :isExternal="true"
        >
          <component
            :is="fullImg || data.fullImg ? 'HomepageImage' : 'SectionImage'"
            :url="data.image.url ? data.image.url : ''"
            :title="data.image.title ? data.image.title : ''"
            :alt="data.image.alt ? data.image.alt : ''"
            :imageDecoration="data.image_decoration"
            :class="{'!pl-0 mx-[-12.5%] tablet-wide:mx-0 tablet-wide:absolute inset-y-0 left-1/2 right-[-12.5%]':fullImg || data.fullImg}"
          />
        </CustomLink>
        <component
          v-else-if="data.image"
          :is="fullImg || data.fullImg ? 'HomepageImage' : 'SectionImage'"
          :url="data.image.url ? data.image.url : ''"
          :title="data.image.title ? data.image.title : ''"
          :alt="data.image.alt ? data.image.alt : ''"
          :imageDecoration="data.image_decoration"
          :class="{'!pl-0 mx-[-12.5%] tablet-wide:mx-0 tablet-wide:absolute inset-y-0 left-1/2 right-[-12.5%]':fullImg || data.fullImg}"
        />
      </div>
    </div>
  </section>
</template>

<script>
import SectionHeader from './section-header.vue'
import SectionImage from './section-image.vue'
import HomepageImage from './homepage-image.vue'
import List from './list.vue'
import Globe from './globe.vue'

export default {
  name: 'section_two_column',
  components: {
    SectionHeader,
    SectionImage,
    HomepageImage,
    List,
    Globe,
  },
  props: {
    data: {
      type: Object,
      required: false,
      default: () => {},
    },
    staticClass: {
      type: String,
      required: false,
      default: '',
    },
    fullImg: {
      type: Boolean,
      required: false,
      default: false,
    },
    globeImg: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  computed: {
    mergeClass: function () {
      return (
        'bg-white relative w-full text-gray-dark' +
        ' ' +
        this.staticClass + ' ' +
        + this.fullImg || data.fullImg ? ' ' : 'pb-8 tablet-wide:pb-14 pt-10 tablet-wide:pt-16 '
      )
    },
  },
}
</script>

<style lang="postcss" scoped>
.content-html >>> h1,
.content-html >>> h2,
.content-html >>> h3,
.content-html >>> h4,
.content-html >>> h5,
.content-html >>> h6,
.content-html >>> li,
.content-html >>> b,
.content-html >>> u,
.content-html >>> *:not(p):not(iframe) {
  width: auto !important;
  max-width: 100% !important;
}

.content-html >>> .wp-caption-text {
  width: 100% !important;
}
.content-html >>> div,
.content-html >>> code {
  @apply text-inherit font-lato;
}
.content-html >>> h1 {
  @apply text-4xl tablet:text-[50px] mb-5;
}
.content-html >>> h2 {
  @apply text-3xl tablet:text-4xl mb-5;
}
.content-html >>> h3 {
  @apply text-2xl tablet:text-3xl mb-5;
}
.content-html >>> h4 {
  @apply text-xl tablet:text-2xl mb-5;
}
.content-html >>> h5 {
  @apply text-lg tablet:text-xl mb-5;
}
.content-html >>> h6 {
  @apply text-base tablet:text-lg mb-5;
}
.content-html >>> p {
  @apply text-base inline-block mb-5 w-full text-justify text-inherit;
}

.content-html >>> li {
  @apply text-gray-dark;
}

.content-html >>> ol li {
  @apply list-disc ml-5;
}

.content-html >>> ul {
  @apply mb-5;
}

.content-html >>> hr {
  @apply block mx-[10%] mt-5 mb-10;
}

.content-html >>> code {
  @apply block whitespace-pre-wrap max-w-2xl bg-gray-light p-2.5 tablet:p-5 rounded-md mb-10;
}

.content-html >>> img {
  @apply max-w-full w-auto h-auto;
}

.content-html >>> iframe {
  @apply max-w-full h-auto;
}

.content-html >>> iframe[src*='www.youtu'] {
  @apply w-full aspect-video;
}
</style>
