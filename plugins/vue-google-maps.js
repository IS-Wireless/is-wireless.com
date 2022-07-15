import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'
var keyGMAPS = process.env.API_GMAPS

Vue.use(VueGoogleMaps, {
  load: {
    key: keyGMAPS,
    language: 'en',
  },
  installComponents: true,
})
