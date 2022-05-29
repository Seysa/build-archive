<template>
  <div class="flex gap-4">
    <ItemSlot :name="weapon.name" :id="weapon.id" />
    <ItemSlot id="-1" />
  </div>
</template>

<script lang="ts" setup>
import ItemSlot from "../ItemSlot.vue";
import { weapons } from "../../../utils/weapons";

const props = defineProps<{
  name: string;
}>();
const weapon = (weapons as Record<string, { name: string; id: string }>)[
  props.name
];
</script>
