<template>
    <nav class="navbar">
      <router-link to="/" class="nav-item">Accueil</router-link>
      <router-link to="/chefs" class="nav-item">Cuisiniers</router-link>
      <router-link to="/cart" class="nav-item">Panier</router-link>
      <router-link to="/login" class="nav-item">Connexion</router-link>
      <router-link to="/register" class="nav-item">Inscription</router-link>

    </nav>
  </template>
  
  <script lang="ts" setup>
  import { onMounted } from 'vue'
  
 
  </script>
  
  <style scoped>
  .navbar {
    display: flex;
    flex-wrap: wrap;
    background-color: #918383;
    padding: 0.5rem;
    width: 100%;
    justify-content: space-around;
  }
  
  .nav-item {
    color: #fff;
    text-decoration: none;
    margin: 0.5rem;
  }
  
  .nav-item:hover {
    text-decoration: underline;
  }
  </style>
  