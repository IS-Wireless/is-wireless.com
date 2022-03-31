<template>
  <div>
    <StaticBanner
      :title="networkPageData.acf.banner.title"
      :backgroundUrl="networkPageData.acf.banner.bgUrl"
    />
    <Breadcrumb />
    <div class="w-4/5 mx-auto">
      <ContentStatic
        :title="'5G Network Software and Hardware to enable networking revolution'"
        :text="['IS-Wireless provides complete end-to-end, future-proof mobile networks covering 5G, LTE as well as IoT (NB-IoT and LTE-M) standards. In our design approach, we follow recent technical advances such as Open RAN to provide customers with flexibility and economical advantages. The network solutions cover both the RAN (Radio Access Network) part, as well as the Core and MANO (Management and Orchestration). They can be used to address any deployment use case, from Rural, through Suburban/Urban to Dense Urban including the Indoor.']"
        :image="[{
          url: 'https://www.is-wireless.com/wp-content/uploads/2021/02/Mobile-networks-1200x605.jpg',
          title: null,
        },{
          url: 'https://www.is-wireless.com/wp-content/uploads/2021/02/Logotypy-800x101.jpg',
          title: null,
        }]"
      />
        <ContentStatic
        :text="['At the heart of our network solutions lies Network Software reflecting all important telecom functionalities. Network Software runs on Network Hardware, which includes COTS (Commercial off-the-shelf) servers and connected Radio Units. The offering is complemented with Installation Service, as shown in Figure below.']"
        :image="[{
          url: 'https://www.is-wireless.com/wp-content/uploads/2021/02/Mobile-Networks-Rys.-PPT-2-800x335.jpg',
          title: null,
        }]"
      />
      <OfferTiles :links="
      [{
          title:'Software',    
          url:'networks/software'
      },{
          title:'Hardware',    
          url:'networks/hardware'
      },{
          title:'Services',    
          url:'networks/services'
      }]
      "/>

    </div>
  </div>
</template>

<script>
import Vue from 'vue'

import StaticBanner from '~/components/static-banner.vue'
import Breadcrumb from '~/components/breadcrumb.vue'
import ContentStatic from '~/components/content-static.vue'
import OfferTiles from '~/components/offer-tiles.vue'

export default Vue.extend({
  components: {
    StaticBanner,
    Breadcrumb,
    ContentStatic,
    OfferTiles
},
  computed: {
    networkPageData() {
      return this.$store.getters['networks/getData']
    },
  },
})
</script>

<style></style>
