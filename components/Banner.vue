<template>
<section class="w-full h-phonewide phone-wide:h-tabletsmall tablet-wide:h-tablet">
        
            <div
              v-swiper="swiperOptionsObject"
              class="swiper w-full h-full overflow-hidden">
              <div class="swiper-wrapper">
                <img class="swiper-slide object-cover object-top" src="https://www.is-wireless.com/wp-content/uploads/2021/02/Coverage-macro-IS-Wireless.jpg" alt="slide1" loading="eager">
                <img class="swiper-slide object-cover object-top" src="https://www.is-wireless.com/wp-content/uploads/2021/02/Indoor-IS-Wireless.jpg" alt="slide2">
                <img class="swiper-slide object-cover object-top" src="https://www.is-wireless.com/wp-content/uploads/2021/02/Campus-IS-Wireless.jpg" alt="slide3">
              
              <div class="absolute h-full w-full flex justify-center items-center flex-col text-5xl bg-black bg-opacity-40 z-50" >
                  <img class="opacity-0 duration-300 mb-12 w-4/5 phone-wide:mb-20  phone-wide:w-3/5 tablet:mb-24 tablet-wide:w-3/5 tablet-wide:mb-48 desktop:w-1/2 desktop:mb-24 " src="https://www.is-wireless.com/wp-content/uploads/2021/02/IS-Wireless-5GMadeTogether.svg" alt="5G logo">
                  <p class="opacity-0 duration-300 text-2xl tablet:text-3xl text-center text-white mb-10 tablet-wide:mb-20 tablet-wide:font-semibold px-10" >4G and 5G Mobile Networks of the Future</p>
                  <div class="opacity-0 duration-300 flex justify-evenly flex-col tablet:flex-row tablet:w-4/5 max-w-screen-phablet">
                    <a class="text-lg text-white uppercase px-10 py-2 rounded-full bg-blue-default mx-auto hover:bg-white hover:text-black duration-300 tablet:mb-0 mb-6" href="https://www.is-wireless.com/networks/">Networks</a>
                    <a class="text-lg text-white uppercase px-10 py-2 rounded-full bg-blue-default mx-auto hover:bg-white hover:text-black duration-300" href="https://www.is-wireless.com/academy/">Academy</a>
                  </div>
              </div>
              </div>


              <div tabindex="0" class="swiper-button-prev absolute top-1/2 left-0 px-6 py-4 text-white bg-black bg-opacity-30 z-20" role="button" >
                <svg
                xmlns="http://www.w3.org/2000/svg" width="16" height="28" viewBox="0 0 16 28" fill="none"  >
                <path class="text-white fill-current"
                  d="M3.05891 14.0065L15.2265 1.83892C15.6471 1.41821 15.6471 0.736143 15.2265 0.315436C14.8057 -0.105145 14.1237 -0.105145 13.703 0.315436L0.773687 13.2447C0.353107 13.6654 0.353107 14.3475 0.773687 14.7682L13.703 27.6975C14.131 28.1109 14.8131 28.099 15.2265 27.671C15.6297 27.2534 15.6297 26.5915 15.2265 26.174L3.05891 14.0065Z"
                  fill="#9F9FA1"
                />
                </svg>
              </div>
              <div tabindex="0" class="swiper-button-next absolute top-1/2 right-0 px-6 py-4 text-white bg-black bg-opacity-30 z-20" role="button">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="28"
                viewBox="0 0 16 28"
                fill="none"
              >
                <path class="text-white fill-current"
                  d="M12.9411 14.0065L0.77354 1.83892C0.352896 1.41821 0.352896 0.736143 0.77354 0.315436C1.19431 -0.105145 1.87632 -0.105145 2.29703 0.315436L15.2263 13.2447C15.6469 13.6654 15.6469 14.3475 15.2263 14.7682L2.29703 27.6975C1.86899 28.1109 1.18692 28.099 0.77354 27.671C0.37032 27.2534 0.37032 26.5915 0.77354 26.174L12.9411 14.0065Z"
                  fill="#9F9FA1"
                />
                </svg>
              </div>
            </div>

</section>
</template>

<script>

export default {
  
  data: function() {
    return {
      swiperIndex: 0,
        swiperCount: 0,
        iframeYoutubeSrc: '',
        liveURL: '',
        swiperOptionsObject: {
          spaceBetween: 0,
          direction: 'horizontal',
          effect: "fade",
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            },
          loop: true,
          
        },
      };
    },

mounted(){
  
 const content = document.querySelectorAll(".swiper .swiper-wrapper > div > *");
 Show(content.length);
  
  function Show(i){
    setTimeout(() => {
      content[content.length-i].style.opacity = 1;
    if (i > 1) {
      i--;
      Show(i);
    }
    }, 700);
  }
  
}

}





</script>


<style>
.swiper-slide{
  transition:opacity 150ms;
}

</style>
