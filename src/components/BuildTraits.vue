<template>
  <div
    ref="skills"
    id="skills"
    :data-armory-ids="armoryIds"
    class="flex flex-col gap-2 mx-auto"
    data-armory-embed="specializations"
  ></div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
const props = defineProps<{
  traits: { id: number; traits: number[] }[];
}>();
console.log("BuildTraits got", props.traits);
const armoryIds = props.traits.map((el) => el.id).join(",");

const skills = ref<null | HTMLElement>(null);
onMounted(() => {
  props.traits.forEach((trait) => {
    if (skills.value === null) return;
    skills.value.setAttribute(
      `data-armory-${trait.id}-traits`,
      trait.traits.join(",")
    );
  });
});
</script>
