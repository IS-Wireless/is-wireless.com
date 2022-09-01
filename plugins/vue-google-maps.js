import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'

export default ({ $config: { GMAP_KEY } }) => {
  Vue.use(VueGoogleMaps, {
    load: {
      key: GMAP_KEY,
      language: 'en',
    },
    libraries: 'places',
    installComponents: true,
  })
}
