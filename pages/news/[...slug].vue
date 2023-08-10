<template>
  <div>
    <Breadcrumb v-if="pageData" :data="pageData.breadcrumb" />
      <div class="w-4/5 container mx-auto">
        <div class="tablet:w-2/3" v-if="pageData">
          <BlogPostContent
            v-if="pageData.content"
            :data="contentFiltered"
            class="postContent img-no-click"
          />
          <BlogShare :data="testBlogShare" />
          <BlogRelated
            v-if="postsRelated && postsRelated.length"
            :data="postsRelated"
          />
        </div>
      </div>
  </div>
</template>

<script setup>
import { isSamePath } from "ufo";
import HtmlFilter from 'html-filter'
import { useGeneralStore } from '~/store/general'

const config = useRuntimeConfig();
const route = useRoute();
const postsRelated = useState("postsRelated", () => false);
const testBlogShare = reactive({
  text: "Share This Story, Choose Your Platform!",
  socials: [
    { type: "facebook", link: "/" },
    { type: "twitter", link: "/" },
    { type: "linkedin", link: "/" },
    { type: "mail", link: "mailto:" },
  ],
});
const generalStore = useGeneralStore()

const getRelatedPosts = function (pagesData, thisRoute) {
  const postRelatedData = [];
  Object.values(pagesData.slice(0, 10)).forEach((post) => {
    let postFullPath = post.link.replace(config.public.API_URL, "").replace("https://www.is-wireless.com", "");
    if (!isSamePath(postFullPath, thisRoute)) {
      postRelatedData.push(post);
    }
  });
  return postRelatedData;
};

const pageData = computed(()=>{
  if (generalStore.posts.length > 0) {
    const data = generalStore.posts.find(({slug}) => slug == route.params.slug[0])

    if (data) {
      postsRelated.value = getRelatedPosts(generalStore.posts, route.path);
      return data
    }
  }
})

const contentFiltered = computed(() => {
  if (!pageData.value) {
    return 
  }
  const htmlFilter = new HtmlFilter();
  htmlFilter.allowedTags = {
    img: {
      src: 1,
      alt: 1,
      width: 1,
      height: 1,
      "data-orig-src": 1,
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
    blockquote: null,
    ul: null,
    ol: null,
    li: null,
    a: { href: 1, rel: 1, "data-rel": 1, "aria-label": 1 },
    div: null,
    table: null,
    th: null,
    tr: null,
    td: null,
    sup: null,
    sub: null,
  };
  if (pageData.value.content && pageData.value.content.rendered) {
    let filteredContent = htmlFilter.filter(pageData.value.content.rendered);
    if (filteredContent.includes("data-orig-src")) {
      filteredContent = filteredContent.replace(/ src=/g, " data-test=");
      filteredContent = filteredContent.replace(/ data-orig-/g, ' ref="imageFix" ');
    }
    return filteredContent;
  }
});

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

      if (data.featured_image_src) {
        tags.meta.push({
          hid: 'og:image',
          property: 'og:image',
          content: data.featured_image_src,
        })


      }
    }
  }

  return tags
}
</script>

<style lang="postcss" scoped>
.postContent :deep([rel="gallery"]) {
  @apply inline-block;
}

.postContent :deep(a[data-rel|="lightbox-image"]) {
  pointer-events: none;
}

.postContent :deep(em) {
  font-weight: 400;
  text-align: center;
  font-style: italic;
  color: #768894;
}
</style>
