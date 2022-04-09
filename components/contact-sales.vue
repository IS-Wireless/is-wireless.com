<template>
  <div class="mt-10 w-full">
    <h2 class="mb-5 text-gray-dark">{{data.title}}</h2>
    <div  class="mb-5" v-html="data.content">
    </div>
  </div>
</template>

<script>
export default {
    name:'ContactSales',
    props:{
        data:{
            type:Object,
            required:true,
            default:{
                title:'Title here',
                content:'<p>HTML content from WYSIWYG here</p>'
            }
        }
    }
}
</script>

<style>

</style>