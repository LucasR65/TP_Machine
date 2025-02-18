<template>
    <div class="cart">
      <h2>Panier</h2>
      <div v-if="cartStore.items.length === 0">Votre panier est vide.</div>
      <div v-else>
        <div v-for="item in cartStore.items" :key="item.id" class="cart-item">
          <span>{{ item.name }} (x{{ item.quantity }}) - {{ item.price * item.quantity }}€</span>
          <button class="button" @click="cartStore.removeItem(item.id)">Retirer un</button>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { useCartStore } from '../stores/cart'
  
  const cartStore = useCartStore()
  </script>
  
  <style scoped>
  .cart-item {
    display: flex;
    justify-content: space-between;
    margin: 0.5rem 0;
  }
  </style>