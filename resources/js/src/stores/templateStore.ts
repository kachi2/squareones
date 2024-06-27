import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

export const useTemplateStore = defineStore('templateStore', () => {
  // const sidebarWidth = ref('220px')
  const sidebarIsCollapsed = ref<boolean>(false)
  const darkColor = '#0f172a'
  const lightColor = '#fff'
  const border = '#ccc'
  const appMode = useStorage('squreOne#appMode', 'light')
  const sidebarWidth = computed(() => sidebarIsCollapsed.value ? '50px' : '220px')
  const bgColor = computed(() => appMode.value == 'light' ? lightColor : darkColor)
  const cardColor = computed(() => appMode.value == 'light' ? lightColor : darkColor)
  const textColor = computed(() => appMode.value == 'light' ? darkColor : lightColor)
  const borderInDark = computed(() => appMode.value == 'light' ? '#ccc' : '#8a8787')
  const accountTemplateBg = computed(() => appMode.value == 'light' ? '#f5f6f8' : '#0f172acc')
  const cardBg = computed(() => appMode.value == 'light' ? lightColor : '#1e293b')
  const cardTextColor = computed(() => appMode.value == 'light' ? '#111' : '#94a3b8')

  const sideBarToggleCollapse = () => {
    sidebarIsCollapsed.value = !sidebarIsCollapsed.value
  }
  return {
    sidebarWidth,
    appMode, bgColor,
    textColor, borderInDark,
    cardColor, border,
    accountTemplateBg,
    cardBg, cardTextColor,
    sidebarIsCollapsed,
    sideBarToggleCollapse
  }
})
