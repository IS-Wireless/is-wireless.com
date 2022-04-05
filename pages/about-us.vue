<template>
  <div>
    <StaticBanner
      :title="aboutUsPageData.acf.banner.title"
      :backgroundUrl="aboutUsPageData.acf.banner.bgUrl"
    />
    <Breadcrumb />

    <div class="w-4/5 mx-auto flex flex-col tablet-wide:flex-row mt-20">
        <div class="tablet-wide:basis-1/4">
          <MenuLeft :elements="aboutUsPageData.acf.content"/>
        </div>
        <div class="tablet-wide:basis-3/4 tablet-wide:pl-20">
          <Person :data="testPerson"/>
        </div>
      
    </div>
  
  </div>
</template>

<script>
import Vue from 'vue'

import StaticBanner from '~/components/static-banner.vue'
import Breadcrumb from '~/components/breadcrumb.vue'
import MenuLeft from '~/components/menu-left.vue'

export default Vue.extend({
  components: {
    StaticBanner,
    Breadcrumb,
    MenuLeft
  },
  data(){
    return{
      testPerson:{
          name: 'Sławomir Pietrzyk',
          description:'<p>President and CEO</p>',
          imgUrl: 'https://www.is-wireless.com/wp-content/uploads/2021/02/Slawomir-Pietrzyk-1.jpg'
      },
    }
  },
  computed: {
    aboutUsPageData() {
      return this.$store.getters['about-us/getData']
    },
  },
})
</script>

<style></style>
