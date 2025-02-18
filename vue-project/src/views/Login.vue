<template>
    <div class="login">
      <h2 class="title">Connexion</h2>
      <form @submit.prevent="handleLogin">
        <div>
            <input class="input"  type="text" v-model="username" placeholder="Nom d'utilisateur" required />
        <input class="input"  type="password" v-model="password" placeholder="Mot de passe" required />
        </div>
        
        <button class="button" type="submit">Se connecter</button>
      </form>
      <p>
        Vous n'avez pas de compte ?
        <router-link to="/register">Créer un compte</router-link>
      </p>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref, onMounted } from 'vue'
  import { useRouter } from 'vue-router'
  import { useAuthStore } from '../stores/authen'
  import users from '../data/users.json'
  
  const username = ref('')
  const password = ref('')
  
  const router = useRouter()
  const authStore = useAuthStore()
  
  const handleLogin = () => {
    const user = (users as Array<{ id: number; username: string; password: string; name: string }>).find(
      (u) => u.username === username.value && u.password === password.value
    )
    if (user) {
      authStore.login({ id: user.id, name: user.name })
      router.push('/')
    } else {
      alert('Identifiants incorrects')
    }
  }
  

  </script>
  
  <style scoped>
  .login {
    padding: 1rem;
    max-width: 400px;
    margin: 2rem auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  
  .login input {
    padding: 0.5rem;
    font-size: 1rem;
  }
  
  .login button {
    padding: 0.5rem;
    font-size: 1rem;
    cursor: pointer;
  }
  
  .login p {
    text-align: center;
  }
  </style>
  