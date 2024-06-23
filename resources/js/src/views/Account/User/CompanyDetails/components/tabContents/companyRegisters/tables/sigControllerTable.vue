<template>
    <div class="col-12">
        <div class="card shadow-sm">
            <div class="card-header fw-bold border-0 bg-transparent">
                Register of Significant Controllers
                <!-- <span class="float-end">
                    <button @click="paramsStore.openModalForm('sigControllerModal')" class="btn btn-primary btn-sm">
                        Add New <i class="bi bi-plus-lg"></i>
                    </button>
                </span> -->
            </div>
            <div class="card-body">
                <EasyDataTable class="easy-data-table" :headers="masterTableHeaders"
                    :items="paramsStore.currentCompanyData.significant_controller" buttons-pagination
                    @expand-row="expandLogs">
                    <template #header="header">
                        <span class="fw-bold text-muted">{{ header.text == '#' ? 'S/N' : header.text }}</span>
                    </template>

                    <template #item-particulars="item">
                        <div class="card p-2 my-2 shadow-none">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item p-0">
                                    <div class="text-secondary fw-bold">Corresponding Address:</div>
                                    <span>
                                        {{ item?.controllers_particulars?.corresponding_address ?? '-' }}
                                    </span>
                                </li>
                                <li class="list-group-item p-0">
                                    <div class="text-secondary fw-bold"> Residential Address:</div>
                                    <span>
                                        {{ item?.controllers_particulars?.resdential_address ?? '-' }}
                                    </span>
                                </li>
                                <li class="list-group-item p-0">
                                    <div class="text-secondary fw-bold">Place of Registration:</div>
                                    <span>
                                        {{ item?.controllers_particulars?.place_of_registration ?? '-' }}
                                    </span>
                                </li>
                                <li class="list-group-item p-0">
                                    <div class="text-secondary fw-bold">Nature of control over company:</div>
                                    <span>
                                        {{ item?.controllers_particulars?.nature_of_control_over_the_company ?? '-' }}
                                    </span>
                                </li>

                            </ul>
                        </div>

                        <!-- <div class=" text-center rounded-2 my-2 particulars-info">
                            <div class="row g-0">
                                <div class="col-md-4 bg-light rounded-start-2 fw-bold text-secondary">
                                    Corresponding Address
                                </div>
                                <div class="col-md-8">
                                    {{ item?.controllers_particulars?.corresponding_address }}
                                </div>
                            </div>
                        </div>
                        <div class=" text-center rounded-2 my-2 particulars-info">
                            <div class="row g-0">
                                <div class="col-md-4 bg-light rounded-start-2 fw-bold text-secondary">
                                    Residential Address
                                </div>
                                <div class="col-md-8">
                                    {{ item?.controllers_particulars?.resdential_address }}
                                </div>
                            </div>
                        </div>
                        <div class=" text-center rounded-2 my-2 particulars-info">
                            <div class="row g-0">
                                <div class="col-md-4 bg-light rounded-start-2 fw-bold text-secondary">
                                    Place of Registration
                                </div>
                                <div class="col-md-8">
                                    {{ item?.controllers_particulars?.place_of_registration }}

                                </div>
                            </div>
                        </div>
                        <div class=" text-center rounded-2 my-2 particulars-info">
                            <div class="row g-0">
                                <div class="col-md-4 bg-light rounded-start-2 fw-bold text-secondary px-1">
                                    Nature of control over company
                                </div>
                                <div class="col-md-8">
                                    {{ item?.controllers_particulars?.nature_of_control_over_the_company }}

                                </div>
                            </div>
                        </div> -->
                    </template>



                    <template #item-entry_date="item">
                        {{ useFxn.dateDisplay(item.entry_date) }}
                    </template>

                    <template #item-date_becoming_rep_person="item">
                        {{ useFxn.dateDisplay(item.date_becoming_rep_person) }}
                    </template>

                    <template #item-date_ceased_to_be_rep_person="item">
                        {{ useFxn.dateDisplay(item.date_ceased_to_be_rep_person) }}
                    </template>
                    <template #item-created_at="item">
                                    {{ useFxn.dateDisplay(item.created_at) }}
                                </template>

                    <template #expand="item">
                        <div v-if="!item.expandLoading" class="my-3">
                            <div class="fw-bold text-center mb-2">LOGS</div>
                            <EasyDataTable class="easy-data-table" show-index :headers="expandedHeaders"
                                :items="expandedObjArray.data" buttons-pagination
                                v-model:server-options="expandingServerOptions" :server-items-length="expandedTotal">

                                <template #item-charge_creation_date="item">
                                    {{ useFxn.dateDisplay(item.charge_creation_date) }}
                                </template>

                                <template #item-entry_date="item">
                                    {{ useFxn.dateDisplay(item.entry_date) }}
                                </template>

                                <template #item-date_becoming_rep_person="item">
                                    {{ useFxn.dateDisplay(item.date_becoming_rep_person) }}
                                </template>

                                <template #item-date_ceased_to_be_rep_person="item">
                                    {{ useFxn.dateDisplay(item.date_ceased_to_be_rep_person) }}
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
                                        <li @click="paramsStore.openModalForm('sigControllerModal', item.id)"
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



    <!-- modals -->
    <!-- <sigControllerModal /> -->
</template>

<script lang="ts" setup>
import useFxn from '@/stores/Helpers/useFunctions';
import api from "@/stores/Helpers/axios"
import { useParamsStore } from '@/views/Account/User/CompanyDetails/paramsStore';
// import sigControllerModal from '@/views/Account/Admin/CompanyDetails/components/modals/sigControllerModal.vue';

const paramsStore = useParamsStore()

import type { Header, Item, ServerOptions } from "vue3-easy-data-table";
import { reactive, ref, watch } from 'vue';

const masterTableHeaders = [
    { text: "ENTRY DATE", value: "entry_date" },
    { text: "LEGAL ENTITY NAME", value: "legal_entity_name" },
    { text: "PARTICULARS", value: "particulars" },
    { text: "DATE BECOMMING REP", value: "date_becoming_rep_person" },
    { text: "DATE CEASED TO BE REP", value: "date_ceased_to_be_rep_person" },
    { text: "DATE CREATED", value: "created_at" },
    // { text: "ACTION", value: "action" },

];

const expandedHeaders = [
    { text: "ENTRY DATE", value: "entry_date" },
    { text: "LEGAL ENTITY NAME", value: "legal_entity_name" },
    { text: "CORRESPONDING ADDRESS", value: "corresponding_address" },
    { text: "RESIDENTIAL ADDRESS", value: "resdential_address" },
    { text: "PLACE OF REGISTRATION", value: "place_of_registration" },
    { text: "NATURE OF CONTROL", value: "nature_of_control_over_the_company" },
    { text: "DATE BECOMMING REP", value: "date_becoming_rep_person" },
    { text: "DATE CEASED TO BE REP", value: "date_ceased_to_be_rep_person" },
    { text: "DATE MODIFIED", value: "created_at" },
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
    const items = paramsStore.currentCompanyData.significant_controller
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
    formData.append('controller_id', expandedObjArray.id)
    formData.append('page', expandingServerOptions.value.page)
    const response = await api.incoprationLogs(formData)
    const data: any = response.data.data?.SignificantControllerLog ?? null;
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

.particulars-info {
    border: 1px solid #ccc;
    width: 300px;
    font-size: 11px;
}
</style>
