<template>
  <div class="logos-container w-full tablet:max-w-[75%] mb-10">
    <div v-if="data.galeria" class="flex flex-wrap tablet:max-w-[50vw]">
      <div
        v-for="(image, index) in data.galeria"
        :key="index"
        class="basis-1/2 tablet-wide:basis-1/3 flex justify-center items-center p-[5%] tablet-wide:p-[2.5%] h-[120px] tablet-wide:h-[150px]"
      >
        <CustomLink
          v-if="image.url && image.img_url"
          :url="image.url"
          :isExternal="true"
          class="block w-full p-1 h-full"
        >
          <nuxt-img
            class="w-full img-full"
            :imgAttrs="{
              class: '!h-full object-contain',
            }"
            :src="
              image.img_url.url.replace(
                'www.is-wireless.com',
                $config.public.API_DOMAIN
              ).replace($config.public.API_URL,'/app')
            "
            :title="image.img_url.title ? image.img_url.title : ''"
            :alt="image.img_url.alt ? image.img_url.alt : ''"
          />
        </CustomLink>
        <nuxt-img
          v-else-if="image.img_url"
          class="w-full h-full img-full p-1"
          :imgAttrs="{
            class: '!h-full object-contain',
          }"
          :src="
            image.img_url.url.replace(
              'www.is-wireless.com',
              $config.public.API_DOMAIN
            ).replace($config.public.API_URL,'/app')
          "
          :title="image.img_url.title ? image.img_url.title : ''"
          :alt="image.img_url.alt ? image.img_url.alt : ''"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="postcss" scoped>
.has-sidebar .logos-container {
  @apply max-w-full;
}
</style>
