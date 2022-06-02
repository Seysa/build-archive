<template>
  <BaseBuild :build="build" />
</template>

<script lang="ts" setup>
import BaseBuild from "../components/builds/BaseBuild.vue";
import { herald } from "../utils/builds";

const props = defineProps<{
  name: string;
}>();

const build = herald[props.name];
</script>
