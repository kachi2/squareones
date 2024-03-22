import { $instance, $instanceForm } from '../instances'

export default {
    companyProgress() {
        return $instance.get(`company/progress`)
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
        return $instanceForm.post(`entity//store`, formData)
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
}