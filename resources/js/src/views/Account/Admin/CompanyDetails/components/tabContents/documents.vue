<template>
    <div class="row g-3">
        <div class="col-12">
            <div class="card shadow-sm">
                <div class="card-header fw-bold border-0 bg-transparent">
                    <!-- Documents -->
                    <span class="float-end">
                        <button @click="paramsStore.openModalForm('documentUploadModal')"
                            class="btn btn-primary btn-sm">
                            Add Documents <i class="bi bi-plus-lg"></i>
                        </button>
                    </span>
                </div>
                <div class="card-body">
                    <isLoadingComponent v-if="itemsLoading" />
                    <EasyDataTable v-else class="easy-data-table" show-index :headers="headers" :items="items"
                        buttons-pagination v-model:server-options="serverOptions" :server-items-length="total">

                        <template #header="header">
                            <span class="fw-bold text-muted">{{ header.text == '#' ? 'S/N' : header.text }}</span>
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
                                <span class=" cursor-pointer bell dropdown-toggle" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    <i class="bi bi-three-dots text-primary"></i>
                                    <div class="dropdown-menu dropdown-menu-start">
                                        <ul class="list-group list-group-flush  ">
                                            <li @click="deleteDocument(item.id)" class="dropdown-item text-danger"
                                                style="background-color: transparent !important;">
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


    </div>

    <documentUploadModal @done="getDocuments" />
</template>

<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue';
import { useAdminParamsStore } from '../../adminParamsStore'
import documentUploadModal from '../modals/documentUploadModal.vue';
import api from '@/stores/Helpers/axios'
import type { ServerOptions } from 'vue3-easy-data-table';
import useFxn from '@/stores/Helpers/useFunctions';

const paramsStore = useAdminParamsStore()

onMounted(() => {
    getDocuments()
})


// functions
async function getDocuments() {
    try {
        const resp = await api.getDocuments(paramsStore.currentCompanyId)
        const data = resp.data.data
        total.value = data.total
        items.value = data.data
        itemsLoading.value = false
        console.log(data);
    } catch (error) {
        // 
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

watch(serverOptions, (value) => { getDocuments(); }, { deep: true });

const headers = [
    { text: "DOCUMENT TITLE", value: "title" },
    // { text: "ADDED BY", value: "added_by" },
    { text: "DOCUMENT", value: "document" },
    { text: "DATE ADDED", value: "created_at" },
    // { text: "DATE MODIFIED", value: "updated_at" },
    { text: "ACTION", value: "action" },
];

async function deleteDocument(id: any) {
    useFxn.confirmDelete('Delete this document?', 'Yes, delete')
        .then(async (quest) => {
            if (quest.isConfirmed) {
                await api.deleteCompanyDocument(id)
                useFxn.toast('Document deleted', 'success')
                getDocuments();
            }
        })
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
