import { defineNuxtPlugin } from "#app";
import { useGeneralStore } from "@/store/general";

export default defineNuxtPlugin(async (nuxtApp) => {
  const $wp = nuxtApp.$wp;
  const generalStore = useGeneralStore();

  await Promise.all([
    new Promise((resolve) => {
      $wp.menuLocations().then(function (data) {
        filterData(data);
        generalStore.init({ menu_locations: data });
        resolve();
      });
    }),
    new Promise((resolve) => {
      $wp.menus().then(function (data) {
        var promisesDynamicArray = [];
        data.forEach((single_menu) => {
          promisesDynamicArray.push(
            new Promise((resolve_child) => {
              $wp
                .menus()
                .id(`${single_menu.term_id}`)
                .get()
                .then(function (data) {
                  filterData(data);
                  if (data && typeof data !== "undefined") {
                    generalStore.menuInit({ menu: data });
                  }
                  resolve_child();
                });
            })
          );
        });
        Promise.allSettled(promisesDynamicArray).then(() => {
          resolve();
        });
      });
    }),
    new Promise((resolve) => {
      $wp.acf().then(function (data) {
        generalStore.init({ options: data });
        resolve();
      });
    }),
    new Promise((resolve) => {
      getPosts().then(function (posts){
        generalStore.postsInit(posts);
        resolve()
      })
    }),
  ]);
  
  function getAll(request) {
    return request.then((response) => {
      if (!response._paging || !response._paging.next) {
        return response;
      }
      return Promise.all([response, getAll(response._paging.next)]).then(
        (responses) => {
          return [].concat(...responses);
        }
      );
    });
  }
  
  async function getPosts(url) {
    return getAll($wp.posts()).then(function (data) {
      data.forEach((item,index) => {
        if (
          item.yoast_head_json &&
          Object.keys(item.yoast_head_json).length
        ) {
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
        if (item.content && item.content.rendered) {
          let tmp = item.content.rendered
          item.content.rendered = tmp.replace(/srcset="[\s\S]*?"/, '')
        }
      });
      return data;
    });
  }
});

