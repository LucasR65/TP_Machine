<template>
    <div class="dish-item">
      <h4>{{ dish.name }}</h4>
      <p>{{ dish.description }}</p>
      <button class="button" @click="$emit('add', dish)">Ajouter au panier</button>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { defineProps, onMounted } from 'vue'
  
  const props = defineProps<{
    dish: { id: number; name: string; description: string }
  }>()
  
  onMounted(() => {
    console.log('DishItem monté')
  })
  </script>
  
  <style scoped>
  .dish-item {
    margin-bottom: 1rem;
    padding: 0.5rem;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  .dish-item button {
    margin-top: 0.5rem;
    padding: 0.4rem;
    font-size: 0.9rem;
  }
  </style>
  