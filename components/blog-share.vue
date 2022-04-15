<template>
  <div class="w-full">
      <div class="flex flex-col tablet:flex-row tablet:items-center justify-between">
          <h4 class="text-xl text-gray-darkest">{{data.text}}</h4>
          <ul class="flex tablet:p-5 tablet:pr-0">
              <li class="block m-1.5" v-for="item in data.socials" :key="item.type">
                  <a :href="item.link" class="block w-8 h-8 bg-gray-default hover:bg-opacity-70 transition rounded-md"></a>
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
    name:'BlogShare',
    props:{
        data:{
            type:Object,
            required:true
        }
    }

}
</script>

<style>

</style>