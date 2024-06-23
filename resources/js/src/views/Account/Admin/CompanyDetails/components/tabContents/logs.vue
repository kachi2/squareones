<template>
    <div class="row g-3">
        <div class="col-12">
            <div class="fw-bold mb-1">Actitvity Logs</div>
            <div class="card shadow-sm">
                <div class="card-body">
                    <EasyDataTable class="easy-data-table" show-index :headers="headers" :items="activityLogs"
                        buttons-pagination v-model:server-options="serverOptions" :server-items-length="totalItems">

                        <template #header="header">
                            <span class="fw-bold text-muted">{{ header.text == '#' ? 'S/N' : header.text }}</span>
                        </template>

                        <!-- <template #item-updated_at="item">
                            {{ useFxn.dateDisplay(item.updated_at, 'm,y,t') }}
                        </template> -->

                        <template #item-updated_at="item">
                            {{ new Date(item.updated_at).toLocaleString() }}
                        </template>

                    </EasyDataTable>
                </div>
            </div>
        </div>


    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, watch } from 'vue';
import { useAdminParamsStore } from '../../adminParamsStore'
import type { Header, Item, ServerOptions } from "vue3-easy-data-table";
import api from '@/stores/Helpers/axios'
import useFxn from '@/stores/Helpers/useFunctions';

const paramsStore = useAdminParamsStore()
const totalItems = ref(0)
const activityLogs = ref<any[]>([])
const serverOptions = ref<ServerOptions | any>({
    page: 1,
    rowsPerPage: 15,
});

onMounted(() => {
    getActivityLogs()
})

async function getActivityLogs() {
    try {
        const queryString = new URLSearchParams(serverOptions.value).toString();
        const resp = await api.activityLog(queryString)
        const data = resp.data.data
        totalItems.value = data.total
        activityLogs.value = data.data
    } catch (error) {
        // 
    }
}

watch(serverOptions, (value) => { getActivityLogs(); }, { deep: true });



const headers = [
    { text: "ACTIVITY", value: "activity" },
    { text: "TYPE", value: "type" },
    { text: "STATUS", value: "action_status" },
    { text: "DATE", value: "updated_at" },
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
