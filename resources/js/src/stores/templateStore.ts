import { ref, computed, reactive, toRefs } from 'vue'
import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
import type { tasksPriorityTypes } from '@/stores/interfaces'

export const useTemplateStore = defineStore('templateStore', () => {
  // const sidebarWidth = ref('220px')
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

  const sidebarIsCollapsed = ref<boolean>(false)
  const sideBarToggleCollapse = () => {
    sidebarIsCollapsed.value = !sidebarIsCollapsed.value
  }

  const tasks = reactive<{
    taskPriorityColor: any,
    taskStatusColor: any,
    commentsModalIsClicked: boolean,
    currentTaskObj: any,
    currentTaskComments: any[],
    currentUserType: string,
  }>({
    taskPriorityColor: (priority: tasksPriorityTypes) => {
      let color: string;
      if (priority == 'high') color = 'red';
      else if (priority == 'medium') color = '#f8ce09';
      else color = 'black';
      return color
    },

    taskStatusColor: (status: any) => {
      let color: string
      if (status == 'TO-DO') color = 'secondary';
      else if (status == 'DOING') color = 'info';
      else if (status == 'COMPLETE') color = 'success';
      else color = 'dark';
      return color
    },

    commentsModalIsClicked: false,
    currentTaskObj: {},
    currentTaskComments: [],
    currentUserType: ''
  }
  )

  function openTaskCommentModal(task: any, usertype: string) {
    tasks.commentsModalIsClicked = !tasks.commentsModalIsClicked
    tasks.currentTaskObj = task;
    tasks.currentUserType = usertype;
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
    ...toRefs(tasks),
    openTaskCommentModal
  }
})
