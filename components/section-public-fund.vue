<template>
  <div class="w-full tablet:max-w-[75%]">
    <div v-if="data.tagline" class="content-html" v-html="data.tagline">
    </div>
    <h3 v-if="data.title" class="text-2xl tablet:text-3xl font-semibold mb-10 tablet:mb-20">
        {{ data.title }}
    </h3>
    <div class="flex flex-wrap mb-5">
        <table v-if="data.table" class="mb-5 tablet:mr-8 desktop:mr-14 shrink-0 max-w-full">
            <tbody v-if="data.table.body">
                <tr v-for="row,index in data.table.body" :key="index">
                    <td class="pr-2" v-for="item,index in row" :key="index">
                        <p v-if="item.c" :class="{'font-semibold' :index == 0 }">{{item.c}}</p>
                    </td>
                </tr>
            </tbody>
        </table>
        <div v-if="data.table_side_logos" class="grow flex flex-wrap items-center gap-5 phablet:gap-8 tablet:gap-10">
            <div v-for="image,index in data.table_side_logos" :key="index">
                <nuxt-picture v-if="image.logo && image.logo.url"
                    :src="image.logo.url"
                    class="block max-w-[120px] tablet:max-w-[150px] "
                    :imgAttrs="{ class: 'w-full object-contain' }"
                />
            </div>
        </div>
    </div>
    <div v-if="data.description" class="content-html" v-html="data.description">
    </div>
    <div v-if="data.footer_logos_image">
        <nuxt-picture v-if="data.footer_logos_image.url"
                :src="data.footer_logos_image.url"
                :imgAttrs="{ class: 'max-h-[75px] object-contain' }"
            />
    </div>
    <hr class="block mx-[10%] mt-5 mb-32">
  </div>
</template>

<script>
export default {
    name:'section_public_funds',
    props: {
        data: {
            type: Object,
            required: true,
        },
    },

}
</script>

<style lang="postcss" scoped>
.content-html >>> *:not(p):not(iframe) {
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

.content-html >>> code {
  @apply block whitespace-pre-wrap max-w-2xl bg-gray-light p-2.5 tablet:p-5 rounded-md mb-10;
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