<template>
  <div class="flex flex-col items-center">
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
