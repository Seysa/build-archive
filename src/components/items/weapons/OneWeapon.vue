<template>
  <ItemSlot v-if="weapon" :id="weapon.id" :name="weapon.name" />
  <ItemSlot v-else id="-1" />
</template>

<script lang="ts" setup>
import ItemSlot from "../ItemSlot.vue";
import { weapons } from "../../../utils/weapons";
const props = defineProps<{
  name: string;
}>();
const weapon = weapons[props.name];
</script>
