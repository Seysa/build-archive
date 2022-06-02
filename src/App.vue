<template>
  <nav class="flex justify-center gap-8 text-2xl text-white transition-all">
    <router-link to="/">Home</router-link>
    <router-link to="/traitmaker">Trait Maker</router-link>
    <router-link to="/builds">Builds</router-link>
  </nav>
  <main>
    <h1 class="text-4xl text-white font-bold text-center p-2">
      Garion's builds
    </h1>
    <div class="container mx-auto bg-gray-900 shadow-xl p-2 rounded text-white">
      <router-view></router-view>
    </div>
  </main>
</template>
<script setup lang="ts"></script>

<style>
body {
  background: url("../background.jpg");
}
nav a {
  @apply px-2;
}

nav a.router-link-exact-active {
  @apply border-b-2 border-white;
}
nav a:hover {
  @apply border-b-2 border-black;
}
</style>
