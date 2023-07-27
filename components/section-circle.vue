<template>
    <section class="relative py-10 pb-20 tablet-wide:pt-[100px] tablet-wide:pb-[150px] bg-white w-full text-gray-dark">
        <div class="relative z-10 flex flex-col items-center mx-auto max-w-lg mb-8">
            <SectionHeader v-if="data.title" :title="data.title" :center="true" class="text-[#111]" />
            <div
            v-if="data.description"
            class="content-html text-inherit text-center text-gray-dark"
            v-html="data.description"
            ></div>
        </div>
        <div class="relative w-full">

            <ul class=" relative z-20 w-full flex justify-between flex-wrap tablet:gap-x-5 tablet-wide:gap-x-[33%] ">
                <li v-for="item,index in data.list" :key="index" class=" mb-10 tablet-wide:mb-[100px] shrink-0 grow-0 basis-full tablet:basis-1/3 tablet-wide:basis-1/4 flex flex-col">
                    <ListIcon v-if="item.icon" :name="item.icon" class="text-blue-main" />
                    <h4 v-if="item.title" class="text-xl tablet:text-2xl my-5">
                        {{ item.title }}
                    </h4>
                    <div class="mb-[30px] h-[5px] w-32 bg-blue-main"></div>
                    <div v-if="item.content" class="text-gray-dark text-sm tablet:text-base" v-html="item.content"></div>
                </li>
            </ul>


            <div class="hidden tablet-wide:block absolute z-10 tablet:inset-0">
                <svg class="w-auto h-full aspect-square mx-auto" width="650" height="650" viewBox="0 0 650 650" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="325" cy="316" r="249.5" stroke="white"/>
                    <circle cx="325" cy="316" r="249.5" stroke="white"/>
                    <circle cx="325" cy="316" r="249.5" stroke="white"/>
                    <circle cx="325" cy="325" r="324.5" stroke="white"/>
                    <circle cx="325" cy="325" r="324.5" stroke="white"/>
                    <circle cx="325" cy="325" r="324.5" stroke="white"/>
                    <circle cx="325" cy="316" r="199.5" stroke="white"/>
                    <circle cx="325" cy="316" r="199.5" stroke="white"/>
                    <circle cx="325" cy="316" r="199.5" stroke="white"/>
                    <g filter="url(#filter0_d_1921_7566)">
                    <circle cx="324" cy="316" r="175" fill="white"/>
                    </g>
                    <defs>
                    <filter id="filter0_d_1921_7566" x="99" y="116" width="450" height="450" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="25"/>
                    <feGaussianBlur stdDeviation="25"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.0666667 0 0 0 0 0.0666667 0 0 0 0 0.0666667 0 0 0 0.1 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1921_7566"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1921_7566" result="shape"/>
                    </filter>
                    </defs>
                </svg>
                <div class="absolute top-0 w-full h-full mx-auto">
                    <div class=" mx-auto h-full aspect-square flex items-center justify-center">
                        <span v-if="data.circle_text" class="w-1/2 text-[#111] text-2xl tablet:text-3xl tablet-wide:text-4xl font-semibold text-center px-5">
                            {{ data.circle_text }}
                        </span>
                    </div>
                </div>
            </div>

        </div>

        <div class="absolute z-0 inset-y-0 inset-x-[-12.5%] bg-gray-light">

        </div>
    </section>
  </template>
  
  <script>
  import SectionHeader from './section-header.vue'
  
  export default {
    name: 'section_circle',
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

  <style scoped>
.content-html >>> p{
    @apply text-xl tablet:text-2xl
}
</style>