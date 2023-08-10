<template>
    <div v-if="pageData">
      <div>
        <div
          v-if="
            pageData.acf && pageData.acf.sections && pageData.acf.sections.length
          "
        >
            <StaticBanner
              v-if="pageData.acf.sections[0].acf_fc_layout === 'section_header'"
              :title="pageData.acf.sections[0].title"
              :background-url="pageData.acf.sections[0].background.url"
            />
        </div>
      </div>
  
        <Breadcrumb :data="pageData.breadcrumb" />
  
      <div class="tablet:w-4/5 mx-auto py-10 tablet:container">
        <div
          v-if="pageData.acf && Object.values(pageData.acf).length"
          class="flex"
          :class="
            pageData.acf.sidebar_right && pageData.acf.sidebar
              ? 'flex-col tablet:flex-row'
              : 'flex-col-reverse tablet:flex-row-reverse'
          "
        >
          <div
            class="w-4/5 tablet:w-full mx-auto mb-10"
            :class="pageData.acf.sidebar ? 'tablet:w-2/3 has-sidebar' : ''"
          >
            <div v-for="(component, index) in pageData.acf.sections" :key="index">
              <div v-if="component.acf_fc_layout">
                <component
                  v-if="
                    component.acf_fc_layout === 'section_tabs' &&
                    pageData.acf.section_table
                  "
                  :is="resolveCompName(component.acf_fc_layout)"
                  :data="
                    Object.assign(component, {
                      table: pageData.acf.section_table,
                    })
                  "
                ></component>
                <component
                  v-else-if="component.acf_fc_layout !== 'section_header'"
                  :is="resolveCompName(component.acf_fc_layout)"
                  :data="component"
                ></component>
              </div>
            </div>
          </div>
          <div
            v-if="pageData.acf.sidebar"
            class="tablet:w-1/3 sticky top-0 tablet:static"
            :class="pageData.acf.sidebar_right ? 'tablet:ml-5' : 'tablet:mr-5'"
          >
            <div
              class="tablet:top-8"
              :class="pageData.acf.sidebar_right ? 'desktop:sticky' : 'sticky'"
            >
              <div
                v-for="(component, index) in pageData.acf.sidebar"
                :key="index"
                class="mb-2"
              >
                <div v-if="component.acf_fc_layout">
                  <component
                    :key="index"
                    :is="resolveCompName(component.acf_fc_layout)"
                    :data="component"
                  ></component>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          v-else-if="pageData.content"
          v-html="contentFiltered"
          class="img-no-click text-page mb-10 w-4/5 mx-auto tablet:container tablet:px-0"
        ></div>
        <div v-else class="flex flex-col items-center">
          <span class="text-9xl">404</span><span>Strona nie znaleziona</span>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { isSamePath, withoutTrailingSlash } from 'ufo'
  import HtmlFilter from 'html-filter'
  
    const route = useRoute()

    const { data: pageData } = await useAsyncData( (app) => {
        const config = useRuntimeConfig()
        let slugs = withoutTrailingSlash(route.fullPath).split('/')
      
      return app.$wp
        .pages()
        .slug(slugs[slugs.length - 1])
        .then(async function (data) {
          data.forEach(function (item, index) {
            let pageFullPath = item.link
              .replace(config.public.API_URL, '')
              .replace(config.public.DOMAIN_URL, '')
            if (isSamePath(pageFullPath, route.path)) {
              data = item
            }
          })
  
          if (data.yoast_head_json && Object.keys(data.yoast_head_json).length) {
            data['schema'] = JSON.stringify(data.yoast_head_json.schema)
            for (
              var i = 0;
              i < data.yoast_head_json.schema['@graph'].length;
              i++
            ) {
              if (
                data.yoast_head_json.schema['@graph'][i]['@type'] ==
                'BreadcrumbList'
              ) {
                data['breadcrumb'] = data.yoast_head_json.schema['@graph'][i]
              }
            }
            data['schema_basic'] = {
              title: data.yoast_head_json.title,
              robots: {
                index: data.yoast_head_json.robots.index,
                follow: data.yoast_head_json.robots.follow,
                'max-snippet': data.yoast_head_json.robots['max-snippet'],
                'max-image-preview':
                  data.yoast_head_json.robots['max-image-preview'],
                'max-video-preview':
                  data.yoast_head_json.robots['max-video-preview'],
              },
              og_locale: data.yoast_head_json.og_locale,
              og_type: data.yoast_head_json.og_type,
              og_title: data.yoast_head_json.og_title,
              og_description: data.yoast_head_json.og_description,
              og_url: data.yoast_head_json.og_url.replace(
                config.public.API_URL,
                'https://www.is-wireless.com'
              ),
              og_site_name: data.yoast_head_json.og_site_name,
              twitter_card: data.yoast_head_json.twitter_card,
            }
            if (data.yoast_head_json.description) {
              data['schema_basic']['description'] =
                data.yoast_head_json.description
            }
            if (data.yoast_head_json.twitter_misc) {
              data['schema_basic']['twitter_misc'] =
                data.yoast_head_json.twitter_misc
            }
            if (data.yoast_head_json.article_modified_time) {
              data['schema_basic']['article_modified_time'] =
                data.yoast_head_json.article_modified_time
            }
          }
          if (
            data.acf &&
            data.acf.sections &&
            Object.keys(data.acf.sections).length
          ) {
              // if(data.acf.sections.some(section => section.acf_fc_layout == 'section_block_subpages')){
              //   await indexStore.getPages()
              // }
  
            data.content = ''
          }
          app.$filterData(data)
          return data
        })
    },{ lazy: true })


    const contentFiltered = computed(()=>{
        if (!pageData.content) {
          return false
        }
        const htmlFilter = new HtmlFilter()
        htmlFilter.allowedTags = {
          img: {
            src: 1,
            alt: 1,
            width: 1,
            height: 1,
            'data-orig-src': 1,
          }, // not support attr
          h1: { id: 1 }, // support id and style attr
          h2: { id: 1 }, // support id and style attr
          h3: { id: 1 }, // support id and style attr
          h4: { id: 1 }, // support id and style attr
          h5: { id: 1 }, // support id and style attr
          h6: { id: 1 }, // support id and style attr
          h7: { id: 1 }, // support id and style attr
          p: { id: 1 }, // support id and style attr
          iframe: { id: 1 }, // support id and style attr
          br: null,
          i: null,
          span: null,
          strong: null,
          em: null,
          a: { href: 1, rel: 1, 'data-rel': 1, 'aria-label': 1 },
          div: null,
        }
        let filteredContent = htmlFilter.filter(pageData.content.rendered)
        if (filteredContent.includes('data-orig-src')) {
          filteredContent = filteredContent.replace(/ src=/g, ' data-test=')
          filteredContent = filteredContent.replace(
            / data-orig-/g,
            ' ref="imageFix" '
          )
        }
        return filteredContent
      })
    
    const headData = generateHead(pageData.value)
    useHead(headData)

    function generateHead(data){
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
          if (data.schema_basic.title) {
            tags.title = data.schema_basic.title
          }
          if (data.schema_basic.description) {
            tags.meta.push({
              hid: 'description',
              property: 'description',
              content: data.schema_basic.description,
            })
          }
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
          if (data.schema_basic.article_modified_time) {
            tags.meta.push({
              hid: 'article_modified_time',
              property: 'article_modified_time',
              content: data.schema_basic.article_modified_time,
            })
          }
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
            content: data.schema_basic.og_url,
          })
          if (
            data.acf &&
            data.acf.sections &&
            data.acf.sections[0].acf_fc_layout === 'section_header'
          ) {
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
  
  <style lang="postcss" scoped>
  .text-page :deep( h1 ),
  h2,
  h3,
  h4,
  h5,
  h6,
  li,
  b,
  u,
  div,
  code {
    @apply text-gray-dark font-lato;
  }
  
  .text-page :deep( h1 ){
    @apply text-4xl tablet:text-[50px] mb-5;
  }
  
  .text-page :deep( h2 ){
    @apply text-3xl tablet:text-4xl mb-5;
  }
  .text-page :deep( h3 ){
    @apply text-2xl tablet:text-3xl mb-5;
  }
  .text-page :deep( h4 ){
    @apply text-xl tablet:text-2xl mb-5;
  }
  .text-page :deep( h5 ){
    @apply text-lg tablet:text-xl mb-5;
  }
  .text-page :deep( h6 ){
    @apply text-base tablet:text-lg mb-5;
  }
  .text-page :deep( p ){
    @apply text-base inline-block mb-5 w-full;
  }
  
  .text-page :deep( li ){
    @apply text-gray-dark;
  }
  
  .text-page :deep( ol li ){
    @apply list-disc ml-5;
  }
  
  .text-page :deep( ul ){
    @apply mb-5;
  }
  
  .text-page :deep( hr ){
    @apply block mx-[10%] mt-5 mb-10;
  }
  
  .text-page :deep( code ){
    @apply block whitespace-pre-wrap max-w-2xl bg-gray-light p-2.5 tablet:p-5 rounded-md mb-10;
  }
  
  .text-page :deep( img ){
    @apply w-full h-auto;
  }
  
  .text-page :deep( em ),
  .text-page :deep( .wp-caption-text ){
    font-weight: 400;
    text-align: center;
    font-style: italic;
    color: #768894;
    font-size: 16px;
  }
  </style>
  