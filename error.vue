<template>
  <NuxtLayout name="default">
    <div class="flex flex-col items-center">
      <span class="text-9xl">404</span><span>Strona nie znaleziona</span>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
  error: Object as () => NuxtError
})
</script>
