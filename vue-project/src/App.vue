<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script lang="ts" setup>
import Navbar from './components/Navbar.vue'
import './assets/base.css'
</script>