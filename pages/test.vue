<template>
  <section_form :data="{privacyText:'Treść zgody na przetważanie danych osobowych, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',buttonText:'Wyślij',inputs: [{type: 'text',placeholder:'First and last name',required:true},{type: 'email',placeholder:'E-mail',required:true},{type: 'tel', placeholder:'Phone',required:false},{type: 'text',placeholder:'Company',required:true},{type: 'textarea',placeholder:'Your message',fullWidth: true,required:true}]}">

  </section_form>
</template>

<script>
import section_form from '../components/block-form.vue'
export default {
    components:{
        section_form
    },

}
</script>

<style>

</style>