<template>
  <div>
    <form
      class="flex flex-col gap-4 justify-center"
      @submit.prevent="showBuild"
    >
      <div class="flex justify-center items-center gap-2">
        <span>Enter your code: </span
        ><input
          type="text"
          class="p-1 rounded w-[37rem]"
          v-model="buildCode"
          placeholder="[&XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX=]"
        />
      </div>
      <button
        class="p-2 bg-black rounded text-white hover:bg-opacity-80 transition-all w-1/3 mx-auto"
      >
        Submit
      </button>
    </form>
    <div id="result" class="whitespace-pre-line flex justify-center mt-2">
      <code v-if="outputHTML" class="bg-black text-white px-4 py-1 rounded">{{
        outputHTML
      }}</code>
      <h2 v-else-if="clicked">Chargement...</h2>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import correctBuildTemplate from "../utils/correctBuildTemplate";
const buildCode = ref(
  "[&DQkJGwMZRT3cEdwR1BEGEgYSKxIrEtQRyhHKEQcCAgMGEisS1BEAAAAAAAA=]"
);

const outputHTML = ref("");
const clicked = ref(false);

async function showBuild() {
  clicked.value = true;
  const array: string[] = [];
  console.log("Treating build", buildCode.value);
  const build = await correctBuildTemplate(buildCode.value);
  console.log("Corrected build", build);
  build.specializations.forEach((trait) => {
    array.push(`data-armory-${trait.id}-traits="${trait.traits.join(",")}"`);
  });
  const dataArmoryIds = build.specializations.map((el) => el.id).join(",");
  outputHTML.value = `<div
  data-armory-embed="specializations"
  data-armory-ids="${dataArmoryIds}"
  ${array.join("\n")}
  ></div>`;
}
</script>
