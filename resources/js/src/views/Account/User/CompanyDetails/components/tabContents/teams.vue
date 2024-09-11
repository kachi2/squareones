<template>
    <div class="row g-3">
        <div class="col-12">
            <div class="card shadow-s">
                <div class="card-body">
                    <div class="row g-3 mb-4">
                        <div class="col-lg-6">
                            <div class="card h-100">
                                <div class="card-header border-0 bg-transparent">Team Invitation</div>
                                <div class="card-body">
                                    <!-- Nav tabs -->
                                    <!-- <ul class="nav nav-tabs" id="myTab" role="tablist">
                                        <li @click="sendingType = 'search'" class="nav-item" role="presentation">
                                            <button class="nav-link active" id="Search-tab" data-bs-toggle="tab"
                                                data-bs-target="#Search" type="button" role="tab" aria-controls="Search"
                                                aria-selected="true">
                                                Search from Users
                                            </button>
                                        </li>
                                        <li @click="sendingType = 'email'" class="nav-item" role="presentation">
                                            <button class="nav-link" id="TypeEmail-tab" data-bs-toggle="tab"
                                                data-bs-target="#TypeEmail" type="button" role="tab"
                                                aria-controls="TypeEmail" aria-selected="false">
                                                Send To Email
                                            </button>
                                        </li>

                                    </ul> -->

                                    <!-- Tab panes -->
                                    <!-- <div class="tab-content">
                                        <div class="tab-pane active" id="Search" role="tabpanel"
                                            aria-labelledby="Search-tab"> -->
                                    <input v-model="searchUserMail" type="text" class="form-control"
                                        placeholder="search by name or email">

                                    <ul class="list-group list-group-flush mt-3">
                                        <li class="list-group-item px-0" v-for="x in filteredUsersBySearch">
                                            <div class="row justify-content-between align-items-center">
                                                <div @click="selectUser(x)"
                                                    class="col-lg-12 text-info-emphasis fw-bold small cursor-pointer">
                                                    <i v-if="x.isSelected" class="me-3 bi bi-check-circle-fill"></i>
                                                    <i v-else class="me-3 bi bi-circle"></i>
                                                    {{ x.name }} ({{ x.email }})
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    <!-- </div> -->
                                    <!-- <div class="tab-pane" id="TypeEmail" role="tabpanel"
                                            aria-labelledby="TypeEmail-tab">
                                            <input v-model="userEmailToSend" type="text" class="form-control"
                                                placeholder="enter email">
                                        </div> -->
                                    <!-- </div> -->

                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="row g-3">
                                <div class="col-12">
                                    <select v-model="selectedRole" class="form-select form-select-sm text-capitalize">
                                        <option value="" selected disabled>Select Role</option>
                                        <option v-for="i in company.roles" :value="i.name">{{ i.name }}
                                        </option>
                                    </select>
                                </div>

                                <div class="col-12" v-if="infomationOfSelectedRole">

                                    <div class="card h-100 exemptio border-0 bg-light-subtle text-capitalize">
                                        <div class="card-header border-0">{{ infomationOfSelectedRole.description }}
                                            <div class="float-end">
                                                <button @click="sendInvitation" v-if="!isSendingInvitation"
                                                    class="btn btn-sm btn-secondary ">
                                                    Invite User <i class="bi bi-send"></i>
                                                </button>
                                                <button v-else class="btn btn-secondary btn-sm " type="button" disabled>
                                                    <span class="spinner-border spinner-border-sm" role="status"
                                                        aria-hidden="true"></span>
                                                    Sending
                                                </button>
                                            </div>


                                        </div>
                                        <div class="card-body" style="height: 280px; overflow-y: scroll;">
                                            <ul class="list-group list-group-flush small">
                                                <li v-for="x in infomationOfSelectedRole.permission"
                                                    class="list-group-item ps-0">
                                                    <strong>{{ x.name }}</strong>
                                                    <div>{{ x.description }}</div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="div fw-bold mb-3">Team Members:</div>
                    <EasyDataTable class="easy-data-table" :headers="headers" :items="items" buttons-pagination
                        v-model:server-options="serverOptions" :server-items-length="totalItems">

                        <template #header="header">
                            <span class="fw-bold text-muted">{{ header.text }}</span>
                        </template>

                        <template #item-created_at="item">
                            {{ useFxn.dateDisplay(item.created_at, 'm,y,t') }}
                        </template>
                        <template #item-action_status="item">
                            <span v-if="item.users?.status == 1"> <span class="badge bg-success">Active</span> </span>
                            <span v-else> <span class="badge bg-danger">Blocked </span> </span>
                        </template>

                        <!-- <template #item-created_at="item">
                            {{ new Date(item.created_at).toLocaleString() }}
                        </template> -->

                        <template #item-action="item">
                            <span class="dropdown">
                                <span class=" cursor-pointer bell dropdown-toggle" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    <i class="bi bi-three-dots text-primary"></i>
                                    <div class="dropdown-menu dropdown-menu-start">
                                        <ul class="list-group list-group-flush  ">
                                            <li @click="removeFromTeam(item.user_id)" class="dropdown-item text-danger"
                                                style="background-color: transparent !important;">
                                                <i class="bi bi-exclamation-circle-fill"></i> Remove from Team
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
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, watch, computed } from 'vue';
import { useParamsStore } from '../../paramsStore'
import type { Header, Item, ServerOptions } from "vue3-easy-data-table";
import api from '@/stores/Helpers/axios'
import useFxn from '@/stores/Helpers/useFunctions';
import { useToast } from 'vue-toast-notification';

const paramsStore = useParamsStore()
const toast = useToast()


onMounted(() => {
    userGetCompany()
    getUsers()
    userTeamMembers()
})


// searching
const teams = ref<any>('')
const selectedRole = ref<any>('')
const company = ref<any>([])
const users = ref([])
const searchUserMail = ref('')
const filteredUsersBySearch = computed(() => {
    let filtered: any[] = []
    // if (searchUserMail.value) {
    //     filtered = users.value.filter((x: any) => x.email.includes(searchUserMail.value) || x.name.includes(searchUserMail.value))
    //     if (filtered.length) {
    //         filtered.forEach(x => {
    //             x.isSelected = false
    //         })
    //     }

    //     // console.log(users.value);

    // }
    // else {
    //     selectedRole.value = ''
    //     selectedUser.value = null
    // }
    return filtered
})

const selectedUser = ref<any>(null)
const selectUser = (x: any) => {
    selectedUser.value = x
    users.value.forEach((x: any) => {
        x.isSelected = false
    })
    x.isSelected = true
}

async function removeFromTeam(user_id: any) {
    const formData = new FormData();
    const team_id = company.value.teams.id
    formData.append('team_id', team_id);
    formData.append('user_id', user_id);
    const resp = await api.removeUserfromTeam(formData)
    items.value = resp.data.data
    userTeamMembers()
    console.log(items)
}


const infomationOfSelectedRole = computed(() => {
    let info = null
    if (selectedRole.value) {
        info = company.value.roles.find((x: any) => x.name.toLowerCase() === selectedRole.value.toLowerCase())
    }
    return info;
})



// Sending Invitation
const isSendingInvitation = ref<boolean>(false)
async function sendInvitation() {
    if (!selectedUser.value && !useFxn.isEmail(searchUserMail.value)) {
        toast.info('Select a user or enter a valid email address', { position: 'top-right' });
    }

    isSendingInvitation.value = true
    // console.log(company.value, 'coy');


    try {
        const formData = new FormData();
        const team_id = company.value.teams.id //'1'
        // console.log(user);

        formData.append('company_id', paramsStore.currentCompanyId);
        formData.append('team_id', team_id);
        formData.append('role', selectedRole.value);

        if (selectedUser.value) {
            formData.append('user_id', selectedUser.value.id);
            formData.append('email', selectedUser.value.email);
        }
        else {
            formData.append('user_id', '');
            formData.append('email', searchUserMail.value);

        }
        const resp = await api.userTeamsInvitation(formData)
        console.log(resp);

        if (resp.status == 200) {
            toast.info('Invitation Sent Sucessfully', { position: 'top-right' });
            searchUserMail.value = '';
            isSendingInvitation.value = false
        }
        else if (resp.status == 203) {
            toast.info('User already exist in the team', { position: 'top-right' });
            isSendingInvitation.value = false
        }
    } catch (error) {
        isSendingInvitation.value = false
        toast.error('Something went Wrong', { position: 'top-right' });
    }

}




async function userGetCompany() {
    try {
        const resp: any = await api.userGetCompany(paramsStore.currentCompanyId)
        company.value = resp.data.data
    } catch (error) {
        // 
    }
}

async function getUsers() {
    try {
        const resp = await api.getUsers(`?page=1`)
        users.value = resp.data?.data?.users?.data ?? []

    } catch (error) {
        // 
    }
}






async function userTeamMembers() {
    try {
        const formData = new FormData();
        formData.append('company_id', paramsStore.currentCompanyId);
        formData.append('team_id', '23');
        const resp = await api.userTeamMembers(formData)
        //  console.log(resp.data.data, 'team members ');

        const data = resp.data.data
        total.value = data.total
        items.value = data
        itemsLoading.value = false
    } catch (error) {
        // 
    }
}

const totalItems = ref(0)
const items = ref<any[]>([])
const total = ref(0)
const itemsLoading = ref(true)
const serverOptions = ref<ServerOptions | any>({
    page: 1,
    rowsPerPage: 15,
});

watch(serverOptions, (value) => { userTeamMembers(); }, { deep: true });







const headers = [
    { text: "NAME", value: "users.name" },
    { text: "EMAIL", value: "user.email" },
    { text: "STATUS", value: "action_status" },
    { text: "ROLE", value: "role" },
    { text: "DATE ADDED", value: "created_at" },
    { text: "ACTION", value: "action" },
];

</script>

<style lang="css" scoped>
/* Custom CSS for progress bar with phases */
.progress-container {
    position: relative;
    height: 50px;
}

.progress-line {
    width: 100%;
    height: 0.1px;
    background-color: var(--bs-warning);
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}


.phase {
    position: absolute;
    top: 50%;
    font-size: 1.2rem;
    white-space: nowrap;
    transform: translate(-50%, -50%);
    fill: aqua !important;
}

.phase-label {
    position: absolute;
    top: calc(50% + 50px);
    font-size: 0.8rem;
    text-align: center;
    transform: translate(-50%, -50%);
}

/* Adjust phase positions */
.phase-1 {
    left: 0%;
}

.phase-2 {
    left: 25%;
}

.phase-3 {
    left: 50%;
}

.phase-4 {
    left: 75%;
}

.phase-5 {
    /* right: 0%; */
    left: 100%;
}

.dropdown-toggle::after {
    content: none !important;
}

.dropdown-menu {
    border-radius: 0px;
}
</style>
