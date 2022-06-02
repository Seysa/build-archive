<template>
  <div>
    <h1 class="text-4xl flex gap-2 mb-4"><LogoCore /> Revenant</h1>
    <div class="ml-2">
      <h2 class="text-3xl flex gap-2"><LogoVindicator />Vindicator</h2>
      <div class="ml-[0.93rem] pl-2 border-l-2 border-orange-500 my-2">
        <a href="/builds/vindicator/full-zerk" class="text-2xl block"
          >full zerk</a
        >
        <a href="/builds/vindicator/50-50-zerk" class="text-2xl block"
          >50-50 zerk</a
        >
        <a href="/builds/vindicator/tanky-zerk" class="text-2xl block"
          >tanky zerk</a
        >
      </div>
      <h2 class="text-3xl flex gap-2"><LogoHerald /> Herald</h2>
      <div class="ml-[0.93rem] pl-2 border-l-2 border-sky-500 my-2">
        <a href="/builds/herald/power" class="text-2xl block">power</a>
        <a href="/builds/herald/power" class="text-2xl block">condi</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import LogoVindicator from "../components/logos/LogoVindicator.vue";
import LogoHerald from "../components/logos/LogoHerald.vue";
import LogoCore from "../components/logos/LogoCore.vue";
</script>
