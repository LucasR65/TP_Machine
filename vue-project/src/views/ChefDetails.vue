<!-- src/views/ChefDetail.vue -->
<template>
    <div class="chef-detail">
      <h2>{{ chef.name }}</h2>
      <p>Spécialités : {{ chef.specialties.join(', ') }}</p>
      <h3>Ses plats</h3>
      <div v-for="dish in chef.dishes" :key="dish.id">
        <DishItem :dish="dish" @add="addToCart" />
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  import DishItem from '../components/Dish.vue'
  import { useCartStore } from '../stores/cart'
  import { useAuthStore } from '../stores/authen'
  
  const route = useRoute()
  const router = useRouter()
  const cartStore = useCartStore()
  const authStore = useAuthStore()
  
  // Simuler la récupération du chef en fonction de l'id de la route
  const chef = ref({
    id: Number(route.params.id),
    name: `Chef ${route.params.id}`,
    specialties: ['Italien', 'Français'],
    dishes: [
      { id: 1, name: 'Pâtes', description: 'Pâtes fraîches faites maison' },
      { id: 2, name: 'Pizza', description: 'Pizza au feu de bois' },
    ],
  })
  
  const addToCart = (dish: { id: number; name: string; description: string }) => {
    // Vérifier que l'utilisateur est connecté
    if (!authStore.isAuthenticated) {
      alert('Veuillez vous connecter pour ajouter des plats au panier.')
      router.push('/login')
      return
    }
    // Ajout fictif d'un plat au panier avec un prix par défaut
    cartStore.addItem({ id: dish.id, name: dish.name, price: 10 })
  }
  
 
  </script>
  
  <style scoped>
  .chef-detail {
    padding: 1rem;
  }
  </style>
  