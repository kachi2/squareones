import { reactive, ref, computed } from 'vue'
import { defineStore } from 'pinia'
import api from '@/stores/Helpers/axios'
import jsonData from './StartCompany_jsonData.json'


export const useStartCompanyStore = defineStore('startCompanyStore', () => {
    const currentStage = ref<number>(0)
    const isActiveMenu = (stage: number) => currentStage.value == stage

    const businessNatures = ref<any[]>([])
    const companyInProgress = ref<any>()
    const countries = ref<any[]>([])
    const checkedEntityCapacity = ref<any[]>([])

    // hard-coded data
    const employmentStatusList = jsonData.employmentStatusList
    const currencies = jsonData.currencies
    const sourceOfFunds = jsonData.sourceOfFunds
    const initialSourceOfWealth = jsonData.initialSourceOfWealth
    const ongoingSourceOfIncome = jsonData.ongoingSourceOfIncome
    const levelOfActivity = jsonData.levelOfActivity
    const natureOfActivity = jsonData.natureOfActivity

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
        // { stage: 10, name: 'Uploads' },
        { stage: 10, name: 'Summary' },
        { stage: 11, name: 'Sign' },
        { stage: 12, name: 'Pay' },
    ]

    function switchStage(command: string, number?: number) {
        currentStage.value = !number ? Math.max(0, currentStage.value + (command === '+' ? 1 : -1)) : number;
        window.scrollTo(0, 0);

    }

    const getCompanyInProgress = async () => {
        try {
            const { data } = await api.companyProgress();
            companyInProgress.value = data?.company ?? ''
            console.log(companyInProgress.value);

            decideStageToShow()
        } catch (error) {
            console.log(error);
        }
    }

    function decideStageToShow() {
        const data = companyInProgress.value
        if (!data) currentStage.value = 2
        else if (!data.description) currentStage.value = 3
        else if (!data.address) currentStage.value = 4
        else if (!data.company_entity) currentStage.value = 5
        else if (!data.owner_share.length || data.owner_share == null) currentStage.value = 6
        else if (!data.fund_source.length || data.fund_source == null) currentStage.value = 8
        else if (!data.activity) currentStage.value = 9
        else currentStage.value = 10

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
            businessNatures.value = data.data?.business_nature ?? []
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
        countries,
        checkedEntityCapacity,
        employmentStatusList,
        currencies,
        sourceOfFunds,
        initialSourceOfWealth,
        ongoingSourceOfIncome,
        levelOfActivity,
        natureOfActivity,
    }
})
