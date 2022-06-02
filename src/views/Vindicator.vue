<template>
  <div>Welcome to {{ name }}</div>
</template>

<script lang="ts" setup>
defineProps<{
  name: string;
}>();
</script>
