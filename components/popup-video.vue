<template>
  <Transition name="fade" mode="in-out">
    <div
      v-if="isOpen"
      class="fixed inset-0 bg-black/50 z-50 flex justify-center items-center"
    >
      <div
        ref="modal"
        class="relative bg-white rounded-[5px] w-4/5 aspect-video container"
        :class="{ 'pointer-events-none': !isOpen }"
      >
        <div
          class="absolute cursor-pointer top-0 right-0 text-black hover:text-gray-dark transition duration-300"
          @click="togglePopup()"
        >
          <svg
            class="fill-current text-inherit"
            width="40"
            height="40"
            viewBox="7 6 38 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="17.0625"
              y="15"
              width="28.1956"
              height="2.91678"
              rx="1"
              transform="rotate(45 17.0625 15)"
            />
            <rect
              x="15"
              y="34.9375"
              width="28.1956"
              height="2.91679"
              rx="1"
              transform="rotate(-45 15 34.9375)"
            />
          </svg>
        </div>
        <div class="p-10 w-full h-full">
          <iframe
            v-if="videoId"
            class="w-full h-full rounded-[5px]"
            width="560"
            height="315"
            :src="'https://www.youtube.com/embed/' + videoId"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
import { ref } from '@vue/composition-api'
import { onClickOutside } from '@vueuse/core'
export default {
  name: 'PopupVideo',
  setup() {
    const modal = ref(null)
    let isOpen = ref(false)

    onClickOutside(modal, () => {
      togglePopup()
    })

    return { modal, isOpen, togglePopup }
    function togglePopup() {
      isOpen.value = !isOpen.value
    }
  },
  head() {
    return {
      bodyAttrs: {
        class: this.isOpen ? 'overflow-hidden' : '',
      },
    }
  },
  computed: {
    videoId() {
      let ID = false
      if (this.videoSrc) {
        ID = this.videoSrc.split('watch?v=').pop()
      }
      return ID
    },
  },
  props: {
    videoSrc: String,
  },
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
