<template>
  <div>
    <h1 class="text-4xl flex gap-2 mb-4"><LogoCore /> Revenant</h1>
    <div class="ml-2">
      <h2 class="text-3xl flex gap-2"><LogoVindicator />Vindicator</h2>
      <div class="build-container border-orange-500">
        <BuildSummary
          v-for="(value, name) in vindicator"
          :build="{ value, name }"
          name="vindicator"
          class="hover:text-orange-300"
        />
      </div>
      <h2 class="text-3xl flex gap-2"><LogoHerald /> Herald</h2>
      <div class="build-container border-sky-500">
        <BuildSummary
          v-for="(value, name) in herald"
          :build="{ value, name }"
          name="herald"
          class="hover:text-sky-300"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import LogoVindicator from "../components/logos/LogoVindicator.vue";
import LogoHerald from "../components/logos/LogoHerald.vue";
import LogoCore from "../components/logos/LogoCore.vue";
import { vindicator, herald } from "../utils/builds";
import BuildSummary from "../components/builds/BuildSummary.vue";
</script>

<style scoped>
.build-container {
  @apply ml-[0.93rem] pl-2 border-l-2  my-2 flex flex-col gap-2;
}
</style>
