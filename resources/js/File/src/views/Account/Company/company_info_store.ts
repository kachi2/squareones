import { reactive, ref, computed } from 'vue'
import { defineStore } from 'pinia'


export const useCompanyInfoStore = defineStore('companyInfoStore', () => {
    const currentForm = ref<number>(1)

    function switchForm(num: number) {
        currentForm.value = num
        window.scrollTo(0, 0);
    }

    return {
        currentForm,
        switchForm
    }
})
