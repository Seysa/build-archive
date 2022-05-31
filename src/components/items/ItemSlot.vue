<template>
  <div
    id="item"
    class="flex flex-col items-center bg-gray-600 bg-opacity-70 text-white p-1"
  >
    <div
      data-armory-embed="items"
      :data-armory-ids="id"
      :data-armory-size="size ?? BASE_SIZE"
      data-armory-blank-text="ID not found"
    ></div>
    <small v-if="name">{{ name }}</small>
  </div>
</template>

<script lang="ts" setup>
const BASE_SIZE = 56;
defineProps<{
  name?: string;
  id: string;
  size?: number;
}>();
</script>

<style scoped>
#item {
  min-width: 7rem;
}
</style>
