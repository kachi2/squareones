import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

export const useTemplateStore = defineStore('templateStore', () => {
  const sidebarWidth = ref('220px')
  const darkColor = '#0f172a' //0f172a //212935
  const lightColor = '#fff'
  const border = '#ccc'
  // const cardBg = '#1e293b'
  const lightColor2 = 'rgb(245, 246, 248)'
  const appMode = useStorage('squreOne#appMode', 'light')
  // const bgColor = computed(() => appMode.value == 'light' ? 'rgb(245, 246, 248)' : '#212935')
  const bgColor = computed(() => appMode.value == 'light' ? lightColor : darkColor)
  const cardColor = computed(() => appMode.value == 'light' ? lightColor : darkColor)
  const textColor = computed(() => appMode.value == 'light' ? darkColor : lightColor)
  const borderInDark = computed(() => appMode.value == 'light' ? '#ccc' : '#8a8787')
  const accountTemplateBg = computed(() => appMode.value == 'light' ? '#f5f6f8' : '#0f172acc')
  const cardBg = computed(() => appMode.value == 'light' ? lightColor : '#1e293b')
  const cardTextColor = computed(() => appMode.value == 'light' ? '#111' : '#94a3b8')
  return { sidebarWidth, appMode, bgColor, textColor, borderInDark, cardColor, border, accountTemplateBg, cardBg, cardTextColor }
})
