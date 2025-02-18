<template>
    <div class="chefs-list">
      <h2>Liste des cuisiniers</h2>
      <div class="grid">
        <ChefCard
          v-for="chef in chefs"
          :key="chef.id"
          :chef="chef"
          @select="goToChef(chef.id)"
        />
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import ChefCard from '../components/Chef.vue'
  
  const router = useRouter()
  const chefs = ref([
    { id: 1, name: 'Chef Abra'},
    { id: 2, name: 'Chef Bom' },
    { id: 3, name: 'Chef Charle' },
    { id: 4, name: 'Chef Donie' },
    ])
  
  const goToChef = (id: number) => {
    router.push({ name: 'ChefDetail', params: { id } })
  }
  
 
  </script>
  
  <style scoped>
  .grid {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
  </style>
  