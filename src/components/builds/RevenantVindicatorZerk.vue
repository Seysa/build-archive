<template>
  <h1 class="text-2xl text-center">Tanky Vindicator Zerk</h1>
  <div class="flex flex-wrap gap-3 justify-center my-3">
    <SkillsShiro />
    <SkillsAlliance />
  </div>
  <div
    id="skills"
    class="flex flex-col gap-2 mx-auto"
    data-armory-ids="9,3,69"
    data-armory-9-traits="1810,1782,1779"
    data-armory-3-traits="1732,1760,1749"
    data-armory-69-traits="2258,2255,2238"
    data-armory-embed="specializations"
  ></div>
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
  <BuildCode
    code="[&DQkJGwMZRT3cEdwR1BEGEgYSKxIrEtQRyhHKEQcCAgMGEisS1BEAAAAAAAA=]"
  />
</template>

<script lang="ts" setup>
import SkillsShiro from "../skills/SkillsShiro.vue";
import SkillsAlliance from "../skills/SkillsAlliance.vue";
import BuildCode from "../BuildCode.vue";
import TwoHandedWeapon from "../items/weapons/TwoHandedWeapon.vue";
import { weapons, sigils } from "../../utils/stuff";
import BaseSigil from "../items/sigils/BaseSigil.vue";
</script>

<style>
#skills {
  width: 650px;
}
</style>
