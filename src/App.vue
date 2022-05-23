<template>
  <div class="container mx-auto">
    <RevenantVindicatorZerk />
    <div class="w-full border-t-2 border-black"></div>
    <h1 class="text-4xl text-center mb-5">TESTS</h1>
    <div class="flex flex-wrap justify-center gap-5">
      <SkillsShiro />
      <SkillsKalla />
      <SkillsMallyx />
      <SkillsBrill />
      <SkillsAlliance />
    </div>
  </div>
</template>
<script setup lang="ts">
import RevenantVindicatorZerk from "./components/RevenantVindicatorZerk.vue";
import SkillsShiro from "./components/SkillsShiro.vue";
import SkillsKalla from "./components/SkillsKalla.vue";
import SkillsMallyx from "./components/SkillsMallyx.vue";
import SkillsBrill from "./components/SkillsBrill.vue";
import SkillsAlliance from "./components/SkillsAlliance.vue";
</script>

<style>
#app {
  min-height: 100vh;
  background: url("/background.jpg");
}
</style>
