import { reactive, ref, computed } from 'vue'
import { defineStore } from 'pinia'
import api from '@/stores/Helpers/axios'


export const useStartCompanyStore = defineStore('startCompanyStore', () => {
    const currentStage = ref<number>(2)
    const isActiveMenu = (stage: number) => currentStage.value == stage

    const businessNatures = ref<any[]>([])
    const companyInProgress = ref<any>({})
    const countries = ref<any[]>([])

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

    function switchStage(command: string, number?: number) {
        currentStage.value = !number ? Math.max(0, currentStage.value + (command === '+' ? 1 : -1)) : number;
        window.scrollTo(0, 0);

    }

    const getCompanyInProgress = async () => {
        try {
            const { data } = await api.companyProgress();
            companyInProgress.value = data?.company ?? ''
        } catch (error) {
            console.log(error);
        }
    }

    const getCountries = async () => {
        const response = await fetch('https://restcountries.com/v3.1/all');
        if (response.ok) {
            const data = await response.json();
            let names = data.map((country: { name: any; }) => country.name.common)
            countries.value = names
        } else {
            console.error('', response.statusText);
        }
    }

    const getBusinessNatures = async () => {
        try {
            const { data } = await api.businessNature();
            businessNatures.value = data.data?.business_natiure ?? []
        } catch (error) {
            console.log(error);
        }
    }



    return {
        currentStage,
        menus,
        isActiveMenu,
        switchStage,
        getBusinessNatures,
        businessNatures,
        getCompanyInProgress,
        companyInProgress,
        getCountries,
        countries
    }
})
