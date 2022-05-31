<template>
  <h1 class="text-2xl text-center">Tanky Vindicator Zerk</h1>
  <div class="flex flex-wrap gap-3 justify-center my-3">
    <SkillsShiro />
    <SkillsAlliance />
  </div>
  <BuildTraits v-if="traits.length" :traits="traits" />

  <div id="stuff" class="flex gap-2 mt-2 justify-center">
    <div id="weapons" class="flex items-center flex-col">
      <div id="first-weapon" class="flex my-2 border rounded">
        <TwoHandedWeapon :weapon="weapons.greatsword" />
        <BaseSigil :sigil="sigils.doom" />
        <BaseSigil :sigil="sigils.energy" />
      </div>
      <div id="second-weapon" class="flex my-2 border rounded">
        <TwoHandedWeapon :weapon="weapons.staff" />
        <BaseSigil :sigil="sigils.exploitation" />
        <BaseSigil :sigil="sigils.energy" />
      </div>
    </div>
    <div class="flex flex-col gap-1">
      <div>
        <div
          data-armory-embed="items"
          data-armory-ids="21175"
          data-armory-blank-text="ID not found"
        ></div>
        <small>Rune</small>
      </div>
      <div>
        <div
          data-armory-embed="amulets"
          data-armory-ids="8"
          data-armory-blank-text="ID not found"
        ></div>
        <small>Amulet</small>
      </div>
    </div>
  </div>
  <BuildCode :code="BUILD_CODE" />
</template>

<script lang="ts" setup>
import SkillsShiro from "../skills/SkillsShiro.vue";
import SkillsAlliance from "../skills/SkillsAlliance.vue";
import BuildCode from "../BuildCode.vue";
import TwoHandedWeapon from "../items/weapons/TwoHandedWeapon.vue";
import { weapons, sigils } from "../../utils/stuff";
import BaseSigil from "../items/sigils/BaseSigil.vue";
import BuildTraits from "../BuildTraits.vue";
import { Ref, ref } from "vue";
import correctBuildTemplate from "../../utils/correctBuildTemplate";

const BUILD_CODE =
  "[&DQkJGwMZRT3cEdwR1BEGEgYSKxIrEtQRyhHKEQcCAgMGEisS1BEAAAAAAAA=]";

const traits: Ref<{ id: number; traits: number[] }[]> = ref([]);

correctBuildTemplate(BUILD_CODE).then((build) => {
  traits.value = build.specializations;
});
</script>

<style>
#skills {
  width: 650px;
}
</style>
