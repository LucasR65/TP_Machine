<template>
    <div class="chefs-list">
      <h2>Liste des cuisiniers</h2>
      <div class="grid">
        <ChefCard
          v-for="chef in chefs"
          :key="chef.id"
          :chef="chef"
          @select="goToChef"
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
    { id: 1, name: 'Chef Aber' },
    { id: 2, name: 'Chef Bartol' },
  ])
  
  const goToChef = (chefId: number) => {
    router.push({ name: 'Chef', params: { id: chefId } })
  }
  </script>
  
  <style scoped>
  .grid {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
  </style>