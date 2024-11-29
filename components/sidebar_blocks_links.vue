<template>
  <div class="relative">
    <div
      class="w-full flex bg-gray-light tablet:bg-transparent cursor-pointer tablet:cursor-default mb-10 tablet:mb-0"
      @click="switchMobileExpand"
    >
      <div
        class="tablet:hidden p-[18px] flex justify-between w-full border-0 border-b border-solid border-white"
      >
        <span class="text-base ml-7">Select section:</span>
        <div
          class="tablet-wide:hidden inset-y-0 right-0 flex items-center px-4 transform transition"
          :class="{ 'rotate-180': mobileExpanded }"
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
    <ul
      class="flex flex-col items-center tablet:items-start absolute top-[61px] tablet:top-0 left-0 tablet:relative custom-scrollbar w-full tablet:max-w-[350px] bg-gray-light tablet:bg-transparent duration-300 transition-all z-20 tablet:max-h-full overflow-y-scroll"
      :class="{ 'max-h-80': mobileExpanded, 'max-h-0': !mobileExpanded }"
    >
      <li
        v-for="(item, index) in data.links"
        :key="index"
        class="block w-4/5 tablet:w-full"
      >
        <nuxt-link
          v-if="item.link_url"
          class="menu-left-text overflow-hidden px-7 py-[18px] tablet:px-0 text-basis block transition duration-200 text-gray-dark hover:text-blue-main w-full border-0 border-b border-solid border-l-gray-light relative after:hidden tablet:after:block after:absolute after:h-1 after:w-full after:bg-blue-main after:-bottom-1 after:left-0 after:transition after:duration-200"
          :to="{ hash: item.link_url }"
          :class="{ 'after:-translate-y-1 !text-blue-main' : item.link_url == activeHash}"
          @click.native="switchMobileExpand"
        >
          <span
            class="tablet:ml-[30px] text-inherit"
            v-html="item.link_title ? item.link_title : item.link_url"
          >
          </span>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'sidebar_blocks_links',
  setup() {
    const { x, y } = useWindowScroll()
    const router = useRouter();

    return { y,router }
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      mobileExpanded: false,
      activeHash: ''
    }
  },
  watch:{
    y: function(){
      if (this.data.links) {
        let links = this.data.links
        const linksUpper = links.filter((link) => {
          let el = document.getElementById(`${link.link_url}`)
          if(el){
            return el.getBoundingClientRect().top <= 0
          }else{
            el = document.getElementById(`${link.link_url.replace('#','')}`)
            if (el) {
              return el.getBoundingClientRect().top <= 0              
            }else{
              return false
            }
          }
        }) 
        if (linksUpper.length > 0) {
          let lastLink = linksUpper[linksUpper.length - 1]
          if (lastLink.link_url != this.activeHash) {
            this.activeHash = lastLink.link_url
          }
        }else{
          this.activeHash = ''
        }
      }
    }
  },
  methods: {
    switchMobileExpand() {
      if (window.innerWidth < 1024) this.mobileExpanded = !this.mobileExpanded
    },
  },
}
</script>