import { isEmpty as _isEmpty, groupBy as _groupBy, reverse as _reverse } from 'lodash'

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
  async nuxtServerInit({ dispatch }, { app, env }) {
    return Promise.all([
      new Promise((resolve) => {
        app.$wp
          .namespace('acf/v2')
          .options()
          .then(function (data) {
            filterData(data)
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
            var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            
            var groupedPosts = _groupBy(data,(post)=>{
              return new Date(post.date).getFullYear()
            })
            
            groupedPosts = Object.keys(groupedPosts).map(year => ({ year: year, posts: groupedPosts[year]})).reverse();
            
            Object.keys(groupedPosts).forEach((item)=>{
              groupedPosts[item].posts = _groupBy(groupedPosts[item].posts,(post)=>{
                return new Date(post.date).getMonth()
              });
              groupedPosts[item].posts = Object.keys(groupedPosts[item].posts).map(month => ({ number: month,name: months[month], posts: groupedPosts[item].posts[month]})).reverse();
            })

            dispatch('general/init', { posts: groupedPosts })
            resolve()
          })
      })
    ]),
    new Promise((resolve) => {
      app.$wp
        .namespace('wp/v2')
        .posts()
        .then(function (data) {
          filterData(data)
          dispatch('general/init', { postsUnsorted: data })
          resolve()
        })
    })
  },
}
