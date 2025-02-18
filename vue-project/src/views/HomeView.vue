<template>
  <div class="home">
    <h1 class="title">Bienvenue sur HomeMade</h1>
    <p v-if="authStore.isAuthenticated">
      Utilisateur connecté : {{ authStore.user.name }}
    </p>
    <nav>
      <router-link to="/chefs">Voir les cuisiniers</router-link>
    </nav>
  </div>
</template>

<script lang="ts" setup>
import { useAuthStore } from '../stores/authen'

const authStore = useAuthStore()


</script>

<style scoped>
.home {
  padding: 1rem;
}
</style>
