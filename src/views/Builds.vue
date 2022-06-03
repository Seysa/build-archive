<template>
  <div>
    <h1 class="text-4xl flex gap-2 mb-4"><LogoCore /> Revenant</h1>
    <div class="ml-2">
      <h2 class="text-3xl flex gap-2"><LogoVindicator />Vindicator</h2>
      <div class="build-container border-orange-500">
        <router-link
          class="build hover:text-orange-300"
          v-for="(value, field) in vindicator"
          :to="`/builds/vindicator/${field}`"
        >
          {{ field }} - {{ value.amulet }} - {{ value.rune }}</router-link
        >
      </div>
      <h2 class="text-3xl flex gap-2"><LogoHerald /> Herald</h2>
      <div class="build-container border-sky-500">
        <router-link
          class="build hover:text-sky-300"
          v-for="(value, field) in herald"
          :to="`/builds/herald/${field}`"
        >
          {{ field }} - {{ value.amulet }} - {{ value.rune }}</router-link
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import LogoVindicator from "../components/logos/LogoVindicator.vue";
import LogoHerald from "../components/logos/LogoHerald.vue";
import LogoCore from "../components/logos/LogoCore.vue";
import { vindicator, herald } from "../utils/builds";
</script>

<style scoped>
.build-container {
  @apply ml-[0.93rem] pl-2 border-l-2  my-2 flex flex-col gap-2;
}
.build {
  @apply text-2xl block p-2 hover:bg-gray-800 rounded-lg;
}
</style>
