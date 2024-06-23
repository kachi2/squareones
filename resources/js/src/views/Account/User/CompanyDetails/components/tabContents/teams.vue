<template>
    <div class="row g-3">
        <div class="col-12">
            <div class="card shadow-sm">
                <div class="card-body">
                    <div class="ro g-3 mb-4">
                        <div class="col-lg-5">
                            <div class="form-label">Team Invitation</div>
                            <input v-model="searchUserMail" type="text" class="form-control"
                                placeholder="search user by email">
                        </div>

                        <div class="col-lg-5 mt-3" v-if="searchUserMail">
                            <div class="card">
                                <div class="card-body">
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item px-0">Micheal Kachi
                                            <button class="btn btn-secondary btn-sm m-0 float-end">Send
                                                Invitation</button>
                                        </li>
                                        <li class="list-group-item px-0"> Kachi Kimmy
                                            <button class="btn btn-secondary btn-sm m-0 float-end">Send
                                                Invitation</button>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="div fw-bold mb-3">Team Members:</div>
                    <EasyDataTable class="easy-data-table" show-index :headers="headers" :items="items"
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
import { useParamsStore } from '../../paramsStore'
import type { Header, Item, ServerOptions } from "vue3-easy-data-table";
import api from '@/stores/Helpers/axios'
import useFxn from '@/stores/Helpers/useFunctions';


const searchUserMail = ref('')


const paramsStore = useParamsStore()
const totalItems = ref(0)
const items = ref<any[]>([])
const serverOptions = ref<ServerOptions | any>({
    page: 1,
    rowsPerPage: 15,
});


onMounted(() => {
    getItems()
})

async function getItems() {
    try {
        const queryString = new URLSearchParams(serverOptions.value).toString();
        const resp = await api.activityLog(queryString)
        // const data = resp.data.data
        // totalItems.value = data.total
        // items.value = data.data
    } catch (error) {
        // 
    }
}

watch(serverOptions, (value) => { getItems(); }, { deep: true });



const headers = [
    { text: "NAME", value: "name" },
    // { text: "CATEGORY", value: "category" },
    { text: "STATUS", value: "action_status" },
    { text: "DATE ADDED", value: "updated_at" },
    // { text: "ACTION", value: "action" },
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
