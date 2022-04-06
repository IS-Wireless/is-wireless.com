<template>
  <div class="w-4/5 my-52 mx-auto">
    <OfferMenu :data="testLinksArray" />
    <MoreSolutions :data="testLinksArray" />
    <Collapse :title="'Click to expand or collapse'">
        <div>
            <h2>Sample collapse content</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis dolor recusandae labore quae id qui nihil facere laudantium quas at, modi tempora perspiciatis dolorem officia incidunt repellat quam? Tempore, nostrum!</p>
        </div>
    </Collapse>
    <CtaFunds :data="testTitleText" />
    <Person :data="testPerson"/>
    <Logos :data="testLogos"/>
    <ProjectTiles :data="testProjcts"/>
  </div>
</template>

<script>
import OfferMenu from '~/components/offer-menu.vue'
import MoreSolutions from '~/components/more-solutions.vue'
import Collapse from '~/components/collapse.vue'
import CtaFunds from '~/components/cta-funds.vue'
import Person from '~/components/person.vue'
import ProjectTiles from '../components/project-tiles.vue'

export default {
  name: 'Demo',
  components: {
    OfferMenu,
    MoreSolutions,
    Collapse,
    CtaFunds,
    Person,
    ProjectTiles
},
  data() {
    return {
      testLinksArray: [
        {
          title: 'Software',
          url: 'networks/software',
        },
        {
          title: 'Hardware',
          url: 'networks/hardware',
        },
        {
          title: 'Services',
          url: 'networks/services',
        },],
      testTitleText:{
          title:'Public funds',
          text:'IS-Wireless projects co-financed by public funds.'
      },
      testPerson:{
          name: 'Sławomir Pietrzyk',
          description:'<p>President and CEO</p>',
          imgUrl: 'https://www.is-wireless.com/wp-content/uploads/2021/02/Slawomir-Pietrzyk-1.jpg'
      },
      testLogos:{
        0:{
          imgUrl:'https://www.is-wireless.com/wp-content/uploads/2021/03/VS-logo-accelleran-17-color-200x58.png',
          url:'https://accelleran.com/',
        },
        1:{
          imgUrl:'https://www.is-wireless.com/wp-content/uploads/2021/03/ICOM_COMPANY_logo_300dpi-200x45.jpg',
          url:'http://www.intracom-telecom.com/',
        },
        2:{
          imgUrl:'https://www.is-wireless.com/wp-content/uploads/2021/03/pharrowtech_logo_rgb_01-200x46.png',
          url:'https://accelleran.com/',
        },
        3:{
          imgUrl:'https://www.is-wireless.com/wp-content/uploads/2021/03/Mellanox-Tech.png',
          url:'https://accelleran.com/',
        },
        4:{
          imgUrl:'https://www.is-wireless.com/wp-content/uploads/2021/03/CTTC_logo_square-200x141.png',
          url:'',
        },
        5:{
          imgUrl:'https://www.is-wireless.com/wp-content/uploads/2021/03/Master_Logo_RGB-200x200.png',
          url:'https://accelleran.com/',
        },
        6:{
          imgUrl:'https://www.is-wireless.com/wp-content/uploads/2021/03/UNIMI-logo-200x69.png',
          url:'',
        }
      },
      testProjcts:[
      {
        title:'Marsal',
        imgUrl:'https://www.is-wireless.com/wp-content/uploads/2020/01/Braine2.png',
        text:'Big data Processing and Artificial Intelligence at the Network Edge',
        url:'https://www.is-wireless.com/research/braine/'
      },
      {
        title:'EU Wireless',
        imgUrl:'https://www.is-wireless.com/wp-content/uploads/2019/06/cropped-EuWireless-logo-kolor-subtitle-e1517233730973-300x108.png',
        text:'European Mobile Network Operator for Research',
        url:'https://www.is-wireless.com/research/braine/'
      },
      {
        title:'Marsal',
        imgUrl:'https://www.is-wireless.com/wp-content/uploads/2020/01/Braine2.png',
        text:'Big data Processing and Artificial Intelligence at the Network Edge',
        url:'https://www.is-wireless.com/research/braine/'
      },
      {
        title:'Marsal',
        imgUrl:'https://www.is-wireless.com/wp-content/uploads/2020/01/Braine2.png',
        text:'Big data Processing and Artificial Intelligence at the Network Edge',
        url:'https://www.is-wireless.com/research/braine/'
      },
      ],

    }
  },
}
</script>

<style></style>
