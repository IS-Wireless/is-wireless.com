<template>
    <div>
      <Banner/>
      <Organisations/>
      <ContentSection>
        <template v-slot:left>
          <SectionHeader :title="'Complete E2E European Open RAN'"/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus possimus et quo eaque distinctio officia dignissimos nesciunt nobis laudantium. Doloremque reprehenderit perspiciatis itaque. Nesciunt explicabo, mollitia praesentium facilis deleniti, qui recusandae sit ut sequi quam veniam quaerat officia dolorem, molestias voluptatibus repellendus ratione? Deleniti, veritatis? Necessitatibus iste in assumenda doloribus.</p>
          <List :items="testList"/>
        </template>
        <template v-slot:right>
          <SectionImage :imageUrl="'https://www.is-wireless.com/wp-content/uploads/2021/02/Indoor-IS-Wireless.jpg'"/>
        </template>
      </ContentSection>
            <ContentSection>
        <template v-slot:left>
          <SectionImage :imageUrl="'https://www.is-wireless.com/wp-content/uploads/2021/02/Indoor-IS-Wireless.jpg'"/>
        </template>
        <template v-slot:right>
          <SectionHeader :title="'Complete E2E European Open RAN'"/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus possimus et quo eaque distinctio officia dignissimos nesciunt nobis laudantium. Doloremque reprehenderit perspiciatis itaque. Nesciunt explicabo, mollitia praesentium facilis deleniti, qui recusandae sit ut sequi quam veniam quaerat officia dolorem, molestias voluptatibus repellendus ratione? Deleniti, veritatis? Necessitatibus iste in assumenda doloribus.</p>
          <List :items="testList"/>
        </template>
      </ContentSection>
    </div>
</template>

<script>
import Vue from 'vue'

import Banner from '~/components/Banner.vue'
import Organisations from '~/components/Organisations.vue'
import ContentSection from '~/components/content-section.vue'
import SectionHeader from '~/components/section-header.vue'
import ListItem from '~/components/list.vue'
import SectionImage from '~/components/section-image.vue'

export default Vue.extend({ 

  components: {
    Organisations,
    Banner,
    ContentSection,
    SectionHeader,
    ListItem,
    SectionImage
},
  data(){
    return{
      testList:[
        {
          text: 'Test 1 Test Test Lorem ipsum dolor es ',
          iconUrl: '../static/test-icon.png'
        },
        {
          text: 'Test 2 Test Test Lorem ipsum dolor es ',
          iconUrl: '../static/test-icon.png'
        },
        {
          text: 'Test 3 Test Test Lorem ipsum dolor es ',
          iconUrl: 'https://e7.pngegg.com/pngimages/527/437/png-clipart-wifi-logo-wi-fi-computer-icons-wireless-symbol-wifi-icon-angle-electronics.png'
        }
      ] ,   
    }
  }

  })
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
