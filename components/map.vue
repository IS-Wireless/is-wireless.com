<template>
  <div class="mb-10 ">
    <GmapMap
      :center="{ lat: 10, lng: 10 }"
      :zoom="7"
      map-type-id="terrain"
      class="w-full h-[600px]"
    />
  </div>
</template>

<script>

export default {
  name: 'Map',
}
</script>

<style></style>
