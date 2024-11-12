<template>
    <div class="col-12">

        <div class="card shadow-sm">
            <div class="card-header fw-bold border-0 bg-transparent">
                Register of Directors
                <!-- <span class="float-end">
                    <button @click="paramsStore.openModalForm('regOfDirectorsModal')" class="btn btn-primary btn-sm">
                        Add New <i class="bi bi-plus-lg"></i>
                    </button>
                </span> -->
            </div>
            <div class="card-body">

                <EasyDataTable class="easy-data-table"  show-index :headers="masterTableHeaders"
                    :items="paramsStore.currentCompanyData?.register_of_director??[]" buttons-pagination
                    @expand-row="expandLogs">
                    <template #header="header">
                        <span class="fw-bold text-muted">{{ header.text == '#' ? 'S/N' : header.text }}</span>
                    </template>


                    <template #item-date_of_appointment="item">
                        {{ useFxn.dateDisplay(item.date_of_appointment) }}
                    </template>

                    <template #item-ceasing_of_act="item">
                        {{ useFxn.dateDisplay(item.ceasing_of_act) }}
                    </template>
                    <template #item-created_at="item">
                        {{ useFxn.dateDisplay(item.created_at) }}
                    </template>

                    <template #expand="item">
                        <div v-if="!item.expandLoading" class="my-3">
                            <div class="fw-bold text-center mb-2">LOGS</div>
                            <EasyDataTable class="easy-data-table" :headers="expandedHeaders"
                                :items="expandedObjArray.data" buttons-pagination
                                v-model:server-options="expandingServerOptions" :server-items-length="expandedTotal">

                                <template #item-date_of_appointment="item">
                                    {{ useFxn.dateDisplay(item.date_of_appointment) }}
                                </template>

                                <template #item-ceasing_of_act="item">
                                    {{ useFxn.dateDisplay(item.ceasing_of_act) }}
                                </template>
                                <template #item-created_at="item">
                                    {{ useFxn.dateDisplay(item.created_at) }}
                                </template>
                            </EasyDataTable>
                        </div>
                    </template>

                    <!-- <template #item-action="item">
                        <span class="dropdown">
                            <span class=" cursor-pointer bell dropdown-toggle" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                <i class="bi bi-three-dots text-primary"></i>
                                <div class="dropdown-menu dropdown-menu-start">
                                    <ul class="list-group list-group-flush  ">
                                        <li @click="paramsStore.openModalForm('regOfDirectorsModal', item.id)"
                                            class="dropdown-item" style="background-color: transparent !important;">
                                            <i class="bi bi-pencil"></i> update
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

    <!-- <regOfDirectorsModal /> -->

</template>

<script lang="ts" setup>
import useFxn from '@/stores/Helpers/useFunctions';
import api from "@/stores/Helpers/axios"
import { useParamsStore } from '@/views/Account/User/CompanyDetails/paramsStore';
// import regOfDirectorsModal from '@/views/Account/Admin/CompanyDetails/components/modals/regOfDirectorsModal.vue';

import type { Header, Item, ServerOptions } from "vue3-easy-data-table";
import { reactive, ref, watch } from 'vue';


const paramsStore = useParamsStore()

// table
const masterTableHeaders = [
{ text: "Name", value: "name" },
    { text: "ID/ Passport / Registration No", value: "reg_no" },
    { text: "Residential Address / Registered  Office", value: "registered_office" },
    { text: "Date of Appointment", value: "date_of_appointment" },
    { text: "Ceasing to Act", value: "ceasing_of_act" },
    { text: "Remarks", value: "remarks" },
    { text: "Date Created", value: "created_at" },
    { text: "ACTION", value: "action" },
];

const expandedHeaders = [
    { text: "Name", value: "name" },
    { text: "ID/ Passport / Registration No", value: "reg_no" },
    { text: "Residential Address / Registered  Office", value: "registered_office" },
    { text: "Date of Appointment", value: "date_of_appointment" },
    { text: "Ceasing to Act", value: "ceasing_of_act" },
    { text: "Remarks", value: "remarks" },
    { text: "Date Modified", value: "created_at" },
];



const expandingServerOptions = ref<ServerOptions | any>({
    page: 1,
    rowsPerPage: 15,
    // sortType: 'desc',
    // sortBy: ''
});

// const expandingId = ref('')
const expandedTotal = ref(0)
const expandedObjArray = reactive({
    id: '',
    data: []
})

const expandLogs = async (index: any, prop_name: string,) => {
    expandedObjArray.data = []
    const items = paramsStore.currentCompanyData?.register_of_director
    const expandedItem: any = items[index];
    expandedObjArray.id = expandedItem.id

    if (!expandedItem.logs) {
        expandedItem.expandLoading = true;
        await getLogs()
        expandedItem.logs = expandedItem.data
        expandedItem.expandLoading = false;

    }
}

async function getLogs() {
    const formData = new FormData()
    formData.append('director_id', expandedObjArray.id)
    formData.append('page', expandingServerOptions.value.page)
    const response = await api.incoprationLogs(formData)
    const data: any = response.data.data?.RegisterOfDirectorLog ?? null;
    expandedTotal.value = data?.total ?? 0
    expandedObjArray.data = data?.data ?? []
}


watch(expandingServerOptions, (value) => { getLogs(); }, { deep: true });
</script>

<style lang="css" scoped>
.dropdown-toggle::after {
    content: none !important;
}

.dropdown-menu {
    border-radius: 0px;
}
</style>
