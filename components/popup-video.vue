<template>
  <Transition name="fade" mode="in-out">
    <div
      v-if="isOpen"
      class="fixed hidden tablet-wide:flex inset-0 bg-black/50 z-50 justify-center items-center"
    >
      <div
        ref="modal"
        class="relative w-4/5 p-10 container"
        :class="{ 'pointer-events-none': !isOpen }"
      >
        <div
          class="absolute cursor-pointer top-0 right-0 text-white hover:text-gray-dark transition duration-300"
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
        <div class="relative w-full aspect-video bg-gray-darkest rounded-[5px]">
          <div
            class="absolute inset-0 z-10 flex justify-center items-center transition"
            :class="{ 'opacity-0': frameLoaded }"
          >
            <div class="lds-ripple">
              <div></div>
              <div></div>
            </div>
          </div>
          <div class="relative z-20 w-full h-full shadow-2xl">
            <iframe
              v-if="videoId"
              class="w-full h-full rounded-[5px] transition"
              width="560"
              height="315"
              :src="'https://www.youtube.com/embed/' + videoId"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              @load="setFrameLoaded()"
              :class="{ 'opacity-0': !frameLoaded }"
            ></iframe>
          </div>
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
    let frameLoaded = ref(false)

    onClickOutside(modal, () => {
      togglePopup()
    })

    return { modal, isOpen, frameLoaded, togglePopup, setFrameLoaded }
    function togglePopup() {
      isOpen.value = !isOpen.value
      if (!isOpen.value) frameLoaded.value = false
    }

    function setFrameLoaded() {
      frameLoaded.value = true
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

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.lds-ripple {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ripple div {
  position: absolute;
  border: 4px solid #00a2e0;
  opacity: 1;
  border-radius: 50%;
  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
.lds-ripple div:nth-child(2) {
  animation-delay: -0.5s;
}
@keyframes lds-ripple {
  0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 0;
  }
  4.9% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 0;
  }
  5% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 72px;
    height: 72px;
    opacity: 0;
  }
}
</style>
