<template>
  <section class="flex flex-col tablet-wide:flex-row w-4/5 mx-auto my-10 tablet-wide:my-16" >
    <div class="tablet-wide:flex-[0_1_50%] tablet-wide:mr-5">
      <slot name="left"></slot>
    </div>
    <div class="tablet-wide:flex-[0_1_50%] tablet-wide:ml-5">
      <slot name="right"></slot>
    </div>
  </section>
</template>

<script>
export default {
    name: 'ContentSection',
    props:{
      background:{
        type:String,
        required: false
      }
    }

}
</script>

<style>

</style>