<template>
  <div class="mb-10">
    <GmapMap
      :center="{ lat: 52, lng: 21.1 }"
      :zoom="12"
      :options="mapOptions"
      class="map-custom w-full h-[600px]"
    >
      <GmapMarker
        title="Hello World!"
        :position="{ lat: data.map.lat, lng: data.map.lng }"
        :clickable="true"
        :icon="{
          url: require('/static/Marker.svg'),
          scaledSize: { width: 30, height: 35, f: 'px', b: 'px' },
        }"
        @click="openLocationMarker"
      />
    </GmapMap>
  </div>
</template>

<script>
export default {
  name: 'section_map',
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      mapOptions: {
        center: { lat: this.data.map.lat, lng: this.data.map.lng },
        disableDefaultUI: true,
        streetViewControl: false,
        mapId: 'bc1bc9eaa1e9b00c',
        placeId: 'ChIJcc2mlRouGUcRB-PNbG60ar4',
      },
    }
  },
  methods: {
    openLocationMarker: function () {
      window.location.href = 'https://goo.gl/maps/pky2oTRWzc5HnFaz8'
    },
  },
}
</script>

<style lang="postcss" scoped>
.map-custom >>> * {
  line-height: normal;
}
</style>
