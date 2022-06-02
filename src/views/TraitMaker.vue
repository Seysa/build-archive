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
          class="p-1 rounded w-[37rem] text-black"
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
    <div id="result" class="flex flex-col justify-center mt-2">
      <h2 class="text-red-500 text-2xl text-center" v-if="invalidCode">
        Code is invalid
      </h2>
      <div v-if="outputHTML" class="flex flex-col gap-4">
        <h3 class="text-4xl">HTML</h3>
        <pre class="bg-black text-white px-4 py-1 rounded">{{
          outputHTML
        }}</pre>
        <h3 class="text-4xl">JSON</h3>
        <pre id="JSON" class="bg-black text-white px-4 py-1 rounded block">{{
          outputJSON
        }}</pre>
      </div>
      <h2 v-else-if="clicked && !invalidCode">Chargement...</h2>
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
const outputJSON = ref("");
const invalidCode = ref(false);
const clicked = ref(false);

async function showBuild() {
  clicked.value = true;
  const traitsAttributes: string[] = [];
  try {
    const build = await correctBuildTemplate(buildCode.value);

    build.specializations.forEach((trait) => {
      traitsAttributes.push(
        `data-armory-${trait.id}-traits="${trait.traits.join(",")}"`
      );
    });
    const dataArmoryIds = build.specializations.map((el) => el.id).join(",");
    outputHTML.value = `<div
  data-armory-embed="specializations"
  data-armory-ids="${dataArmoryIds}"
  ${traitsAttributes.join("\n  ")}
></div>`;
    outputJSON.value = JSON.stringify(build, null, 4);

    console.log("html", outputHTML);
    console.log("json", outputJSON);
  } catch (e) {
    outputHTML.value = "";
    outputJSON.value = "";
    invalidCode.value = true;
  }
}
</script>
