import { reactive, ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
import api from '@/stores/Helpers/axios'


export const useParamsStore: any = defineStore('useParamsStore', () => {

    // modals
    const modals: any = {
        // coyInfoModal: ref<boolean>(false),
        // incopModal: ref<boolean>(false),
        // regOfficeModal: ref<boolean>(false),
        // complianceReportingModal: ref<boolean>(false),
        // regOfDirectorsModal: ref<boolean>(false),
        // regOfShareholdersModal: ref<boolean>(false),
        // regOfSecretaryModal: ref<boolean>(false),
        // regOfNameChangeModal: ref<boolean>(false),
        // regOfChargeModal: ref<boolean>(false),
        // sigControllerModal: ref<boolean>(false),
        // designatedRepModal: ref<boolean>(false),
        documentUploadModal: ref<boolean>(false)
    }

    // params
    const currentCompanyId = useStorage('squre1-coyId-user', '')
    const currentUserId = useStorage('squre1-coyUserId-user', '')
    const currentCompanyData = ref<any>('')
    const idToEdit: any = ref<any>('')
    const hasUpdatedProgress = ref<boolean>(false)

    const companies = reactive<any>({
        list: [],
        form_completed: [],
        is_incorporated: [],
        isLoading: true
    })

    // functions
    async function getCompanyDetails() {
        try {
            const resp = await api.getCompanyDetails(currentCompanyId.value)
            const data = resp.data.data
            currentCompanyData.value = data
            idToEdit.value = ''
            //  console.log(data, 'getCompanyDetails');
        } catch (error) {
            // 
        }
    }

    async function getCompanies() {
        try {

            const resp = await api.userCompanies()
            const data = resp.data.data
            // console.log(resp, 'user');
            companies.list = data.companies
            companies.form_completed = data.form_completed
            companies.is_incorporated = data.is_incorporated
            companies.isLoading = false
        } catch (error) {

        }
    }

    const computedCoyName = (coy: any) => {
        const id = coy.id
        const names = companies.list.find((x: any) => x.id == id).names
        const company = names.find((x: any) => x.choice_level == 1);
        const englishName = company?.eng_name ? company?.eng_name + ' ' + company?.eng_prefix : '';
        const chineseName = company?.chn_name ? company?.chn_name + ' ' + company?.chn_prefix : ''

        return `${englishName} ${chineseName}`;
    }



    function openModalForm(modalName: string, id?: any) {
        idToEdit.value = id ?? ''
        modals[modalName].value = !modals[modalName].value
    }

    return {
        currentCompanyId,
        currentCompanyData,
        idToEdit,
        hasUpdatedProgress,
        currentUserId,
        companies,
        computedCoyName,

        getCompanyDetails,
        getCompanies,
        openModalForm,

        ...modals,
    }
})
