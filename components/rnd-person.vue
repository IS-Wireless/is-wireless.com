<template>
  <div
    class="group relative mb-[60px] tablet:mb-20 mx-[calc(-12.5%+10px)] tablet:mx-0 overflow-hidden flex flex-col tablet:flex-row border-0 border-b-2 border-solid border-gray-light transition duration-300"
    :class="
      isOverflow
        ? 'rounded-t-md pb-[60px] tablet:pb-0 border-blue-main tablet:border-gray-light tablet:hover:border-blue-main ' +
          (data.higlight ? ' bg-gray-light ' : '')
        : 'rounded-md ' + (data.higlight ? ' bg-gray-light ' : '')
    "
  >
    <div
      v-if="isOverflow"
      class="absolute cursor-pointer bottom-0 right-[30px] w-11 h-11 flex justify-center items-center rounded-t-md bg-blue-main tablet:bg-gray-light tablet:group-hover:bg-blue-main z-20 transition duration-300"
      @click="setFullHeight"
    >
      <svg
        width="20px"
        height="20px"
        viewBox="-7 -20 48 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="absolute inline-block stroke-white tablet:stroke-gray-default tablet:group-hover:stroke-white transform transition duration-300"
        :class="{ 'rotate-180': !collapsed }"
      >
        <path
          d="M 0 0 L 34 0"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>

      <svg
        width="20px"
        height="20px"
        viewBox="-7 -20 48 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="absolute inline-block stroke-white tablet:stroke-gray-default tablet:group-hover:stroke-white transform transition duration-300"
        :class="{ 'rotate-90': !collapsed }"
      >
        <path
          d="M 17 -17 L 17 17"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
    <nuxt-picture
      v-if="data.image"
      class="flex-shrink-0"
      :imgAttrs="{
        class:
          'h-[300px] phone-wide:h-[600px] tablet:h-[350px] w-full tablet:w-[300px] object-cover',
      }"
      :src="data.image.url ? data.image.url : ''"
      :title="data.image.title ? data.image.title : ''"
      :alt="data.image.alt ? data.image.alt : ''"
    ></nuxt-picture>
    <div
      v-else
      class="flex flex-shrink-0 justify-center items-center h-[300px] tablet:h-[350px] w-full tablet:w-[300px] bg-gray-light"
    >
      <svg
        width="175"
        height="176"
        viewBox="0 0 175 176"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M154.681 143.327C163.657 132.527 169.9 119.725 172.881 106.003C175.863 92.2805 175.496 78.042 171.811 64.4917C168.125 50.9414 161.231 38.478 151.71 28.1558C142.19 17.8336 130.323 9.95632 117.114 5.19026C103.905 0.424196 89.7428 -1.0904 75.8248 0.774601C61.9067 2.6396 48.6426 7.82933 37.1545 15.9048C25.6664 23.9802 16.2922 34.7038 9.82496 47.1683C3.35774 59.6328 -0.0122662 73.4717 3.35478e-05 87.5141C0.00475338 107.928 7.19844 127.688 20.3188 143.327L20.1938 143.433C20.6313 143.958 21.1313 144.408 21.5813 144.927C22.1438 145.57 22.75 146.177 23.3313 146.802C25.0813 148.702 26.8813 150.527 28.7688 152.239C29.3438 152.764 29.9375 153.252 30.5188 153.752C32.5188 155.477 34.575 157.114 36.7063 158.639C36.9813 158.827 37.2313 159.07 37.5063 159.264V159.189C52.1444 169.49 69.6069 175.019 87.5063 175.019C105.406 175.019 122.868 169.49 137.506 159.189V159.264C137.781 159.07 138.025 158.827 138.306 158.639C140.431 157.108 142.494 155.477 144.494 153.752C145.075 153.252 145.669 152.758 146.244 152.239C148.131 150.52 149.931 148.702 151.681 146.802C152.263 146.177 152.863 145.57 153.431 144.927C153.875 144.408 154.381 143.958 154.819 143.427L154.681 143.327ZM87.5 37.5141C93.0626 37.5141 98.5003 39.1636 103.125 42.254C107.751 45.3444 111.355 49.737 113.484 54.8761C115.613 60.0153 116.17 65.6703 115.085 71.126C113.999 76.5817 111.321 81.5931 107.387 85.5265C103.454 89.4598 98.4427 92.1385 92.987 93.2237C87.5312 94.3089 81.8762 93.7519 76.7371 91.6232C71.5979 89.4945 67.2054 85.8896 64.115 81.2645C61.0245 76.6394 59.375 71.2017 59.375 65.6391C59.375 58.1799 62.3382 51.0262 67.6127 45.7517C72.8871 40.4773 80.0408 37.5141 87.5 37.5141V37.5141ZM37.5438 143.327C37.6522 135.12 40.9872 127.286 46.8273 121.52C52.6673 115.754 60.5429 112.518 68.75 112.514H106.25C114.457 112.518 122.333 115.754 128.173 121.52C134.013 127.286 137.348 135.12 137.456 143.327C123.749 155.679 105.952 162.515 87.5 162.515C69.0484 162.515 51.251 155.679 37.5438 143.327V143.327Z"
          fill="white"
        />
      </svg>
    </div>
    <div
      ref="descriptionContainer"
      class="relative overflow-hidden flex-grow h-[405px] tablet:h-[300px] transition-all duration-300"
      :class="{ 'bg-gray-light': data.higlight }"
    >
      <div
        class="absolute bottom-0 left-0 h-10 w-full z-10 pointer-events-none transition duration-300 transform origin-bottom scale-y-0 bg-gradient-to-t to-transparent"
        :class="data.higlight ? 'from-gray-light' : 'from-white'"
        :style="isOverflow && collapsed ? 'transform:scaleY(1)' : ''"
      ></div>
      <div
        class="px-[30px] pt-[50px] tablet:pt-5 tablet:flex flex-col desktop:flex-row items-center tablet:gap-5 desktop:gap-[50px] full-hd:gap-[100px] desktop:px-[50px] full-hd:px-[100px]"
      >
        <div
          class="mb-[40px] tablet:mb-0 desktop:h-[300px] self-start flex flex-col justify-center shrink-0 desktop:basis-52"
        >
          <h3
            v-if="data.name"
            class="text-2xl mb-2 tablet:mb-0 desktop:mb-1"
            v-html="data.name"
          ></h3>
          <p
            v-if="data.position"
            class="text-blue-main text-lg mb-5"
            v-html="data.position"
          ></p>
          <div v-if="data.person_linkedin" class="flex">
            <a
              class="block h-[30px] w-[30px] p-0.5 bg-[#D4D9DF] hover:bg-[#0077b5] rounded-md transition"
              :href="data.person_linkedin"
            >
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.33 21V8.87h3.805V21H3.329zm9.75-7.006V21H9.414V11.66s-.06-2.314-.06-2.724h3.604l.122 1.664c.732-1.168 1.833-2.054 3.3-2.054 2.566 0 4.399 1.945 4.399 5.449V21h-3.667v-6.617c0-1.946-.896-2.724-1.994-2.724-1.1 0-2.038.778-2.038 2.335zM7.614 5.383A2.381 2.381 0 112.85 5.38a2.381 2.381 0 014.763.003z"
                  fill="rgb(255, 255, 255)"
                  fill-rule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
        <p
          v-if="data.description"
          class="inline-block mb-5 w-full text-justify"
          v-html="data.description"
        ></p>
      </div>
    </div>
  </div>
</template>

<script>
import { useMediaQuery } from '@vueuse/core'

export default {
  name: 'RndPerson',
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isOverflow: false,
      collapsed: true,
    }
  },
  computed: {
    defaultValues() {
      let height = 405
      let offset = 0

      if (useMediaQuery('(min-width: 768px)').value) {
        height = 300
        offset = 30
      }
      return { height, offset }
    },
  },
  methods: {
    handleCollapse() {
      this.resetHeight()
      this.checkOverflow()
    },

    checkOverflow() {
      const description_full = this.$refs.descriptionContainer.scrollHeight - 21
      const description_visible = this.$refs.descriptionContainer.offsetHeight

      if (description_full >= description_visible) {
        this.isOverflow = true
      } else {
        this.isOverflow = false
      }
    },

    setFullHeight() {
      const container = this.$refs.descriptionContainer
      const description_full = this.$refs.descriptionContainer.scrollHeight

      if (this.collapsed) {
        container.style.height =
          description_full + this.defaultValues.offset + 'px'
        this.collapsed = false
      } else {
        container.style.height = this.defaultValues.height + 'px'
        this.collapsed = true
        this.isOverflow = true
      }
    },

    resetHeight() {
      const container = this.$refs.descriptionContainer

      container.style.height = this.defaultValues.height + 'px'
      this.collapsed = true
    },
  },
  mounted() {
    this.checkOverflow()
    window.addEventListener('resize', this.handleCollapse)
  },
  unmounted() {
    window.removeEventListener('resize', this.handleCollapse)
  },
}
</script>

<style></style>
