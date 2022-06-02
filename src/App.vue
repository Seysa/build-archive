<template>
  <img id="background" :src="background" class="w-full h-full fixed -z-10" />
  <NavBar />
  <main>
    <h1 class="text-4xl text-white font-bold text-center p-2">
      Garion's builds
    </h1>
    <div class="container mx-auto bg-gray-900 shadow-xl p-2 rounded text-white">
      <router-view></router-view>
    </div>
  </main>
</template>

<script lang="ts" setup>
import background from "./assets/background.jpg";
import NavBar from "./components/NavBar.vue";
</script>
