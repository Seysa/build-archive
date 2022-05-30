<template>
  <div>
    <OneWeapon :weapon="first" />
    <OneWeapon :weapon="second" />
  </div>
</template>

<script lang="ts" setup>
import { Weapon } from "../../../utils/weapons";
import OneWeapon from "./OneWeapon.vue";

defineProps<{
  first: Weapon;
  second: Weapon;
}>();
</script>
