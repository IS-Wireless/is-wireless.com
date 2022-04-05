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
  </div>
</template>

<script>
import OfferMenu from '~/components/offer-menu.vue'
import MoreSolutions from '~/components/more-solutions.vue'
import Collapse from '~/components/collapse.vue'
import CtaFunds from '~/components/cta-funds.vue'
import Person from '~/components/person.vue'

export default {
  name: 'Demo',
  components: {
    OfferMenu,
    MoreSolutions,
    Collapse,
    CtaFunds,
    Person
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

    }
  },
}
</script>

<style></style>
