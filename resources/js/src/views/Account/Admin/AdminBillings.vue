<template>
    <div class="container">
        <!-- <h5 class="fw-bold page-title mb-4"> Billings</h5> -->
        <div class="row g-4">


            <div class="col-lg-4 mb-4">
                
                <div class="card shadow-sm p-2 border-0 h-100">
                    <div class="fw-bold mb-2">Subscription Plan</div>
                    <div class="table-responsive">
                        <table class="table table-borderless table-sm">
                            <tbody>
                                <tr class="">
                                    <td>Subscription:</td>
                                    <td class="fw-bold">Annual Plan</td>
                                </tr>
                                <tr class="">
                                    <td>Contact person:</td>
                                    <td class="fw-bold">John Doe</td>
                                </tr>
                                <tr class="">
                                    <td>Renewal date:</td>
                                    <td class="fw-bold">17 August 2024 (365 days left) </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>


            <div class="col-lg-4 mb-4">
 
                <div class="card shadow-sm p-2 border-0 h-100">
                    <div class="fw-bold mb-2">Payment details</div>
                    <div class="table-responsive">
                        <table class="table table-borderless table-sm">
                            <tbody>
                                <tr class="">
                                    <td>Payment method:</td>
                                    <td class="fw-bold">VISA ending in 1890 (Expires Nov 20, 2029)</td>
                                </tr>
                                <tr class="">
                                    <td>Upcoming bill:</td>
                                    <td class="fw-bold">17 August 2024 </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div class="col-lg-4 mb-4">
      
                <div class="card shadow-sm p-2 border-0 h-100">
                    <div class="fw-bold mb-2">Billing information</div>
                    <div class="table-responsive">
                        <table class="table table-borderless table-sm">
                            <tbody>
                                <tr class="">
                                    <td>Name:</td>
                                    <td class="fw-bold">Joe Doe</td>
                                </tr>
                                <tr class="">
                                    <td>Billing address:</td>
                                    <td class="fw-bold">ABS Tower format
                                        29 Des Street, Wadham
                                        Dorset
                                        D123 142
                                        United Kingdom </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>


            <div class="col-12 mt-4">
                <div class="card " style="border: none;">
                    <div class="card-body" >
                        <isLoadingComponent v-if="itemsLoading" />
                        <EasyDataTable v-else class="easy-data-table" show-index :headers="headers" :items="items"
                            buttons-pagination v-model:server-options="serverOptions" :server-items-length="total">

                            <template #header="header">
                                <span class="fw-bold text-muted">{{ header.text == '#' ? 'S/N' : header.text }}</span>
                            </template>

                            <template #item-name="item">
                                {{ computedUserName(item) }}
                            </template>

                            <template #item-names="item">
                                {{ computedCoyName(item) }}
                            </template>
                            <template #item-action="item">
                                <span class="dropdown">
                                    <span class=" cursor-pointer bell dropdown-toggle" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        <i class="bi bi-three-dots text-primary"></i>
                                        <div class="dropdown-menu dropdown-menu-start">
                                            <ul class="list-group list-group-flush  ">
                                                <li @click="" class="dropdown-item text-danger"
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
    </div>
</template>
<script lang="ts" setup>
import { onMounted, reactive, ref, watch } from 'vue';
import type { Header, Item, ServerOptions } from "vue3-easy-data-table";
import api from '@/stores/Helpers/axios'
import { useAdminParamsStore } from './CompanyDetails/adminParamsStore';
import useFxn from '@/stores/Helpers/useFunctions';

const paramsStore = useAdminParamsStore()

const companies = reactive<any>({
    list: [],
})
onMounted(() => {
    getItemsData()
})
const computedCoyName = (coy: any) => {
    const id = coy.id
    let englishName = '';
    let chineseName = '';
    const coms = companies.list;
    coms.forEach((com: any) => {
        const company = com.company.names.find((x: any) => x.choice_level == 1);
        englishName = company?.eng_name ? company?.eng_name + ' ' + company?.eng_prefix : '';
        chineseName = company?.chn_name ? company?.chn_name + ' ' + company?.chn_prefix : ''
    })
    return `${englishName} ${chineseName}`;
}

const computedUserName = (coy: any) => {
    const id = coy.id
    let Name = '';
    const coms = companies.list;
    // console.log(coms)
    coms.forEach((com: any) => {
        Name = com.user.name;
    })
    // console.log(Name)
    return Name;
}
async function getItemsData() {
    try {
        const resp = await api.getAllBillings(paramsStore.currentCompanyId)
        const data = resp.data.data
        total.value = data.total
        items.value = data.data
        companies.list = data.data
        itemsLoading.value = false
    } catch (error) {
        console.log(error);

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
    // { text: "NAME", value: "name" },
    // { text: "COMPANY NAME", value: "email" },
    // { text: "REGISTERED DATE", value: "reg_date" },
    { text: "DATE", value: "date_paid" },
    { text: "PAYMENT STATUS", value: "payment_status" },
    { text: "PAYMENT REFERENCE", value: "reference" },
    { text: "AMOUNT PAID", value: "amount_paid" },
    { text: "PAYMENT ID", value: "payment_id" },
];

watch(serverOptions, (value) => { getItemsData(); }, { deep: true });

</script>
<style lang="css" scoped></style>
<!-- ./CompanyDetails/adminParamsStore -->