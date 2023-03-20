import Vue from 'vue'
import * as GmapVue from 'vue2-google-maps'

export default ({ $config: { GMAP_KEY } }) => {
  Vue.use(GmapVue, {
    load: {
      key: GMAP_KEY,
      language: 'en',
    },
    libraries: 'places',
    installComponents: true,
  })
  Vue.component('GmapMap', GmapVue.Map)
  Vue.component('GmapMarker', GmapVue.Marker)
}
