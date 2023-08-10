<template>
    <div>
      <div class="w-4/5 mx-auto container pt-8">
        <KeepAlive>
          <BlogTimeline :postPageCount="pagesCount" :isFetching="pending || error" :prevLink="lastPageSlug" :showAll="true" />
        </KeepAlive>
      </div>
  
      <!-- FOR CRAWLER -->
      <nuxt-link :to="'/news/all/'" class="hidden"></nuxt-link>
      <!-- /FOR CRAWLER -->
  
      <ScrollToTopBtn :mobileVisible="true" />
    </div>
  </template>
  
  <script setup>
  import ScrollToTopBtn from '@/components/scroll-to-top.vue'
  
  
  const pagesCount = useState('pagesCount',() => 1 )
  const currentPage = useState('currentPage',() => 1 )
  const lastPageSlug = useState('lastPageSlug',()=>'')
  const route = useRoute()
  const routePaging = computed(()=>{
    return route.query.p
  })
  
  definePageMeta({
      keepalive: true
  })
  
  const { pending, data: pageData, error } = await useAsyncData(`news-${pagesCount.value ? parseInt(routePaging.value) : 1}`,async (app) => {
      return await app.$wp
        .namespace('wp/v2')
        .posts()
        .perPage(10)
        .page(routePaging.value ? parseInt(routePaging.value) : 1)
        .then(async function (data) {
          pagesCount.value = data._paging.totalPages
          if (currentPage.value < routePaging.value) {
            currentPage.value = routePaging.value
          }
          data.forEach(function (item, index) {
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
          })
          return data
        })
  
      },{
        watch: [routePaging],
      });
  
    onBeforeRouteLeave(to => {
      if (to.params.slug && to.fullPath.startsWith('/news/')) {
        lastPageSlug.value = to.params.slug[0]
      }else{
        lastPageSlug.value = ''
      }
    })
  
    const headData = generateHead(pageData.value)
    useHead(headData)
  
    function generateHead(data) {
      let tags = {
        script: [],
        meta: [],
        link: [],
        __dangerouslyDisableSanitizers: ['script'],
      }
  
      if (data) {
        if (data.schema) {
          tags.script.push({
            vmid: 'ldjson-schema',
            type: 'application/ld+json',
            innerHTML: data.schema,
          })
        }
  
        if (data.schema_basic) {
          tags.title = data.schema_basic.title
  
          tags.meta.push({
            hid: 'description',
            property: 'description',
            content: data.schema_basic.description,
          })
  
          tags.meta.push({
            hid: 'robots',
            name: 'robots',
            content: new Array(
              data.schema_basic.robots.index,
              data.schema_basic.robots.follow,
              data.schema_basic.robots['max-snippet'],
              data.schema_basic.robots['max-image-preview'],
              data.schema_basic.robots['max-video-preview']
            ).join(', '),
          })
  
          tags.meta.push({
            hid: 'og_locale',
            property: 'og_locale',
            content: data.schema_basic.og_locale,
          })
  
          tags.meta.push({
            hid: 'og_type',
            property: 'og_type',
            content: data.schema_basic.og_type,
          })
  
          tags.meta.push({
            hid: 'og_title',
            property: 'og_title',
            content: data.schema_basic.og_title,
          })
  
          tags.meta.push({
            hid: 'og_description',
            property: 'og_description',
            content: data.schema_basic.og_description,
          })
  
          tags.meta.push({
            hid: 'og_url',
            property: 'og_url',
            content: data.schema_basic.og_url,
          })
  
          tags.meta.push({
            hid: 'og_site_name',
            property: 'og_site_name',
            content: data.schema_basic.og_site_name,
          })
  
          tags.meta.push({
            hid: 'article_modified_time',
            property: 'article_modified_time',
            content: data.schema_basic.article_modified_time,
          })
  
          tags.meta.push({
            hid: 'twitter_card',
            name: 'twitter_card',
            content: data.schema_basic.twitter_card,
          })
  
          if (data.schema_basic.twitter_misc) {
            let $i = 1
            for (const [key, value] of Object.entries(
              data.schema_basic.twitter_misc
            )) {
              tags.meta.push({
                hid: 'twitter:label' + $i,
                name: 'twitter:label' + $i,
                content: key,
              })
              tags.meta.push({
                hid: 'twitter:data' + $i,
                name: 'twitter:data' + $i,
                content: value,
              })
              $i++
            }
          }
  
          tags.meta.push({
            hid: 'og:url',
            property: 'og:url',
            content: data.link,
          })
  
          if (data.acf.sections[0].acf_fc_layout === 'section_header') {
            tags.meta.push({
              hid: 'og:image',
              property: 'og:image',
              content: data.acf.sections[0].background.url,
            })
          }
        }
      }
  
      return tags
    }
  </script>
  
  <style></style>
  