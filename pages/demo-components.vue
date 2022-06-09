<template>
  <div class="w-4/5 my-52 mx-auto">
    <OfferMenu :data="testLinksArray" />
    <MoreSolutions :data="testLinksArray" />
    <Collapse :title="'Click to expand or collapse'">
      <div>
        <h2>Sample collapse content</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis
          dolor recusandae labore quae id qui nihil facere laudantium quas at,
          modi tempora perspiciatis dolorem officia incidunt repellat quam?
          Tempore, nostrum!
        </p>
      </div>
    </Collapse>
    <CtaFunds :data="testTitleText" />
    <Person :data="testPerson" />
    <ProjectTiles :data="testProjcts" />
    <h1 class="p-8">2/3 layout test</h1>
    <div class="flex flex-col tablet-wide:flex-row">
      <div class="basis-2/3 tablet-wide:pr-[5%]">
        <ProjectTiles :data="testProjcts" />
      </div>
      <div class="basis-1/3">
        <Sidebar :data="testSidebar" />
      </div>
    </div>
    <Table :data="testTableData" />
    <Map :data="testMapMarker" />
    <Tabs :data="testTabsData" />
    <!-- <BlogTimeline :data="postsFromGeneral.posts" /> -->
    <!-- <BlogShare :data="testBlogShare" /> -->
  </div>
</template>

<script>
import OfferMenu from '~/components/offer-menu.vue'
import MoreSolutions from '~/components/more-solutions.vue'
import Collapse from '~/components/collapse.vue'
import CtaFunds from '~/components/cta-funds.vue'
import Person from '~/components/person.vue'
import ProjectTiles from '../components/project-tiles.vue'
import Sidebar from '~/components/sidebar.vue'
import Table from '~/components/table.vue'
import Map from '../components/map.vue'
import Tabs from '~/components/tabs.vue'

export default {
  name: 'Demo',
  components: {
    OfferMenu,
    MoreSolutions,
    Collapse,
    CtaFunds,
    Person,
    ProjectTiles,
    Sidebar,
    Table,
    // ContactSales,
    Map,
    Tabs,
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
        },
      ],
      testTitleText: {
        title: 'Public funds',
        text: 'IS-Wireless projects co-financed by public funds.',
      },
      testPerson: {
        name: 'Sławomir Pietrzyk',
        description: '<p>President and CEO</p>',
        imgUrl:
          'https://www.is-wireless.com/wp-content/uploads/2021/02/Slawomir-Pietrzyk-1.jpg',
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
      testProjcts: [
        {
          title: 'Marsal',
          imgUrl:
            'https://www.is-wireless.com/wp-content/uploads/2020/01/Braine2.png',
          text: 'Big data Processing and Artificial Intelligence at the Network Edge',
          url: '/',
        },
        {
          title: 'EU Wireless',
          imgUrl:
            'https://www.is-wireless.com/wp-content/uploads/2019/06/cropped-EuWireless-logo-kolor-subtitle-e1517233730973-300x108.png',
          text: 'European Mobile Network Operator for Research',
          url: '/',
        },
        {
          title: 'Marsal',
          imgUrl:
            'https://www.is-wireless.com/wp-content/uploads/2020/01/Braine2.png',
          text: 'Big data Processing and Artificial Intelligence at the Network Edge',
          url: '/',
        },
        {
          title: 'Marsal',
          imgUrl:
            'https://www.is-wireless.com/wp-content/uploads/2020/01/Braine2.png',
          text: 'Big data Processing and Artificial Intelligence at the Network Edge',
          url: '/',
        },
      ],
      testSidebar: {
        title: 'Horizon Europe – (examples calls of interest)',
        list: [
          'HORIZON-CL4-2021-DATA-01-05 (Edge Operating Systems)',
          'HORIZON-CL4-2021-TWIN-TRANSITION-01-08 (Data-driven Industrial Environments)',
          'HORIZON-CL4-2021-SPACE-01-11 (Trustworthy AI)',
          'HORIZON-CL4-2021-HUMAN-01-01 (Internet Architecture and Decentralised Technologies)',
        ],
      },
      testTableData: {
        head: ['Application', 'Benefit', 'Who can benefit?'],
        content: [
          [
            'Testing and verification',
            'where LTE PHY Lab provides test signal vectors	',
            'ODM, OEM, Operator',
          ],
          [
            'LTE PHY prototyping',
            'LTE PHY Lab shortens the development time',
            'Chip manufacturer, ODM',
          ],
          [
            'Education',
            'LTE PHY Lab serves as an environment to visualize LTE PHY operation',
            'University, Training Company',
          ],
        ],
      },
      testContactSales: {
        title: 'Contact sales',
        content:
          '<p style="text-align: justify;">We would be excited to learn about your business and technical needs and propose a product or customization to fulfill them. To receive more information about our products, request a quote or get a trial, please contact us at&nbsp;<a href="mailto:sales@is-wireless.com"><strong>sales@is-wireless.com</strong></a>.</p>',
      },
      testMapMarker: {
        title: 'IS-WIreless HQ',
        position: {
          lat: 52,
          lng: 21.1,
        },
      },
      testBlogPosts: [
        {
          date: 'Data, Friday 13th',
          title:
            'End-to-end Open RAN 5G solution by a Polish provider successfully tested in European labs',
          link: '/',
          imgUrl:
            'https://www.is-wireless.com/wp-content/uploads/2022/02/Oran-300x157.jpg',
          description:
            'End-to-end Open RAN 5G solution by a Polish provider successfully tested in European labs',
        },
        {
          date: 'Data, Friday 55th',
          title:
            'Comarch and IS-Wireless Join Forces to Provide a Comprehensive 5G Mobile Network Solution',
          link: '/',
          imgUrl:
            'https://www.is-wireless.com/wp-content/uploads/2021/12/LinkedIn_1200x627_3-300x157.jpg',
          description:
            'Comarch and IS-Wireless Join Forces to Provide a Comprehensive 5G Mobile Network Solution',
        },
      ],
      testBlogShare: {
        text: 'Share This Story, Choose Your Platform!',
        socials: [
          { type: 'facebook', link: '/' },
          { type: 'twitter', link: '/' },
          { type: 'linkedin', link: '/' },
          { type: 'mail', link: 'mailto:' },
        ],
      },
      testTabsData: [
        {
          title: 'tab1',
          content: '<p>Test</p>',
        },
        {
          title: 'tab2',
          content:
            '<h1>Test2</h1> <h1>Test2</h1><h1>Test2</h1><h1>Test2</h1><h1>Test2</h1><h1>Test2</h1>',
        },
        {
          title: 'tab3',
          content:
            '<div><h2>Test 3</h2><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></div>',
        },
      ],
    }
  },
  computed: {
    postsFromGeneral() {
      // For testing purpose data is stored via 'general'
      return this.$store.getters['general/getData']
    },
  },
}
</script>

<style></style>
