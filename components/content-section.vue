<template>
  <section
    class="bg-white relative w-full pb-8 tablet-wide:pb-14 pt-10 tablet-wide:pt-16"
    :class="textClr"
  >
    <div
      class="text-inherit relative z-10 flex flex-col tablet-wide:flex-row w-full"
    >
      <div class="tablet-wide:flex-[1_1_50%] tablet-wide:mr-8">
        <SectionHeader v-if="data.title" :title="data.title" />
        <div
          v-if="data.content"
          class="content-html text-inherit"
          v-html="data.content"
        ></div>
        <List v-if="data.list" :data="data.list" />
      </div>
      <div class="tablet-wide:flex-[1_1_50%] tablet-wide:ml-8">
        <CustomLink
          v-if="data.image && data.image_url"
          :url="data.image_url"
          :isExternal="true"
        >
          <SectionImage
            :url="data.image"
            :imageDecoration="data.image_decoration"
          />
        </CustomLink>
        <SectionImage
          v-else-if="data.image"
          :url="data.image"
          :imageDecoration="data.image_decoration"
        />
      </div>
    </div>
  </section>
</template>

<script>
import SectionHeader from './section-header.vue'
import SectionImage from './section-image.vue'

import List from './list.vue'

export default {
  name: 'section_two_column',
  components: {
    SectionHeader,
    SectionImage,
    List,
  },
  props: {
    textClr: {
      type: String,
      required: false,
      default: 'text-gray-dark',
    },
    data: {
      type: Object,
      required: false,
      default: '',
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
  @apply w-full h-auto;
}

.content-html >>> iframe {
  @apply max-w-full h-auto;
}

.content-html >>> iframe[src*='www.youtu'] {
  @apply w-full aspect-video;
}
</style>
