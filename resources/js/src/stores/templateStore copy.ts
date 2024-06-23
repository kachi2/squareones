import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

export const useTemplateStore = defineStore('templateStore', () => {
  const sidebarWidth = ref('220px')
  const appMode = useStorage('squreOne#appMode', 'light')
  const bgColor = computed(() => appMode.value == 'light' ? '#fff' : '#212935')
  const textColor = computed(() => appMode.value == 'light' ? '#111' : '#fff')
  const cardBorder = computed(() => appMode.value == 'light' ? '' : '#8a8787')
  return { sidebarWidth, appMode, bgColor, textColor, cardBorder }
})
