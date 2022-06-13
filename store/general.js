import { isEmpty as _isEmpty } from 'lodash'

const filterWords = ['yoast_head', 'meta', '{}']

export const state = () => ({
  menu: {},
})

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

export const getters = {
  getData: ($state) => {
    return $state
  },
  getOptionsData: ($state) => {
    return $state.options.acf
  },
}

export const mutations = {
  save($state, data) {
    filterData(data)
    Object.assign($state, data)
  },
  menuAdd($state, data) {
    filterData(data)

    var obj = {
      [data.ID.toString()]: data,
    }

    Object.assign($state.menu, { ...$state.menu, ...obj })
  },
}

export const actions = {
  init(context, data) {
    context.commit('save', data)
  },
  menuInit(context, data) {
    context.commit('menuAdd', data.menu)
  },
}
