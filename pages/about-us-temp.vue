<template>
  <div>
    <StaticBanner
      :title="aboutUsPageData.acf.banner.title"
      :background-url="aboutUsPageData.acf.banner.bgUrl"
    />
    <Breadcrumb />

    <div class="w-4/5 mx-auto flex flex-col tablet-wide:flex-row mt-20">
      <div class="tablet-wide:basis-1/4">
        <MenuLeft :data="aboutUsPageData.acf.content" />
      </div>
      <div class="tablet-wide:basis-3/4 tablet-wide:pl-20">
        <Person :data="testPerson" />
        <div id="Team"></div>
        <Logos :data="testLogos" />
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
    MenuLeft,
  },
  data() {
    return {
      testPerson: {
        person_name: 'Sławomir Pietrzyk',
        person_description: '<p>President and CEO</p>',
        person_image: {
          url: 'https://www.is-wireless.com/wp-content/uploads/2021/02/Slawomir-Pietrzyk-1.jpg',
        },
      },
      testLogos: {
        0: {
          imgUrl:
            'https://www.is-wireless.com/wp-content/uploads/2021/03/VS-logo-accelleran-17-color-200x58.png',
          url: 'https://accelleran.com/',
        },
        1: {
          imgUrl:
            'https://www.is-wireless.com/wp-content/uploads/2021/03/ICOM_COMPANY_logo_300dpi-200x45.jpg',
          url: 'http://www.intracom-telecom.com/',
        },
        2: {
          imgUrl:
            'https://www.is-wireless.com/wp-content/uploads/2021/03/pharrowtech_logo_rgb_01-200x46.png',
          url: 'https://accelleran.com/',
        },
        3: {
          imgUrl:
            'https://www.is-wireless.com/wp-content/uploads/2021/03/Mellanox-Tech.png',
          url: 'https://accelleran.com/',
        },
        4: {
          imgUrl:
            'https://www.is-wireless.com/wp-content/uploads/2021/03/CTTC_logo_square-200x141.png',
          url: '',
        },
        5: {
          imgUrl:
            'https://www.is-wireless.com/wp-content/uploads/2021/03/Master_Logo_RGB-200x200.png',
          url: 'https://accelleran.com/',
        },
        6: {
          imgUrl:
            'https://www.is-wireless.com/wp-content/uploads/2021/03/UNIMI-logo-200x69.png',
          url: '',
        },
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
