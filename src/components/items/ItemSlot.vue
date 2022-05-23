<template>
  <div
    data-armory-embed="items"
    :data-armory-ids="id"
    data-armory-blank-text="ID not found"
  ></div>
  <small v-if="name">{{ name }}</small>
</template>

<script lang="ts" setup>
defineProps<{
  name: string;
  id: string;
}>();
</script>
