<template>
    <div class="container min-vh-100">

        <div class="row g-3">
            <h5 class="fw-bold page-title mb-1"> Team Members</h5>
        <p class="p"> Team members of all the company you own or belong</p>
            <div class="col-12">
                <div class="card">
                    <div class="card-body">
                        <isLoadingComponent v-if="itemsLoading" />
                        <EasyDataTable v-else class="easy-data-table"  :headers="headers" :items="items"
                            buttons-pagination v-model:server-options="serverOptions" :server-items-length="total">

                            <template #header="header">
                                <span class="fw-bold text-muted">{{ header.text == '#' ? 'S/N' : header.text }}</span>
                            </template>

                            <template #item-last_login="item">
                                {{ useFxn.dateDisplay(item.last_login) }}
                            </template>

                            <template #item-created_at="item">
                                {{ useFxn.dateDisplay(item.created_at) }}
                            </template>

                           

                            <!-- <template #item-action="item">
                                <span class="dropdown">
                                    <span class=" cursor-pointer bell dropdown-toggle" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        <i class="bi bi-three-dots text-primary"></i>
                                        <div class="dropdown-menu dropdown-menu-start">
                                            <ul class="list-group list-group-flush  ">

                                                <li @click="" class="dropdown-item text-danger-emphasis"
                                                    style="background-color: transparent !important;">
                                                    <i class="bi bi-slash-circle"></i> Revoke Access
                                                </li>
                                            </ul>
                                        </div>
                                    </span>
                                </span>
                            </template> -->

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
import { useParamsStore } from './CompanyDetails/paramsStore';
import { useRouter } from 'vue-router';


const paramsStore = useParamsStore()
const router = useRouter()

onMounted(() => {
    // getUsers()
    getTeamUsers()
})

// async function getUsers() {
//     try {
//         const queryString = new URLSearchParams(serverOptions.value).toString();
//         const resp = await api.getUsers(queryString)
//         const data = resp.data.data
//         total.value = data.total
//         items.value = data.data
//         itemsLoading.value = false
//         // console.log('users:', data);
//     } catch (error) {

//     }
// }

async function getTeamUsers()
{
    const formData = new FormData();
    formData.append('user_id', paramsStore.currentUserId)
    const resp = await api.getUsersTeam(formData);
     console.log(resp.data, 'users with their teams',  paramsStore.currentUserId)
    total.value = resp.data.total
    itemsLoading.value = false
    items.value = resp.data

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
    { text: "NAME", value: "users.name" },
    { text: "EMAIL", value: "users.email" },
    { text: "USER'S ROLES", value: "role" },
    { text: "TEAM NAME", value: "teams.name" },
    { text: "DATE ADDED", value: "created_at" },
    { text: "LAST LOGIN", value: "users.last_login" },
    // { text: "ACTION", value: "action" },
];

watch(serverOptions, (value) => { getTeamUsers(); }, { deep: true });

function goToUserCompanies(id: any) {
    paramsStore.currentUserId = id
    router.push({ path: '/admin/companies' })
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