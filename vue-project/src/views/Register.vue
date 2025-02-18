<!-- src/views/RegisterPage.vue -->
<template>
    <div class="register">
      <h2 class="title">Inscription</h2>
      <form @submit.prevent="handleRegister">
        <div>
        <input class="input"  type="text" v-model="name" placeholder="Nom complet" required />
        <input class="input"  type="text" v-model="username" placeholder="Nom d'utilisateur" required />
        <input class="input"  type="password" v-model="password" placeholder="Mot de passe" required />
        </div>

        <button class="button" type="submit">S'inscrire</button>
      </form>
      <p>
        Déjà inscrit ? <router-link to="/login">Se connecter</router-link>
      </p>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref, onMounted } from 'vue'
  import { useRouter } from 'vue-router'
  
  const name = ref('')
  const username = ref('')
  const password = ref('')
  
  const router = useRouter()
  
  const handleRegister = () => {
    alert('Inscription faite(pas vrai en vrai, faut se connect avec les user dans le json).')
    router.push('/login')
  }
  
  
  </script>
  
  <style scoped>
  .register {
    padding: 1rem;
    max-width: 400px;
    margin: 2rem auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  
  .register input {
    padding: 0.5rem;
    font-size: 1rem;
  }
  
  .register button {
    padding: 0.5rem;
    font-size: 1rem;
    cursor: pointer;
  }
  
  .register p {
    text-align: center;
  }
  </style>
  