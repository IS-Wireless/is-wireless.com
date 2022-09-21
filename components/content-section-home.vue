<template>
  <section :class="mergeClass">
    <div
      class="text-inherit flex flex-col tablet-wide:flex-row w-4/5 container mx-auto"
    >
      <div
        class="tablet-wide:flex-[0_1_50%] tablet-wide:w-1/2 pt-10 tablet-wide:pt-16"
      >
        <SectionHeader
          class="tablet:pr-[50px] desktop:pr-[140px]"
          v-if="data.title"
          :title="data.title"
        />
        <div
          v-if="data.content"
          class="content-html text-inherit p-5 tablet:p-[50px] desktop:pr-[140px]"
          v-html="data.content"
        ></div>
        <List v-if="data.list" :data="data.list" />
      </div>
      <div
        class="tablet-wide:absolute tablet-wide inset-0 flex justify-end max-w-[1920px] mx-auto"
        :class="{ ' mt-0 tablet:mt-[-300px] tablet-wide:mt-0': globeImg }"
      >
        <div class="tablet-wide:flex-[0_1_50%] w-full tablet-wide:w-1/2">
          <Globe v-if="globeImg" />
          <CustomLink
            v-else-if="data.image && data.image_url"
            :url="data.image_url"
            :isExternal="true"
          >
            <component
              :is="fullImg ? 'HomepageImage' : 'SectionImage'"
              :url="data.image.url ? data.image.url : ''"
              :title="data.image.title ? data.image.title : ''"
              :alt="data.image.alt ? data.image.alt : ''"
              :imageDecoration="data.image_decoration"
            />
          </CustomLink>
          <component
            v-else-if="data.image"
            :is="fullImg ? 'HomepageImage' : 'SectionImage'"
            :url="data.image.url ? data.image.url : ''"
            :title="data.image.title ? data.image.title : ''"
            :alt="data.image.alt ? data.image.alt : ''"
            :imageDecoration="data.image_decoration"
          />
        </div>
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
  name: 'section_two_column_home',
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
        'bg-white relative w-full pb-8 tablet-wide:pb-14 text-gray-dark' +
        ' ' +
        this.staticClass
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
