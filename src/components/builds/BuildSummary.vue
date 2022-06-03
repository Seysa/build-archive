<template>
  <router-link
    class="text-2xl p-2 hover:bg-gray-800 rounded-lg"
    :to="`/builds/${name}/${build.name}`"
  >
    <h3 class="ml-2">{{ build.name }}</h3>
    <span class="text-lg text-gray-400"
      >{{ build.value.amulet }} - {{ build.value.rune }}</span
    ></router-link
  >
</template>

<script lang="ts" setup>
import { Build } from "../../utils/builds";
defineProps<{
  build: { value: Build; name: string };
  name: string;
}>();
</script>
