<template>
  <div class="section-content w-full tablet:max-w-[75%] mb-10">
    <span v-if="data.title" class="inline-block text-gray-dark mt-10">
      <SectionHeader :title="data.title" />
    </span>

    <div class="content-html" v-if="data.content" v-html="data.content"></div>
    <div v-if="data.text" class="w-full">
      <p
        v-for="item in data.text"
        :key="item"
        class="mb-5 tablet-wide:w-3/4 text-justify"
      >
        {{ item }}
      </p>
    </div>
    <div v-if="data.image">
      <div
        v-for="(item, index) in data.image"
        :key="index"
        class="flex flex-col justify-center items-center tablet-wide:w-3/4 tablet-wide:mr-10"
      >
        <nuxt-picture
          fit="contain"
          class="mb-5"
          :src="item.url ? item.url : ''"
          :title="item.title ? item.title : ''"
          :alt="item.alt ? item.alt : ''"
        />
        <p v-if="item.title" class="grow-0 italic text-center mb-5">
          {{ item.title }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'section_content',
  props: {
    data: {
      type: Object,
      required: false,
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
.content-html >>> * {
  width: auto !important;
  max-width: 100% !important;
}

.content-html >>> .wp-caption-text {
  width: 100% !important;
}
.content-html >>> div,
.content-html >>> code {
  @apply text-gray-dark font-lato;
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
  @apply text-base inline-block mb-5 w-full text-justify;
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

.content-html >>> em,
.content-html >>> .wp-caption-text {
  font-weight: 400;
  text-align: center;
  font-style: italic;
  color: #768894;
  font-size: 16px;
}
</style>
