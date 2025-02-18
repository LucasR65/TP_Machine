import { defineStore } from 'pinia'

type CartItem = {
  id: number
  name: string
  price: number
  quantity: number
}

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [] as CartItem[],
  }),
  actions: {
    // Ajouter un élément au panier (ou incrémenter sa quantité)
    addItem(item: { id: number; name: string; price: number }) {
      const existingItem = this.items.find((i) => i.id === item.id)
      if (existingItem) {
        existingItem.quantity += 1
      } else {
        this.items.push({ ...item, quantity: 1 })
      }
    },
    // Retirer un élément du panier (ou décrémenter sa quantité)
    removeItem(itemId: number) {
      const index = this.items.findIndex((i) => i.id === itemId)
      if (index !== -1) {
        if (this.items[index].quantity > 1) {
          this.items[index].quantity -= 1
        } else {
          this.items.splice(index, 1)
        }
      }
    },
  },
})