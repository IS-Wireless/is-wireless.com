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
import { useHomepageStore } from "~/store/homepage";
import { storeToRefs } from "pinia";

const store = useHomepageStore();
const { data } = await useAsyncData('homepageData',(app) => {

  const { data: cachedData } = useNuxtData('homepageData')
  if (cachedData.value) {
    store.setHomepageData( cachedData.value.acf )
    return cachedData.value
  }

  return app.$wp
    .pages()
    .id(2)
    .then(function (data) {
      let tmp = "";
      if (data && data.yoast_head_json && data.yoast_head_json.schema) {
        tmp = JSON.stringify(data.yoast_head_json.schema);
      }
      app.$filterData(data);
      data.schema = tmp;
      if (data.acf && data.acf.section) {
        data.content = "";
      }
      store.setHomepageData( data.acf );
      return data;
    });
});
const { homepageData } = storeToRefs(store);
useHead(generateHead(data.value));

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
      }
    }
  }
  return tags;
}
</script>
