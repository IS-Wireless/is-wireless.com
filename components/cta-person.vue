<template>
    <div class="relative z-10 w-full mb-20 md:mb-0 mt-10 tablet-wide:mt-0 tablet-wide:-translate-y-1/2 bg-blue-main flex flex-col tablet-small:flex-row items-stretch tablet-wide:gap-6 desktop:gap-14 rounded-[5px] shadow-2xl shadow-gray-dark/20 tablet:pl-10 tablet:pr-5 desktop:pr-20">
        <div class="flex flex-col tablet-wide:flex-row tablet-wide:gap-6 desktop:gap-14">
            <div class="px-5 tablet:px-0 py-5 tablet:py-10">
                <h3 v-if="data.title" class="mb-5 tablet:mb-8 text-white text-2xl tablet:text-3xl">
                    {{ data.title }}
                </h3>
                <div class=" h-[5px] w-32 bg-white"></div>
            </div>
            <div class="px-5 tablet:px-0 pb-5 tablet:py-10">
                <div v-if="data.content" v-html="data.content" class="content-html mb-5 tablet:mb-10 text-white">
                
                </div>
                <CustomLink v-if="data.button && data.button.title && data.button.url"
                    class="flex items-center w-fit text-sm tablet:text-base text-white hover:text-white font-medium uppercase mt-5 tablet:mt-11 px-6 tablet:px-8 py-4 rounded-full duration-300 after:content-[''] after:block after:w-[25px] after:h-0.5 after:bg-white after:ml-5 after:transition after:duration-300 hover:after:translate-x-1 hover:bg-white/25 border border-solid border-white"
                    :title="data.button.title"
                    :url="data.button.url"
                />
            </div>
        </div>
        <div v-if="data.person" class="relative basis-[250px] shrink-0 grow-0">
            <nuxt-picture v-if="data.person.image && data.person.image.url" 
            width="250"
            height="327"
            :src="data.person.image.url"
            :alt="data.person.image.title" 
            class="w-full h-full flex"
            :imgAttrs="{'class': 'w-full h-full object-cover'}"/>

            <div v-if="data.person.name" class="p-5 py-4 bg-white absolute left-5 tablet:left-[-30px] -bottom-9 w-full">
                <p class="text-blue-main text-xl tablet:text-2xl mb-2">
                    {{ data.person.name }}
                </p>
                <p v-if="data.person.below_name" class="text-gray-dark text-base tablet:text-lg">
                    {{ data.person.below_name }}
                </p>

            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'section_cta_person',
    props:{
        data:{
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>

.content-html >>> p{
    @apply text-xl tablet:text-2xl
}
</style>