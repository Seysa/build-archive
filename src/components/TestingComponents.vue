<template>
  <h1 class="text-4xl text-center my-5 border-t-2 border-black">TESTS</h1>
  <h2 class="section">Stances</h2>
  <div class="flex flex-wrap justify-center gap-5">
    <SkillsShiro />
    <SkillsKalla />
    <SkillsMallyx />
    <SkillsGlint />
    <SkillsAlliance />
  </div>
  <h2 class="section">Two handed weapons</h2>
  <div class="flex flex-col justify-center items-center gap-5">
    <TwoHandedWeapon v-for="weapon in twoHandedWeapons" :name="weapon" />
  </div>
  <h2 class="section">One handed weapons</h2>
  <div class="flex flex-col justify-center items-center gap-5">
    <TwoHandedWeapon v-for="weapon in oneHandedWeapons" :name="weapon" />
  </div>
</template>

<script lang="ts" setup>
import SkillsShiro from "../components/skills/SkillsShiro.vue";
import SkillsKalla from "../components/skills/SkillsKalla.vue";
import SkillsMallyx from "../components/skills/SkillsMallyx.vue";
import SkillsGlint from "../components/skills/SkillsGlint.vue";
import SkillsAlliance from "../components/skills/SkillsAlliance.vue";
import TwoHandedWeapon from "./items/weapons/TwoHandedWeapon.vue";
import weapons from "../utils/weapons.json";

const twoHandedWeapons: string[] = [];
const oneHandedWeapons: string[] = [];
Object.entries(weapons).forEach(([name, value]) => {
  console.log(name, value);
  (value.twoHanded ? twoHandedWeapons : oneHandedWeapons).push(name);
});
</script>

<style scoped>
.section {
  @apply text-4xl text-center my-5 border-t border-gray-700;
}
</style>
