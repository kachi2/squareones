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
        return $instance.get(`manage/company/${id}`)
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

    registerOfAllotments(formData: FormData) {
        return $instanceForm.post(`manage/allotments`, formData)
    },

    registerOfTransfer(formData: FormData) {
        return $instanceForm.post(`manage/transfer`, formData)
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

    UserctivityLog(queryString: any) {
        return $instance.get(`manage/user/activities?${queryString}`)
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

    getCompanyStats(queryObj: any = null) {
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

    getUsersTeam(formData: FormData) {
        return $instanceForm.post('/team/get/users', formData);
    },


    publishCompany(company_id: string | number) {
        return $instanceForm.get(`manage/publish/company/${company_id}`);
    },

    getInvoices() {
        return $instance.get(`manage/get/stripe/invoices`);
    },


    totalPaidInvoices() {
        return $instance.get(`manage/get/stripe/paid/invoices`);
    },


    totalUnpaidInvoices() {
        return $instance.get(`manage/get/stripe/unpaid/invoices`);
    },

    getPlans() {
        return $instance.get(`manage/get/plans`);
    },

    getSubscribers() {
        return $instance.get(`manage/get/subscribers`);
    },


    generateInvoiceTable() {
        return $instance.get(`manage/sync/invoices`);
    },

    adminServices() {
        return $instance.get(`manage/services/company`);
    },

    adminServicesStore(formData: FormData, company_id: any) {
        return $instanceForm.post(`/manage/services/company/store/${company_id}`, formData);
    },


    createStripeProduct(formData: FormData) {
        return $instanceForm.post('manage/create/stripe/product', formData);
    },

    updateStripeProduct(formData: FormData) {
        return $instanceForm.post('manage/update/stripe/product', formData);
    },

    adminGetAllTasks() {
        return $instance.get(`manage/get/all/task`);
    },
    adminGetUserTask(queryString: string) {
        return $instance.get(`manage/get/all/task${queryString}`);
    },


    adminPostTask(formData: FormData) {
        return $instanceForm.post('manage/create/task', formData);
    },

    adminUpdateTask(formData: FormData) {
        return $instanceForm.post('/manage/update/tasks', formData);
    },
    adminGetTaskActivities(task_id: string) { return $instance.get(`manage/get/task/activities/${task_id}`) },
    adminGetTaskComments(task_id: string) { return $instance.get(`manage/get/comments/${task_id}`) },
    adminSendTaskComment(formData: FormData) {
        return $instanceForm.post('manage/add/comments', formData);
    },

    adminCompanyProgress(company_id = null) {
        return $instance.get(`manage/company/progress/${company_id??''}`);
    },


    // populateData(formData: FormData) {
    //     return $instanceForm.post(`/generate/incorporated/data`, formData);
    // }
}