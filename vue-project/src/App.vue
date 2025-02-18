<!-- src/App.vue -->
<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script lang="ts" setup>
import Navbar from './components/Navbar.vue'
</script>

<style>
/* Vous pouvez ajouter des styles globaux ici si nécessaire */
</style>
