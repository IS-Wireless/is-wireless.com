<template>
<div class="w-full relative">
    <div class="absolute h-full w-full hidden tablet-wide:flex flex-col items-center z-0">
        <span>
            <svg class="fill-current text-gray-light" width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M40.5 0.5H5.5C2.75 0.5 0.5 2.75 0.5 5.5V40.5C0.5 43.25 2.75 45.5 5.5 45.5H40.5C43.25 45.5 45.5 43.25 45.5 40.5V5.5C45.5 2.75 43.25 0.5 40.5 0.5ZM28 35.5H10.5V30.5H28V35.5ZM35.5 25.5H10.5V20.5H35.5V25.5ZM35.5 15.5H10.5V10.5H35.5V15.5Z"/>
            </svg>
        </span>
        <div class="h-full w-1 bg-gray-light"></div>
    </div>
    <div class="relative z-10 ">
        <template v-for="(yearData,yearIndex) in data"  >
            <div v-for="(monthData,monthIndex) in yearData.posts" :key="monthData.name" ref="monthGroup" data-collapsed=false class="flex flex-col max-w-[960px] mx-auto group transition-all duration-500 overflow-hidden">
                <div class="w-full text-center hidden tablet-wide:block" :class="{'pt-10':monthIndex===0 && yearIndex===0 }">
                    <span class="inline-block p-2 bg-gray-light rounded-md my-5 max-w-[131px] hover:bg-gray-default transition cursor-pointer" @click="Collapse(yearIndex + monthIndex)">
                        {{monthData.name + ' ' + yearData.year}}
                    </span>
                </div>
                <div class="timeline-posts transition duration-500 flex tablet-wide:group-even:flex-row-reverse justify-between flex-wrap items-start ">
                    <div v-for="(post,index) in monthData.posts" :key="index" class="w-full tablet-wide:shrink-0 tablet-wide:max-w-[400px] tablet-wide:even:mt-20">
                        <BlogPost :data="post"/>
                    </div>
                </div>
            </div>
        </template>
        <div class="w-full text-center">
            <span class="block mt-20 p-5 bg-gray-light rounded-md my-5 uppercase font-semibold transition hover:bg-gray-default cursor-pointer">
                Load more posts
            </span>
        </div>
    </div>
</div>
  
</template>

<script>
import BlogPost from "./blog-post.vue"

export default {
    name:'BlogTimeline',
    components:{
        BlogPost
    },
    props:{
        data:{
            type:Array,
            required: true
        }
    },
    mounted(){
        this.setFullHeight()
        window.addEventListener('resize',this.setFullHeight)
    },
    unmounted(){
        window.removeEventListener('resize',this.setFullHeight)
    },
    methods:{
        Collapse(index){
            let group = this.$refs.monthGroup[index]
            let collapseState = (group.getAttribute('data-collapsed') === 'true')
            let collapsedHeight = group.firstChild.clientHeight
            let expandedHeight = group.firstChild.clientHeight + group.lastChild.clientHeight

            group.style.height = expandedHeight + 'px';

            if (!collapseState) {
                group.style.height = collapsedHeight + 'px';  
            }
            else{
                group.style.height = expandedHeight + 'px';  
            }
            group.setAttribute('data-collapsed',!collapseState)
        },

        setFullHeight(){
            this.$refs.monthGroup.forEach(element => {
                element.setAttribute('data-collapsed',false)
                element.style.height = element.firstChild.clientHeight + element.lastChild.clientHeight + 'px'
            })
        }
    }
    
}
</script>

<style lang="postcss" scoped>

    [data-collapsed=true] .timeline-posts{
        @apply opacity-0
    }

</style>