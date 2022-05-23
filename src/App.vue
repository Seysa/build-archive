<template>
  <div class="container mx-auto">
    <RevenantVindicatorZerk />
  </div>
  <TestingComponents />
</template>
<script setup lang="ts">
import RevenantVindicatorZerk from "./components/builds/RevenantVindicatorZerk.vue";
import TestingComponents from "./components/TestingComponents.vue";
</script>

<style>
#app {
  min-height: 100vh;
  background: url("../background.jpg");
}
</style>
