<template>
  <div id="app">
    <Navbar />
    <main class="container">
      <router-view />

    </main>
  </div>
</template>

<script lang="ts" setup>
import Navbar from './components/Navbar.vue'
import './assets/base.css'
import 'bulma/css/bulma.min.css'
</script>

<style>
  #app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    border: 1px solid #ccc;
    box-shadow: 2px 2px 5px #ccc;
    background-color: rgb(241, 236, 236);

  }
</style>