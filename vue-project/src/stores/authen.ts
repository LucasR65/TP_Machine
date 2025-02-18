import { defineStore } from 'pinia'

export interface User {
  id: number
  name: string
}

export const useAuthStore = defineStore('auth', {
  state: () => {

    const storedAuth = localStorage.getItem('auth')
    if (storedAuth) {
      const parsed = JSON.parse(storedAuth)

      return {
        isAuthenticated: parsed.isAuthenticated,
        user: parsed.user as User | null,
      }
    }
    
    return {
      isAuthenticated: false,
      user: null as User | null,
    }
  },
  actions: {
    login(user: User) {
      this.user = user
      this.isAuthenticated = true

      localStorage.setItem('auth', JSON.stringify({ isAuthenticated: this.isAuthenticated, user: this.user }))
    },
    logout() {

      this.user = null
      this.isAuthenticated = false
      localStorage.removeItem('auth')

    },
  },
})


