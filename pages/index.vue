<template>
  <div class="flex flex-col">
    <BannerVideo v-if="homepageData.sections[0] && homepageData.sections[0].banner" :data="homepageData.sections[0]" />

    <Organisations v-if="homepageData.sections[1] && homepageData.sections[1].logo" :data="homepageData.sections[1]" />

    <section_two_column_home :data="homepageData.sections[2]" :globeImg="true" />

    <ReviewsSlider
        :data="homepageData.sections[3]"
      />

    <section_two_column_bg
      :staticClass="'container mx-auto w-4/5'"
      :textClr="'text-white'"
      :parallaxActive="false"
      :data="homepageData.sections[4]"
    />

    <section_two_column_home :data="homepageData.sections[5]" :fullImg="true" />

    <section_press_slider
      :data="{
        title: 'In the media:',
        link: 'https://www.is-wireless.com/about-us/in-the-media/',
      }"
    />

    <CtaJob :data="homepageData.sections[6]" />
  </div>
</template>

<script setup>

const app = useNuxtApp()
const config = useRuntimeConfig()

const { data } = await useAsyncData('homepageData', (app) => {
  return app.$wp
    .pages()
    .id(2)
}, {
  transform(data) {
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
    if (data.acf && data.acf.section) {
      data.content = "";
    }
    app.$filterData(data);
    return data;
  }
}, {
  getCachedData(key, nuxtApp) {
    return nuxtApp.payload.data[key] || nuxtApp.static.data[key]
  }
});

const headData = generateHead(data.value)
useHead(headData);

const homepageData = computed(() => {
  if (data.value && data.value.acf) {
    return data.value.acf
  }
})


function generateHead(data) {
  let tags = {
    script: [],
    meta: [],
    link: [],
    htmlAttrs: [],
    __dangerouslyDisableSanitizers: ['script'],
  }
  tags.htmlAttrs.push({
    lang: 'en'
  })
  if (data) {
    if (data.schema) {
      tags.script.push({
        vmid: "ldjson-schema",
        type: "application/ld+json",
        innerHTML: data.schema,
      });
    }

    if (data.schema_basic) {
      tags.title = data.schema_basic.title;

      tags.meta.push({
        hid: "description",
        property: "description",
        content: data.schema_basic.description,
      });

      tags.meta.push({
        hid: "robots",
        name: "robots",
        content: new Array(
          data.schema_basic.robots.index,
          data.schema_basic.robots.follow,
          data.schema_basic.robots["max-snippet"],
          data.schema_basic.robots["max-image-preview"],
          data.schema_basic.robots["max-video-preview"]
        ).join(", "),
      });

      tags.meta.push({
        hid: "og_locale",
        property: "og_locale",
        content: data.schema_basic.og_locale,
      });

      tags.meta.push({
        hid: "og_type",
        property: "og_type",
        content: data.schema_basic.og_type,
      });

      tags.meta.push({
        hid: "og_title",
        property: "og_title",
        content: data.schema_basic.og_title,
      });

      tags.meta.push({
        hid: "og_description",
        property: "og_description",
        content: data.schema_basic.og_description,
      });

      tags.meta.push({
        hid: "og_url",
        property: "og_url",
        content: data.schema_basic.og_url,
      });

      tags.meta.push({
        hid: "og_site_name",
        property: "og_site_name",
        content: data.schema_basic.og_site_name,
      });

      tags.meta.push({
        hid: "article_modified_time",
        property: "article_modified_time",
        content: data.schema_basic.article_modified_time,
      });

      tags.meta.push({
        hid: "twitter_card",
        name: "twitter_card",
        content: data.schema_basic.twitter_card,
      });

      if (data.schema_basic.twitter_misc) {
        let $i = 1;
        for (const [key, value] of Object.entries(data.schema_basic.twitter_misc)) {
          tags.meta.push({
            hid: "twitter:label" + $i,
            name: "twitter:label" + $i,
            content: key,
          });
          tags.meta.push({
            hid: "twitter:data" + $i,
            name: "twitter:data" + $i,
            content: value,
          });
          $i++;
        }
      }

      tags.meta.push({
        hid: "og:url",
        property: "og:url",
        content: data.schema_basic.og_url,
      });

      if (data.acf.sections[0].acf_fc_layout === "section_header") {
        tags.meta.push({
          hid: "og:image",
          property: "og:image",
          content: data.acf.sections[0].background.url,
        });
      }else{
        tags.meta.push({
          hid: "og:image",
          property: "og:image",
          content: '/symbol.png',
        });
      }
    }
  }
  return tags;
}
</script>
