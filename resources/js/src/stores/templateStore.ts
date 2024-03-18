import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useTemplateStore = defineStore('templateStore', () => {
  const sidebarWidth = ref('250px')
  return { sidebarWidth }
})



