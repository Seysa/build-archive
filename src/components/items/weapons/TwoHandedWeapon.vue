<template>
  <div class="flex">
    <OneWeapon :weapon="weapon" />
    <ItemSlot id="-1" />
  </div>
</template>

<script lang="ts" setup>
import ItemSlot from "../ItemSlot.vue";
import { Weapon } from "../../../utils/stuff";
import OneWeapon from "./OneWeapon.vue";

defineProps<{
  weapon: Weapon;
}>();
</script>
