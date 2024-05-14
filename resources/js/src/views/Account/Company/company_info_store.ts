import { reactive, ref, computed } from 'vue'
import { defineStore } from 'pinia'


export const useCompanyInfoStore = defineStore('companyInfoStore', () => {
    const currentPanel = ref<number>(1)

    function switchForm(num: number) {
        currentPanel.value = num
        window.scrollTo(0, 0);
    }

    return {
        currentPanel,
        switchForm
    }
})
