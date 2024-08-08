<template>
    <div class="container">
        <div class="car border-0 min-vh-100">
            <div class="card-body">
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="tab1-tab" data-bs-toggle="tab" data-bs-target="#tab1"
                            type="button" role="tab" aria-controls="tab1" aria-selected="true">
                            General
                            <!-- <i class="bi bi-check-circle-fill"></i> -->
                        </button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="tab2-tab" data-bs-toggle="tab" data-bs-target="#tab2" type="button"
                            role="tab" aria-controls="tab2" aria-selected="false">
                            Verify
                            <!-- <i class="bi bi-check-circle-fill"></i> -->
                        </button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="tab3-tab" data-bs-toggle="tab" data-bs-target="#tab3" type="button"
                            role="tab" aria-controls="tab3" aria-selected="false">
                            Security
                            <!-- <i class="bi bi-check-circle-fill"></i> -->
                        </button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="tab4-tab" data-bs-toggle="tab" data-bs-target="#tab4" type="button"
                            role="tab" aria-controls="tab4" aria-selected="false">
                            Notifications
                            <!-- <i class="bi bi-check-circle-fill"></i> -->
                        </button>
                    </li>

                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="tab5-tab" data-bs-toggle="tab" data-bs-target="#tab5" type="button"
                            role="tab" aria-controls="tab5" aria-selected="false">
                            Recent Account Activities
                            <!-- <i class="bi bi-check-circle-fill"></i> -->
                        </button>
                    </li>
                </ul>

                <!-- Tab panes -->
                <div class="tab-content pt-5">
                    <div class="tab-pane active" id="tab1" role="tabpanel" aria-labelledby="tab1-tab">
                        <div class="row g-3">
                            <div class="col-md-12">
                                <div class="card">
                                    <div class="card-header fw-bold bg-transparent border-0">
                                        Information
                                    </div>
                                    <div class="card-body">
                                        <p class="pl-2">
                                            Enter your name, username and primary email address. You
                                            can change your primary email address at any time.
                                        </p>
                                        <div class="row g-3">
                                            <div class="col-md-6">
                                                <div class="form-label">Name:</div>
                                                <input v-model="detailsForm.name" type="text" class="form-control" />
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-label">Phone:</div>
                                                <input v-model="detailsForm.phone" type="text" class="form-control" />
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-label">
                                                    Email:
                                                    <span
                                                        class="badge rounded-pill bg-success-subtle text-dark">Verified
                                                        <i class="bi bi-check-circle"></i></span>
                                                </div>
                                                <input readonly v-model="detailsForm.email" type="text"
                                                    class="form-control" />
                                            </div>
                                            <!-- <div class="col-md-6">
                                                <div class="form-label"> Date Of Birth:</div>
                                                <input type="text" class="form-control" value="12 Jan, 2024">
                                            </div> -->
                                            <div class="col-12">
                                                <button :disabled="detailsForm.isSaving" @click="updateDetails"
                                                    class="btn btn-primary float-end">
                                                    {{
                                                        detailsForm.isSaving
                                                            ? 'Updating..'
                                                            : 'Update Details'
                                                    }}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane" id="tab2" role="tabpanel" aria-labelledby="tab2-tab">
                        <div class="card shadow-sm">
                            <div class="card-header fw-bold border-0 bg-transparent">
                                <!-- Documents -->
                                <span class="float-end">
                                    <!-- <button @click="paramsStore.openModalForm('documentUploadModal')"
                                        class="btn btn-primary btn-sm">
                                        Add Documents <i class="bi bi-plus-lg"></i>
                                    </button> -->
                                </span>
                            </div>
                            <div class="card-body">
                                <isLoadingComponent v-if="itemsLoading" />
                                <EasyDataTable v-else class="easy-data-table"  :headers="headers"
                                    :items="items" buttons-pagination v-model:server-options="serverOptions"
                                    :server-items-length="total">
                                    <template #header="header">
                                        <span class="fw-bold text-muted">{{
                                            header.text == '#' ? 'S/N' : header.text
                                            }}</span>
                                    </template>

                                    <template #item-updated_at="item">
                                        {{ useFxn.dateDisplay(item.updated_at) }}
                                    </template>

                                    <template #item-created_at="item">
                                        {{ useFxn.dateDisplay(item.created_at) }}
                                    </template>

                                    <template #item-document="item">
                                        <!-- Some borders are removed -->
                                        <ul class="list-group list-group-flush">
                                            <li v-for="(doc, index) in JSON.parse(item.document)" :key="doc"
                                                class="list-group-item p-0 border-0">
                                                <a :href="doc" target="_blank">Document {{ index + 1 }}</a>
                                            </li>
                                        </ul>
                                    </template>

                                    <template #item-action="item">
                                        <span class="dropdown">
                                            <span class="cursor-pointer bell dropdown-toggle" data-bs-toggle="dropdown"
                                                aria-expanded="false">
                                                <i class="bi bi-three-dots text-primary"></i>
                                                <div class="dropdown-menu dropdown-menu-start">
                                                    <ul class="list-group list-group-flush">
                                                        <li @click="deleteDocument(item.id)"
                                                            class="dropdown-item text-danger"
                                                            style="background-color: transparent !important">
                                                            <i class="bi bi-trash3"></i> Delete
                                                        </li>
                                                    </ul>
                                                </div>
                                            </span>
                                        </span>
                                    </template>
                                </EasyDataTable>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane" id="tab3" role="tabpanel" aria-labelledby="tab3-tab">
                        Your privacy and security are top priority. We do all we can to keep
                        your account secure, and we encourage you to do the same by
                        following best practices: Update your password regularly, enable
                        Two-Factor Authentication, and keep your Support PIN private.

                        <div class="row g-3 mt-3">
                            <div class="col-md-6 col-lg-6">
                                <div class="card h-100 border-">
                                    <div class="card-body">
                                        <div class="fw-bold mb-2">Password</div>
                                        <p>Changed on Jan 1, 2023, 3:39 PM EST</p>
                                        <button data-bs-toggle="modal" data-bs-target="#passwordModal"
                                            class="btn btn-secondary mt-2">
                                            Update Password
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-6 col-lg-6">
                                <div class="card h-100">
                                    <div class="card-body">
                                        <div class="fw-bold mb-2">
                                            2-Factor Authentication
                                            <span v-if="!twoFactorObj.isActivated" class="badge bg-warning">
                                                Not Activated</span>
                                            <span class="badge" :class="!twoFactorObj.isEnabled ? 'bg-warning' : 'bg-success'
                                                " v-else>{{
                                                    !twoFactorObj.isEnabled ? 'Not Enabled' : 'Enabled'
                                                }}</span>
                                        </div>

                                        <activeTwoFactor v-if="twoFactorObj.activation" @verified="activationDone" />
                                    </div>
                                    <div v-if="!twoFactorObj.activation"
                                        class="card-footer bg-transparent border-0 pb-3">
                                        <button @click="twoFactorObj.activation = true" v-if="!twoFactorObj.isActivated"
                                            class="btn btn-secondary">
                                            Activate 2Fa
                                        </button>

                                        <button @click="twoFactorObj.currentAction = 'enable'"
                                            v-else-if="!twoFactorObj.isEnabled" data-bs-toggle="modal"
                                            data-bs-target="#twoFAModal" class="btn btn-secondary">
                                            Enable 2FA
                                        </button>

                                        <button @click="twoFactorObj.currentAction = 'disable'" v-else
                                            data-bs-toggle="modal" data-bs-target="#twoFAModal"
                                            class="btn btn-secondary">
                                            Disable 2FA
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="tab-pane" id="tab4" role="tabpanel" aria-labelledby="tab4-tab">
                        <div class="row g-3">
                            <!-- <div class="col-md-12">
                                <div class="card p-3 bg-transparent fs-5 h-100">
                                    Enable In-App Notifications
                                    <span v-if="appNotifyStatus" class="text-success">(ON)</span>
                                    <span v-else class="text-danger">(OFF)</span>

                                    <div class="float-end" @click="toggleNotityStatus('app')">
                                        <button v-if="appNotifyStatus" class="btn btn-danger float-end">
                                            SWITCH OFF <i class="bi bi-power"></i>
                                        </button>

                                        <button v-else class="btn btn-success float-end">
                                            SWITCH ON <i class="bi bi-power"></i>
                                        </button>
                                    </div>

                                </div>

                            </div> -->

                            <div class="col-md-12">
                                <div class="card p-3 bg-transparent fs-5 h-100">
                                    Enable Email Notifications
                                    <span v-if="emailNotifyStatus" class="text-success">(ON)</span>
                                    <span v-else class="text-danger">(OFF)</span>

                                    <div class="float-end" @click="toggleNotityStatus('email')">
                                        <button v-if="emailNotifyStatus" class="btn btn-danger float-end">
                                            SWITCH OFF <i class="bi bi-power"></i>
                                        </button>

                                        <button v-else class="btn btn-success float-end">
                                            SWITCH ON <i class="bi bi-power"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="tab-pane" id="tab5" role="tabpanel" aria-labelledby="tab5-tab">
                        <div class="col-md-12 mt-5">
                            <div class="card border-0 shadow-sm h-100">
                                <div class="card-body">
                                    <isLoadingComponent v-if="itemsLoading" />
                                    <EasyDataTable v-else class="easy-data-table" :headers="headersActivities"
                                        :items="items_activities" buttons-pagination
                                        v-model:server-options="serverOption" :server-items-length="total_activities">
                                        <template #header="header">
                                            <span class="fw-bold text-muted">{{
                                                header.text == '#' ? 'S/N' : header.text
                                                }}</span>
                                        </template>

                                        <template #item-updated_at="item">
                                            {{ useFxn.dateDisplay(item.updated_at) }}
                                        </template>

                                        <template #item-created_at="item">
                                            {{ useFxn.dateDisplay(item.created_at) }}
                                        </template>
                                    </EasyDataTable>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Modal Body -->

        <div class="modal fade" id="passwordModal" tabindex="-1" data-bs-backdrop="static" data-bs-keyboard="false"
            role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
            <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button ref="closePasswordModal" type="button" class="btn-close"
                            :class="{ 'btn-close-white': templateStore.appMode == 'dark' }" data-bs-dismiss="modal"
                            aria-label="Close"></button>
                    </div>

                    <div class="modal-body">
                        <p class="modal-title" id="modalTitleId">
                            You may update your password any time. We suggest you choose a
                            strong password and update it regularly, e.g. every 6 months. All
                            new passwords must contain at least 8 characters. We also suggest
                            having at least one capital and one lower-case letter (Aa-Zz), one
                            special symbol (#, &, % etc), and one number (0-9) in your
                            password for the best strength.
                        </p>
                        <div class="row g-3 mt-3">
                            <div class="col-12">
                                <div class="form-label">Old Password:</div>
                                <input v-model="passwordForm.oldPassword" type="password" class="form-control" />
                                <span class="small text-danger">{{
                                    passwordForm.invalidPassword
                                    }}</span>
                            </div>
                            <div class="col-12">
                                <div class="form-label">New Password:</div>
                                <input v-model="passwordForm.newPassword" type="password" class="form-control" />
                            </div>
                            <div class="col-12">
                                <div class="form-label">Repeat Password:</div>
                                <input v-model="passwordForm.newPasswordRepeat" type="password" class="form-control" />
                                <span class="small text-danger">{{
                                    passwordForm.passwordsMatching
                                    }}</span>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer border-0">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                            Close
                        </button>
                        <button :disabled="passwordForm.isSaving" @click="updatePassword" type="button"
                            class="btn btn-primary">
                            {{ passwordForm.isSaving ? 'Saving...' : 'Update Password' }}
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="twoFAModal" tabindex="-1" data-bs-backdrop="static" data-bs-keyboard="false"
            role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
            <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="modalTitleId">2-FA SETTINGS</h5>
                        <button ref="closeTwoFAModal" type="button" class="btn-close"
                            :class="{ 'btn-close-white': templateStore.appMode == 'dark' }" data-bs-dismiss="modal"
                            aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form @submit.prevent="enableDisableTwoFactor()" class="row g-3">
                            <div class="col-12">
                                <div class="form-label">
                                    Open the two factor authentication app on your device to view
                                    your authentication code and verify your identity
                                </div>
                                <input v-model="twoFactorObj.inputSecret" type="text" class="form-control"
                                    placeholder="OTP Code.." />
                                <span v-if="twoFactorObj.codeInvalid" class="small text-danger">Invalid Code</span>
                            </div>
                            <div class="col-12">
                                <button type="submit" class="btn btn-primary w-100">
                                    Continue
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <documentUploadModal @done="getDocuments" />
    </div>
</template>
<script lang="ts" setup>
import { onMounted, reactive, ref, watch } from 'vue'
import type { ServerOptions } from 'vue3-easy-data-table'
import api from '@/stores/Helpers/axios'
import { useParamsStore } from './CompanyDetails/paramsStore'
import useFxn from '@/stores/Helpers/useFunctions'
import documentUploadModal from './CompanyDetails/components/modals/documentUploadModal.vue'
import { onBeforeRouteLeave } from 'vue-router'
import { useAuthStore } from '@/stores/authStore'

import activeTwoFactor from '@/components/activateTwoFactor.vue'
import { useTemplateStore } from '@/stores/templateStore'

const templateStore = useTemplateStore()

const paramsStore = useParamsStore()
const authStore = useAuthStore()

onMounted(() => {
    getDocuments()
    // getNotificationsStatusesEmail()
    // getNotificationsStatusesApp()
    setUserDataAutomatic()
    getTwoFactorStatus()
    getUserActivities()
})

// DOCUMENTS START #################################################################
const serverOptions = ref<ServerOptions | any>({
    page: 1,
    rowsPerPage: 15
    // sortType: 'desc',
    // sortBy: ''
})

const total = ref(0)
const items = ref([])
const itemsLoading = ref(true)

watch(
    serverOptions,
    value => {
        getDocuments()
    },
    { deep: true }
)

const headers = [
    { text: 'DOCUMENT TITLE', value: 'title' },
    { text: 'DOCUMENT', value: 'document' },
    { text: "STATUS", value: "status" },
    { text: 'DATE ADDED', value: 'created_at' },
    // { text: "DATE MODIFIED", value: "updated_at" },
    { text: 'ACTION', value: 'action' }
]

async function getDocuments() {
    try {
        const resp = await api.userGetDocuments()
        const data = resp.data.data
        // console.log(data.data, 'documents');
        total.value = data.total
        // items.value = data?.data ?? []
        itemsLoading.value = false
    } catch (error) {
        //
    }
}

async function deleteDocument(id: any) {
    useFxn
        .confirmDelete('Delete this document?', 'Yes, delete')
        .then(async quest => {
            if (quest.isConfirmed) {
                await api.deleteUserDocument(id)
                useFxn.toast('Document deleted', 'success')
                getDocuments()
            }
        })
}

// DOCUMENTS END #################################################################

// NOTIFICATIONS START ##########################################################
const emailNotifyStatus = ref<boolean>(false)
const appNotifyStatus = ref<boolean>(false)
function toggleNotityStatus(type: 'app' | 'email') {
    if (type == 'app') appNotifyStatus.value = !appNotifyStatus.value
    else emailNotifyStatus.value = !emailNotifyStatus.value
    // setNotificationStatus(type)
}

async function getNotificationsStatusesEmail() {
    try {
        const formData = new FormData()
        formData.append('user_id', paramsStore.currentUserId)
        formData.append('type', 'email')
        const resp = await api.userGetNotificationStatus(formData)
        // console.log('email', resp);
        emailNotifyStatus.value = resp.data ? true : false
    } catch (error) {
        //
    }
}

async function getNotificationsStatusesApp() {
    try {
        const formData = new FormData()
        formData.append('user_id', paramsStore.currentUserId)
        formData.append('type', 'app')
        const resp = await api.userGetNotificationStatus(formData)
        // console.log('app-status', resp);
        appNotifyStatus.value = resp.data ? true : false
    } catch (error) {
        //
    }
}

async function setNotificationStatus(type: 'app' | 'email') {
    try {
        const formData = new FormData()
        formData.append('user_id', paramsStore.currentUserId)
        formData.append('type', type)
        formData.append('status', '1')
        const resp = await api.userToggleNotifications(formData)
        // console.log(resp);
    } catch (error) {
        // console.log(error);
    }
}
// NOTIFICATIONS END ##########################################################

// Activities ##########################
async function getUserActivities() {
    try {
        const queryString = new URLSearchParams(serverOptions.value).toString()
        const resp = await api.userActivities(queryString)
        const data = resp.data.data
        total_activities.value = data.total
        items_activities.value = data.data
        itemsLoading_activities.value = false
    } catch (error) {
        //
    }
}

const serverOption = ref<ServerOptions | any>({
    page: 1,
    rowsPerPage: 15
    // sortType: 'desc',
    // sortBy: ''
})

const total_activities = ref(0)
const items_activities = ref([])
const itemsLoading_activities = ref(true)

watch(
    serverOption,
    value => {
        getUserActivities()
    },
    { deep: true }
)

const headersActivities = [
    { text: 'NAME', value: 'name' },
    { text: 'TYPE', value: 'type' },
    { text: 'ACTION', value: 'action' },
    { text: 'IP ADDRESS', value: 'ip_address'},
    { text: 'LOCATION', value: 'location'},
    { text: 'DATE', value: 'created_at' }
]

// DETAILS UPDATE START ############################################################
const detailsForm = reactive({
    name: '',
    phone: '',
    email: '',
    isSaving: false
})

function setUserDataAutomatic() {
    const user = JSON.parse(authStore.profileData)
    detailsForm.email = user?.email ?? ''
    detailsForm.name = user?.name ?? ''
    detailsForm.phone = user?.phone ?? ''
    // console.log(user, 'user');
}

function updateUserDataOnStore() {
    const user = JSON.parse(authStore.profileData)
    user.name = detailsForm.name
    user.phone = detailsForm.phone
    authStore.profileData = JSON.stringify(user)
}

async function updateDetails() {
    if (!detailsForm.name) {
        useFxn.toast(' Name field is compulsory', 'warning')
        return
    }

    if (!detailsForm.phone) {
        useFxn.toast(' Phone field is compulsory', 'warning')
        return
    }

    try {
        detailsForm.isSaving = true
        const formData = new FormData()
        // formData.append('user_id', paramsStore.currentUserId)
        formData.append('name', detailsForm.name ?? ' ')
        formData.append('phone', detailsForm.phone ?? '')
        await api.userUpdateDetails(formData)

        detailsForm.isSaving = false
        useFxn.toast('Details Updated Successfully', 'success')
        updateUserDataOnStore()
    } catch (error: any) {
        console.log(error)
    }
}
// DETAILS UPDATE END ############################################################

// PASSWORD START ################################################################
const passwordForm = reactive({
    oldPassword: '',
    newPassword: '',
    newPasswordRepeat: '',
    isSaving: false,
    passwordsMatching: '',
    invalidPassword: ''
})

const closePasswordModal = ref<any>(null)

onBeforeRouteLeave(() => {
    closePasswordModal.value.click()
})

async function updatePassword() {
    passwordForm.passwordsMatching = ''
    passwordForm.invalidPassword = ''

    if (!passwordForm.oldPassword && !passwordForm.newPassword) return

    if (
        passwordForm.oldPassword.length < 8 ||
        passwordForm.newPassword.length < 8 ||
        passwordForm.newPasswordRepeat.length < 8
    ) {
        useFxn.toast('Password Fields must be at least 8 characters.', 'warning')
        return
    }

    if (passwordForm.newPassword !== passwordForm.newPasswordRepeat) {
        passwordForm.passwordsMatching = 'password do not match'
        return
    }
    try {
        passwordForm.isSaving = true
        const formData = new FormData()
        formData.append('user_id', paramsStore.currentUserId)
        formData.append('oldPassword', passwordForm.oldPassword)
        formData.append('password', passwordForm.newPassword)
        await api.userUpdatePassword(formData)

        passwordForm.oldPassword =
            passwordForm.newPassword =
            passwordForm.newPasswordRepeat =
            ''
        passwordForm.isSaving = false
        closePasswordModal.value.click()
        useFxn.toast('Password Changed Successfully', 'success')
    } catch (error: any) {
        console.log(error)
        if (error.response && error.response.status === 400) {
            passwordForm.invalidPassword = 'Password invalid'
        }

        passwordForm.isSaving = false
    }
}
// PASSWORD END ################################################################

// 2FA START #################################################################
const twoFactorObj = reactive({
    isActivated: false,
    isEnabled: false,
    activation: false,
    inputSecret: '',
    isVerifying: false,
    currentAction: '',
    codeInvalid: false
})

const closeTwoFAModal = ref<any>(null)

async function getTwoFactorStatus() {
    try {
        const resp = await api.checkAccountStatus()
        const data = resp.data.data
        twoFactorObj.isActivated = data.google2fa_secret ? true : false
        twoFactorObj.isEnabled = data.enable_2fa_at ? true : false
        // console.log(resp.data);
    } catch (error: any) {
        console.log(error)
    }
}

async function enableDisableTwoFactor() {
    try {
        // twoFactorObj.isVerifying = true
        twoFactorObj.codeInvalid = false

        const formData = new FormData()
        formData.append('secret', twoFactorObj.inputSecret)
        const endPointCall =
            twoFactorObj.currentAction == 'enable'
                ? api.enableTwoFactor(formData)
                : api.disableTwoFactor(formData)
        const resp = await endPointCall
        authStore.twofactorEnabled =
            twoFactorObj.currentAction == 'enable' ? '1' : null
        // console.log(resp);
        // twoFactorObj.isVerifying = false
        twoFactorObj.inputSecret = ''
        closeTwoFAModal.value.click()
        getTwoFactorStatus()
    } catch (error: any) {
        console.log(error)

        if (error.response) {
            twoFactorObj.codeInvalid = true
            return
        }
        // twoFactorObj.isVerifying = false
    }
}

function activationDone() {
    twoFactorObj.activation = false
    authStore.twofactorEnabled = '1'
    getTwoFactorStatus()
}

// 2FA END #################################################################
</script>
<style lang="css" scoped>
.dropdown-toggle::after {
    content: none !important;
}

.dropdown-menu {
    border-radius: 0px;
}
</style>
