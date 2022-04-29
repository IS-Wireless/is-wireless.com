import { isEmpty as _isEmpty } from 'lodash'

const filterWords = ['yoast_head', 'meta', '{}']

const filterData = (obj) => {
  Object.keys(obj).forEach((key) => {
    if (typeof obj[key] == 'string') {
      obj[key] = obj[key].replace(
        /(<!--.*?-->)|(<!--[\S\s]+?-->)|(<!--[\S\s]*?$)/gs,
        ''
      )
    }

    if (
      _isEmpty(key) ||
      RegExp(filterWords.join('|')).test(key) ||
      obj[key] == null ||
      typeof obj[key] == 'undefined' ||
      (Array.isArray(obj[key]) && !obj[key].length) ||
      obj[key] == '' ||
      obj[key] == []
    ) {
      delete obj[key]
    } // delete
    else if (obj[key] && typeof obj[key] === 'object') filterData(obj[key]) // recurse
  })
}

export const state = () => ({})

export const mutations = {}

export const getters = {}

export const actions = {
  async nuxtServerInit({ dispatch }, { app }) {
    return Promise.all([
      new Promise((resolve) => {
        app.$wp
          .namespace('acf/v2')
          .options()
          .then(function (data) {
            dispatch('general/init', data.acf)
            resolve()
          })
      }),
      new Promise((resolve) => {
        app.$wp
          .namespace('wp/v2')
          .menus()
          .then(function (data) {
            filterData(data)
            dispatch('general/init', { menu: data })
            resolve()
          })
      }),
      new Promise((resolve) => {
        app.$wp
          .namespace('wp/v2')
          ['menu-locations']()
          .then(function (data) {
            filterData(data)
            dispatch('general/init', { menu_locations: data })
            resolve()
          })
      }),
      new Promise((resolve) => {
        app.$wp
          .namespace('wp/v2')
          ['menu-items']()
          .then(function (data) {
            filterData(data)
            dispatch('general/init', { menu_items: data })
            resolve()
          })
      }),
      new Promise((resolve) => {
        app.$wp
          .namespace('wp/v2')
          .posts()
          .then(function (data) {
            filterData(data)
            dispatch('general/init', { posts: data })
            resolve()
          })
      }),
      new Promise((resolve) => {
        app.$wp
          .namespace('wp/v2')
          .pages()
          .then(function (data) {
            filterData(data)
            dispatch('general/init', { pages: data })
            resolve()
          })
      }),
    ])
  },
}
