<template>
  <div class="mb-10">
    <GmapMap
      :center="{ lat: 52, lng: 21.1 }"
      :zoom="12"
      :options="mapOptions"
      class="map-custom w-full h-[600px]"
    >
      <GmapMarker
        :position="data.position"
        :icon="{
          url: '../_ipx/static/Marker.svg',
          scaledSize: { width: 30, height: 35, f: 'px', b: 'px' },
        }"
      />
    </GmapMap>
  </div>
</template>

<script>
export default {
  name: 'Map',
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      mapOptions: {
        disableDefaultUI: false,
        streetViewControl: true,
        mapId: 'bc1bc9eaa1e9b00c',
      },
    }
  },
}
</script>

<style lang="postcss" scoped>
.map-custom >>> * {
  line-height: normal;
}
</style>
