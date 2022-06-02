<template>
  <nav class="flex justify-center gap-8 text-2xl text-white transition-all">
    <router-link to="/">Home</router-link>
    <router-link to="/builds">Builds</router-link>
    <router-link to="/traitmaker">Trait Maker</router-link>
  </nav>
</template>

<style scoped>
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
