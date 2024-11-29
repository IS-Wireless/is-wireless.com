<template>
  <div itemscope itemtype="https://schema.org/Person">
    <div class="w-full flex flex-col tablet-wide:flex-row my-10">
      <div class="tablet-wide:basis-1/3" v-if="data.person_image">
        <nuxt-picture
          :src="
            data.person_image.url.replace(
              'www.is-wireless.com',
              $config.public.API_DOMAIN
            ).replace($config.public.API_URL,'/app')
          "
          :imgAttrs="{itemprop: 'image'}"
          :title="data.person_image.title ? data.person_image.title : ''"
          :alt="data.person_image.alt ? data.person_image.alt : ''"
        />
      </div>
      <div
        class="tablet-wide:basis-2/3 text-base block mt-5 tablet-wide:mt-0 tablet-wide:ml-6 mb-6"
      >
        <h3 class="text-2xl" v-if="data.person_name" itemprop="name">
          {{ data.person_name }}
        </h3>
        <div
          class="content-html"
          v-if="data.person_description"
          v-html="data.person_description"
          itemprop="description"
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
.content-html :deep( h1 ),
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
.content-html :deep( h1 ){
  @apply text-4xl tablet:text-[50px] mb-5;
}
.content-html :deep( h2 ){
  @apply text-3xl tablet:text-4xl mb-5;
}
.content-html :deep( h3 ){
  @apply text-2xl tablet:text-3xl mb-5;
}
.content-html :deep( h4 ){
  @apply text-xl tablet:text-2xl mb-5;
}
.content-html :deep( h5 ){
  @apply text-lg tablet:text-xl mb-5;
}
.content-html :deep( h6 ){
  @apply text-base tablet:text-lg mb-5;
}
.content-html :deep( p ){
  @apply text-base inline-block mb-5 w-full text-justify;
}

.content-html :deep( li ){
  @apply text-gray-dark;
}

.content-html :deep( ol li ){
  @apply list-disc ml-5;
}

.content-html :deep( ul ){
  @apply mb-5;
}

.content-html :deep( hr ){
  @apply block mx-[10%] mt-5 mb-10;
}

.content-html :deep( code ){
  @apply block whitespace-pre-wrap max-w-2xl bg-gray-light p-2.5 tablet:p-5 rounded-md mb-10;
}

.content-html :deep( img ){
  @apply max-w-full w-auto h-auto;
}

.content-html :deep( iframe ){
  @apply max-w-full h-auto;
}

.content-html :deep( iframe[src*='www.youtu'] ){
  @apply w-full aspect-video;
}
.content-html :deep( *:not(p):not(iframe) ){
  width: auto !important;
  max-width: 100% !important;
}

.content-html :deep( .wp-caption-text ){
  width: 100% !important;
}
.content-html :deep( div ){
  @apply max-w-full;
}
</style>
