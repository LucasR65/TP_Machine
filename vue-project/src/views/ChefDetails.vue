<!-- src/views/ChefDetail.vue -->
<template>
    <div class="chef-detail">
      <h2>{{ chef.name }}</h2>
      <p>Spécialités : {{ chef.specialties.join(', ') }}</p>
      <h3>Ses plats</h3>
      <div class="container-small" v-for="dish in chef.dishes" :key="dish.id">
        <DishItem  :dish="dish" @add="addToCart" />
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref, onMounted } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  import DishItem from '../components/Dish.vue'
  import { useCartStore } from '../stores/cart'
  import { useAuthStore } from '../stores/authen'
  import { chefs } from '../data/chefs' 
  const route = useRoute()
  const router = useRouter()
  const cartStore = useCartStore()
  const authStore = useAuthStore()
  
  const chef = ref({
    id: 0,
    name: '',
    specialties: [] as string[],
    dishes: [] as { id: number; name: string; description: string }[]
  })
  

  onMounted(() => {
    const chefId = Number(route.params.id)
    const foundChef = chefs.find((c) => c.id === chefId)
  
    if (foundChef) {
      chef.value = foundChef
    } else {

        router.push('/chefs')
    }
  })
  
  const addToCart = (dish: { id: number; name: string; description: string }) => {
  if (!authStore.isAuthenticated) {
    alert('Veuillez vous connecter pour ajouter des plats au panier.')
    router.push('/login')
    return
  }

  cartStore.addItem({ id: dish.id, name: dish.name, price: 10 })
  alert(`${dish.name} a été ajouté à votre panier !`)
}
  </script>
  
  <style scoped>
  .chef-detail {
    padding: 1rem;
  }

  .container-small {
    margin-bottom: 1rem;
    background-color: aliceblue;
    border-radius: 10px;
  }
  </style>
  