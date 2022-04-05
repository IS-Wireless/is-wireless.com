<template>
  <div class="w-full flex flex-col">
    <div class="flex group items-center mb-5 cursor-pointer w-max" @click="setExpandedHeight()">
      <span class="shrink-0 grow-0 h-5 w-5 relative">
        <svg
          width="20px"
          height="20px"
          viewBox="-7 -20 48 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="
            absolute
            bottom-0
            left-0
            inline-block
            stroke-gray-main
            group-hover:stroke-blue-main
            transform
            transition
            duration-300
          "
          :class="{'rotate-180':!collapsed}"
        >
          <path
            d="M 0 0 L 34 0"
            stroke-width="6"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>

        <svg
          width="20px"
          height="20px"
          viewBox="-7 -20 48 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="
            absolute
            bottom-0
            left-0
            inline-block
            stroke-gray-main
            group-hover:stroke-blue-main
            transform
            transition
            duration-300
          "
          :class="{'rotate-90':!collapsed}"
        >
          <path
            d="M 17 -17 L 17 17"
            stroke-width="6"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </span>
      <span class="text-2xl tablet:text-3xl ml-4 text-blue-main">
        {{ title }}
      </span>
    </div>
    <div ref="contentContainer" class="overflow-hidden transition-all duration-300" :style="{height: contentHeight + 'px'}">
        <div class="w-full">
            <slot>

            </slot>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Collapse',
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  data(){
      return{
          collapsed: true,
          contentHeight: 0
      }
  },
  methods:{
      setExpandedHeight(){
          let container = this.$refs.contentContainer;
          this.collapsed = !this.collapsed;

          if(this.collapsed){
            this.contentHeight = 0;
          }else{
            this.contentHeight = container.children[0].clientHeight;
          }
      }
  }
}
</script>

<style></style>
