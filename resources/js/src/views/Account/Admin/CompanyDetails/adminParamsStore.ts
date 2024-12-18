import { reactive, ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
import api from '@/stores/Helpers/axios'
import { Country } from 'country-state-city';


export const useAdminParamsStore: any = defineStore('useAdminParamsStore', () => {

    // modals
    const modals: any = {
        coyInfoModal: ref<boolean>(false),
        incopModal: ref<boolean>(false),
        regOfficeModal: ref<boolean>(false),
        complianceReportingModal: ref<boolean>(false),
        regOfDirectorsModal: ref<boolean>(false),
        regOfShareholdersModal: ref<boolean>(false),
        regOfSecretaryModal: ref<boolean>(false),
        regOfNameChangeModal: ref<boolean>(false),
        regOfChargeModal: ref<boolean>(false),
        sigControllerModal: ref<boolean>(false),
        designatedRepModal: ref<boolean>(false),
        documentUploadModal: ref<boolean>(false),
        regOfAllotmentsModal: ref<boolean>(false),
        regOfTransferModal: ref<boolean>(false),
    }

    // params
    const currentCompanyId = useStorage('squre1-coyId', '')
    const isCompaniesByUser = useStorage('squre1-coyUserId', '')
    const currentUserId = useStorage('squre1-coyUserId-user', '')
    const currentCompanyData = ref<any>('')
    const idToEdit: any = ref<any>('')
    const countries = ref<any[]>([])
    const hasUpdatedProgress = ref<boolean>(false)

    // functions
    async function getCompanyDetails() {
        try {
            const resp = await api.getCompanyDetails(currentCompanyId.value)
            const data = resp.data.data
            currentCompanyData.value = data
            idToEdit.value = ''
            //  console.log(data, 'currentCompanyId');
        } catch (error) {
            // 
        }
    }

    const getCountries = async () => {
        try {
            const countriesArray = Country.getAllCountries()
            countries.value = countriesArray.map((country:any) => country.name)
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


    function openModalForm(modalName: string, id?: any) {
        idToEdit.value = id ?? ''
        modals[modalName].value = !modals[modalName].value
    }

    function test() {
        alert('test')
    }

    return {
        currentCompanyId,
        currentCompanyData,
        idToEdit,
        hasUpdatedProgress,
        isCompaniesByUser,
        countries,
        currentUserId,

        getCompanyDetails,
        openModalForm,
        getCountries,

        ...modals,
    }
})
