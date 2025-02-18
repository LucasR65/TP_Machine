<template>
    <div class="dish-item">
      <h4>{{ dish.name }}</h4>
      <p>{{ dish.description }}</p>
      <button @click="$emit('add', dish)">Ajouter au panier</button>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { onMounted, defineProps } from 'vue'
  
  const props = defineProps<{
    dish: { id: number; name: string; description: string }
  }>()
  

  </script>
  
  <style scoped>
  .dish-item {
    margin-bottom: 1rem;
  }
  </style>
  