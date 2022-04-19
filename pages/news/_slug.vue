<template>
<div>
    <Breadcrumb/>
    <div class="w-full px-[10%]">
        <div class="tablet:w-2/3">
            <div class="blog-post mt-20" v-html="postContent.content.rendered">

            </div>
            <BlogShare :data="testBlogShare"/>
            <BlogRelated :data="postsRelated"/>
        </div>
    </div>
</div>
</template>

<script>
import Breadcrumb from "~/components/breadcrumb.vue"
import BlogShare from "~/components/blog-share.vue";
import BlogRelated from "~/components/blog-related.vue";

export default {
    name: "BlogPost",
    components: {
    Breadcrumb,
    BlogShare,
    BlogRelated
},
    data(){
        return{
            testBlogShare:{
                text:'Share This Story, Choose Your Platform!',
                socials:[{type:'facebook',link:'/'},{type:'twitter',link:'/'},{type:'linkedin',link:'/'},{type:'mail',link:'mailto:'}]
            },
        }
    },
    computed:{
        postContent(){
            let data =  this.$store.getters['general/getData'];
            let postData = null;
            Object.values(data.posts).forEach(post =>{
                if(post.slug == this.$route.fullPath.split('/').slice(-1)[0]){
                    postData = post;
                }
            })
            return postData
        },
        postsRelated(){
            let data =  this.$store.getters['general/getData']
            let postRelatedData = []
            Object.values(data.posts).forEach(post =>{
                if(post.slug !== this.$route.fullPath.split('/').slice(-1)[0]){
                    postRelatedData.push(post)
                }
            })
           return postRelatedData

        }
    }
}
</script>

<style lang="postcss" scoped>
.blog-post >>> h1,
.blog-post >>> h2,
.blog-post >>> h3{
    @apply text-2xl tablet:text-3xl 
}
.blog-post >>> h4{
    @apply text-xl
}
.blog-post >>> p{
    @apply text-gray-dark mb-5
}
</style>