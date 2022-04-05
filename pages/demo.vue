<template>
  <div class="w-4/5 my-52 mx-auto">
    <OfferMenu :data="testLinksArray" />
    <MoreSolutions :data="testLinksArray" />
  </div>
</template>

<script>
import OfferMenu from '~/components/offer-menu.vue'
import MoreSolutions from '~/components/more-solutions.vue'
export default {
  name: 'Demo',
  components: {
    OfferMenu,
    MoreSolutions,
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
