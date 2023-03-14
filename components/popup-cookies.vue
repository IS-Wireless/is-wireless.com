<template>
  <Transition name="slide-right">
    <div
      v-if="isVisible"
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
            @click="setConsent()">
            {{ requiredConsentText }}
          </button>
          <button
            class="w-max grow-0 px-5 py-3 text-white rounded-full bg-blue-main hover:bg-blue-main-hover transition duration-200"
           @click="setConsentAll()">
            {{ allConsentText }}
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
  import { useCookies } from '@vueuse/integrations/useCookies'
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
  setup(){
    const cookies = useCookies()
    const consentCookie = cookies.get(['CONSENT'])
    const gaCookie = cookies.get(['_ga'])

    return {
      cookies,
      consentCookie,
      gaCookie
    }
  },
  data() {
    return {
      isMounted: false,
    }
  },
  computed: {
    isVisible(){
      return this.isMounted && !(this.gaCookie || this.consentCookie)
    }
  },
  methods:{
    setConsent(){
      this.cookies.set('CONSENT','TRUE')
      this.consentCookie = true

    },
    setConsentAll(){
      this.setConsent()
      this.gaCookie = true
      this.$gtag.optIn()
      this.$gtag.pageview(this.$route)
    }
  },
  mounted() {
    this.isMounted = true

    if (!this.gaCookie){
      this.$gtag.optOut()
    }else{
      this.$gtag.optIn()
    }
  },
}
</script>

<style>
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.3s ease-in-out;
}

.slide-right-enter-from,
.slide-right-leave-to {
  transform: translateX(120%);
}
</style>
