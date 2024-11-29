<template>
  <ClientOnly>
    <div
      class="fixed bottom-0 right-16 tablet-wide:right-24 rounded-t-md bg-gray-darkest/80 z-20 p-3 px-4 hover:bg-blue-main transform transition duration-300 cursor-pointer"
      :class="{
        'hidden tablet-wide:block': !mobileVisible,
        'translate-y-full': !visible,
      }"
      @click="scrollToTop()"
    >
      <svg
        width="16"
        height="14"
        viewBox="0 0 17 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="fill-white transform rotate-180"
      >
        <path
          d="M0.776404 0.623799C1.0001 0.424611 1.30345 0.312714 1.61975 0.312714C1.93605 0.312714 2.2394 0.424611 2.46309 0.623799L8.36769 5.88317L14.2723 0.623799C14.4973 0.430256 14.7986 0.323162 15.1113 0.325583C15.4241 0.328004 15.7233 0.439746 15.9444 0.636742C16.1656 0.833738 16.2911 1.10023 16.2938 1.37881C16.2965 1.65739 16.1763 1.92578 15.959 2.12617L9.21103 8.13674C8.98734 8.33593 8.68399 8.44782 8.36769 8.44782C8.05139 8.44782 7.74804 8.33593 7.52435 8.13674L0.776404 2.12617C0.55278 1.92693 0.427155 1.65672 0.427155 1.37499C0.427155 1.09325 0.55278 0.823048 0.776404 0.623799Z"
        ></path>
      </svg>
    </div>
  </ClientOnly>
</template>

<script>

export default {
  props: {
    mobileVisible: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const { x, y } = useWindowScroll()
    return { y }
  },
  computed: {
    visible() {
      return this.y > 200
    },
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    },
  },
}
</script>

<style></style>
