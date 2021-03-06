import { isEmpty as _isEmpty } from 'lodash'
// import Cache from 'file-system-cache'

// let cacheReqWP = Cache({
//   basePath: './.cache', // Optional. Path where cache files are stored (default).
//   ns: 'wp_json', // Optional. A grouping namespace for items.
// })

const filterWords = ['head_tags', 'yoast_head', 'meta', '{}', '_links']

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
        // if (process.env) {
        //   let cacheID = app.$wp.namespace('wp/v2').pages().id(2)._options
        //     .endpoint
        //   cacheReqWP
        //     .get(cacheID)
        //     .then(function (result) {
        //       dispatch('homepage/init', { homepageData: result.acf })
        //       resolve()
        //     })
        //     .catch(function () {
        //       app.$wp
        //         .namespace('wp/v2')
        //         .pages()
        //         .id(2)
        //         .then(function (data) {
        //           let tmp = ''
        //           if (
        //             data &&
        //             data.yoast_head_json &&
        //             data.yoast_head_json.schema
        //           ) {
        //             tmp = JSON.stringify(data.yoast_head_json.schema)
        //           }
        //           filterData(data)
        //           data.schema = tmp
        //           if (data.acf && data.acf.section) {
        //             data.content = ''
        //           }
        //           cacheReqWP.set(cacheID, data)
        //           dispatch('homepage/init', { homepageData: data.acf })
        //           resolve()
        //         })
        //     })
        // } else {
        app.$wp
          .namespace('wp/v2')
          .pages()
          .id(2)
          .then(function (data) {
            let tmp = ''
            if (data && data.yoast_head_json && data.yoast_head_json.schema) {
              tmp = JSON.stringify(data.yoast_head_json.schema)
            }
            filterData(data)
            data.schema = tmp
            if (data.acf && data.acf.section) {
              data.content = ''
            }
            dispatch('homepage/init', { homepageData: data.acf })
            resolve()
          })
        // }
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
                      if (data && typeof data !== 'undefined') {
                        dispatch('general/menuInit', { menu: data })
                      }
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
        // cacheReqWP
        //   .get('posts')
        //   .then(function (data) {
        //     data.forEach(function (item, index) {
        //       if (
        //         item.yoast_head_json &&
        //         Object.keys(item.yoast_head_json).length
        //       ) {
        //         data[index]['schema'] = JSON.stringify(
        //           item.yoast_head_json.schema
        //         )

        //         data[index]['schema_basic'] = {
        //           title: item.yoast_head_json.title,
        //           description: item.yoast_head_json.description,
        //           robots: {
        //             index: item.yoast_head_json.robots.index,
        //             follow: item.yoast_head_json.robots.follow,
        //             'max-snippet': item.yoast_head_json.robots['max-snippet'],
        //             'max-image-preview':
        //               item.yoast_head_json.robots['max-image-preview'],
        //             'max-video-preview':
        //               item.yoast_head_json.robots['max-video-preview'],
        //           },
        //           canonical: item.yoast_head_json.canonical,
        //           og_locale: item.yoast_head_json.og_locale,
        //           og_type: item.yoast_head_json.og_type,
        //           og_title: item.yoast_head_json.og_title,
        //           og_description: item.yoast_head_json.og_description,
        //           og_url: item.yoast_head_json.og_url,
        //           og_site_name: item.yoast_head_json.og_site_name,
        //           article_modified_time:
        //             item.yoast_head_json.article_modified_time,
        //           twitter_card: item.yoast_head_json.twitter_card,
        //           twitter_misc: item.yoast_head_json.twitter_misc,
        //         }
        //       }
        //       if (item.content.rendered) {
        //         let tmp = item.content.rendered
        //         item.content.rendered = tmp.replace(/srcset="[\s\S]*?"/, '')
        //       }
        //     })
        //     filterData(data)
        //     dispatch('general/init', { posts: data })
        //     resolve()
        //   })
        //   .catch(function () {
        getAll(app.$wp.namespace('wp/v2').posts()).then(function (data) {
          // cacheReqWP.set('posts', data)
          // console.log(data)
          data.forEach(function (item, index) {
            if (
              item.yoast_head_json &&
              Object.keys(item.yoast_head_json).length
            ) {
              data[index]['schema'] = JSON.stringify(
                item.yoast_head_json.schema
              )

              for (
                var i = 0;
                i < item.yoast_head_json.schema['@graph'].length;
                i++
              ) {
                if (
                  item.yoast_head_json.schema['@graph'][i]['@type'] ==
                  'BreadcrumbList'
                ) {
                  data[index]['breadcrumb'] =
                    item.yoast_head_json.schema['@graph'][i]
                }
              }

              data[index]['schema_basic'] = {
                title: item.yoast_head_json.title,
                description: item.yoast_head_json.description,
                robots: {
                  index: item.yoast_head_json.robots.index,
                  follow: item.yoast_head_json.robots.follow,
                  'max-snippet': item.yoast_head_json.robots['max-snippet'],
                  'max-image-preview':
                    item.yoast_head_json.robots['max-image-preview'],
                  'max-video-preview':
                    item.yoast_head_json.robots['max-video-preview'],
                },
                canonical: item.yoast_head_json.canonical,
                og_locale: item.yoast_head_json.og_locale,
                og_type: item.yoast_head_json.og_type,
                og_title: item.yoast_head_json.og_title,
                og_description: item.yoast_head_json.og_description,
                og_url: item.yoast_head_json.og_url,
                og_site_name: item.yoast_head_json.og_site_name,
                article_modified_time:
                  item.yoast_head_json.article_modified_time,
                twitter_card: item.yoast_head_json.twitter_card,
                twitter_misc: item.yoast_head_json.twitter_misc,
              }
            }
            if (item.content.rendered) {
              let tmp = item.content.rendered
              item.content.rendered = tmp.replace(/srcset="[\s\S]*?"/, '')
            }
          })
          filterData(data)
          dispatch('general/init', { posts: data })
          resolve()
        })
        // })
      }),
      new Promise((resolve) => {
        // cacheReqWP
        //   .get('pages')
        //   .then(function (data) {
        //     data.forEach(function (item, index) {
        //       if (
        //         item.yoast_head_json &&
        //         Object.keys(item.yoast_head_json).length
        //       ) {
        //         data[index]['schema'] = JSON.stringify(
        //           item.yoast_head_json.schema
        //         )

        //         data[index]['schema_basic'] = {
        //           title: item.yoast_head_json.title,
        //           description: item.yoast_head_json.description,
        //           robots: {
        //             index: item.yoast_head_json.robots.index,
        //             follow: item.yoast_head_json.robots.follow,
        //             'max-snippet': item.yoast_head_json.robots['max-snippet'],
        //             'max-image-preview':
        //               item.yoast_head_json.robots['max-image-preview'],
        //             'max-video-preview':
        //               item.yoast_head_json.robots['max-video-preview'],
        //           },
        //           canonical: item.yoast_head_json.canonical,
        //           og_locale: item.yoast_head_json.og_locale,
        //           og_type: item.yoast_head_json.og_type,
        //           og_title: item.yoast_head_json.og_title,
        //           og_description: item.yoast_head_json.og_description,
        //           og_url: item.yoast_head_json.og_url,
        //           og_site_name: item.yoast_head_json.og_site_name,
        //           article_modified_time:
        //             item.yoast_head_json.article_modified_time,
        //           twitter_card: item.yoast_head_json.twitter_card,
        //           twitter_misc: item.yoast_head_json.twitter_misc,
        //         }
        //       }

        //       if (
        //         item.acf &&
        //         item.acf.section &&
        //         Object.keys(item.acf.section).length
        //       ) {
        //         data.content = ''
        //       }
        //     })
        //     filterData(data)
        //     data.forEach((pageData) => {
        //       dispatch('general/pagesInit', { pages: pageData })
        //     })
        //     resolve()
        //   })
        //   .catch(function () {
        // getAll(app.$wp.namespace('wp/v2').pages()).then(function (data) {
        // cacheReqWP.set('pages', data)

        getAll(app.$wp.namespace('wp/v2').pages()).then(function (data) {
          data.forEach(function (item, index) {
            if (
              item.yoast_head_json &&
              Object.keys(item.yoast_head_json).length
            ) {
              data[index]['schema'] = JSON.stringify(
                item.yoast_head_json.schema
              )

              for (
                var i = 0;
                i < item.yoast_head_json.schema['@graph'].length;
                i++
              ) {
                if (
                  item.yoast_head_json.schema['@graph'][i]['@type'] ==
                  'BreadcrumbList'
                ) {
                  data[index]['breadcrumb'] =
                    item.yoast_head_json.schema['@graph'][i]
                }
              }

              data[index]['schema_basic'] = {
                title: item.yoast_head_json.title,
                description: item.yoast_head_json.description,
                robots: {
                  index: item.yoast_head_json.robots.index,
                  follow: item.yoast_head_json.robots.follow,
                  'max-snippet': item.yoast_head_json.robots['max-snippet'],
                  'max-image-preview':
                    item.yoast_head_json.robots['max-image-preview'],
                  'max-video-preview':
                    item.yoast_head_json.robots['max-video-preview'],
                },
                canonical: item.yoast_head_json.canonical,
                og_locale: item.yoast_head_json.og_locale,
                og_type: item.yoast_head_json.og_type,
                og_title: item.yoast_head_json.og_title,
                og_description: item.yoast_head_json.og_description,
                og_url: item.yoast_head_json.og_url,
                og_site_name: item.yoast_head_json.og_site_name,
                article_modified_time:
                  item.yoast_head_json.article_modified_time,
                twitter_card: item.yoast_head_json.twitter_card,
                twitter_misc: item.yoast_head_json.twitter_misc,
              }
            }

            if (
              item.acf &&
              item.acf.sections &&
              Object.keys(item.acf.sections).length
            ) {
              data[index].content = ''
            }
          })
          filterData(data)
          data.forEach((pageData) => {
            dispatch('general/pagesInit', { pages: pageData })
          })
          resolve()
        })
        // })
        // })
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
