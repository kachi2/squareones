import { $instance, $instanceForm } from '../instances'

export default {

    getCompanies() {
        return $instance.get(`manage/companies/index`)
    },

    getCompaniesByUserID(id: any) {
        return $instance.get(`manage/get/user/companies/${id}`)
    },

    getCompanyDetails(id: number | string) {
        return $instance.get(`/manage/incorporation/${id}`)

    },

    companyDetails(id: any) {
        return $instance.get(`manage/company${id}`)
    },

    registeredCompany(formData: FormData) {
        return $instanceForm.post(`manage/company`, formData)
    },

    officeContract(formData: FormData) {
        return $instanceForm.post(`manage/officecontract`, formData)
    },

    complianceReporting(formData: FormData) {
        return $instanceForm.post(`manage/compliance/reporting`, formData)
    },

    registerOfDirectors(formData: FormData) {
        return $instanceForm.post(`manage/directors`, formData)
    },

    registerOfShareholders(formData: FormData) {
        return $instanceForm.post(`manage/shareholders`, formData)
    },

    registerOfSecretaries(formData: FormData) {
        return $instanceForm.post(`manage/secretaries`, formData)
    },

    registerOfChangeOfName(formData: FormData) {
        return $instanceForm.post(`manage/namechange`, formData)
    },

    registerOfCharge(formData: FormData) {
        return $instanceForm.post(`manage/charges`, formData)
    },

    significantControllers(formData: FormData) {
        return $instanceForm.post(`manage/controllers`, formData)
    },

    designatedRepresentatives(formData: FormData) {
        return $instanceForm.post(`manage/representatives`, formData)
    },

    GetCompanyProgressStatus() {
        return $instance.get(`manage/incorporations/statuses`)
    },

    incoprationStatusUpdate(formData: FormData) {
        return $instanceForm.post(`manage/incorporations/update`, formData)
    },

    incoprationLogs(formData: FormData) {
        return $instanceForm.post(`manage/company/logs`, formData)
    },

    activityLog(queryString: any) {
        return $instance.get(`manage/activitylog?${queryString}`)
    },

    getUsers(queryString: any) {
        return $instance.get(`manage/users?${queryString}`)
    },

    getDocuments(company_id: any) {
        return $instance.get(`manage/get/documents/${company_id}`)
    },

    uploadCompanyDocuments(formData: FormData) {
        return $instanceForm.post(`manage/upload/document`, formData)
    },

    deleteCompanyDocument(document_id: string | number) {
        return $instance.get(`manage/documents/delete/${document_id}`)
    },

    getCompanyStats(queryObj: any) {
        return $instance.post(`manage/company/stats`, queryObj)
    },

    getRevenueStats(queryObj: any) {
        return $instance.post(`manage/revenue/stats`, queryObj)
    },

    getAllBillings(user_id: string | number) {
        return $instance.get(`manage/get/user/billing/${user_id}`)
    },

    updateUserStatus(formData: FormData) {
        return $instanceForm.post(`manage/update/users/status`, formData)
    },

    getUsersTeam(formData: FormData)
    {
        return $instanceForm.post('/team/get/users', formData);
    }
}