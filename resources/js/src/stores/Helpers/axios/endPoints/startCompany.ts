import { $instance, $instanceForm } from '../instances'

export default {
    companyProgress(company_id = null) {
        const url = company_id ? `company/progress/${company_id}` : `company/progress`
        return $instance.get(url)
    },

    businessNature() {
        return $instance.get(`get/business/nature`)
    },

    registerCompany(formData: FormData) {
        return $instanceForm.post(`company/create`, formData)
    },

    companyDescription(formData: FormData) {
        return $instanceForm.post(`company/description/store`, formData)
    },

    companyAddress(formData: FormData) {
        return $instanceForm.post(`company/address/store`, formData)
    },

    companyEntity(formData: FormData) {
        return $instanceForm.post(`entity/store`, formData)
    },

    FounderKyc(formData: FormData) {
        return $instanceForm.post(`load/founder/kyc`, formData)
    },

    companyShares(formData: FormData) {
        return $instanceForm.post(`shares/store`, formData)
    },

    companySecretary(formData: FormData) {
        return $instanceForm.post(`secretary/store`, formData)
    },

    companyActivity(formData: FormData) {
        return $instanceForm.post(`activities/store`, formData)
    },

    companySource(formData: FormData) {
        return $instanceForm.post(`fundsource/store`, formData)
    },

    companyDocuments(formData: FormData) {
        return $instanceForm.post(`upload/docs`, formData)
    },

    buildPDF(formData: FormData) {
        return $instanceForm.post(`build/pdf`, formData)
    },

    retrieveShaheolders(id: string | number) {
        return $instance.post(`retrieve/shareholders/${id}`)
    },

    deleteEntity(id: string | number) {
        return $instance.post(`entities/remove/${id}`)
    },

    registerSignature(formData: FormData) {
        return $instanceForm.post(`register/signature`, formData)
    },

    deleteSignature(formData: FormData) {
        return $instanceForm.post(`delete/signature`, formData)
    },

}