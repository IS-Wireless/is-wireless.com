import { isEmpty as _isEmpty } from 'lodash'

const filterWords = ['yoast_head', 'meta', '{}']

// http://wp-api.org/node-wpapi/collection-pagination/
function getAll(request) {
  return request.then((response) => {
    if (!response._paging || !response._paging.next) {
      return response
    }
    // Request the next page and return both responses as one collection
    return Promise.all([response, getAll(response._paging.next)]).then(
      (responses) => {
        return [].concat(...responses)
      }
    )
  })
}

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
          .namespace('wp/v2')
          .pages()
          .id(2)
          .then(function (data) {
            filterData(data)
            dispatch('homepage/init', { homepageData: data.acf })
            resolve()
          })
      }),
      new Promise((resolve) => {
        app.$wp
          .namespace('wp-api-menus/v2')
          ['menu-locations']()
          .then(function (data) {
            filterData(data)
            dispatch('general/init', { menu_locations: data })
            resolve()
          })
      }),
      new Promise((resolve) => {
        app.$wp
          .namespace('wp-api-menus/v2')
          .menus()
          .get()
          .then(function (data) {
            var promisesDynamicArray = []

            data.forEach((single_menu) => {
              promisesDynamicArray.push(
                new Promise((resolve_child) => {
                  app.$wp
                    .namespace('wp-api-menus/v2')
                    .menus()
                    .id(`${single_menu.term_id}`)
                    .get()
                    .then(function (data) {
                      filterData(data)
                      dispatch('general/menuInit', { menu: data })
                      resolve_child()
                    })
                })
              )
            })

            Promise.allSettled(promisesDynamicArray).then(() => {
              resolve()
            })
          })
      }),
      new Promise((resolve) => {
        getAll(app.$wp.namespace('wp/v2').posts()).then(function (data) {
          filterData(data)
          dispatch('general/init', { posts: data })
          resolve()
        })
      }),
      new Promise((resolve) => {
        getAll(app.$wp.namespace('wp/v2').pages()).then(function (data) {
          filterData(data)
          dispatch('general/init', { pages: data })
          resolve()
        })
      }),
      new Promise((resolve) => {
        app.$wp
          .namespace('acf/v2')
          .options()
          .then(function (data) {
            dispatch('general/init', { options: data })
            resolve()
          })
      }),
    ])
  },
}
