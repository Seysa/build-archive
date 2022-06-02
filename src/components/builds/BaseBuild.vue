<template>
  <div>
    <h1 class="text-2xl text-center">{{ build.name }}</h1>
    <p class="text-gray-300">{{ build.description }}</p>
    <div class="flex flex-wrap gap-3 justify-center my-3">
      <FirstStance />
      <SecondStance />
    </div>
    <BuildTraits :traits="build.build.specializations" />
    <div id="stuff" class="flex gap-2 mt-2 justify-center">
      <!-- TODO: amulet and rune -->
      <BuildCode :code="build.code" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import BuildCode from "../BuildCode.vue";
import { getStanceByNumber } from "../../utils/stances";
import BuildTraits from "../BuildTraits.vue";
import { Build } from "../../utils/builds";

const props = defineProps<{
  build: Build;
}>();

const FirstStance = getStanceByNumber(props.build.build.specific[0]);
const SecondStance = getStanceByNumber(props.build.build.specific[1]);
</script>
