<template>
    <div class="col-12">
        <div class="card shadow-sm">
            <div class="card-header fw-bold border-0 bg-transparent">
                Register of Shareholders
                <span class="float-end">
                    <button @click="paramsStore.openModalForm('regOfShareholdersModal')" class="btn btn-primary btn-sm">
                        Add New <i class="bi bi-plus-lg"></i>
                    </button>
                </span>
            </div>
            <div class="card-body">
                <EasyDataTable class="easy-data-table" show-index :headers="masterTableHeaders"
                    :items="paramsStore.currentCompanyData?.register_of_shareholders ?? []" buttons-pagination
                    @expand-row="expandLogs">
                    <template #header="header">
                        <span class="fw-bold text-muted">{{ header.text == '#' ? 'S/N' : header.text }}</span>
                    </template>


                    <template #item-date_entered_as_member="item">
                        {{ useFxn.dateDisplay(item.date_entered_as_member) }}
                    </template>

                    <template #item-date_cease_to_be_member="item">
                        {{ useFxn.dateDisplay(item.date_cease_to_be_member) }}
                    </template>

                    <template #item-created_at="item">
                        {{ useFxn.dateDisplay(item.created_at) }}
                    </template>

                    <template #item-current_holding="item">
                        {{ useFxn.addCommas(item.current_holding) }}
                    </template>

                    <template #item-total_consideration="item">
                        {{ useFxn.addCommas(item.total_consideration) }}
                    </template>

                    <template #expand="item">
                        <div v-if="!item.expandLoading" class="my-3">
                            <div class="fw-bold text-center mb-2">LOGS</div>
                            <EasyDataTable class="easy-data-table" show-index :headers="expandedHeaders"
                                :items="expandedItems(item.id)" buttons-pagination
                                v-model:server-options="expandingServerOptions" :server-items-length="expandedTotal">

                                <template #item-date_entered_as_member="item">
                                    {{ useFxn.dateDisplay(item.date_entered_as_member) }}
                                </template>

                                <template #item-date_cease_to_be_member="item">
                                    {{ useFxn.dateDisplay(item.date_cease_to_be_member) }}
                                </template>
                            </EasyDataTable>
                        </div>
                    </template>

                    <template #item-action="item">
                        <span class="dropdown">
                            <span class=" cursor-pointer bell dropdown-toggle" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                <i class="bi bi-three-dots text-primary"></i>
                                <div class="dropdown-menu dropdown-menu-start">
                                    <ul class="list-group list-group-flush  ">
                                        <li @click="paramsStore.openModalForm('regOfShareholdersModal', item.id)"
                                            class="dropdown-item" style="background-color: transparent !important;">
                                            <i class="bi bi-pencil"></i> update
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

    <!-- modals -->
    <regOfShareholdersModal />

</template>

<script lang="ts" setup>
import useFxn from '@/stores/Helpers/useFunctions';
import api from "@/stores/Helpers/axios"
import { useAdminParamsStore } from '@/views/Account/Admin/CompanyDetails/adminParamsStore';
import regOfShareholdersModal from '@/views/Account/Admin/CompanyDetails/components/modals/regOfShareholdersModal.vue';

const paramsStore = useAdminParamsStore()

import type { Header, Item, ServerOptions } from "vue3-easy-data-table";
import { reactive, ref, watch } from 'vue';


const masterTableHeaders = [
    { text: "Name and Address", value: "name" },
    // { text: "DATE OF APPOINTMENT", value: "address" },
    { text: "Class of Shares", value: "class_of_shares" },
    { text: "Denomination", value: "denomination" },
    { text: "Current Holding", value: "current_holding" },
    { text: "Total Consideration HKD", value: "total_consideration" },
    { text: "Date Entered As a Member", value: "date_entered_as_member" },
    { text: "Date Ceases to Be a Member", value: "date_cease_to_be_member" },
    { text: "Date Created", value: "created_at" },
    { text: "ACTION", value: "action" },
];

const expandedHeaders = [
    { text: "Name and Address", value: "name" },
    // { text: "DATE OF APPOINTMENT", value: "address" },
    { text: "Class of Shares", value: "class_of_shares" },
    { text: "Denomination", value: "denomination" },
    { text: "Current Holding", value: "current_holding" },
    { text: "Total Consideration HKD", value: "total_consideration" },
    { text: "Date Entered As a Member", value: "date_entered_as_member" },
    { text: "Date Ceases to Be a Member", value: "date_cease_to_be_member" },
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

const expandedItems = (itemId: number | string) => {
    return expandedObjArray.id == itemId ? expandedObjArray.data : []
}

const expandLogs = async (index: any, prop_name: string,) => {
    expandedObjArray.data = []
    const items = paramsStore.currentCompanyData.register_of_shareholders
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
    formData.append('shareholder_id', expandedObjArray.id)
    formData.append('page', expandingServerOptions.value.page)
    const response = await api.incoprationLogs(formData)
    console.log(response);

    const data: any = response.data.data?.RegisterOfShareholderLog ?? null;
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
