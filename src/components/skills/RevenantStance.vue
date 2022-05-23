<template>
  <div class="border-2 rounded w-fit px-2 py-1 bg-gray-900 text-white">
    <div id="header" class="flex justify-between items-center gap-4">
      <div
        id="stanceFace"
        data-armory-embed="skills"
        :data-armory-ids="stance"
      ></div>
      <h2 class="text-center text-xl mr-5">{{ name }}</h2>
    </div>
    <div class="flex">
      <div
        id="heal"
        data-armory-embed="skills"
        :data-armory-ids="skills[0]"
        class="mr-3"
      ></div>
      <div
        data-armory-embed="skills"
        :data-armory-ids="skills.slice(1, 4)"
      ></div>
      <div
        id="elite"
        data-armory-embed="skills"
        :data-armory-ids="skills[4]"
        class="ml-3"
      ></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  name: string;
  skills: string[];
  stance: string;
}>();
</script>
