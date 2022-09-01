<template>
  <div>
    <div class="w-full flex flex-col tablet-wide:flex-row my-10">
      <div class="tablet-wide:basis-1/3" v-if="data.person_image">
        <nuxt-picture
          :src="
            data.person_image.url.replace(
              'www.is-wireless.com',
              'api.is-wireless.com'
            )
          "
          :title="data.person_image.title ? data.person_image.title : ''"
          :alt="data.person_image.alt ? data.person_image.alt : ''"
        />
      </div>
      <div
        class="tablet-wide:basis-2/3 text-base block mt-5 tablet-wide:mt-0 tablet-wide:ml-6 mb-6"
      >
        <h3 class="text-2xl" v-if="data.person_name">
          {{ data.person_name }}
        </h3>
        <div
          class="content-html"
          v-if="data.person_description"
          v-html="data.person_description"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'section_person',
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="postcss" scoped>
.content-html >>> h1,
h2,
h3,
h4,
h5,
h6,
li,
b,
u,
div,
code {
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
  @apply block  mt-5 mb-10;
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
.content-html >>> *:not(p):not(iframe) {
  width: auto !important;
  max-width: 100% !important;
}

.content-html >>> .wp-caption-text {
  width: 100% !important;
}
.content-html >>> div {
  @apply max-w-full;
}
</style>
