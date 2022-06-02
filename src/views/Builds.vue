<template>
  <div>
    <h1 class="text-4xl flex gap-2 mb-4"><LogoCore /> Revenant</h1>
    <div class="ml-2">
      <h2 class="text-3xl flex gap-2"><LogoVindicator />Vindicator</h2>
      <div class="ml-[0.93rem] pl-2 border-l-2 border-orange-500 my-2">
        <router-link to="/builds/vindicator/full-zerk" class="text-2xl block"
          >full zerk</router-link
        >
        <router-link to="/builds/vindicator/50-50-zerk" class="text-2xl block"
          >50-50 zerk</router-link
        >
        <router-link to="/builds/vindicator/tanky-zerk" class="text-2xl block"
          >tanky zerk</router-link
        >
      </div>
      <h2 class="text-3xl flex gap-2"><LogoHerald /> Herald</h2>
      <div class="ml-[0.93rem] pl-2 border-l-2 border-sky-500 my-2">
        <router-link to="/builds/herald/power" class="text-2xl block"
          >power</router-link
        >
        <router-link to="/builds/herald/power" class="text-2xl block"
          >condi</router-link
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import LogoVindicator from "../components/logos/LogoVindicator.vue";
import LogoHerald from "../components/logos/LogoHerald.vue";
import LogoCore from "../components/logos/LogoCore.vue";
</script>
