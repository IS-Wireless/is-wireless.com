import { defineStore } from 'pinia'
import { useGeneralStore } from './general'
import filterData from "~/utils/filterData";

async function getAll(request) {
  return request.then((response) => {
    console.log(response);
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

export const useIndexStore = defineStore('index',{
  state: () => ({}),

  getters: {
  },

  actions: {
    async getPages() {
      console.log('jest w storze');
      const { $wp } = useNuxtApp()
      const generalStore = useGeneralStore()
      return getAll($wp.pages()).then(function (data) {
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
          generalStore.pagesInit({pages: pageData})
        })
      })
    },
  }

})





