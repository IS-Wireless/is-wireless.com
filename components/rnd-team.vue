<template>
  <div v-if="data" class="w-full">
    <h3
      v-if="data.title"
      class="text-center pt-8 pb-[60px] text-2xl tablet:text-3xl"
      v-html="data.title"
    ></h3>
    <div v-if="data.person" class="flex flex-col">
      <RndPerson
        v-for="(person, index) in data.person"
        :key="index"
        :data="person"
      />
    </div>
  </div>
</template>

<script>
import RndPerson from './rnd-person.vue'

export default {
  name: 'section_person_list',
  components: {
    RndPerson,
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style></style>
