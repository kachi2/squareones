import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
import type { tasksPriorityTypes } from '@/stores/interfaces'

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
  const disabledBg = computed(() => appMode.value == 'light' ? '#e9ecef' : '#212935f2')
  const easyTableHeaderBG = computed(() => appMode.value == 'light' ? '#f5f6f8' : '')
  const taskPriorityColor = (priority: tasksPriorityTypes) => {
    let color: string = 'black'
    switch (priority) {
      case 'high':
        color = 'red';
        break;
      case 'medium':
        color = '#f8ce09';
        break;
      case 'low':
        color = 'black';
        break;

      default:
        break;
    }

    return color
  }

  const taskStatusColor = (priority: any) => {
    let color: string = 'black'
    switch (priority) {
      case 'TO-DO':
        color = 'secondary';
        break;
      case 'DOING':
        color = 'info';
        break;
      case 'COMPLETE':
        color = 'success';
        break;

      default:
        break;
    }

    return color
  }

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
    disabledBg,
    easyTableHeaderBG,
    sideBarToggleCollapse,
    taskPriorityColor,
    taskStatusColor
  }
})
