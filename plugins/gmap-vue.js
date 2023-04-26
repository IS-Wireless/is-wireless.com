import Vue from 'vue'
import GmapVue from 'gmap-vue';

export default ({ $config: { GMAP_KEY } }) => {
  Vue.use(GmapVue, {
    load: {
      key: GMAP_KEY,
      language: 'en',
      libraries: 'places',
    },
    installComponents: true,
  })
}
