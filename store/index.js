var WPAPI = require('wpapi')

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
  async nuxtServerInit({ dispatch }, { env }) {
    await WPAPI.discover(`${env.API_URL}${env.API_AFFIX}`).then(function (wp) {
      return Promise.all([
        new Promise((resolve) => {
          wp.namespace('acf/v2')
            .options()
            .then(function (data) {
              filterData(data)
              dispatch('general/init', data.acf)
              resolve()
            })
        }),
        new Promise((resolve) => {
          wp.namespace('menus/v1')
            .menus('main_navigation')
            .then(function (data) {
              filterData(data)
              dispatch('general/init', data)
              resolve()
            })
        }),

      ])
    })
  },
}
