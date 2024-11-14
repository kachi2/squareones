import { $instance, $instanceForm } from '../instances'

export default {

    userBillings() {
        return $instance.get(`user/billings`)
    },

    userCompanies() {
        return $instance.get(`user/account/company`)
    },


    userCompany() {
        return $instance.get(`user/active/company`)
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
        return $instanceForm.post(`user/toggle/notifications/setting`, FormData)
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

    userNotificationsMarkAsRead() {
        return $instance.get(`user/notifications/read`)
    },

    userGetCompany(company_id: any) {
        return $instance.get(`user/account/company/${company_id}`)
    },

    userTeamMembers(formData: FormData) {
        return $instanceForm.post(`team/load/members`, formData)
    },

    userTeamsInvitation(formData: FormData) {
        return $instanceForm.post(`teams/invitation`, formData)
    },

    userTeamsInvitationAccept(formData: FormData) {
        return $instanceForm.post(`team/invitation/accept`, formData)
    },

    removeUserfromTeam(formData: FormData) {
        return $instanceForm.post('team/remove/member', formData)
    },
    getCompanyReturn() {
        return $instance.get('user/get/company/returns');
    },
    getCompanyCount() {
        return $instance.get('user/get/company/counts');
    },
    getPaymentInfo() {
        return $instance.get('user/get/payment/info');
    },
    getUserSubscription() {
        return $instance.get('user/get/user/subscription');
    },

    getUserSubscriptionPlan() {
        return $instance.get('get/user/subscription');
    },

    userInvoices() {
        return $instance.get('get/user/invoices');
    },

    pauseSubscriptionPlan(id: string) {
        return $instance.get(`/pause/subscription/${id}`);
    },

    resumeSubscriptionPlan(id: string) {
        return $instance.get(`/resume/subscription/${id}`);
    },

    upateCardInfo() {
        return $instance.get(`/update/payment/info`);
    },

    UserActivityLogs() {
        return $instance.get('user/get/userlogs');
    },
    getActiveUser() {
        return $instance.get('user/active/user');
    },

    userGetTasks() {
        return $instance.get(`user/get/user/task`);
    },

    userUpdateTask(formData: FormData) {
        return $instanceForm.post('user/update/task/status/', formData);
    },

    updateAllUserTask() {
        return $instance.get('/user/update/all/tast');
    },

    getUserNewTask() { return $instance.get('/user/get/user/new/task') },

    userGetTaskActivities(task_id: string) { return $instance.get(`user/get/task/activities/${task_id}`) },
    userGetTaskComments(task_id: string) { return $instance.get(`user/get/comments/${task_id}`) },
    userSendTaskComment(formData: FormData) {
        return $instanceForm.post('user/add/comments', formData);
    },

}