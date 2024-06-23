<template>
    <div class="container min-vh-100">
        <h5 class="fw-bold page-title mb-4"> Registerd Users</h5>
        <div class="row g-3">

            <div class="col-12">
                <div class="card">
                    <div class="card-body">
                        <isLoadingComponent v-if="itemsLoading" />
                        <EasyDataTable v-else class="easy-data-table" show-index :headers="headers" :items="items"
                            buttons-pagination v-model:server-options="serverOptions" :server-items-length="total">

                            <template #header="header">
                                <span class="fw-bold text-muted">{{ header.text == '#' ? 'S/N' : header.text }}</span>
                            </template>

                            <template #item-last_login="item">
                                {{ useFxn.dateDisplay(item.last_login) }}
                            </template>

                            <template #item-status="item">
                                <span v-if="item.status == 1" class="badge bg-success-subtle text-dark"
                                    style="width: 60px;">ACTIVE</span>
                                <span v-else class="badge bg-warning-subtle text-dark"
                                    style="width: 60px;">DISABLED</span>
                            </template>

                            <template #item-action="item">
                                <span class="dropdown">
                                    <span class=" cursor-pointer bell dropdown-toggle" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        <i class="bi bi-three-dots text-primary"></i>
                                        <div class="dropdown-menu dropdown-menu-start">
                                            <ul class="list-group list-group-flush  ">
                                                <li @click="goToUserCompanies(item.id)"
                                                    class="dropdown-item text-primary"
                                                    style="background-color: transparent !important;">
                                                    <i class="bi bi-eye"></i> Companies
                                                </li>
                                                <li @click="updateUserStatus(item.id, 2)" v-if="item.status == 1"
                                                    class="dropdown-item text-danger"
                                                    style="background-color: transparent !important;">
                                                    <i class="bi bi-exclamation-circle-fill"></i> Disable user
                                                </li>
                                                <li @click="updateUserStatus(item.id, 1)" v-else
                                                    class="dropdown-item text-success"
                                                    style="background-color: transparent !important;">
                                                    <i class="bi bi-check-circle-fill"></i> Activate user
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

    </div>
</template>
<script lang="ts" setup>
import { onMounted, reactive, ref, watch } from 'vue';
import api from '@/stores/Helpers/axios'
import type { Header, Item, ServerOptions } from "vue3-easy-data-table";
import useFxn from '@/stores/Helpers/useFunctions';
import { useAdminParamsStore } from './CompanyDetails/adminParamsStore';
import { useRouter } from 'vue-router';


const paramsStore = useAdminParamsStore()
const router = useRouter()

onMounted(() => {
    getUsers()
})

async function getUsers() {
    try {
        const queryString = new URLSearchParams(serverOptions.value).toString();
        const resp = await api.getUsers(queryString)
        const data = resp.data.data
        total.value = data.total
        items.value = data.data
        itemsLoading.value = false
        // console.log('users:', data);
    } catch (error) {

    }
}


const serverOptions = ref<ServerOptions | any>({
    page: 1,
    rowsPerPage: 15,
    // sortType: 'desc',
    // sortBy: ''
});

const total = ref(0)
const items = ref([])
const itemsLoading = ref(true)
const headers = [
    { text: "NAME", value: "name" },
    { text: "EMAIL", value: "email" },
    { text: "STATUS", value: "status" },
    { text: "LAST LOGIN", value: "last_login" },
    { text: "ACTION", value: "action" },
];

watch(serverOptions, (value) => { getUsers(); }, { deep: true });

function goToUserCompanies(id: any) {
    paramsStore.isCompaniesByUser = id
    router.push({ path: '/admin/companies' })
}


async function updateUserStatus(user_id: any, status: any) {
    try {
        const formData = new FormData();
        formData.append('user_id', user_id);
        formData.append('status', status);
        await api.updateUserStatus(formData)
        getUsers()
    } catch (error) {
        // log error
    }
}

</script>
<style lang="css" scoped>
.dropdown-toggle::after {
    content: none !important;
}

.dropdown-menu {
    border-radius: 0px;
}
</style>