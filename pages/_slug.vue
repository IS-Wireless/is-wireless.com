<template>
  <div>
    <Breadcrumb />
    <div class="w-full px-[10%]">
      <div class="w-3/4">
        <span class="inline-block text-gray-dark mt-14">
          <SectionHeader :title="currentRouteName" />
        </span>
        <div class="mb-10"></div>
      </div>
    </div>
  </div>
</template>

<script>
import SectionHeader from '~/components/section-header.vue'
import Breadcrumb from '~/components/breadcrumb.vue'

export default {
  components: {
    SectionHeader,
    Breadcrumb,
  },
  computed: {
    currentRouteName() {
      return this.$route.fullPath.slice(1, -1).split('/').slice(-1)[0]
    },
  },
}
</script>

<style lang="postcss" scoped></style>
