<template>
<div class="w-full">
    <div v-for="(yearData,index) in data" :key="index" >
        {{yearData.year}}
        <div v-for="(monthData,index) in yearData.posts" :key="index">
            {{monthData.name}}
            <div v-for="(post,index) in monthData.posts" :key="index">
                <BlogPost :data="post"/>
            </div>
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
    
}
</script>

<style>

</style>