<template>
    <nav class="navbar">
    <h1 class="title">HomeMade</h1>
    <div class="nav-items">
      <router-link to="/" class="nav-item">Accueil</router-link>
      <router-link to="/chefs" class="nav-item">Cuisiniers</router-link>
      <router-link to="/cart" class="nav-item">Panier</router-link>
      <router-link to="/login" class="nav-item">Connexion</router-link>
      <router-link to="/register" class="nav-item">Inscription</router-link>
    </div>
    </nav>
  </template>
  
  <script lang="ts" setup>
  
 
  </script>
  
  <style scoped>
  .navbar {
    display: flex;
    flex-wrap: wrap;
    background-color: #f3a2a2;
    padding: 0.5rem;
    width: 100%;
  }
  .nav-items {
    display: flex;
    gap: 5rem;
    margin-left: auto;
    justify-content: space-around;
    font-size: larger;
  }

  .nav-item {
    color: #fff;
    text-decoration: none;
    margin: 0.5rem;
  }
  
  .nav-item:hover {
    text-decoration: underline;
    color: rgb(27, 221, 255);
    transition: 0.5s ease-out;;
  }
  </style>
  