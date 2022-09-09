<template>
  <div v-if="pageData">
    <div>
      <div v-if="pageData.acf">
        <LazyHydrate never>
          <StaticBanner
            v-if="pageData.acf.sections[0].acf_fc_layout === 'section_header'"
            :title="pageData.acf.sections[0].title"
            :background-url="pageData.acf.sections[0].background.url"
          />
        </LazyHydrate>
      </div>
    </div>

    <LazyHydrate when-visible>
      <Breadcrumb :data="pageData.breadcrumb" />
    </LazyHydrate>

    <div class="tablet:w-4/5 mx-auto py-10">
      <div
        v-if="pageData.acf"
        class="flex"
        :class="
          pageData.acf.sidebar_right && pageData.acf.sidebar
            ? 'flex-col tablet:flex-row'
            : 'flex-col-reverse tablet:flex-row-reverse'
        "
      >
        <div
          class="w-4/5 tablet:w-full mx-auto mb-10"
          :class="pageData.acf.sidebar ? 'tablet:w-2/3 has-sidebar' : 'w-full'"
        >
          <div v-for="(component, index) in pageData.acf.sections" :key="index">
            <div v-if="component.acf_fc_layout">
              <component
                v-if="
                  component.acf_fc_layout === 'section_tabs' &&
                  pageData.acf.section_table
                "
                :is="component.acf_fc_layout"
                :data="
                  Object.assign(component, {
                    table: pageData.acf.section_table,
                  })
                "
              ></component>
              <component
                v-else-if="component.acf_fc_layout !== 'section_header'"
                :is="component.acf_fc_layout"
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
          <div class="sticky tablet:top-8">
            <div
              v-for="(component, index) in pageData.acf.sidebar"
              :key="index"
              class="mb-2"
            >
              <div v-if="component.acf_fc_layout">
                <component
                  :key="index"
                  :is="component.acf_fc_layout"
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
        class="img-no-click text-page mb-10 px-[10%] tablet:px-0"
      ></div>
    </div>
  </div>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration'
import { isSamePath } from 'ufo'

export default {
  components: {
    LazyHydrate,
    SectionHeader: () => import('~/components/section-header.vue'),
    Breadcrumb: () => import('~/components/breadcrumb.vue'),
    section_content: () => import('~/components/content-static.vue'),
    section_two_column: () => import('~/components/content-section.vue'),
    section_two_column_bg: () => import('~/components/content-section-bg.vue'),
    section_list_links_alternative: () =>
      import('~/components/more-solutions.vue'),
    section_tabs: () => import('~/components/tabs.vue'),
    section_links_list: () => import('~/components/filters.vue'),
    section_tiles: () => import('~/components/filterable-tiles.vue'),
    section_grid_links: () => import('~/components/offer-tiles.vue'),
    section_list_links: () => import('~/components/offer-menu.vue'),
    section_cta_background_color: () => import('~/components/cta-funds.vue'),
    sidebar_blocks_links: () => import('~/components/menu-left.vue'),
    sidebar_blocks_list: () => import('~/components/menu-right.vue'),
    sidebar_cta: () => import('~/components/cta-block.vue'),
    section_person: () => import('~/components/person.vue'),
    section_cta_basic: () => import('~/components/cta-basic.vue'),
    section_map: () => import('~/components/map.vue'),
    section_block_subpages: () => import('~/components/project-tiles.vue'),
    section_table: () => import('~/components/table.vue'),
    section_content_columns_center_image: () =>
      import('~/components/content-section-center.vue'),
    section_person_list: () => import('~/components/rnd-team.vue'),
  },
  async asyncData({ route, payload, store, $config }) {
    return {
      pageData: {
        id: 10092,
        date: '2021-08-31T14:30:58',
        date_gmt: '2021-08-31T12:30:58',
        guid: { rendered: 'https://api.is-wireless.com/?page_id=10092' },
        modified: '2022-09-09T11:45:59',
        modified_gmt: '2022-09-09T09:45:59',
        slug: 'public-funds',
        status: 'publish',
        type: 'page',
        link: 'https://api.is-wireless.com/about-us/public-funds/',
        title: { rendered: 'Public funds' },
        excerpt: {},
        author: 61,
        parent: 1313,
        comment_status: 'closed',
        ping_status: 'closed',
        acf: {
          sections: [
            {
              acf_fc_layout: 'section_content',
              title: 'Public Funds',
              content:
                '<p class="title-heading-left fusion-responsive-typography-calculated" data-fontsize="20" data-lineheight="30px"><strong>ISN Sp. z o.o. realizuje projekt dofinansowany z Funduszy Europejskich</strong></p>\n<h3 class="fusion-responsive-typography-calculated" data-fontsize="30" data-lineheight="39px">Opracowanie i implementacja funkcjonalności radiowej sieci dostępowej dla przyszłych mobilnych systemów 5G opartych o architekturę bezkomórkową</h3>\n<p><strong>Beneficjent:</strong> ISN Sp. z o.o.<br />\n<strong>Wartość projektu:</strong> 13 898 562,64 PLN<br />\n<strong>Dofinansowanie projektu z UE:</strong> 10 645 281,86 PLN<br />\n<strong>Okres realizacji:</strong> 2018 – 2021</p>\n<p><a href="https://api.is-wireless.com/wp-content/uploads/2022/05/ncbr_logo_z_czerwonym_napisem_q.png"><img class="alignnone size-medium wp-image-10774" src="https://api.is-wireless.com/wp-content/uploads/2022/05/ncbr_logo_z_czerwonym_napisem_q-300x105.png" alt="" width="300" height="105" srcset="https://api.is-wireless.com/wp-content/uploads/2022/05/ncbr_logo_z_czerwonym_napisem_q-200x70.png 200w, https://api.is-wireless.com/wp-content/uploads/2022/05/ncbr_logo_z_czerwonym_napisem_q-300x105.png 300w, https://api.is-wireless.com/wp-content/uploads/2022/05/ncbr_logo_z_czerwonym_napisem_q-400x141.png 400w, https://api.is-wireless.com/wp-content/uploads/2022/05/ncbr_logo_z_czerwonym_napisem_q-600x211.png 600w, https://api.is-wireless.com/wp-content/uploads/2022/05/ncbr_logo_z_czerwonym_napisem_q-768x270.png 768w, https://api.is-wireless.com/wp-content/uploads/2022/05/ncbr_logo_z_czerwonym_napisem_q-800x281.png 800w, https://api.is-wireless.com/wp-content/uploads/2022/05/ncbr_logo_z_czerwonym_napisem_q-1024x360.png 1024w, https://api.is-wireless.com/wp-content/uploads/2022/05/ncbr_logo_z_czerwonym_napisem_q-1200x422.png 1200w, https://api.is-wireless.com/wp-content/uploads/2022/05/ncbr_logo_z_czerwonym_napisem_q-1536x540.png 1536w" sizes="(max-width: 300px) 100vw, 300px" /></a><a href="https://api.is-wireless.com/wp-content/uploads/2019/07/logo-kolor.png"><img class="alignnone size-medium wp-image-7896" src="https://api.is-wireless.com/wp-content/uploads/2019/07/logo-kolor-300x102.png" alt="" width="300" height="102" srcset="https://api.is-wireless.com/wp-content/uploads/2019/07/logo-kolor-200x68.png 200w, https://api.is-wireless.com/wp-content/uploads/2019/07/logo-kolor-300x102.png 300w, https://api.is-wireless.com/wp-content/uploads/2019/07/logo-kolor-400x135.png 400w, https://api.is-wireless.com/wp-content/uploads/2019/07/logo-kolor-600x203.png 600w, https://api.is-wireless.com/wp-content/uploads/2019/07/logo-kolor-768x260.png 768w, https://api.is-wireless.com/wp-content/uploads/2019/07/logo-kolor-800x271.png 800w, https://api.is-wireless.com/wp-content/uploads/2019/07/logo-kolor-1024x347.png 1024w, https://api.is-wireless.com/wp-content/uploads/2019/07/logo-kolor-1200x406.png 1200w" sizes="(max-width: 300px) 100vw, 300px" /></a></p>\n<p>Projekt współfinansowany przez Narodowe Centrum Badań i Rozwoju w ramach Programu Operacyjnego Inteligentny rozwój</p>\n<p><img class="alignnone wp-image-10775 size-full" src="https://api.is-wireless.com/wp-content/uploads/2022/05/is-wireless-public-funding.jpg" alt="" width="1920" height="150" srcset="https://api.is-wireless.com/wp-content/uploads/2022/05/is-wireless-public-funding-200x16.jpg 200w, https://api.is-wireless.com/wp-content/uploads/2022/05/is-wireless-public-funding-300x23.jpg 300w, https://api.is-wireless.com/wp-content/uploads/2022/05/is-wireless-public-funding-400x31.jpg 400w, https://api.is-wireless.com/wp-content/uploads/2022/05/is-wireless-public-funding-600x47.jpg 600w, https://api.is-wireless.com/wp-content/uploads/2022/05/is-wireless-public-funding-768x60.jpg 768w, https://api.is-wireless.com/wp-content/uploads/2022/05/is-wireless-public-funding-800x63.jpg 800w, https://api.is-wireless.com/wp-content/uploads/2022/05/is-wireless-public-funding-1024x80.jpg 1024w, https://api.is-wireless.com/wp-content/uploads/2022/05/is-wireless-public-funding-1200x94.jpg 1200w, https://api.is-wireless.com/wp-content/uploads/2022/05/is-wireless-public-funding-1536x120.jpg 1536w, https://api.is-wireless.com/wp-content/uploads/2022/05/is-wireless-public-funding.jpg 1920w" sizes="(max-width: 1920px) 100vw, 1920px" /></p>\n<p>&nbsp;</p>\n',
              image: {},
            },
            {
              acf_fc_layout: 'section_content',
              content:
                '<p class="title-heading-left fusion-responsive-typography-calculated" data-fontsize="20" data-lineheight="30px">ISN Sp. z o.o. realizuje projekt dofinansowany z Funduszy Europejskich</p>\n<h3 class="fusion-responsive-typography-calculated" data-fontsize="30" data-lineheight="39px">Szerokopasmowy Rejestrator Radiokomunikacyjny</h3>\n<p><strong>Beneficjent:</strong> ISN Sp. z o.o.<br />\n<strong>Wartość projektu:</strong> 2 616 250 PLN<br />\n<strong>Dofinansowanie projektu z UE:</strong> 1 946 250 PLN<br />\n<strong>Okres realizacji:</strong> 2018 – 2022</p>\n<p><a href="https://api.is-wireless.com/wp-content/uploads/2022/05/ncbr_logo_z_czerwonym_napisem_q.png"><img class="alignnone size-medium wp-image-10774" src="https://api.is-wireless.com/wp-content/uploads/2022/05/ncbr_logo_z_czerwonym_napisem_q-300x105.png" alt="" width="300" height="105" srcset="https://api.is-wireless.com/wp-content/uploads/2022/05/ncbr_logo_z_czerwonym_napisem_q-200x70.png 200w, https://api.is-wireless.com/wp-content/uploads/2022/05/ncbr_logo_z_czerwonym_napisem_q-300x105.png 300w, https://api.is-wireless.com/wp-content/uploads/2022/05/ncbr_logo_z_czerwonym_napisem_q-400x141.png 400w, https://api.is-wireless.com/wp-content/uploads/2022/05/ncbr_logo_z_czerwonym_napisem_q-600x211.png 600w, https://api.is-wireless.com/wp-content/uploads/2022/05/ncbr_logo_z_czerwonym_napisem_q-768x270.png 768w, https://api.is-wireless.com/wp-content/uploads/2022/05/ncbr_logo_z_czerwonym_napisem_q-800x281.png 800w, https://api.is-wireless.com/wp-content/uploads/2022/05/ncbr_logo_z_czerwonym_napisem_q-1024x360.png 1024w, https://api.is-wireless.com/wp-content/uploads/2022/05/ncbr_logo_z_czerwonym_napisem_q-1200x422.png 1200w, https://api.is-wireless.com/wp-content/uploads/2022/05/ncbr_logo_z_czerwonym_napisem_q-1536x540.png 1536w" sizes="(max-width: 300px) 100vw, 300px" /></a><a href="https://api.is-wireless.com/wp-content/uploads/2019/07/logo-kolor.png"><img class="alignnone size-medium wp-image-7896" src="https://api.is-wireless.com/wp-content/uploads/2019/07/logo-kolor-300x102.png" alt="" width="300" height="102" srcset="https://api.is-wireless.com/wp-content/uploads/2019/07/logo-kolor-200x68.png 200w, https://api.is-wireless.com/wp-content/uploads/2019/07/logo-kolor-300x102.png 300w, https://api.is-wireless.com/wp-content/uploads/2019/07/logo-kolor-400x135.png 400w, https://api.is-wireless.com/wp-content/uploads/2019/07/logo-kolor-600x203.png 600w, https://api.is-wireless.com/wp-content/uploads/2019/07/logo-kolor-768x260.png 768w, https://api.is-wireless.com/wp-content/uploads/2019/07/logo-kolor-800x271.png 800w, https://api.is-wireless.com/wp-content/uploads/2019/07/logo-kolor-1024x347.png 1024w, https://api.is-wireless.com/wp-content/uploads/2019/07/logo-kolor-1200x406.png 1200w" sizes="(max-width: 300px) 100vw, 300px" /></a></p>\n<p>Projekt współfinansowany przez Narodowe Centrum Badań i Rozwoju w ramach Programu na rzecz Obronności i Bezpieczeństwa Państwa.</p>\n<p><img class="alignnone wp-image-10775 size-full" src="https://api.is-wireless.com/wp-content/uploads/2022/05/is-wireless-public-funding.jpg" alt="" width="1920" height="150" srcset="https://api.is-wireless.com/wp-content/uploads/2022/05/is-wireless-public-funding-200x16.jpg 200w, https://api.is-wireless.com/wp-content/uploads/2022/05/is-wireless-public-funding-300x23.jpg 300w, https://api.is-wireless.com/wp-content/uploads/2022/05/is-wireless-public-funding-400x31.jpg 400w, https://api.is-wireless.com/wp-content/uploads/2022/05/is-wireless-public-funding-600x47.jpg 600w, https://api.is-wireless.com/wp-content/uploads/2022/05/is-wireless-public-funding-768x60.jpg 768w, https://api.is-wireless.com/wp-content/uploads/2022/05/is-wireless-public-funding-800x63.jpg 800w, https://api.is-wireless.com/wp-content/uploads/2022/05/is-wireless-public-funding-1024x80.jpg 1024w, https://api.is-wireless.com/wp-content/uploads/2022/05/is-wireless-public-funding-1200x94.jpg 1200w, https://api.is-wireless.com/wp-content/uploads/2022/05/is-wireless-public-funding-1536x120.jpg 1536w, https://api.is-wireless.com/wp-content/uploads/2022/05/is-wireless-public-funding.jpg 1920w" sizes="(max-width: 1920px) 100vw, 1920px" /></p>\n<p>&nbsp;</p>\n',
              image: {},
            },
            {
              acf_fc_layout: 'section_content',
              content:
                '<p>ISC Sp. z o.o. realizuje projekt dofinansowany z Funduszy Europejskich</p>\n<h3 class="fusion-responsive-typography-calculated" data-fontsize="30" data-lineheight="39px">Architektura zwirtualizowanej sieci szkieletowej</h3>\n<p><strong>Beneficjent:</strong> ISC Sp. z o.o.<br />\n<strong>Wartość projektu:</strong> 5 000 000 PLN<br />\n<strong>Dofinansowanie projektu z UE:</strong> 3 400 000 PLN<br />\n<strong>Okres realizacji:</strong> 2018 – 2021</p>\n<p><a href="https://api.is-wireless.com/wp-content/uploads/2022/05/ncbr_logo_z_czerwonym_napisem_q.png"><img class="alignnone size-medium wp-image-10774" src="https://api.is-wireless.com/wp-content/uploads/2022/05/ncbr_logo_z_czerwonym_napisem_q-300x105.png" alt="" width="300" height="105" srcset="https://api.is-wireless.com/wp-content/uploads/2022/05/ncbr_logo_z_czerwonym_napisem_q-200x70.png 200w, https://api.is-wireless.com/wp-content/uploads/2022/05/ncbr_logo_z_czerwonym_napisem_q-300x105.png 300w, https://api.is-wireless.com/wp-content/uploads/2022/05/ncbr_logo_z_czerwonym_napisem_q-400x141.png 400w, https://api.is-wireless.com/wp-content/uploads/2022/05/ncbr_logo_z_czerwonym_napisem_q-600x211.png 600w, https://api.is-wireless.com/wp-content/uploads/2022/05/ncbr_logo_z_czerwonym_napisem_q-768x270.png 768w, https://api.is-wireless.com/wp-content/uploads/2022/05/ncbr_logo_z_czerwonym_napisem_q-800x281.png 800w, https://api.is-wireless.com/wp-content/uploads/2022/05/ncbr_logo_z_czerwonym_napisem_q-1024x360.png 1024w, https://api.is-wireless.com/wp-content/uploads/2022/05/ncbr_logo_z_czerwonym_napisem_q-1200x422.png 1200w, https://api.is-wireless.com/wp-content/uploads/2022/05/ncbr_logo_z_czerwonym_napisem_q-1536x540.png 1536w" sizes="(max-width: 300px) 100vw, 300px" /></a><a href="https://api.is-wireless.com/wp-content/uploads/2019/07/logo-kolor.png"><img class="alignnone size-medium wp-image-7896" src="https://api.is-wireless.com/wp-content/uploads/2019/07/logo-kolor-300x102.png" alt="" width="300" height="102" srcset="https://api.is-wireless.com/wp-content/uploads/2019/07/logo-kolor-200x68.png 200w, https://api.is-wireless.com/wp-content/uploads/2019/07/logo-kolor-300x102.png 300w, https://api.is-wireless.com/wp-content/uploads/2019/07/logo-kolor-400x135.png 400w, https://api.is-wireless.com/wp-content/uploads/2019/07/logo-kolor-600x203.png 600w, https://api.is-wireless.com/wp-content/uploads/2019/07/logo-kolor-768x260.png 768w, https://api.is-wireless.com/wp-content/uploads/2019/07/logo-kolor-800x271.png 800w, https://api.is-wireless.com/wp-content/uploads/2019/07/logo-kolor-1024x347.png 1024w, https://api.is-wireless.com/wp-content/uploads/2019/07/logo-kolor-1200x406.png 1200w" sizes="(max-width: 300px) 100vw, 300px" /></a></p>\n<p>Projekt współfinansowany przez Narodowe Centrum Badań i Rozwoju w ramach Programu Operacyjnego Inteligentny rozwój.</p>\n<p><img class="alignnone wp-image-10775 size-full" src="https://api.is-wireless.com/wp-content/uploads/2022/05/is-wireless-public-funding.jpg" alt="" width="1920" height="150" srcset="https://api.is-wireless.com/wp-content/uploads/2022/05/is-wireless-public-funding-200x16.jpg 200w, https://api.is-wireless.com/wp-content/uploads/2022/05/is-wireless-public-funding-300x23.jpg 300w, https://api.is-wireless.com/wp-content/uploads/2022/05/is-wireless-public-funding-400x31.jpg 400w, https://api.is-wireless.com/wp-content/uploads/2022/05/is-wireless-public-funding-600x47.jpg 600w, https://api.is-wireless.com/wp-content/uploads/2022/05/is-wireless-public-funding-768x60.jpg 768w, https://api.is-wireless.com/wp-content/uploads/2022/05/is-wireless-public-funding-800x63.jpg 800w, https://api.is-wireless.com/wp-content/uploads/2022/05/is-wireless-public-funding-1024x80.jpg 1024w, https://api.is-wireless.com/wp-content/uploads/2022/05/is-wireless-public-funding-1200x94.jpg 1200w, https://api.is-wireless.com/wp-content/uploads/2022/05/is-wireless-public-funding-1536x120.jpg 1536w, https://api.is-wireless.com/wp-content/uploads/2022/05/is-wireless-public-funding.jpg 1920w" sizes="(max-width: 1920px) 100vw, 1920px" /></p>\n<p>&nbsp;</p>\n',
              image: {},
            },
          ],
        },
        schema:
          '{"@context":"https://schema.org","@graph":[{"@type":"WebPage","@id":"https://api.is-wireless.com/about-us/public-funds/","url":"https://api.is-wireless.com/about-us/public-funds/","name":"Public funds - IS-Wireless","isPartOf":{"@id":"https://api.is-wireless.com/#website"},"datePublished":"2021-08-31T12:30:58+00:00","dateModified":"2022-09-09T09:45:59+00:00","breadcrumb":{"@id":"https://api.is-wireless.com/about-us/public-funds/#breadcrumb"},"inLanguage":"en-US","potentialAction":[{"@type":"ReadAction","target":["https://api.is-wireless.com/about-us/public-funds/"]}]},{"@type":"BreadcrumbList","@id":"https://api.is-wireless.com/about-us/public-funds/#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://api.is-wireless.com/"},{"@type":"ListItem","position":2,"name":"About Us","item":"https://api.is-wireless.com/about-us/"},{"@type":"ListItem","position":3,"name":"Public funds"}]},{"@type":"WebSite","@id":"https://api.is-wireless.com/#website","url":"https://api.is-wireless.com/","name":"IS-Wireless","description":"IS-Wireless is an advanced wireless communications company. We are developing protocols, simulators and IP algorithms. We also deliver 4G and 5G courses.","publisher":{"@id":"https://api.is-wireless.com/#organization"},"potentialAction":[{"@type":"SearchAction","target":{"@type":"EntryPoint","urlTemplate":"https://api.is-wireless.com/?s={search_term_string}"},"query-input":"required name=search_term_string"}],"inLanguage":"en-US"},{"@type":"Organization","@id":"https://api.is-wireless.com/#organization","name":"IS-Wireless","url":"https://api.is-wireless.com/","sameAs":["https://www.linkedin.com/company/is-wireless/"],"logo":{"@type":"ImageObject","inLanguage":"en-US","@id":"https://api.is-wireless.com/#/schema/logo/image/","url":"https://api.is-wireless.com/wp-content/uploads/2019/06/logo-ISW.svg","contentUrl":"https://api.is-wireless.com/wp-content/uploads/2019/06/logo-ISW.svg","caption":"IS-Wireless"},"image":{"@id":"https://api.is-wireless.com/#/schema/logo/image/"}}]}',
        breadcrumb: {
          '@type': 'BreadcrumbList',
          '@id':
            'https://api.is-wireless.com/about-us/public-funds/#breadcrumb',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: 'https://api.is-wireless.com/',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'About Us',
              item: 'https://api.is-wireless.com/about-us/',
            },
            { '@type': 'ListItem', position: 3, name: 'Public funds' },
          ],
        },
        schema_basic: {
          title: 'Public funds - IS-Wireless',
          robots: {
            index: 'index',
            follow: 'follow',
            'max-snippet': 'max-snippet:-1',
            'max-image-preview': 'max-image-preview:large',
            'max-video-preview': 'max-video-preview:-1',
          },
          canonical: 'https://api.is-wireless.com/about-us/public-funds/',
          og_locale: 'en_US',
          og_type: 'article',
          og_title: 'Public funds - IS-Wireless',
          og_url: 'https://api.is-wireless.com/about-us/public-funds/',
          og_site_name: 'IS-Wireless',
          article_modified_time: '2022-09-09T09:45:59+00:00',
          twitter_card: 'summary',
          twitter_misc: { 'Est. reading time': '10 minutes' },
        },
      },
    }
  },
  head() {
    let tags = {
      script: [],
      meta: [],
      link: [],
      __dangerouslyDisableSanitizers: ['script'],
    }
    if (this.pageData) {
      if (this.pageData.schema) {
        tags.script.push({
          vmid: 'ldjson-schema',
          type: 'application/ld+json',
          innerHTML: this.pageData.schema,
        })
      }

      if (this.pageData.schema_basic) {
        if (this.pageData.schema_basic.title) {
          tags.title = this.pageData.schema_basic.title
        }

        if (this.pageData.schema_basic.description) {
          tags.meta.push({
            hid: 'description',
            property: 'description',
            content: this.pageData.schema_basic.description,
          })
        }

        tags.meta.push({
          hid: 'robots',
          name: 'robots',
          content: new Array(
            this.pageData.schema_basic.robots.index,
            this.pageData.schema_basic.robots.follow,
            this.pageData.schema_basic.robots['max-snippet'],
            this.pageData.schema_basic.robots['max-image-preview'],
            this.pageData.schema_basic.robots['max-video-preview']
          ).join(', '),
        })

        tags.link.push({
          hid: 'canonical',
          rel: 'canonical',
          href: this.pageData.schema_basic.canonical,
        })

        tags.meta.push({
          hid: 'og_locale',
          property: 'og_locale',
          content: this.pageData.schema_basic.og_locale,
        })

        tags.meta.push({
          hid: 'og_type',
          property: 'og_type',
          content: this.pageData.schema_basic.og_type,
        })

        tags.meta.push({
          hid: 'og_title',
          property: 'og_title',
          content: this.pageData.schema_basic.og_title,
        })

        tags.meta.push({
          hid: 'og_description',
          property: 'og_description',
          content: this.pageData.schema_basic.og_description,
        })

        tags.meta.push({
          hid: 'og_url',
          property: 'og_url',
          content: this.pageData.schema_basic.og_url,
        })

        tags.meta.push({
          hid: 'og_site_name',
          property: 'og_site_name',
          content: this.pageData.schema_basic.og_site_name,
        })

        tags.meta.push({
          hid: 'article_modified_time',
          property: 'article_modified_time',
          content: this.pageData.schema_basic.article_modified_time,
        })

        tags.meta.push({
          hid: 'twitter_card',
          name: 'twitter_card',
          content: this.pageData.schema_basic.twitter_card,
        })

        if (this.pageData.schema_basic.twitter_misc) {
          let $i = 1
          for (const [key, value] of Object.entries(
            this.pageData.schema_basic.twitter_misc
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
          content: this.pageData.link,
        })

        if (this.pageData.acf.sections[0].acf_fc_layout === 'section_header') {
          tags.meta.push({
            hid: 'og:image',
            property: 'og:image',
            content: this.pageData.acf.sections[0].background.url,
          })
        }
      }
    }

    return tags
  },
  computed: {
    currentRouteName() {
      return this.$route.path
    },
    contentFiltered() {
      const HtmlFilter = require('html-filter')
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
      let filteredContent = htmlFilter.filter(this.pageData.content.rendered)
      if (filteredContent.includes('data-orig-src')) {
        filteredContent = filteredContent.replace(/ src=/g, ' data-test=')
        filteredContent = filteredContent.replace(
          / data-orig-/g,
          ' ref="imageFix" '
        )
      }
      return filteredContent
    },
  },
}
</script>

<style lang="postcss" scoped>
.text-page >>> h1,
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

.text-page >>> h1 {
  @apply text-4xl tablet:text-[50px] mb-5;
}

.text-page >>> h2 {
  @apply text-3xl tablet:text-4xl mb-5;
}
.text-page >>> h3 {
  @apply text-2xl tablet:text-3xl mb-5;
}
.text-page >>> h4 {
  @apply text-xl tablet:text-2xl mb-5;
}
.text-page >>> h5 {
  @apply text-lg tablet:text-xl mb-5;
}
.text-page >>> h6 {
  @apply text-base tablet:text-lg mb-5;
}
.text-page >>> p {
  @apply text-base inline-block mb-5 w-full;
}

.text-page >>> li {
  @apply text-gray-dark;
}

.text-page >>> ol li {
  @apply list-disc ml-5;
}

.text-page >>> ul {
  @apply mb-5;
}

.text-page >>> hr {
  @apply block mx-[10%] mt-5 mb-10;
}

.text-page >>> code {
  @apply block whitespace-pre-wrap max-w-2xl bg-gray-light p-2.5 tablet:p-5 rounded-md mb-10;
}

.text-page >>> img {
  @apply w-full h-auto;
}

.text-page >>> em,
.text-page >>> .wp-caption-text {
  font-weight: 400;
  text-align: center;
  font-style: italic;
  color: #768894;
  font-size: 16px;
}
</style>
