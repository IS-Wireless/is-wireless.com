<template>
  <div class="w-full">
      <div class="flex flex-col tablet:flex-row tablet:items-center justify-between">
          <h4 class="text-xl text-gray-darkest">{{data.text}}</h4>
          <ul class="flex tablet:p-5 tablet:pr-0">
              <li class="block m-1.5" v-for="item in data.socials" :key="item.type">
                  <a :href="item.link" class="flex justify-center items-center w-8 h-8 hover:bg-opacity-70 transition rounded-md"
                  :class="{ 'bg-[#3b5998]':item.type === 'facebook',
                            'bg-[#55acee]':item.type === 'twitter',
                            'bg-[#0077b5]':item.type === 'linkedin',
                            'bg-black':item.type === 'mail',
                            }">
                    <svg v-if="item.type === 'facebook'" width="26" height="38" viewBox="-1 -16 26 65" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.71094 26.4011V44.2499H16.793V26.4011H23.5641L24.8531 17.9999H16.793V12.5448C16.793 10.2468 17.9191 8.00615 21.5297 8.00615H25.1941V0.857716C25.1941 0.857716 21.8684 0.290527 18.6879 0.290527C12.0469 0.290527 7.71094 4.31357 7.71094 11.5968V17.9999H0.328125V26.4011H7.71094Z" fill="white"></path></svg>                    <svg v-if="item.type === 'twitter'" width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19.963 7.953v.53c0 5.419-4.12 11.669-11.667 11.669-2.314 0-4.493-.508-6.296-1.667.322.046.646.07.97.07 1.924 0 3.706-.833 5.096-1.945a4.085 4.085 0 01-3.821-2.847 4.267 4.267 0 001.851-.07 4.1 4.1 0 01-3.287-4.027v-.047c.556.3 1.18.485 1.851.51a4.085 4.085 0 01-1.828-3.404c0-.763.208-1.39.557-1.991 2.038 2.477 5.046 4.03 8.448 4.213a4.258 4.258 0 01-.09-.95A4.09 4.09 0 0115.841 3.9c1.182 0 2.245.51 3.011 1.297a8.352 8.352 0 002.592-.995c-.3.949-.95 1.76-1.807 2.27A8.103 8.103 0 0022 5.821a8.502 8.502 0 01-2.037 2.13" fill="rgb(255, 255, 255)" fill-rule="evenodd"></path></svg>
                    <svg v-if="item.type === 'linkedin'" width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3.33 21V8.87h3.805V21H3.329zm9.75-7.006V21H9.414V11.66s-.06-2.314-.06-2.724h3.604l.122 1.664c.732-1.168 1.833-2.054 3.3-2.054 2.566 0 4.399 1.945 4.399 5.449V21h-3.667v-6.617c0-1.946-.896-2.724-1.994-2.724-1.1 0-2.038.778-2.038 2.335zM7.614 5.383A2.381 2.381 0 112.85 5.38a2.381 2.381 0 014.763.003z" fill="rgb(255, 255, 255)" fill-rule="evenodd"></path></svg>
                    <svg v-if="item.type === 'mail'" width="20" height="20" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M55 15C55 12.25 52.75 10 50 10H10C7.25 10 5 12.25 5 15V45C5 47.75 7.25 50 10 50H50C52.75 50 55 47.75 55 45V15ZM50 15L30 27.5L10 15H50ZM50 45H10V20L30 32.5L50 20V45Z" fill="white"/></svg>
                  </a>
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
    name:'BlogShare',
    props:{
        data:{
            type:Object,
            required:true
        }
    }

}
</script>

<style>

</style>