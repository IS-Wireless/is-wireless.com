<template>
    <div class="flex flex-col py-5 px-[7%] mx-[-7%] tablet:mx-0 tablet:p-[30px] tablet:min-h-[380px] rounded-[5px] border border-solid border-gray-light">
        <div class="flex gap-5 items-center mb-5 tablet:mb-8">
            <ListIcon v-if="data.icon" :name="data.icon" class="!text-blue-main !h-auto" />
            <h4 v-if="data.title" class="text-xl tablet:text-2xl">
                {{ data.title }}
            </h4>
        </div>
        <div class="w-[75px] h-0.5 bg-gray-default mb-5 tablet:mb-8"></div>
        <div v-if="data.content_expandable"  class=" mb-4 inline">
          <div class="inline content-html text-gray-dark [&_p]:!inline" v-html="textExpanded ? data.content_expandable : extandableCropped"></div>
          <span v-if="extandableCropped"  class="text-blue-main underline inline cursor-pointer hover:text-blue-main-hover transition" @click="toggleCollapse()">{{ textExpanded ? ' Read less' : ' Read more'}}</span>
        </div>
        <div v-if="data.content" class="content-html text-gray-dark" v-html="data.content">
        </div>
    </div>
</template>
<script>
export default {
  data(){
    return{
      textExpanded: false
    }
  },
    props:{
      data: {
        type: Object,
        required: false,
      },
    },
    computed:{
      extandableCropped(){
        let limit = 314
        if (this.data.content_expandable  && this.data.content_expandable.length > limit) {
          return this.data.content_expandable.slice(0,limit)
        }else{
          return false
        }
      }
    },
    methods:{
      toggleCollapse(){
        this.textExpanded = !this.textExpanded
      }
    }
}
</script>

<style lang="postcss" scoped>
.content-html :deep(h1),
.content-html :deep(h2),
.content-html :deep(h3),
.content-html :deep(h4),
.content-html :deep(h5),
.content-html :deep(h6),
.content-html :deep(li),
.content-html :deep(b),
.content-html :deep(u),
.content-html :deep(*:not(p):not(iframe)) {
  width: auto !important;
  max-width: 100% !important;
}

.content-html :deep(.wp-caption-text) {
  width: 100% !important;
}
.content-html :deep(div),
.content-html :deep(code) {
  @apply text-gray-dark font-lato;
}
.content-html :deep(h1) {
  @apply text-4xl tablet:text-[50px] mb-5;
}
.content-html :deep(h2) {
  @apply text-3xl tablet:text-4xl mb-5;
}
.content-html :deep(h3) {
  @apply text-2xl tablet:text-3xl mb-5;
}
.content-html :deep(h4) {
  @apply text-xl tablet:text-2xl mb-5;
}
.content-html :deep(h5) {
  @apply text-lg tablet:text-xl mb-5;
}
.content-html :deep(h6) {
  @apply text-base tablet:text-lg mb-5;
}
.content-html :deep(p) {
    @apply text-base inline-block mb-4 w-full;
}
.content-html :deep(a) {
    @apply text-blue-main hover:text-blue-main-hover transition underline;
}
    
.content-html :deep(li) {
  @apply text-gray-dark;
}

.content-html :deep(ol li) {
  @apply list-disc ml-5;
}

.content-html :deep(ul) {
  @apply mb-5;
}
.content-html :deep(ul li) {
  @apply list-disc ml-5;
}
  
.content-html :deep(hr) {
  @apply block mx-[10%] mt-5 mb-10;
}

.content-html :deep(code) {
  @apply block whitespace-pre-wrap max-w-2xl bg-gray-light p-2.5 tablet:p-5 rounded-md mb-10;
}

.content-html :deep(img) {
  @apply max-w-full w-auto h-auto;
}

.content-html :deep(iframe) {
  @apply max-w-full h-auto;
}

.content-html :deep(iframe[src*='www.youtu']) {
  @apply w-full aspect-video;
}

.content-html :deep(em),
.content-html :deep(.wp-caption-text) {
  font-weight: 400;
  text-align: center;
  font-style: italic;
  color: #768894;
  font-size: 16px;
}
</style>
