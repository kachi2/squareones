<template>
    <div class="row g-3">
        <div class="col-12">
            <div class="card shadow-sm">
                <div class="card-body">

                    <EasyDataTable class="easy-data-table" :headers="headers" :items="items" buttons-pagination
                        v-model:server-options="serverOptions" :server-items-length="totalItems">

                        <template #header="header">
                            <span class="fw-bold text-muted">{{ header.text == '#' ? 'S/N' : header.text }}</span>
                        </template>

                        <!-- <template #item-updated_at="item">
                            {{ useFxn.dateDisplay(item.updated_at, 'm,y,t') }}
                        </template> -->

                        <template #item-kyc_status="item">
                            <span v-if="!item.kyc_status" class="alert alert-warning py-1 border-0 text-nowrap">Not
                                Verified</span>
                            <span v-else class="alert alert-success py-1 border-0">Verified</span>
                        </template>

                        <template #item-signature="item">
                            <span v-if="!item.signature" class="alert alert-warning py-1 border-0 text-nowrap">Not
                                Signed</span>
                            <span v-else class="alert alert-success py-1 border-0">Signed</span>
                        </template>

                        <template #item-action="item">
                            <button v-if="!item.isSendingEmail" @click="resendEmail(item.company_entity_id)"
                                class="btn btn-primary btn-sm text-nowrap">
                                <i class="bi bi-arrow-clockwise"></i> Resend Email
                            </button>
                            <button v-else disabled class="btn btn-primary btn-sm text-nowrap">
                                <i class="bi bi-arrow-clockwise"></i> Sending ..
                            </button>
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
        const resp = await api.userCompanyFounders(paramsStore.currentCompanyId, queryString)
        // console.log('founders', resp);

        const data = resp.data.data
        totalItems.value = data.total

        // collate data
        const entities = data.data
        const arrayOfFounders: any[] = []
        if (entities.length) {
            entities.forEach((el: any) => {
                const obj = el.individual || el.corporate;

                // check if share holder and director
                const capacityArray = JSON.parse(el.entity_capacity_id);
                const shareOrDir = capacityArray.includes('1')
                    ? (capacityArray.includes('2') ? 'Shareholder & Director' : 'Shareholder')
                    : 'Director';

                if (obj) {

                    obj.name = el.entity_type_id == 1 ? `${obj.first_name} ${obj.last_name} ${obj.chn_last_name??''} ${obj.chn_first_name??''}` : `${obj.company_name} ${obj?.chn_company_name}`
                    obj.copOrInd = el.entity_type_id == 1 ? 'Individual' : 'Corporate'
                    obj.shareOrDir = shareOrDir
                    obj.email = el.entity_type_id == 1 ? obj.email : el?.corporate?.authorized_persons.email
                    obj.phone = el.entity_type_id == 1 ? obj.phone : el?.corporate?.authorized_persons.phone
                    obj.authorizedPersonName = el.entity_type_id == 1 ? '' : el?.corporate?.authorized_persons.first_name + " " + el?.corporate?.authorized_persons.last_name
                    obj.kyc_status = el.kyc_status
                    obj.signature = el.signature

                    arrayOfFounders.push(obj);
                }
            });
        }

        items.value = arrayOfFounders

    } catch (error) {
        // 
    }
}

watch(serverOptions, (value) => { getItems(); }, { deep: true });



const headers = [
    { text: "NAME", value: "name" },
    { text: "AUTHORIZED PERSON'S NAME", value: "authorizedPersonName" },
    { text: "TYPE", value: "copOrInd" },
    { text: "CAPACITY", value: "shareOrDir" },
    { text: "EMAIL", value: "email" },
    { text: "PHONE", value: "phone" },
    { text: "KYC STATUS", value: "kyc_status" },
    { text: "SIGNATURE", value: "signature" },
    { text: "ACTION", value: "action" },
];



// resending email
const isSendingEmail = ref<boolean>(false)
async function resendEmail(id: string) {
    const lineItem = items.value.find(x => x.company_entity_id == id)
    lineItem.isSendingEmail = true
    try {
        const formData = new FormData();
        formData.append('company_id', paramsStore.currentCompanyId)
        formData.append('company_entity_id', id)
        const resp = await api.userResendEmail(formData)
        if (resp.status == 200) {
            useFxn.toast('Email Sent', 'success')
            lineItem.isSendingEmail = null
        }
        else {
            useFxn.toast('Email not sent, something went wrong', 'error')
            lineItem.isSendingEmail = null
        }

    } catch (error) {
        useFxn.toast('Network error, something went wrong', 'error')
        lineItem.isSendingEmail = null
    }
}


</script>

<style lang="css" scoped>
/* Custom CSS for progress bar with phases */

.dropdown-toggle::after {
    content: none !important;
}

.dropdown-menu {
    border-radius: 0px;
}
</style>
