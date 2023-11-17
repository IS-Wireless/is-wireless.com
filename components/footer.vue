<template>
  <footer class="bg-white mt-auto">
    <div class="flex flex-row flex-wrap">
      <div class="w-4/5 mx-auto container flex flex-row flex-wrap">
        <div
          class="w-full phablet:w-1/2 tablet:w-1/3 flex-initial flex mb-10 phablet:mb-[75px] justify-center phablet:justify-start tablet:pr-12 dekstop:pr-0 items-center"
        >
          <CustomLink
            v-if="imageUrl"
            :url="'/'"
            class="custom-filter transition duration-300"
          >
            <nuxt-picture
              class="block h-auto w-full max-w-[200px]"
              :src="
                imageUrl.replace('www.is-wireless.com', 'api.is-wireless.com').replace('https://api.is-wireless.com/','/app/')
              "
              :alt="'test alt'"
              width="200"
              height="67"
              :title="'is-wireless logo'"
              :imgAttrs="{
                loading: 'lazy',
              }"
            />
          </CustomLink>
        </div>
        <div
          class="w-full phablet:w-1/2 tablet:w-1/3 flex-initial flex order-last mb-10 phablet:mb-[75px] justify-end items-center"
        >
          <div class="w-full phablet:w-auto relative border-none h-12">
            <select
              class="bg-gray-light focus-visible:outline-none text-gray-400 appearance-none border-none inline-block py-3 pl-4 pr-10 rounded leading-tight w-full h-12 cursor-pointer hover:bg-gray-200 focus:bg-gray-200 transition"
            >
              <option v-for="title in languages" :key="title">
                {{ title }}
              </option>
            </select>
            <div
              class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4"
            >
              <svg
                class="fill-current text-gray-default"
                width="17"
                height="9"
                viewBox="0 0 17 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.776404 0.623799C1.0001 0.424611 1.30345 0.312714 1.61975 0.312714C1.93605 0.312714 2.2394 0.424611 2.46309 0.623799L8.36769 5.88317L14.2723 0.623799C14.4973 0.430256 14.7986 0.323162 15.1113 0.325583C15.4241 0.328004 15.7233 0.439746 15.9444 0.636742C16.1656 0.833738 16.2911 1.10023 16.2938 1.37881C16.2965 1.65739 16.1763 1.92578 15.959 2.12617L9.21103 8.13674C8.98734 8.33593 8.68399 8.44782 8.36769 8.44782C8.05139 8.44782 7.74804 8.33593 7.52435 8.13674L0.776404 2.12617C0.55278 1.92693 0.427155 1.65672 0.427155 1.37499C0.427155 1.09325 0.55278 0.823048 0.776404 0.623799Z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div
          class="w-full tablet:w-1/3 flex-auto flex justify-center mb-10 phablet:mb-[75px] order-last tablet:order-none"
        >
          <ul v-if="socials" class="flex items-center">
            <li
              v-for="itemSocial in socials"
              :key="itemSocial.id"
              class="block mx-6 tablet:mx-4 desktop:mx-6"
            >
              <CustomLink
                v-if="itemSocial.object_slug == 'twitter'"
                class="block bg-gray-200 rounded h-10 w-10 hover:bg-[#1DA1F2] transition"
                :url="itemSocial.url"
                rel="external nofollow"
                :isExternal="itemSocial.object == 'custom' ? true : false"
                target="_blank"
              >
                <template #default>
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M19.963 7.953v.53c0 5.419-4.12 11.669-11.667 11.669-2.314 0-4.493-.508-6.296-1.667.322.046.646.07.97.07 1.924 0 3.706-.833 5.096-1.945a4.085 4.085 0 01-3.821-2.847 4.267 4.267 0 001.851-.07 4.1 4.1 0 01-3.287-4.027v-.047c.556.3 1.18.485 1.851.51a4.085 4.085 0 01-1.828-3.404c0-.763.208-1.39.557-1.991 2.038 2.477 5.046 4.03 8.448 4.213a4.258 4.258 0 01-.09-.95A4.09 4.09 0 0115.841 3.9c1.182 0 2.245.51 3.011 1.297a8.352 8.352 0 002.592-.995c-.3.949-.95 1.76-1.807 2.27A8.103 8.103 0 0022 5.821a8.502 8.502 0 01-2.037 2.13"
                      fill="rgb(255, 255, 255)"
                      fill-rule="evenodd"
                    />
                  </svg>
                </template>
              </CustomLink>
              <CustomLink
                v-if="itemSocial.object_slug == 'linkedin'"
                class="block bg-gray-200 rounded h-10 w-10 hover:bg-[#0072b1] transition"
                :url="itemSocial.url"
                rel="external nofollow"
                :isExternal="itemSocial.object == 'custom' ? true : false"
                target="_blank"
              >
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3.33 21V8.87h3.805V21H3.329zm9.75-7.006V21H9.414V11.66s-.06-2.314-.06-2.724h3.604l.122 1.664c.732-1.168 1.833-2.054 3.3-2.054 2.566 0 4.399 1.945 4.399 5.449V21h-3.667v-6.617c0-1.946-.896-2.724-1.994-2.724-1.1 0-2.038.778-2.038 2.335zM7.614 5.383A2.381 2.381 0 112.85 5.38a2.381 2.381 0 014.763.003z"
                    fill="rgb(255, 255, 255)"
                    fill-rule="evenodd"
                  />
                </svg>
              </CustomLink>
              <CustomLink
                v-if="itemSocial.object_slug == 'youtube'"
                class="block bg-gray-200 rounded h-10 w-10 hover:bg-[#FF0000] transition"
                :url="itemSocial.url"
                rel="external nofollow"
                :isExternal="itemSocial.object == 'custom' ? true : false"
                target="_blank"
              >
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M15.436 12.024L9.811 9.11v5.827l5.625-2.913zm6.564 0c0 7.084 0 7.084-10.001 7.084C2 19.108 2 19.108 2 12.024S2 4.94 12 4.94C22 4.94 22 4.94 22 12.024z"
                    fill="rgb(255, 255, 255)"
                    fill-rule="evenodd"
                  />
                </svg>
              </CustomLink>
            </li>
          </ul>
        </div>
      </div>

      <div class="w-full bg-gray-light">
        <div class="w-4/5 mx-auto container flex flex-row flex-wrap">
          <div
            class="w-full phablet:w-1/2 my-5 flex justify-center phablet:justify-start"
          >
            <ul v-if="menu.menu_left" class="list-none m-0 p-0 flex">
              <li
                v-for="item in menu.menu_left"
                :key="item.id"
                class="mr-4 tablet:mx-0 tablet:mr-8 text-base"
              >
                <CustomLink
                  v-if="item.url"
                  class="font-lato text-gray-dark hover:text-blue-main-hover transition"
                  :url="item.url"
                  :title="item.title ? item.title : ''"
                  :isExternal="item.object == 'custom' ? true : false"
                >
                  {{ item.title }}
                </CustomLink>
              </li>
            </ul>
          </div>
          <div
            class="w-full phablet:w-1/2 my-5 flex justify-center phablet:justify-end"
          >
            <ul v-if="menu.menu_right" class="list-none m-0 p-0 flex">
              <li
                v-for="item in menu.menu_right"
                :key="item.id"
                class="ml-4 tablet:mx-0 tablet:ml-8 text-base"
              >
                <CustomLink
                  v-if="item.url"
                  class="font-lato text-gray-dark hover:text-blue-main-hover transition"
                  :url="item.url"
                  :title="item.title ? item.title : ''"
                  :isExternal="item.object == 'custom' ? true : false"
                >
                </CustomLink>
              </li>
            </ul>
          </div>
        </div>

        <div
          class="w-4/5 mx-auto container flex flex-column flex-wrap justify-center phablet:justify-between"
        >
          <p class="text-xs leading-normal my-5 phablet:mt-0 phablet:mb-[60px]">
            {{ copyright }}
          </p>
          <div
            class="w-full phablet:w-1/2 flex mb-5 justify-center phablet:justify-end"
          >
            <ul v-if="menu.menu_right_bottom" class="list-none m-0 p-0 flex">
              <li
                v-for="(item, index) in menu.menu_right_bottom"
                :key="index"
                class="ml-4 tablet:mx-0 tablet:ml-8 text-base"
              >
                <CustomLink
                  v-if="item.url"
                  class="font-lato text-xs leading-normal mb-10 phablet:mb-[60px] text-gray-dark hover:text-blue-main-hover transition"
                  :url="item.url"
                  :title="item.title ? item.title : ''"
                  :isExternal="item.object == 'custom' ? true : false"
                >
                  {{ item.title }}
                </CustomLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import CustomLink from './custom-link.vue'

export default {
  name: 'Footer',
  components: {
    CustomLink,
  },
  props: {
    item: {
      type: String,
      required: false,
      default() {
        return ''
      },
    },
    imageUrl: {
      type: String,
      required: true,
      default:
        'https://www.is-wireless.com/wp-content/uploads/2016/04/logo-500px.png',
    },
    copyright: {
      type: String,
      required: true,
      default: '©2022 IS-Wireless and/or its affiliated companies.',
    },
    menu: {
      type: Object,
      required: true,
    },
    socials: {
      type: Array,
      required: false,
      default() {
        return {}
      },
    },
    languages: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="postcss" scoped>
:deep( .custom-filter ){
  filter: saturate(0);
}
:deep( .custom-filter:hover ){
  filter: saturate(1);
}
</style>
