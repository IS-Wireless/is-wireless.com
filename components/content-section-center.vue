<template>
  <section
    v-bind="$attrs"
    :class="[
      'bg-white relative w-full pb-8 tablet-wide:pb-14 pt-10 tablet-wide:pt-16 text-gray-dark',
      data.staticClass,
    ]"
  >
    <div
      class="text-inherit relative z-10 flex flex-col tablet-wide:flex-row w-full"
      :class="{ 'tablet-wide:flex-row-reverse': !(data.title || data.content) }"
    >
      <div class="tablet-wide:flex-[1_1_50%] tablet-wide:mr-8">
        <SectionHeader v-if="data.title" :title="data.title" />
        <div
          v-if="data.content"
          class="content-html text-inherit"
          v-html="data.content"
        ></div>
      </div>
      <div class="tablet-wide:flex-[1_1_50%] tablet-wide:ml-8">
        <div class="flex h-full items-center mt-10 tablet-wide:mt-0">
          <CustomLink
            v-if="data.image && data.url"
            :url="data.url"
            :isExternal="true"
            :class="'w-full'"
          >
            <nuxt-picture
              class="w-full"
              :imgAttrs="{
                class:
                  'w-full max-w-[75%] tablet:max-w-[50%] tablet:max-h-[200px] object-contain',
              }"
              :src="
                data.image.url
                  ? data.image.url.replace(
                      'www.is-wireless.com',
                      'api.is-wireless.com'
                    )
                  : ''
              "
              :title="data.image.title ? data.image.title : ''"
              :alt="data.image.alt ? data.image.alt : ''"
            ></nuxt-picture>
          </CustomLink>
          <nuxt-picture
            v-else-if="data.image"
            class="w-full"
            :imgAttrs="{
              class:
                'w-full max-w-[75%] tablet:max-w-[50%] tablet:max-h-[200px] object-contain',
            }"
            :src="
              data.image.url
                ? data.image.url.replace(
                    'www.is-wireless.com',
                    'api.is-wireless.com'
                  )
                : ''
            "
            :title="data.image.title ? data.image.title : ''"
            :alt="data.image.alt ? data.image.alt : ''"
          ></nuxt-picture>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SectionHeader from './section-header.vue'

export default {
  name: 'section_content_columns_center_image',
  components: {
    SectionHeader,
  },
  props: {
    data: {
      type: Object,
      required: false,
      default: () => {},
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
