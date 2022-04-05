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
  </div>
</template>

<script>
import OfferMenu from '~/components/offer-menu.vue'
import MoreSolutions from '~/components/more-solutions.vue'
import Collapse from '~/components/collapse.vue'
export default {
  name: 'Demo',
  components: {
    OfferMenu,
    MoreSolutions,
    Collapse
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
    }
  },
}
</script>

<style></style>
