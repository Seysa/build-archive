<template>
  <div
    class="bg-black p-2 items-center rounded-xl max-w-fit mx-auto flex gap-2"
  >
    <span class="text-white p-1 bg-stone-800 rounded">{{ code }}</span>
    <button
      @click="copyCodeInClipboard"
      class="bg-white hover:bg-gray-300 text-black p-1 rounded transition-colors"
      :class="{ 'bg-gray-500': justCopied }"
    >
      {{ buttonText }}
    </button>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from "@vue/reactivity";

const justCopied = ref(false);
let currentTimeout = 0;
const props = defineProps<{
  code: string;
}>();

const buttonText = computed(() => (justCopied.value ? "Copied!" : "Copy"));

function copyCodeInClipboard() {
  navigator.clipboard.writeText(props.code);
  justCopied.value = true;
  if (currentTimeout) clearTimeout(currentTimeout);
  currentTimeout = setTimeout(() => {
    justCopied.value = false;
  }, 3000);
}
</script>
