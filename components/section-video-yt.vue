<template>
  <div
    class="section-content inline-block relative w-full h-auto aspect-[16/9] tablet:max-w-[75%] bg-gray-darkest mb-5 "
  >
    <iframe
      v-if="data.videoId && videoStarted"
      :id="`yt-${data.videoId}`"
      class="w-full h-full max-w-full transition duration-300"
      :class="[iframeLoaded ? 'opacity-100' : 'opacity-0']"
      :src="`https://www.youtube.com/embed/${data.videoId}?autoplay=1`"
      width="560"
      height="315"
      frameborder="0"
      allowfullscreen="allowfullscreen"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      @load="iframeLoaded = true"
    >
    </iframe>
    <div
      class="absolute inset-0 group z-10 flex items-center justify-center cursor-pointer transition duration-300"
      @click="playVideo"
      :class="{ 'opacity-0 pointer-events-none': videoStarted }"
    >
      <svg
        class="z-20"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        version="1.1"
        width="73"
        height="50"
        viewBox="0 36 250 180"
        xml:space="preserve"
      >
        <defs></defs>
        <g
          style="
            stroke: none;
            stroke-width: 0;
            stroke-dasharray: none;
            stroke-linecap: butt;
            stroke-linejoin: miter;
            stroke-miterlimit: 10;
            fill: none;
            fill-rule: nonzero;
            opacity: 1;
          "
          transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
        >
          <path
            class="fill-[#ff0000] group-hover:fill-red-700 transition duration-200"
            d="M 88.119 23.338 c -1.035 -3.872 -4.085 -6.922 -7.957 -7.957 C 73.144 13.5 45 13.5 45 13.5 s -28.144 0 -35.162 1.881 c -3.872 1.035 -6.922 4.085 -7.957 7.957 C 0 30.356 0 45 0 45 s 0 14.644 1.881 21.662 c 1.035 3.872 4.085 6.922 7.957 7.957 C 16.856 76.5 45 76.5 45 76.5 s 28.144 0 35.162 -1.881 c 3.872 -1.035 6.922 -4.085 7.957 -7.957 C 90 59.644 90 45 90 45 S 90 30.356 88.119 23.338 z"
            style="
              stroke: none;
              stroke-width: 1;
              stroke-dasharray: none;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-miterlimit: 10;
              fill-rule: nonzero;
              opacity: 1;
            "
            transform=" matrix(1 0 0 1 0 0) "
            stroke-linecap="round"
          />
          <polygon
            points="36,58.5 59.38,45 36,31.5 "
            style="
              stroke: none;
              stroke-width: 1;
              stroke-dasharray: none;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-miterlimit: 10;
              fill: #fff;
              fill-rule: nonzero;
              opacity: 1;
            "
            fill="#fff"
            transform="  matrix(1 0 0 1 0 0) "
          />
        </g>
      </svg>
      <nuxt-picture
        class="absolute inset-0 w-full h-full z-10"
        :imgAttrs="{ class: 'w-full h-full object-cover' }"
        :src="`/ytimg/${data.videoId}/maxresdefault.jpg`"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      videoStarted: false,
      iframeLoaded: false,
    }
  },
  props: {
    data: {
      type: Object,
      default() {
        return { videoId: 'AoI79F43hNQ' }
      },
    },
  },
  methods: {
    playVideo() {
      this.videoStarted = true
    },
  },
}
</script>

<style></style>
