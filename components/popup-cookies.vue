<template>
  <Transition name="slide-left">
    <div
      v-if="isMounted"
      class="fixed bottom-0 right-0 tablet:bottom-10 tablet:right-10 p-5 tablet:p-0 z-50"
    >
      <div
        class="w-full max-w-[350px] bg-gray-light rounded-md p-5 shadow-xl shaow-gray/10"
      >
        <p>
          {{ description }}
          <CustomLink
            class="text-green-main hover:text-green-mainHover transition duration-200"
            :url="privacyPolicyLink"
            :activeClass="'none'"
            >{{ privacyPolicyText }}
          </CustomLink>
        </p>
        <div class="mt-5 gap-5 flex flex-wrap tablet:flex-nowrap">
          <button
            class="w-max grow-0 py-3 rounded-full transition duration-200"
          >
            {{ requiredConsentText }}
          </button>
          <button
            class="w-max grow-0 px-5 py-3 text-white rounded-full bg-blue-main hover:bg-blue-main-hover transition duration-200"
          >
            {{ allConsentText }}
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>

export default {
  props: {
    description: {
      type: String,
      default:
        'We use cookies to make the site work and improve user experience.',
    },
    privacyPolicyText: {
      type: String,
      default: 'See details.',
    },
    privacyPolicyLink: {
      type: String,
      default: '/polityka-prywatnosci',
    },
    requiredConsentText: {
      type: String,
      default: 'Required only',
    },
    allConsentText: {
      type: String,
      default: 'Accept all',
    },
  },
  data() {
    return {
      isMounted: false,
    }
  },
  mounted() {
    // this.isMounted = true
    // console.log(this.$ga)
    // this.$ga.enable()
    // this.$ga.page('/')
    window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-B0N58DBDBV');
  },
}
</script>

<style>
.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 0.3s ease-in-out;
}

.slide-left-enter-from,
.slide-left-leave-to {
  transform: translateX(-120%);
}
</style>
