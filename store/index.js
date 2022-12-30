import filterData from "~/utils/filterData";
// import Cache from 'file-system-cache'

// let cacheReqWP = Cache({
//   basePath: './.cache', // Optional. Path where cache files are stored (default).
//   ns: 'wp_json', // Optional. A grouping namespace for items.
// })

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

export const state = () => ({})

export const mutations = {}

export const getters = {
  getPages: ($state) => {
    return $state.actions.getPages()
  },
}

export const actions = {
  getPages({ dispatch }) {
    return getAll(this.$wp.namespace('wp/v2').pages()).then(function (data) {
      data.forEach(function (item, index) {
        if (item.yoast_head_json && Object.keys(item.yoast_head_json).length) {
          data[index]['schema'] = JSON.stringify(item.yoast_head_json.schema)
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
            article_modified_time: item.yoast_head_json.article_modified_time,
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
    })
  },
  async nuxtServerInit({ dispatch }, { app }) {
    return Promise.all([
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
