<template>
  <div>
    <h1 class="text-2xl text-center">{{ name }}</h1>
    <div
      v-if="FirstStance && SecondStance"
      class="flex flex-wrap gap-3 justify-center my-3"
    >
      <FirstStance />
      <SecondStance />
    </div>
    <BuildTraits v-if="traits" :traits="traits" />
    <div id="stuff" class="flex gap-2 mt-2 justify-center">
      <BuildCode :code="code" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Ref, ref, shallowRef } from "vue";
import correctBuildTemplate from "../../utils/correctBuildTemplate";
import BuildCode from "../BuildCode.vue";
import { getStanceByNumber } from "../../utils/stances";
import BuildTraits from "../BuildTraits.vue";

const props = defineProps<{
  name: string;
  code: string;
}>();

const FirstStance = shallowRef(null);
const SecondStance = shallowRef(null);
const traits: Ref<{ id: number; traits: number[] }[]> = ref([]);

correctBuildTemplate(props.code).then((build) => {
  traits.value = build.specializations;
  FirstStance.value = getStanceByNumber(build.specific[0]);
  SecondStance.value = getStanceByNumber(build.specific[1]);
});
</script>
