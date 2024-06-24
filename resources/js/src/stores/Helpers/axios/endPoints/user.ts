import { $instance, $instanceForm } from '../instances'

export default {

    userBillings() {
        return $instance.get(`user/billings`)
    },

    userCompanies() {
        return $instance.get(`user/account/company`)
    },

    userGetDocuments() {
        return $instance.get(`user/account/documents`)
    },

    userUploadDocuments(formData: FormData) {
        return $instanceForm.post(`user/upload/documents`, formData)
    },

    deleteUserDocument(document_id: string | number) {
        return $instance.get(`user/documents/delete/${document_id}`)
    },

    userCompanyFounders(company_id: any, queryString: any) {
        return $instance.get(`user/founder/list/${company_id}?${queryString}`)
    },

    userResendEmail(formData: FormData) {
        return $instanceForm.post(`load/founder/kyc`, formData)
    },

    userToggleNotifications(formData: FormData) {
        return $instanceForm.post(`user/toggle/notifications/setting`, formData)
    },

    userGetNotificationStatus(formData: FormData) {
        return $instanceForm.post(`user/notifications/status`, formData)
    },

    userUpdatePassword(formData: FormData) {
        return $instanceForm.post(`user/update/password`, formData)
    },

    userUpdateDetails(formData: FormData) {
        return $instanceForm.post(`user/update/user/details`, formData)
    },

    userActivities(queryString: any) {
        return $instance.get(`/user/activity/log?${queryString}`)
    },

    userNotifications() {
        return $instance.get(`user/notifications`)
    },


}