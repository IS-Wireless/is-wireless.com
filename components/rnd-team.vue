<template>
  <div class="w-full">
    <h3
      class="text-center pt-8 pb-[60px] text-2xl tablet:text-3xl"
      v-html="data.default.title"
    ></h3>
    <div class="flex flex-col">
      <RndPerson
        v-for="person in data.team"
        :key="person.name"
        :data="person"
      />
    </div>
  </div>
</template>

<script>
import RndPerson from './rnd-person.vue'

export default {
  name: 'RndTeam',
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
