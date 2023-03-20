<template>
  <div
    class="text-inherit relative z-10 flex flex-col tablet-wide:flex-row w-full"
  >
    <div class="tablet-wide:flex-[1_1_50%] tablet-wide:w-1/2 tablet-wide:mr-8">
      <section_content :data="data" />
    </div>
    <div
      class="tablet-wide:flex-[1_1_50%] tablet-wide:w-1/2 tablet-wide:ml-8 flex flex-col tablet:flex-row"
    >
      <div
        v-if="data"
        class="max-w-[820px] text-gray-darker mb-20 tablet:mb-10 tablet:mt-20 desktopWide:shrink-0"
      >
        <form
          name="contactForm"
          method="post"
          enctype="multipart/form-data"
          class="flex flex-col"
        >
          <ul class="flex flex-wrap gap-2.5 tablet:gap-5 justify-between mb-4">
            <li
              v-for="(item, index) in data.inputs"
              :key="index"
              :class="[
                item.fullWidth
                  ? 'basis-full'
                  : 'basis-full tablet:basis-[calc(50%_-_10px)]',
              ]"
            >
              <FormField :data="item" />
            </li>
            <li class="w-full flex items-start px-2.5" v-if="data.privacyText">
              <input
                type="checkbox"
                name="acceptance"
                id="acceptance"
                required="required"
                class="shrink-0 mx-2.5 mt-1"
              />
              <label
                for="acceptance"
                class="block text-xs desktop:text-sm text-gray-dark"
                v-html="data.privacyText"
              >
              </label>
            </li>
          </ul>
        </form>
        <div class="w-full">
          <button
            class="text-sm ml-auto w-auto block text-white uppercase px-10 py-3 rounded-full bg-blue-main hover:bg-gray-light hover:text-black duration-300 mt-3 mb-4 tablet:mb-3"
            @click="sendForm()"
            ref="sendButton"
            v-html="data.buttonText ? data.buttonText : 'Send'"
          ></button>
        </div>
      </div>
      <Transition name="confirmShow" @after-enter="onConfirmTransitionAfter()">
        <div
          v-show="mailSent"
          class="absolute inset-0 flex flex-col justify-center items-center bg-white"
        >
          <div
            class="w-24 desktop:w-[175px] aspect-square flex justify-center items-center rounded-full border-4 border-green-main mb-7 desktop:mb-[50px]"
          >
            <svg
              class="w-12 h-12 desktop:w-auto desktop:h-auto"
              width="74"
              height="51"
              viewBox="0 0 74 51"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                ref="svgPath"
                class="svg-check stroke-blue-main"
                d="M4 25.5L26 47L70 4"
                stroke-width="8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div
            class="text-3xl tablet:text-4xl desktop:text-5xl mb-5 desktop:mb-10 text-center font-semibold"
          >
            Thank you for Your message.
          </div>
          <div
            class="text-lg desktop:text-xl mb-7 desktop:mb-[50px] text-center font-semibold"
          >
            We will reply soon
          </div>
          <div v-if="$slots.buttonBackText">
            <ButtonMain
              class="mb-2.5 desktop:mb-6 text-white !w-auto"
              :link="'https://www.webo.agency/'"
            >
              <ContentSlot :use="$slots.buttonBackText" />
            </ButtonMain>
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script>
import http from 'http'
import section_content from './content-static.vue'

export default {
  name: 'section_two_column_contact',
  props: {
    data: Object,
  },
  data() {
    return {
      mailSent: false,
    }
  },
  methods: {
    isEmailValid(email) {
      return String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
        ? true
        : false
    },
    isPhoneValid(phone) {
      return String(phone).match(
        /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
      )
        ? true
        : false
    },
    checkRequired(form) {
      const formData = new FormData(form)
      const requiredInputs = form.querySelectorAll('[required="required"]')
      let validityArray = []
      for (const input of requiredInputs.values()) {
        validityArray.push(input.checkValidity())
      }
      if (formData.get('tel')) {
        validityArray.push(this.isPhoneValid(formData.get('tel')))
      }
      return validityArray.every((el) => el === true)
    },
    sendForm() {
      const formContainer = document.forms.contactForm
      const formData = new FormData(formContainer)
      const sendBtn = this.$refs['sendButton']?.$el
      const vm = this
      console.log(
        formData.get('mail') &&
          this.checkRequired(formContainer) &&
          this.isEmailValid(formData.get('mail'))
      )
      if (
        formData.get('mail') &&
        this.checkRequired(formContainer) &&
        this.isEmailValid(formData.get('mail'))
      ) {
        sendBtn?.setAttribute('disabled', '')
        // console.log(formData)
        this.formRequest(formData)
          .then((result) => {
            console.log(result)
            vm.mailSent = true
            sendBtn?.removeAttribute('disabled')
          })
          .catch((error) => {
            console.error('Contact form could not be send', error)
            sendBtn?.removeAttribute('disabled')
          })
      } else {
        console.log('Fulfill required fields correctly')
      }
    },
    async formRequest(data) {
      return await fetch('/api/contact', {
        method: 'POST',
        body: data,
      })
    },
    onConfirmTransitionAfter() {
      this.$refs['svgPath'].classList.add('svg-check-animation')
    },
  },
  components: { section_content },
}
</script>
