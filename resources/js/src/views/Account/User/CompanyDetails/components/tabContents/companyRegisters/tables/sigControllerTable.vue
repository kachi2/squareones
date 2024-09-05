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
                Significant Controllers
                <EasyDataTable class="easy-data-table" :headers="masterTableHeaders"
                    :items="paramsStore.currentCompanyData?.significant_controller" buttons-pagination
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
            <div class="card-body">
                Designated Representative
                <EasyDataTable class="easy-data-table" :headers="masterTableHeaders1"
                    :items="paramsStore.currentCompanyData?.designated_representative" buttons-pagination
                    @expand-row="expandLogs1">
                    <template #header="header">
                        <span class="fw-bold text-muted">{{ header.text == '#' ? 'S/N' : header.text }}</span>
                    </template>

                    <template #item-particulars="item">
                        <div class="card p-2 my-2">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item p-0">
                                    <div class="text-secondary fw-bold">ID/Passport/
                                        Registration No:</div>
                                    <span>
                                        {{ item?.designated_particulars?.identity_info ?? '-' }}
                                    </span>
                                </li>
                                <li class="list-group-item p-0">
                                    <div class="text-secondary fw-bold">ID/Passport/
                                        Place of Registration:</div>
                                    <span>
                                        {{ item?.designated_particulars?.place_of_registration ?? '-' }}
                                    </span>
                                </li>

                                <li class="list-group-item p-0">
                                    <div class="text-secondary fw-bold">ID/Passport/
                                        Nature of control over company:</div>
                                    <span>
                                        {{ item?.designated_particulars?.nature_of_control_over_the_company ?? '-' }}
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </template>



                    <template #item-entry_date="item">
                        {{ useFxn.dateDisplay(item.entry_date) }}
                    </template>
                    <template #item-created_at="item">
                        {{ useFxn.dateDisplay(item.created_at) }}
                    </template>


                    <template #expand="item">
                        <div v-if="!item.expandLoading" class="my-3">
                            <div class="fw-bold text-center mb-2">LOGS</div>
                            <EasyDataTable class="easy-data-table" show-index :headers="expandedHeaders1"
                                :items="expandedObjArray1.data" buttons-pagination
                                v-model:server-options="expandingServerOptions1" :server-items-length="expandedTotal">

                                <template #item-entry_date="item">
                                    {{ useFxn.dateDisplay(item.entry_date) }}
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
                                        <li @click="paramsStore.openModalForm('designatedRepModal', item.id)"
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
    { text: "Date of Entry", value: "entry_date" },
    { text: "Name of Registrable Person / Legal Entity", value: "legal_entity_name" },
    { text: "Particulars", value: "particulars" },
    { text: "Date  Becoming a Registrable Person", value: "date_becoming_rep_person" },
    { text: "Date Cease  to Be a Registrable Person", value: "date_ceased_to_be_rep_person" },
    { text: "Date Created", value: "created_at" },
    // { text: "ACTION", value: "action" },

];

const masterTableHeaders1 = [
    { text: " Date of Entry", value: "entry_date" },
    { text: "Name (Capacity)", value: "name" },
    { text: "Particulars", value: "particulars" },
    { text: "Remarks", value: "remarks" },
    { text: "Date Created", value: "created_at" },
    // { text: "ACTION", value: "action" },

];

const expandedHeaders = [
    { text: "Date of Entry", value: "entry_date" },
    { text: "Name of Registrable Person / Legal Entity", value: "legal_entity_name" },
    { text: "Corresponding Address", value: "corresponding_address" },
    { text: "ID/Passport/Registration No", value: "identity_info" },
    { text: "Residential Address", value: "resdential_address" },
    { text: "Place of Registration.", value: "place_of_registration" },
    { text: "Nature of Control Over the Company", value: "nature_of_control_over_the_company" },
    { text: "Date  Becoming a Registrable Person", value: "date_becoming_rep_person" },
    { text: "Date Cease  to Be a Registrable Person", value: "date_ceased_to_be_rep_person" },
    { text: "Date MOdified", value: "created_at" },
];

const expandedHeaders1 = [
    { text: " Date of Entry", value: "entry_date" },
    { text: "Name (Capacity)", value: "name" },
    { text: "ID/Passport/Registration No.", value: "identity_info" },
    { text: "Place of Registration", value: "place_of_registration" },
    { text: "Nature of Control Over the Company", value: "nature_of_control_over_the_company" },
    { text: "Remarks", value: "remarks" },
    { text: "Date Created", value: "created_at" },
];
const expandingServerOptions = ref<ServerOptions | any>({
    page: 1,
    rowsPerPage: 15,
    // sortType: 'desc',
    // sortBy: ''
});

const expandingServerOptions1 = ref<ServerOptions | any>({
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

const expandedTotal1 = ref(0)
const expandedObjArray1 = reactive({
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

const expandLogs1 = async (index: any, prop_name: string,) => {
    expandedObjArray1.data = []
    const items = paramsStore.currentCompanyData.designated_representative
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

async function getLogs1() {
    const formData = new FormData()
    formData.append('representative_id', expandedObjArray1.id)
    formData.append('page', expandingServerOptions1.value.page)
    const response = await api.incoprationLogs(formData)
    const data: any = response.data.data?.DesignatedRepresentativeLog ?? null;
    expandedTotal1.value = data?.total ?? 0
    expandedObjArray1.data = data?.data ?? []
}

watch(expandingServerOptions, (value) => { getLogs(); }, { deep: true });
watch(expandingServerOptions1, (value) => { getLogs1(); }, { deep: true });

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
