<template>
  <ItemSlot :id="weapon.id" :name="weapon.name" />
</template>

<script lang="ts" setup>
import ItemSlot from "../ItemSlot.vue";
import { Weapon } from "../../../utils/stuff";
defineProps<{
  weapon: Weapon;
}>();
</script>
