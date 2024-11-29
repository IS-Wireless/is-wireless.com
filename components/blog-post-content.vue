<template>
  <div class="content-html mt-20" v-html="data"></div>
</template>

<script>
export default {
  name: 'BlogPostContent',
  props: {
    data: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="postcss" scoped>
.content-html :deep( h1 ),
.content-html :deep( h2 ),
.content-html :deep( h3 ),
.content-html :deep( h4 ),
.content-html :deep( h5 ),
.content-html :deep( h6 ),
.content-html :deep( li ),
.content-html :deep( b ),
.content-html :deep( u ),
.content-html :deep( *:not(p):not(iframe) ){
  width: auto !important;
  max-width: 100% !important;
}

.content-html :deep( .wp-caption-text ) {
  width: 100% !important;
}
.content-html :deep( div ),
.content-html :deep( code  ){
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

.content-html :deep( ol ){
  @apply mb-5 list-decimal pl-5;
}

.content-html :deep( ul ){
  @apply mb-5 list-disc pl-5;
}

.content-html :deep( hr ){
  @apply block mx-[10%] mt-5 mb-10;
}

.content-html :deep( code ){
  @apply block whitespace-pre-wrap max-w-2xl bg-gray-light p-2.5 tablet:p-5 rounded-md mb-10;
}

.content-html :deep( img ){
  @apply max-w-full w-auto h-auto mb-5;
}

.content-html :deep( iframe ){
  @apply max-w-full h-auto;
}

.content-html :deep( iframe[src*='www.youtu'] ) {
  @apply w-full aspect-video;
}

.content-html :deep( table ){
  @apply mb-5;
}

.content-html :deep( tbody ){
  @apply flex flex-wrap phone-wide:table-row-group;
}

.content-html :deep( tr ){
  @apply flex flex-col phone-wide:table-row mb-2.5 phone-wide:mb-0;
}

.content-html :deep( blockquote ){
  @apply border-0 border-l-2 border-blue-main p-5 bg-gray-light mb-5
}
.content-html :deep( blockquote *:last-child ){
  @apply mb-0
}

</style>
