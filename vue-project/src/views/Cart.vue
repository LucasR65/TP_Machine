<!-- src/views/CartPage.vue -->
<template>
    <div class="cart">
      <h2>Mon panier</h2>
      <p v-if="authStore.isAuthenticated">
        Bienvenue, {{ authStore.user.name }} !
      </p>
      <div v-if="cart.items.length === 0">
        Votre panier est vide.
      </div>
      <ul v-else>
        <li v-for="item in cart.items" :key="item.id">
          {{ item.name }} - {{ item.price }} €
          <button @click="remove(item.id)">Retirer</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { useCartStore } from '../stores/cart'
  import { useAuthStore } from '../stores/authen'
  
  const cart = useCartStore()
  const authStore = useAuthStore()
  
  const remove = (id: number) => {
    cart.removeItem(id)
  }
  

  </script>
  
  <style scoped>
  .cart {
    padding: 1rem;
  }
  </style>
  