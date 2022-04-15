<template>
<div class="w-full relative">
    <div class="absolute h-full w-full hidden tablet-wide:flex justify-center z-0">
        <div class="h-full w-1 bg-gray-light"></div>
    </div>
    <div class="relative z-10 ">
        <template v-for="(yearData,yearIndex) in data"  >
            <div v-for="(monthData,monthIndex) in yearData.posts" :key="monthData.name" ref="monthGroup" data-collapsed=false class="flex flex-col max-w-[960px] mx-auto group transition-all duration-500 overflow-hidden">
                <div class="w-full text-center hidden tablet-wide:block">
                    <span class="inline-block p-2 bg-gray-light rounded-md my-5 max-w-[131px] hover:bg-gray-default transition cursor-pointer" @click="Collapse(yearIndex + monthIndex)">
                        {{yearData.year + ' ' + monthData.name}}
                    </span>
                </div>
                <div class="timeline-posts transition duration-500 flex tablet-wide:group-even:flex-row-reverse justify-between flex-wrap items-start ">
                    <div v-for="(post,index) in monthData.posts" :key="index" class="grow-0 tablet-wide:shrink-0 tablet-wide:max-w-[400px] tablet-wide:even:mt-20">
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