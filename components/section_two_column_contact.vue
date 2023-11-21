<template>
  <div
    class="text-inherit relative z-10 flex flex-col tablet-wide:flex-row w-full"
  >
    <div class="tablet-wide:flex-[1_1_50%] tablet-wide:w-1/2 tablet-wide:mr-8">
      <section_content :data="data" />
    </div>
    <div
      class="tablet-wide:flex-[1_1_50%] tablet-wide:w-1/2 tablet-wide:ml-8 flex flex-col tablet:flex-row relative"
    >
      <div
        v-if="data"
        class="max-w-[820px] text-gray-darker mb-20 tablet:mb-10 tablet:mt-20 desktopWide:shrink-0 relative"
      >
        <form
          name="contactForm"
          method="post"
          enctype="multipart/form-data"
          class="flex flex-col"
          @submit.prevent="sendForm()"
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
                class="shrink-0 mx-2.5 mt-1 cursor-pointer"
              />
              <label
                for="acceptance"
                class="block text-xs desktop:text-sm text-gray-dark cursor-pointer"
                v-html="data.privacyText"
              >
              </label>
            </li>
          </ul>
          <div class="w-full">
            <button
              class="text-sm ml-auto w-auto block text-white uppercase px-10 py-3 rounded-full bg-blue-main hover:bg-gray-light hover:text-black duration-300 mt-3 mb-4 tablet:mb-3"
              ref="sendButton"
              v-html="data.buttonText ? data.buttonText : 'Send'"
            ></button>
          </div>
        </form>
        <Transition
          name="confirmShow"
          @after-enter="onConfirmTransitionAfter()"
        >
          <div
            v-show="mailSent"
            class="absolute inset-0 flex flex-col justify-center items-center bg-white"
          >
            <div
              class="w-24 desktop:w-[175px] aspect-square flex justify-center items-center rounded-full border-4 border-blue-main mb-7 desktop:mb-[50px]"
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
            <h3
              class="block text-3xl tablet:text-4xl desktop:text-5xl mb-5 desktop:mb-10 text-center font-semibold"
            >
              {{
                data.confirmText
                  ? data.confirmText
                  : "Thank you for sending your message"
              }}
            </h3>
            <h4
              class="block text-lg desktop:text-xl mb-7 desktop:mb-[50px] text-center font-semibold"
            >
              {{
                data.confirmSubText ? data.confirmSubText : "We will reply soon"
              }}
            </h4>
            <CustomLink
              class="block tablet-wide:mx-2.5 text-sm !text-white uppercase px-7 py-3 rounded-full bg-blue-main hover:bg-gray-light hover:!text-gray-darkest duration-300 tablet:mb-0 mb-6"
              :url="'/'"
              :title="
                data.buttonBackText ? data.buttonBackText : 'Back to Homepage'
              "
              :isExternal="false"
            ></CustomLink>
          </div>
        </Transition>
      </div>
    </div>
  </div>
</template>

<script>
import section_content from "./section_content.vue";

export default {
  name: "section_two_column_contact",
  props: {
    data: Object,
  },
  data() {
    return {
      mailSent: false,
    };
  },
  methods: {
    isEmailValid(email) {
      return String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
        ? true
        : false;
    },
    checkRequired(form) {
      const formData = new FormData(form);
      const requiredInputs = form.querySelectorAll("[required]");
      let validityArray = [];
      for (const input of requiredInputs.values()) {
        validityArray.push(input.checkValidity());
      }
      return validityArray.every((el) => el === true);
    },
    sendForm() {
      const formContainer = document.forms.contactForm;
      const formData = new FormData(formContainer);
      const sendBtn = this.$refs["sendButton"];

      if (
        formData.get("mail") &&
        this.checkRequired(formContainer) &&
        this.isEmailValid(formData.get("mail"))
      ) {
        sendBtn?.setAttribute("disabled", "");
        this.formRequest(formData)
          .then(async (result) => {
            if (result.ok) {
              this.mailSent = true;
            }
            let test = await result.json()
            console.log(test);
            sendBtn?.removeAttribute("disabled");
          })
          .catch((error) => {
            console.error("Contact form could not be send", error);
            sendBtn?.removeAttribute("disabled");
          });
      } else {
        console.log("Fulfill required fields correctly");
      }
    },
    async formRequest(data) {
      return await fetch("/api/contact", {
        method: "POST",
        body: data,
      });
    },
    onConfirmTransitionAfter() {
      this.$refs["svgPath"].classList.add("svg-check-animation");
    },
  },
  components: { section_content },
};
</script>

<style scoped>
.confirmShow-enter-active,
.confirmShow-leave-active {
  transition: opacity 0.2s ease;
}

.confirmShow-enter,
.confirmShow-leave-to {
  opacity: 0;
}

.svg-check {
  transition: all 0.4s ease-in-out;
  stroke-dasharray: 100;
  stroke-dashoffset: 100;
}

.svg-check.svg-check-animation {
  stroke-dashoffset: 0;
}

button[disabled] {
  @apply opacity-30 pointer-events-none;
}
</style>
