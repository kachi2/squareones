import {$instance, $instanceForm} from '../instances'


export default {
businessNature() {
    return $instance.get(`manage/get/business/nature`)
},

adminRegisterCompany(formData: FormData) {
    return $instanceForm.post(`manage/company/create`, formData)
},

companyDescription(formData: FormData) {
    return $instanceForm.post(`manage/company/description/store`, formData)
},

companyAddress(formData: FormData) {
    return $instanceForm.post(`manage/company/address/store`, formData)
},

companyEntity(formData: FormData) {
    return $instanceForm.post(`manage/entity/store`, formData)
},

FounderKyc(formData: FormData) {
    return $instanceForm.post(`manage/load/founder/kyc`, formData)
},

companyShares(formData: FormData) {
    return $instanceForm.post(`manage/shares/store`, formData)
},

companySecretary(formData: FormData) {
    return $instanceForm.post(`manage/secretary/store`, formData)
},

companyActivity(formData: FormData) {
    return $instanceForm.post(`manage/activities/store`, formData)
},

companySource(formData: FormData) {
    return $instanceForm.post(`manage/fundsource/store`, formData)
},
}