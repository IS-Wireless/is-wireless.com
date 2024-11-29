<template>
  <div class="mb-10">
    <ClientOnly>
      <GoogleMap
        :center="this.data.map?.lat && this.data.map?.lng ? { lat: this.data.map.lat, lng: this.data.map.lng } : { lat: 52, lng: 21.1 }"
        :zoom="10"
        :api-key="useRuntimeConfig().public.GMAP_KEY"
        :disableDefaultUi = true
        :streetViewControl = false
        mapId = 'bc1bc9eaa1e9b00c'
        class="map-custom w-full h-[600px]"
      >
        <Marker v-if="this.data.map?.lat && this.data.map?.lng"
          :options="markerOptions"
          @click="openLocationMarker"
        />
      </GoogleMap>
    </ClientOnly>
  </div>
</template>

<script>
import { GoogleMap, Marker } from 'vue3-google-map';

export default {
  name: 'section_map',
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  components:{
    GoogleMap,
    Marker
  },
  data() {
    return {
      mapOptions: {
        apiKey: useRuntimeConfig().public.GMAP_KEY,
        center: { lat: this.data.map.lat, lng: this.data.map.lng },
        disableDefaultUI: true,
        streetViewControl: false,
        mapId: 'bc1bc9eaa1e9b00c',
        placeId: 'ChIJcc2mlRouGUcRB-PNbG60ar4',
      },
      markerOptions:{
        position: { lat: this.data.map.lat, lng: this.data.map.lng },
        clickable: true,
        icon: {
          url:  '/Marker.svg',
          scaledSize: { width: 30, height: 35 },
        }
          
      }
    }
  },
  methods: {
    openLocationMarker: function () {
      window.open('https://goo.gl/maps/pky2oTRWzc5HnFaz8','_blank').focus()
    },
  },
}
</script>

<style lang="postcss" scoped>
.map-custom :deep( * ){
  line-height: normal;
}
</style>
