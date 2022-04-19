<template>
<div>
    <Breadcrumb/>
    <div class="w-full px-[10%]">
        <div class="tablet:w-2/3">
            <BlogPostContent :data="this.postContent.content.rendered"/>
            <BlogShare :data="testBlogShare"/>
        </div>
    </div>
</div>
</template>

<script>
import BlogShare from "~/components/blog-share.vue";
import BlogPostContent from "~/components/blog-post-content.vue";

export default {
    name: "BlogPost",
    components: {
    BlogShare,
    BlogPostContent
},
    data(){
        return{
            testBlogShare:{
                text:'Share This Story, Choose Your Platform!',
                socials:[{type:'facebook',link:'/'},{type:'twitter',link:'/'},{type:'linkedin',link:'/'},{type:'mail',link:'mailto:'}]
            }
        }
    },
    computed:{
        postContent(){
            let data =  this.$store.getters['general/getData'];
            var postData = null;
            Object.values(data.posts).forEach(post =>{
                if(post.slug == this.$route.fullPath.split('/').slice(-1)[0]){
                    postData = post;
                }
            })
            return postData
        } 
    }
}
</script>