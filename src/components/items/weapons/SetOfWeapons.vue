<template>
  <div>
    <OneWeapon :name="first" />
    <OneWeapon :name="second" />
  </div>
</template>

<script lang="ts" setup>
import OneWeapon from "./OneWeapon.vue";

defineProps<{
  first: string;
  second: string;
}>();
</script>
