import { reactive, ref, computed } from 'vue'
import { defineStore } from 'pinia'


export const useStartCompanyStore = defineStore('startCompanyStore', () => {
    const currentStage = ref<number>(2)
    const isActiveMenu = (stage: number) => currentStage.value == stage

    const menus = [
        { stage: 1, name: 'Structure' },
        { stage: 2, name: 'Name' },
        { stage: 3, name: 'Description' },
        { stage: 4, name: 'Address' },
        { stage: 5, name: 'Founders/Directors' },
        { stage: 6, name: 'Ownership' },
        { stage: 7, name: 'Company Secretary' },
        { stage: 8, name: 'Source' },
        { stage: 9, name: 'Activities' },
        { stage: 10, name: 'Uploads' },
        { stage: 11, name: 'Summary' },
        { stage: 12, name: 'Sign' },
        { stage: 13, name: 'Pay' },
    ]

    function switchStage(command: string) {
        currentStage.value = Math.max(0, currentStage.value + (command === '+' ? 1 : -1));
        window.scrollTo(0, 0);
    }

    return {
        currentStage,
        menus,
        isActiveMenu,
        switchStage
    }
})
