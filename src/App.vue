<template>
  <div class="container mx-auto">
    <RevenantVindicatorZerk />
    <div class="w-full border-t-2 border-black"></div>
    <h1 class="text-4xl text-center mb-5">TESTS</h1>
    <div class="flex flex-wrap justify-center gap-5">
      <SkillsShiro />
      <SkillsKalla />
      <SkillsMallyx />
      <SkillsGlint />
      <SkillsAlliance />
    </div>
  </div>
</template>
<script setup lang="ts">
import RevenantVindicatorZerk from "./components/builds/RevenantVindicatorZerk.vue";
import SkillsShiro from "./components/skills/SkillsShiro.vue";
import SkillsKalla from "./components/skills/SkillsKalla.vue";
import SkillsMallyx from "./components/skills/SkillsMallyx.vue";
import SkillsGlint from "./components/skills/SkillsGlint.vue";
import SkillsAlliance from "./components/skills/SkillsAlliance.vue";
</script>

<style>
#app {
  min-height: 100vh;
  background: url("../background.jpg");
}
</style>
