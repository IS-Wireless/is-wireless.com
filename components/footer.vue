<template>
  <footer class="bg-white">
    <div class="w-4/5 mx-auto flex flex-row flex-wrap pb-6">
      <div
        class="
          w-full
          flex flex-row flex-wrap flex-auto
          border-b-0 border-r-0 border-l-0
          pt-8
          border-t-0
        "
      >
        <div
          class="
            w-full
            phablet:w-1/2
            tablet:w-1/3
            flex-initial flex
            mb-12
            justify-center
            phablet:justify-start
            tablet:pr-12
            dekstop:pr-0
            items-center
          "
        >
          <nuxt-picture
            class="block h-auto w-full max-w-[200px]"
            :src="imageUrl"
          ></nuxt-picture>
        </div>
        <div
          class="
            w-full
            phablet:w-1/2
            tablet:w-1/3
            flex-initial flex
            order-last
            mb-12
            justify-end
            items-center
          "
        >
          <div class="w-full phablet:w-auto relative border-none h-12">
            <select
              class="
                bg-[#F4F6F7]
                focus-visible:outline-none
                text-gray-400
                appearance-none
                border-none
                inline-block
                py-3
                pl-4
                pr-10
                rounded
                leading-tight
                w-full
                h-12
                cursor-pointer
                hover:bg-gray-200
                focus:bg-gray-200
                transition
              "
            >
              <option v-for="title in languages" :key="title">
                {{ title }}
              </option>
            </select>
            <div
              class="
                pointer-events-none
                absolute
                inset-y-0
                right-0
                flex
                items-center
                px-4
              "
            >
              <svg
                class="stroke-gray-400"
                width="15px"
                height="20px"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 18L24 36L42 18"
                  stroke-width="6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
        <div
          class="
            w-full
            tablet:w-1/3
            flex-auto flex
            justify-center
            mb-12
            order-last
            tablet:order-none
          "
        >
          <ul class="flex items-center">
            <li
              class="block mx-6 tablet:mx-4 desktop:mx-6"
              v-if="socials.twitter.url"
            >
              <a
                class="
                  block
                  bg-gray-200
                  rounded
                  h-10
                  w-10
                  hover:bg-[#1DA1F2]
                  transition
                "
                :href="socials.twitter.url"
                rel="external nofollow"
                target="_blank"
              >
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M19.963 7.953v.53c0 5.419-4.12 11.669-11.667 11.669-2.314 0-4.493-.508-6.296-1.667.322.046.646.07.97.07 1.924 0 3.706-.833 5.096-1.945a4.085 4.085 0 01-3.821-2.847 4.267 4.267 0 001.851-.07 4.1 4.1 0 01-3.287-4.027v-.047c.556.3 1.18.485 1.851.51a4.085 4.085 0 01-1.828-3.404c0-.763.208-1.39.557-1.991 2.038 2.477 5.046 4.03 8.448 4.213a4.258 4.258 0 01-.09-.95A4.09 4.09 0 0115.841 3.9c1.182 0 2.245.51 3.011 1.297a8.352 8.352 0 002.592-.995c-.3.949-.95 1.76-1.807 2.27A8.103 8.103 0 0022 5.821a8.502 8.502 0 01-2.037 2.13"
                    fill="rgb(255, 255, 255)"
                    fill-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </li>
            <li
              class="block mx-6 tablet:mx-4 desktop:mx-6"
              v-if="socials.linkedin.url"
            >
              <a
                class="
                  block
                  bg-gray-200
                  rounded
                  h-10
                  w-10
                  hover:bg-[#0072b1]
                  transition
                "
                :href="socials.linkedin.url"
                rel="external nofollow"
                target="_blank"
              >
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3.33 21V8.87h3.805V21H3.329zm9.75-7.006V21H9.414V11.66s-.06-2.314-.06-2.724h3.604l.122 1.664c.732-1.168 1.833-2.054 3.3-2.054 2.566 0 4.399 1.945 4.399 5.449V21h-3.667v-6.617c0-1.946-.896-2.724-1.994-2.724-1.1 0-2.038.778-2.038 2.335zM7.614 5.383A2.381 2.381 0 112.85 5.38a2.381 2.381 0 014.763.003z"
                    fill="rgb(255, 255, 255)"
                    fill-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </li>
            <li
              class="block mx-6 tablet:mx-4 desktop:mx-6"
              v-if="socials.youtube.url"
            >
              <a
                class="
                  block
                  bg-gray-200
                  rounded
                  h-10
                  w-10
                  hover:bg-[#FF0000]
                  transition
                "
                :href="socials.youtube.url"
                rel="external nofollow"
                target="_blank"
              >
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M15.436 12.024L9.811 9.11v5.827l5.625-2.913zm6.564 0c0 7.084 0 7.084-10.001 7.084C2 19.108 2 19.108 2 12.024S2 4.94 12 4.94C22 4.94 22 4.94 22 12.024z"
                    fill="rgb(255, 255, 255)"
                    fill-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="w-full flex flex-row flex-wrap flex-auto mb-12 desktop:mb-0">
        <div
          class="
            w-full
            phablet:w-1/2
            my-2
            mb-4
            flex
            justify-center
            phablet:justify-start
          "
        >
          <ul class="list-none m-0 p-0 flex">
            <li
              class="mr-4 tablet:mx-0 tablet:mr-8 text-base"
              v-for="item in menu.menu_left"
              :key="item.title"
            >
              <nuxt-link
                class="font-lato text-blue-main hover:text-blue-dark transition"
                :to="item.url"
                >{{ item.title }}</nuxt-link
              >
            </li>
          </ul>
        </div>
        <div
          class="
            w-full
            phablet:w-1/2
            my-2
            mb-4
            flex
            justify-center
            phablet:justify-end
          "
        >
          <ul class="list-none m-0 p-0 flex">
            <li
              class="ml-4 tablet:mx-0 tablet:ml-8 text-base"
              v-for="item in menu.menu_right"
              :key="item.title"
            >
              <nuxt-link
                class="font-lato text-blue-main hover:text-blue-dark transition"
                :to="item.url"
                >{{ item.title }}</nuxt-link
              >
            </li>
          </ul>
        </div>
      </div>
      <div
        class="
          w-full
          flex flex-column flex-wrap flex-auto
          justify-center
          phablet:justify-start
        "
      >
        <p class="text-xs leading-normal mb-2">
          {{copyright}}
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    imageUrl: {
      type: String,
      required: true,
      default:
        'https://www.is-wireless.com/wp-content/uploads/2016/04/logo-500px.png',
    },
    copyright:{
        type: String,
        required: true,
        default: '©2022 IS-Wireless and/or its affiliated companies.'
    },
    menu: {
      type: Object,
      required: true,
    },
    socials: {
      type: Object,
      required: false,
    },
    languages: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style></style>
