<template>
  <div class="logos-container w-full tablet:max-w-[75%] mb-10">
    <div v-if="data.galeria" class="flex flex-wrap tablet:max-w-[50vw]">
      <div
        v-for="(image, index) in data.galeria"
        :key="index"
        class="basis-1/2 tablet-wide:basis-1/3 flex justify-center items-center p-[5%] tablet-wide:p-[2.5%]"
      >
        <CustomLink
          v-if="image.url && image.img_url"
          :url="image.url"
          :isExternal="true"
          class="block w-full p-1"
        >
          <nuxt-picture
            :src="
              image.img_url.url.replace(
                'www.is-wireless.com',
                'api.is-wireless.com'
              )
            "
            :title="image.img_url.title ? image.img_url.title : ''"
            :alt="image.img_url.alt ? image.img_url.alt : ''"
            class="w-full img-full"
          />
        </CustomLink>
        <nuxt-picture
          v-else-if="image.img_url"
          :src="
            image.img_url.url.replace(
              'www.is-wireless.com',
              'api.is-wireless.com'
            )
          "
          :title="image.img_url.title ? image.img_url.title : ''"
          :alt="image.img_url.alt ? image.img_url.alt : ''"
          class="w-full img-full p-1"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CustomLink from '@/components/custom-link.vue'
export default {
  name: 'logo_static',
  components: {
    CustomLink,
  },
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
