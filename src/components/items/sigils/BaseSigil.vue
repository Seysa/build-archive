<template>
  <ItemSlot :id="sigil.id" name="Sigil" :size="46" />
</template>

<script lang="ts" setup>
import { Sigil } from "../../../utils/stuff";
import ItemSlot from "../ItemSlot.vue";

defineProps<{
  sigil: Sigil;
}>();
</script>
