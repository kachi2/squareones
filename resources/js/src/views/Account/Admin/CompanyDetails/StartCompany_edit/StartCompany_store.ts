import { reactive, ref } from 'vue'
import { defineStore } from 'pinia'
import api from '@/stores/Helpers/axios'
import jsonData from './StartCompany_jsonData.json'
import { useStorage } from '@vueuse/core'
import { Country } from 'country-state-city';

export const useStartCompanyStore = defineStore('startCompanyStore_edit', () => {
    // const currentStage = ref<number>(0)
    const currentStage: any = useStorage('squareOneStage_edit', 2, localStorage)
    const isShowingFoundersForm = ref<boolean>(false)
    const isActiveMenu = (stage: number) => currentStage.value == stage
    const idToEdit = ref<string>('')
    const currentCompanyId = ref<any>(null)
    const signatureImage = useStorage('signatureImage_s1', '')
    const isFounderSigned = ref<any>(null)
    const isKYCcompleted = ref<any>(null)
    const signatureDateSigned: any = useStorage('signatureDate_s1', '')
    const pdfAction = ref<boolean>(false)
    const pdfIsSending = ref<boolean>(false)



    const businessNatures = ref<any[]>([])
    const companyInProgress = ref<any>(null)
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
    const IDType = jsonData.IDType


    const menus = [
        // { stage: 1, name: 'Structure' },
        { stage: 2, name: 'Name', dataSource: "names" },
        { stage: 3, name: 'Description', dataSource: 'description' },
        { stage: 4, name: 'Address', dataSource: 'address' },
        { stage: 5, name: 'Founders / Directors', dataSource: 'company_entity' },
        { stage: 6, name: 'Ownership', dataSource: 'owner_share' },
        { stage: 7, name: 'Company Secretary', dataSource: 'secretary' },
        { stage: 8, name: 'Source', dataSource: 'fund_source' },
        { stage: 9, name: 'Activities', dataSource: 'activity' },
        // { stage: 10, name: 'Uploads' },
        // { stage: 10, name: 'Summary', dataSource: '' },
        // { stage: 11, name: 'Sign', dataSource: '' },
        // { stage: 12, name: 'Pay', dataSource: '' },
        // { stage: 13, name: 'KYC' },
    ]

    function switchStage(command: string, number?: number) {
        const stageToSwitchTo = !number ? Math.max(0, currentStage.value + (command === '+' ? 1 : -1)) : number;
        const stageExists = menus.find((x: any) => x.stage == stageToSwitchTo)
        currentStage.value = stageExists ? stageExists.stage : currentStage.value
        window.scrollTo(0, 0);

    }

    const getCompanyInProgress = async (isFromFounder?: string) => {
        try {
            const { data } = await api.companyProgress(currentCompanyId.value);
            // console.log(data);
            companyInProgress.value = data.company
            // if (!isFromFounder) decideStageToShow()
        } catch (error) {
            // console.log(error);
        }
    }

    function decideStageToShow() {
        const data = companyInProgress.value
        if (!data) currentStage.value = 2
        else if (!data.description) currentStage.value = 3
        else if (!data.address) currentStage.value = 4
        else if (!data.company_entity.length) currentStage.value = 5
        else if (!data.owner_share.length || !data.shares.length) currentStage.value = 6
        else if (!data.fund_source.length) currentStage.value = 8
        else if (!data.activity) currentStage.value = 9
        else currentStage.value = 10
    }

    const getCountries = async () => {
        try {
            const countriesArray = Country.getAllCountries()
            countries.value = countriesArray.map((country: any) => country.name)
        } catch (error) {
            // 
        }

        // const response = await fetch('https://restcountries.com/v3.1/all');
        // if (response.ok) {
        //     const data = await response.json();
        //     let names = data.map((country: { name: any; }) => country.name.common)
        //     countries.value = names.sort()
        // } else {
        //     console.error('', response.statusText);
        // }
    }

    function collateFounders(founders: any[]) {
        const arrayOfFounders: any[] = []
        if (founders.length) {
            founders.forEach((el: any) => {
                const obj = el.individual || el.corporate;
                if (obj) {
                    obj.label = el.entity_type_id == 1 ?
                        `${obj.first_name ?? obj.chn_first_name} ${obj.last_name ?? obj.chn_last_name}`
                        : `${obj.company_name ?? obj.chn_company_name}`;
                    obj.company_entity_id = el.id
                    obj.signature = el.signature
                    obj.kyc_status = el.kyc_status
                    arrayOfFounders.push(obj)
                }
            });
        }
        return arrayOfFounders;
    }


    const getBusinessNatures = async () => {
        try {
            const { data } = await api.businessNature();
            businessNatures.value = data.data?.business_nature ?? []
        } catch (error) {
            // console.log(error);
        }
    }

    function clearLocalStorage() {
        currentStage.value = 2
        signatureImage.value = ''
        signatureDateSigned.value = ''
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
        isShowingFoundersForm,
        isFounderSigned,
        isKYCcompleted,
        countries,
        currentCompanyId,
        checkedEntityCapacity,
        employmentStatusList,
        currencies,
        sourceOfFunds,
        initialSourceOfWealth,
        ongoingSourceOfIncome,
        levelOfActivity,
        natureOfActivity,
        idToEdit,
        signatureImage,
        signatureDateSigned,
        pdfAction,
        pdfIsSending,
        clearLocalStorage,
        collateFounders,
        IDType

    }
})
