<template>
    <div v-if="data.type == 'text'" class="formText">
      <input
        class="textInput"
        type="text"
        :name="data.name ? data.name : 'text_field'"
        :required="data.required ? true : false "
        placeholder=" "
      />
    <span v-if="data.placeholder" v-html="data.placeholder"></span>
    </div>
  
    <div
      v-else-if="data.type == 'email'"
      class="formText"
      :class="{ invalid: emailInput && !isEmailValid }"
    >
      <input
        class="textInput"
        type="email"
        name="mail"
        v-model="emailInput"
        :required="data.required ? true:false"
        placeholder=" "
      />
      <span v-if="data.placeholder" v-html="data.placeholder"></span>
    </div>

    <div
      v-else-if="data.type == 'tel'"
      class="formText"
    >
      <input
        class="textInput"
        type="tel"
        name="tel"
        v-model="telInput"
        :required="data.required ? true:false"
        placeholder=" "
      />
      <span v-if="data.placeholder" v-html="data.placeholder"></span>
    </div>
  
    <div v-else-if="data.type == 'textarea'" class="formText">
      <textarea
        class="textInput min-h-[200px] max-h-[500px]"
        :name="data.name ? data.name : 'description'"
        :required="data.required ? true:false"
        placeholder=" "
      ></textarea>
      <span v-if="data.placeholder" v-html="data.placeholder"></span>
    </div>
  
    <div v-else class="formText">
      <input
        class="textInput"
        :type="data.type"
        :name="data.name ? data.name : 'unknown'"
        :required="data.required ? true:false"
        placeholder=" "
      />
      <span v-if="data.placeholder" v-html="data.placeholder"></span>
    </div>
  </template>
  
  <script>
  export default {
    name: 'FormField',
    data() {
      return {
        emailInput: "",
        telInput: "",
      };
    },
    props: {
      data:Object
    },
    computed: {
      isEmailValid() {
        return String(this.emailInput)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          )
          ? true
          : false;
      },
    },
  };
  </script>
  
  <style  lang="postcss" scoped>
  .formText {
    @apply relative max-w-[820px];
  }
  .formText .textInput {
    @apply w-full bg-gray-light border border-solid border-gray-light rounded-[5px] px-5 py-[17px] text-base desktop:text-lg transition duration-200  focus-visible:border-gray-light focus-visible:outline-none;
  }
  .formText span {
    @apply absolute left-5 top-[5px] leading-3 text-[10px] text-gray-dark italic pointer-events-none transition-all duration-200;
  }

  [required] ~ span {
    @apply flex flex-row-reverse before:content-['*'] before:inline-block before:text-blue-main before:ml-1
  }

  .formText .textInput:placeholder-shown ~ span {
    @apply top-[17px] text-base desktop:text-lg;
  }
  .formText .textInput:focus ~ span {
    @apply top-[5px] text-[10px] leading-3 text-blue-main font-semibold;
  }
  .formText.invalid span {
    @apply text-red-500 font-semibold;
  }

  [required].invalid  ~ span {
    @apply after:text-red-500
  }

  .formText.invalid input {
    @apply border-red-500;
  }
  </style>